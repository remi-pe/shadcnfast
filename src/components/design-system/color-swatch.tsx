"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ColorSwatchProps {
  name: string;
  variable: string;
}

export function ColorSwatch({ name, variable }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`var(--${variable})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex w-full items-center gap-3 rounded-md border p-3 text-left transition-colors hover:bg-muted"
    >
      <div
        className="h-10 w-10 shrink-0 rounded-md border"
        style={{ backgroundColor: `var(--${variable})` }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="truncate font-mono text-xs text-muted-foreground">
          --{variable}
        </p>
      </div>
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </button>
  );
}
