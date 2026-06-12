"use client";

import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  wordClassName?: string;
  innerClassName?: string;
}

export default function SplitText({
  text,
  as: Tag = "h1",
  className,
  wordClassName,
  innerClassName,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={cn(
            "hero-word mr-[0.25em] inline-block overflow-hidden align-top",
            wordClassName
          )}
          aria-hidden={false}
        >
          <span
            className={cn(
              "hero-word-inner inline-block will-change-transform",
              innerClassName
            )}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
