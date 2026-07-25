import type { ReactNode } from "react";

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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 brand-gradient opacity-95" />
      {image && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      <div className="container-page py-20 text-primary-foreground md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg opacity-90 md:text-xl">{subtitle}</p>}
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
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </div>
          )}
          {title && <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
