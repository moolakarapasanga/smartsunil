import { Badge } from "@/components/ui/Badge";

const expertise = [
  "Web Application Security", "API Security", "Android Security", "iOS Security",
  "Source Code Review", "Reverse Engineering", "Cloud Security", "AI Security",
  "Network Security", "DevSecOps"
];

const tools = [
  "Burp Suite", "Frida", "MobSF", "JADX", "Ghidra", "Nmap", "Nuclei",
  "ffuf", "Semgrep", "Trivy", "AWS", "Docker", "GitHub", "Jenkins"
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">Portfolio</p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-.04em] md:text-7xl">Security engineering in practice.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          A technical portfolio focused on application security, mobile testing, source analysis,
          reverse engineering, cloud security and security research.
        </p>
      </header>

      <section className="mt-24 border-t border-white/10 pt-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Security research and assessment work across modern application stacks, with an emphasis
          on practical testing, reproducible findings and engineering-focused remediation.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Security Expertise</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {expertise.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Tools</h2>
        <div className="mt-6 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool} className="border-b border-r border-white/10 p-5 font-mono text-sm text-slate-400">{tool}</div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Application Security Assessments", "Web, API, Android and iOS testing with reproducible technical findings."],
            ["Reverse Engineering Research", "Runtime instrumentation, mobile application analysis and binary research."],
            ["Cloud Security Research", "AWS identity, storage and infrastructure security experiments."],
            ["AI Security Labs", "Security testing concepts for LLM-powered applications and agents."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-white/10 pt-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 border-l border-[#38D9E6]/30 pl-6">
          <div className="font-mono text-xs text-[#38D9E6]">SECURITY ENGINEERING</div>
          <h3 className="mt-2 text-xl font-semibold">Application & Product Security</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Security assessments, source review, vulnerability triage, automation and secure SDLC practices.
          </p>
        </div>
      </section>
    </main>
  );
}
