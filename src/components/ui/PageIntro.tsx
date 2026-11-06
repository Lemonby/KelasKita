type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </header>
  );
}
