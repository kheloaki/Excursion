import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light shadow-lg shadow-gold/20",
  secondary:
    "bg-transparent border border-border-strong text-cream hover:border-gold hover:text-gold",
  ghost:
    "bg-white/5 text-cream hover:bg-white/10 border border-border",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-lg shadow-[#25D366]/20",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-sm",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
