import React, { ReactNode } from "react";

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
  return (
    <a
      href={url}
      className={`flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors w-full max-w-xs ${className}`}
    >
      {icon}
      <span className="text-base">{name}</span>
    </a>
  );
}
