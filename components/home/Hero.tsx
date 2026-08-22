export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center justify-center px-5 py-24 text-center">
      <div className="mb-8 font-mono text-xs uppercase tracking-[.3em] text-[#38D9E6]">
        security-research
      </div>
      <h1 className="max-w-4xl text-6xl font-extrabold leading-[.9] tracking-[-.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
        <span className="block">Research</span>
        <span className="block text-slate-500">Thoughts</span>
        <span className="block">Experiments</span>
      </h1>
      <p className="mt-9 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
        Security research, application security, reverse engineering and technical experiments.
      </p>
    </section>
  );
}
