import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function TextLink({ href, className, children }: TextLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
