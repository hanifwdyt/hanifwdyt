interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-medium text-text-tertiary mb-4 uppercase tracking-wider px-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
