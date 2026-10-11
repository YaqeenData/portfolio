import type { ElementType, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  paneClassName?: string;
};

/**
 * Soft Pane with a hint of Layered: a frosted glass card with one faint sheet behind it.
 * On hover or keyboard focus the sheet rises and the edge warms to orange.
 */
export function GlassCard({ children, as: Tag = "div", className = "", paneClassName = "" }: GlassCardProps) {
  return (
    <Tag className={`glass-card ${className}`}>
      <div aria-hidden="true" className="glass-ghost" />
      <div className={`glass-pane ${paneClassName}`}>{children}</div>
    </Tag>
  );
}
