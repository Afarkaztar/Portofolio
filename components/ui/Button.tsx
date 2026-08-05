import Link from "next/link";
import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = ButtonAsLink | ButtonAsButton;

const variants: Record<string, string> = {
  primary: "bg-accent text-white hover:bg-accent/90 border border-accent",
  secondary: "bg-surface text-text-primary border border-border hover:border-accent",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-4 py-2.5 text-sm font-medium transition-colors duration-200";

export default function Button(props: Props) {
  const { children, variant = "primary", icon, className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} onClick={buttonProps.onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
