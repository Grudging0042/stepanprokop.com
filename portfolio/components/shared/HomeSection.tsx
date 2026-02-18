interface HomeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <section className="w-full px-6 pt-6 pb-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[644px]">
        <h2 className="mb-2.5 font-sans text-lg font-semibold leading-6 tracking-[-0.01em] text-text-primary">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}
