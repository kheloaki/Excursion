interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="relative border-b border-border bg-surface/50">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-14 md:pb-20 text-center">
        {eyebrow && (
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-cream">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-cream-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
