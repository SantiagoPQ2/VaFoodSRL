interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="bg-brand-gray-light border-b border-gray-200 py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {accent && (
          <span className="inline-block text-brand-red font-sans font-semibold text-xs uppercase tracking-widest mb-3">
            {accent}
          </span>
        )}
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
