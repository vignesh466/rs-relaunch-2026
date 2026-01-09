import React from "react";

// TLDR Component
export function Tldr({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
            TL;DR
          </span>
        </div>
        <div className="ml-3 text-blue-800">{children}</div>
      </div>
    </div>
  );
}

// Admonition Component for different types of callouts
export function Admonition({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "caution" | "info" | "warning" | "tip";
  title?: string;
  children: React.ReactNode;
}) {
  const configs = {
    note: {
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      iconColor: "text-blue-600",
      textColor: "text-blue-800",
      icon: "📝",
      defaultTitle: "Note",
    },
    info: {
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-500",
      iconColor: "text-cyan-600",
      textColor: "text-cyan-800",
      icon: "ℹ️",
      defaultTitle: "Info",
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-500",
      iconColor: "text-yellow-600",
      textColor: "text-yellow-800",
      icon: "⚠️",
      defaultTitle: "Warning",
    },
    caution: {
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-600",
      textColor: "text-red-800",
      icon: "🚨",
      defaultTitle: "Caution",
    },
    tip: {
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      iconColor: "text-green-600",
      textColor: "text-green-800",
      icon: "💡",
      defaultTitle: "Tip",
    },
  };

  const config = configs[type] || configs.note;

  return (
    <div
      className={`${config.bgColor} border-l-4 ${config.borderColor} p-4 my-6 rounded-r-lg`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className={`${config.iconColor} text-lg mr-2`}>
            {config.icon}
          </span>
          <span
            className={`${config.iconColor} font-bold text-sm uppercase tracking-wide`}
          >
            {title || config.defaultTitle}
          </span>
        </div>
        <div className={`ml-3 ${config.textColor}`}>{children}</div>
      </div>
    </div>
  );
}

// ThemedImage Component for responsive images
export function ThemedImage({
  sources,
  alt = "",
  className = "",
}: {
  sources: { light?: string; dark?: string; default: string };
  alt?: string;
  className?: string;
}) {
  // For now, just use the default or light image
  // In a real app, you'd check for theme preference
  const src = sources.light || sources.default;

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto rounded-lg my-4 ${className}`}
    />
  );
}

// Tabs Component
export function Tabs({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || "");

  // Extract tab items from children
  const tabItems = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabItem
  ) as React.ReactElement[];

  React.useEffect(() => {
    if (!activeTab && tabItems.length > 0) {
      const firstTab = tabItems[0];
      setActiveTab((firstTab.props as any).value || "0");
    }
  }, [activeTab, tabItems]);

  return (
    <div className="my-6">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabItems.map((tab, index) => {
            const value = (tab.props as any).value || String(index);
            const label = (tab.props as any).label || `Tab ${index + 1}`;
            const isActive = activeTab === value;

            return (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabItems.map((tab, index) => {
          const value = (tab.props as any).value || String(index);

          return activeTab === value ? (
            <div key={value}>{(tab.props as any).children}</div>
          ) : null;
        })}
      </div>
    </div>
  );
}

// TabItem Component
export function TabItem({
  children,
  value,
  label,
}: {
  children: React.ReactNode;
  value: string;
  label: string;
}) {
  return <div>{children}</div>;
}

// Export the components map for MDX
export const mdxComponents = {
  Tldr,
  Admonition,
  ThemedImage,
  Tabs,
  TabItem,
  // HTML elements with enhanced styling
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mb-4 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mb-3 mt-6" {...props} />
  ),
  h3: (props: any) => <h3 className="text-xl font-bold mb-2 mt-4" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-bold mb-2 mt-3" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  img: (props: any) => (
    <img className="w-full h-auto rounded-lg my-4" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-8 shadow-lg rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100 last:border-b-0"
      {...props}
    />
  ),
  tbody: (props: any) => (
    <tbody className="bg-white divide-y divide-gray-100" {...props} />
  ),
};
