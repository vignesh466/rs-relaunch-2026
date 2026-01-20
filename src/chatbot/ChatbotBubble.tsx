"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle, Sparkles } from "lucide-react";
import {
  INITIAL_GREETING,
  LIMIT_REACHED_MESSAGE,
  CHATBOT_CONFIG,
  generateResponse,
  parseMarkdownContent,
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
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: INITIAL_GREETING },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [queryCount, setQueryCount] = useState(0);
  const [showLimit, setShowLimit] = useState(false);
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
      } else if (storedCount) {
        const count = parseInt(storedCount);
        setQueryCount(count);
        if (count >= CHATBOT_CONFIG.maxQueriesPerSession) {
          setShowLimit(true);
        }
      } else {
        localStorage.setItem(
          CHATBOT_CONFIG.storageKeys.sessionStart,
          now.toString(),
        );
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

  const handleSendMessage = () => {
    if (!inputValue.trim() || showLimit) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const newCount = queryCount + 1;
    setQueryCount(newCount);
    localStorage.setItem(
      CHATBOT_CONFIG.storageKeys.queryCount,
      newCount.toString(),
    );

    // Simulate typing delay for more natural feel
    setTimeout(() => {
      setIsTyping(false);
      if (newCount >= CHATBOT_CONFIG.maxQueriesPerSession) {
        setShowLimit(true);
        const limitMessage: Message = {
          role: "bot",
          content: LIMIT_REACHED_MESSAGE,
        };
        setMessages((prev) => [...prev, limitMessage]);
      } else {
        const botResponse = generateResponse(inputValue);
        const botMessage: Message = { role: "bot", content: botResponse };
        setMessages((prev) => [...prev, botMessage]);
      }
    }, 600);
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
          className="text-blue-500 hover:text-blue-600 font-medium underline underline-offset-2 transition-colors"
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
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }

        .message-enter {
          animation: slideUp 0.4s ease-out;
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

        .glassmorphism {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
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
            cursor: isDragging ? "grabbing" : "grab",
          }}
          className={`fixed z-50 ${!isDragging ? "animate-float" : ""} transition-transform hover:scale-105`}
          aria-label="Chat with Relific"
        >
          <div className="relative group">
            {/* Pulsing rings */}
            <div className="absolute inset-0 animate-pulse-ring">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
            </div>
            <div
              className="absolute inset-0 animate-pulse-ring"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 opacity-20"></div>
            </div>

            {/* Main bubble */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-full p-1 shadow-2xl">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/logo_small_new.png"
                  alt="Relific chatbot"
                  className="h-12 w-12 drop-shadow-lg transform group-hover:rotate-12 transition-all duration-300"
                />
              </div>
            </div>

            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Sparkles size={16} className="text-yellow-400 animate-pulse" />
            </div>
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col animate-slide-up">
          {/* Glassmorphism container with gradient border */}
          <div className="relative h-full glassmorphism rounded-2xl shadow-2xl overflow-hidden gradient-border">
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-5 flex justify-between items-center overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    Relific Assistant
                    <Sparkles
                      size={16}
                      className="text-yellow-300 animate-pulse"
                    />
                  </h3>
                  <p className="text-xs text-blue-100 font-medium">
                    {showLimit
                      ? "Query limit reached"
                      : `${queryCount}/${CHATBOT_CONFIG.maxQueriesPerSession} questions used`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 hover:bg-white/20 p-2 rounded-lg transition-all duration-200 hover:rotate-90"
                aria-label="Close chat"
              >
                <X size={22} className="text-white" />
              </button>
            </div>

            {/* Messages with gradient background */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} message-enter`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl shadow-lg transition-all hover:shadow-xl ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {renderMessageContent(message.content)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start message-enter">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-lg border border-gray-100">
                    <div className="typing-indicator flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input or CTA */}
            {showLimit ? (
              <div className="p-5 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
                <a
                  href="/book-demo"
                  className="block w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white text-center py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📅 Book a Demo
                    <Sparkles size={16} className="group-hover:animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            ) : (
              <div className="p-5 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our products..."
                    className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all bg-white"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
                    aria-label="Send message"
                  >
                    <Send size={20} />
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
