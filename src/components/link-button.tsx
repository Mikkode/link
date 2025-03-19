import React, { ReactNode } from "react";
import { ShinyButton } from "./magicui/shiny-button";
import { BorderBeam } from "./magicui/border-beam";

interface LinkButtonProps {
  url: string;
  name: string;
  icon?: ReactNode;
  className?: string;
}

export default function LinkButton({
  url,
  name,
  icon,
  className,
}: LinkButtonProps) {
  const randomDelay1 = Math.floor(Math.random() * (12 - 7 + 1)) + 7;
  return (
    <div
      className={`relative border rounded-3xl hover:bg-gray-100 transition-colors w-full max-w-xs ${className}`}
    >
      <BorderBeam
        duration={10}
        delay={randomDelay1}
        size={130}
        colorFrom="#3b82f6"
      />
      <a href={url} className={`flex items-center gap-2 px-4 py-2`}>
        {icon}
        <span className="text-base">{name}</span>
      </a>
    </div>
  );
}
