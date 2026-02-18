"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackCodeCopy } from "@/lib/analytics";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  source?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = true,
  source = "unknown",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackCodeCopy(language, source);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  if (!mounted) {
    return (
      <div className="relative overflow-hidden rounded-lg border bg-muted">
        <pre className="p-4 text-sm">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className={"group relative overflow-hidden rounded-lg border bg-muted " + (className || "")}>
      <div className="absolute right-2 top-2 z-10">
        <Button
          variant="secondary"
          size="sm"
          className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
