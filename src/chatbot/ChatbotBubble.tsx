"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import {
  INITIAL_GREETING,
  LIMIT_REACHED_MESSAGE,
  LIMIT_GREETING,
  CHATBOT_CONFIG,
  parseMarkdownContent,
  generateResponse,
} from "./knowledge";

interface Message {
  role: "user" | "bot";
  content: string;
}

interface Position {
  x: number;
  y: number;
}

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [queryCount, setQueryCount] = useState(0);
  const [showLimit, setShowLimit] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 24, y: 24 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const dragStartPos = useRef<{
    x: number;
    y: number;
    startX: number;
    startY: number;
  }>({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCount = localStorage.getItem(
        CHATBOT_CONFIG.storageKeys.queryCount,
      );
      const storedTimestamp = localStorage.getItem(
        CHATBOT_CONFIG.storageKeys.sessionStart,
      );
      const now = Date.now();

      if (
        storedTimestamp &&
        now - parseInt(storedTimestamp) > CHATBOT_CONFIG.sessionDurationMs
      ) {
        localStorage.removeItem(CHATBOT_CONFIG.storageKeys.queryCount);
        localStorage.removeItem(CHATBOT_CONFIG.storageKeys.sessionStart);
        setQueryCount(0);
        setMessages([{ role: "bot", content: INITIAL_GREETING }]);
      } else if (storedCount) {
        const count = parseInt(storedCount);
        setQueryCount(count);
        if (count >= CHATBOT_CONFIG.maxQueriesPerSession) {
          setShowLimit(true);
          setMessages([{ role: "bot", content: LIMIT_GREETING }]);
        } else {
          setMessages([{ role: "bot", content: INITIAL_GREETING }]);
        }
      } else {
        localStorage.setItem(
          CHATBOT_CONFIG.storageKeys.sessionStart,
          now.toString(),
        );
        setMessages([{ role: "bot", content: INITIAL_GREETING }]);
      }
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isOpen) return;
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      startX: position.x,
      startY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isOpen) return;

      const deltaX = dragStartPos.current.x - e.clientX;
      const deltaY = e.clientY - dragStartPos.current.y;

      const newX = dragStartPos.current.startX + deltaX;
      const newY = dragStartPos.current.startY + deltaY;

      const minX = 10;
      const maxX = window.innerWidth / 2;
      const minY = 10;
      const maxY = window.innerHeight - 100;

      setPosition({
        x: Math.max(minX, Math.min(maxX, newX)),
        y: Math.max(minY, Math.min(maxY, newY)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isOpen, position]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || showLimit) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    const userQuery = inputValue;
    setInputValue("");
    setIsTyping(true);

    const newCount = queryCount + 1;
    setQueryCount(newCount);
    localStorage.setItem(
      CHATBOT_CONFIG.storageKeys.queryCount,
      newCount.toString(),
    );

    try {
      if (newCount >= CHATBOT_CONFIG.maxQueriesPerSession) {
        // Allow this question but show limit after
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userQuery }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();
        const botMessage: Message = { role: "bot", content: data.response };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);

        // Show limit message after 5th question is answered
        if (newCount === CHATBOT_CONFIG.maxQueriesPerSession) {
          setShowLimit(true);
          const limitMessage: Message = {
            role: "bot",
            content: LIMIT_REACHED_MESSAGE,
          };
          setTimeout(() => {
            setMessages((prev) => [...prev, limitMessage]);
          }, 500);
        }
      } else {
        // Call API endpoint
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userQuery }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();
        const botMessage: Message = { role: "bot", content: data.response };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Fallback to local knowledge base response
      const fallbackResponse = generateResponse(userQuery);
      const fallbackMessage: Message = {
        role: "bot",
        content: fallbackResponse,
      };
      setMessages((prev) => [...prev, fallbackMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageContent = (content: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;

    let processedContent = content;
    const elements: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    const linkMatches: Array<{
      text: string;
      url: string;
      index: number;
      length: number;
    }> = [];

    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      linkMatches.push({
        text: match[1],
        url: match[2],
        index: match.index,
        length: match[0].length,
      });
    }

    linkMatches.forEach((link) => {
      if (link.index > lastIndex) {
        const textBefore = content.substring(lastIndex, link.index);
        let boldLastIndex = 0;
        let boldMatch;
        boldRegex.lastIndex = 0;
        while ((boldMatch = boldRegex.exec(textBefore)) !== null) {
          if (boldMatch.index > boldLastIndex) {
            elements.push(textBefore.substring(boldLastIndex, boldMatch.index));
          }
          elements.push(
            <strong key={`bold-${keyCounter++}`} className="font-semibold">
              {boldMatch[1]}
            </strong>,
          );
          boldLastIndex = boldMatch.index + boldMatch[0].length;
        }
        if (boldLastIndex < textBefore.length) {
          elements.push(textBefore.substring(boldLastIndex));
        }
      }

      elements.push(
        <a
          key={`link-${keyCounter++}`}
          href={link.url}
          className="text-[#5563ff] hover:text-[#4452e0] font-medium underline underline-offset-2 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </a>,
      );
      lastIndex = link.index + link.length;
    });

    if (lastIndex < content.length) {
      const remainingText = content.substring(lastIndex);
      let boldLastIndex = 0;
      let boldMatch;
      boldRegex.lastIndex = 0;
      while ((boldMatch = boldRegex.exec(remainingText)) !== null) {
        if (boldMatch.index > boldLastIndex) {
          elements.push(
            remainingText.substring(boldLastIndex, boldMatch.index),
          );
        }
        elements.push(
          <strong key={`bold-${keyCounter++}`} className="font-semibold">
            {boldMatch[1]}
          </strong>,
        );
        boldLastIndex = boldMatch.index + boldMatch[0].length;
      }
      if (boldLastIndex < remainingText.length) {
        elements.push(remainingText.substring(boldLastIndex));
      }
    }

    return elements.length > 0 ? elements : content;
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.25s ease-out forwards;
        }

        .message-enter {
          animation: slideUp 0.3s ease-out;
        }

        .typing-indicator span {
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            opacity: 0.3;
          }
          30% {
            opacity: 1;
          }
        }

        .chat-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 2px;
        }

        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>

      {/* Chatbot Bubble */}
      {!isOpen && (
        <button
          ref={bubbleRef}
          onMouseDown={handleMouseDown}
          onClick={() => setIsOpen(true)}
          style={{
            right: `${position.x}px`,
            bottom: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "pointer",
          }}
          className={`fixed z-50 ${!isDragging ? "animate-float" : ""} transition-transform hover:scale-105`}
          aria-label="Chat with Relific"
        >
          <div className="relative group">
            {/* Subtle pulsing ring */}
            <div className="absolute inset-0 animate-pulse-ring">
              <div className="w-full h-full rounded-full bg-[#5563ff] opacity-25"></div>
            </div>

            {/* Main bubble */}
            <div className="relative bg-[#5563ff] rounded-full p-0.5 shadow-lg shadow-[#5563ff]/20">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/logo_small_new.png"
                  alt="Relific chatbot"
                  className="h-10 w-10 drop-shadow-sm transform group-hover:scale-105 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Chatbot Window - Compact & Clean */}
      {isOpen && (
        <div className="fixed right-5 bottom-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] h-[480px] max-h-[calc(100vh-2.5rem)] animate-slide-up">
          <div className="relative h-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 flex flex-col overflow-hidden border border-gray-100">
            {/* Header - Clean design with #5563ff */}
            <div className="relative bg-[#5563ff] px-4 py-3.5 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/15 p-1.5 rounded-lg">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] text-white">
                    Relific Assistant
                  </h3>
                  <p className="text-[11px] text-white/70 font-medium">
                    {showLimit
                      ? "Query limit reached"
                      : `${queryCount}/${CHATBOT_CONFIG.maxQueriesPerSession} questions used`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/15 p-1.5 rounded-lg transition-colors duration-200"
                aria-label="Close chat"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50 min-h-0 chat-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} message-enter`}
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl transition-all ${
                      message.role === "user"
                        ? "bg-[#5563ff] text-white rounded-br-md shadow-sm shadow-[#5563ff]/20"
                        : "bg-white text-gray-700 rounded-bl-md shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-[13px] whitespace-pre-wrap leading-relaxed">
                      {renderMessageContent(message.content)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start message-enter">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="typing-indicator flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input or CTA */}
            {showLimit ? (
              <div className="px-4 py-3.5 border-t border-gray-100 bg-white flex-shrink-0">
                <a
                  href="/book-demo"
                  className="block w-full bg-[#5563ff] hover:bg-[#4452e0] text-white text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm shadow-[#5563ff]/20 hover:shadow-md"
                >
                  📅 Book a Demo
                </a>
              </div>
            ) : (
              <div className="px-4 py-3.5 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our products..."
                    className="flex-1 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#5563ff] focus:ring-2 focus:ring-[#5563ff]/10 transition-all bg-gray-50/50 placeholder:text-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-[#5563ff] hover:bg-[#4452e0] text-white p-2.5 rounded-xl disabled:bg-gray-200 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md disabled:shadow-none"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
