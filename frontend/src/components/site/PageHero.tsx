import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 brand-gradient opacity-95" />
      {image && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 mix-blend-overlay scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container-page py-20 text-primary-foreground md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>{eyebrow}</span>
          </div>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base opacity-90 md:text-xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-16 md:py-24 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-md bg-accent/15 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-accent">
              <span>{eyebrow}</span>
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
