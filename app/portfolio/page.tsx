import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const expertise = [
  "Web Application Security",
  "API Security",
  "Android Security",
  "iOS Security",
  "Source Code Review",
  "Reverse Engineering",
  "Cloud Security",
  "AI Security",
  "Network Security",
  "DevSecOps",
];

const domains = [
  {
    number: "01",
    title: "Web Security",
    href: "/category/web",
    description:
      "Application security testing, authentication, authorization, session management, business logic and OWASP-based assessments.",
    tags: ["OWASP", "Burp Suite", "Nuclei"],
  },
  {
    number: "02",
    title: "API Security",
    href: "/category/api",
    description:
      "REST API assessment, authorization testing, IDOR, JWT analysis, rate limiting and business logic testing.",
    tags: ["REST", "JWT", "Postman"],
  },
  {
    number: "03",
    title: "Android Security",
    href: "/category/android",
    description:
      "Static and dynamic analysis of Android applications, runtime instrumentation, SSL pinning and root detection analysis.",
    tags: ["Frida", "JADX", "MobSF"],
  },
  {
    number: "04",
    title: "iOS Security",
    href: "/category/ios",
    description:
      "iOS application analysis, runtime instrumentation, certificate validation analysis and binary inspection.",
    tags: ["Frida", "LLDB", "MobSF"],
  },
  {
    number: "05",
    title: "Reverse Engineering",
    href: "/category/reverse-engineering",
    description:
      "Binary analysis, native library analysis, application instrumentation and understanding custom security controls.",
    tags: ["Ghidra", "Frida", "JADX"],
  },
  {
    number: "06",
    title: "Cloud Security",
    href: "/category/cloud-security",
    description:
      "AWS security assessment covering IAM, storage, networking, compute and cloud infrastructure configurations.",
    tags: ["AWS", "Terraform", "CloudGoat"],
  },
  {
    number: "07",
    title: "AI Security",
    href: "/category/ai-security",
    description:
      "Security testing of LLM applications, agents, prompts, tools and application-level AI attack surfaces.",
    tags: ["LLM", "Agents", "OWASP"],
  },
  {
    number: "08",
    title: "Network Security",
    href: "/category/network-security",
    description:
      "Network reconnaissance, service enumeration, traffic analysis and application communication testing.",
    tags: ["Nmap", "Wireshark", "iptables"],
  },
];

const tools = {
  "Application Security": [
    "Burp Suite",
    "CAIDO",
    "Nuclei",
    "ffuf",
    "Gobuster",
    "HTTPX",
    "WhatWeb",
    "ZAP",
  ],
  "Mobile Security": [
    "Frida",
    "Objection",
    "MobSF",
    "JADX",
    "APKTool",
    "ReFlutter",
    "Magisk",
  ],
  "Reverse Engineering": [
    "Ghidra",
    "IDA",
    "LLDB",
    "Frida",
    "strings",
    "objdump",
    "Binary Ninja",
  ],
  "Cloud & Infrastructure": [
    "TruffleHog",
    "Terraform",
    "CloudGoat",
    "Docker",
    "git-secrets",
    "native tools",
  ],
  "Development & DevSecOps": [
    "Python",
    "Java",
    "Go",
    "TypeScript",
    "Jenkins",
    "Semgrep",
    "SonarQube",
  ],
  "AI Security": [
    "Promptfoo",
    "Giskard",
    "Lakera Guardian",
  ],
};

const methodology = [
  {
    number: "01",
    title: "Reconnaissance",
    description: "Understand the application, infrastructure and exposed attack surface.",
  },
  {
    number: "02",
    title: "Attack Surface",
    description: "Map endpoints, services, APIs, application components and trust boundaries.",
  },
  {
    number: "03",
    title: "Manual Testing",
    description: "Validate security controls through manual testing rather than relying only on scanners.",
  },
  {
    number: "04",
    title: "Deep Analysis",
    description: "Use source code review, binary analysis and runtime instrumentation where required.",
  },
  {
    number: "05",
    title: "Exploitation",
    description: "Validate vulnerabilities and determine their real security impact.",
  },
  {
    number: "06",
    title: "Reporting",
    description: "Document reproducible findings with evidence, impact and practical remediation.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05080c] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,217,230,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
                <span className="h-px w-8 bg-[#38D9E6]" />
                Security Engineer
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Breaking applications
                <span className="block text-slate-500">
                  to understand how they fail.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                Application security engineer focused on Web, API, Android,
                iOS, reverse engineering, cloud security, AI security and security research.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/sign-in"
                  className="inline-flex items-center rounded-lg bg-[#38D9E6] px-5 py-3 text-sm font-semibold text-[#041014] transition hover:translate-y-[-2px] hover:bg-[#65e5ee]"
                >
                  Explore my work
                  <span className="ml-3">↓</span>
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.03]"
                >
                  Read research
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-white/10 pl-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                  Focus Areas
                </div>

                <div className="mt-5 space-y-3 font-mono text-sm text-slate-400">
                  <div>WEB / API</div>
                  <div>ANDROID / iOS</div>
                  <div>REVERSE ENGINEERING</div>
                  <div>CLOUD SECURITY</div>
                  <div>AI SECURITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              Expertise
            </div>

            <div className="flex max-w-5xl flex-wrap gap-2">
              {expertise.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY DOMAINS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
            Security Domains
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-5xl">
            Areas of security research
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            A practical security focus across application, mobile,
            infrastructure and emerging AI attack surfaces.
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => (
  <Link
    key={domain.number}
    href={domain.href}
    className="group min-h-[280px] border-b border-r border-white/10 p-6 transition hover:bg-white/[0.025] lg:p-7"
  >
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs text-[#38D9E6]">
        {domain.number}
      </span>

      <span className="text-slate-700 transition group-hover:text-[#38D9E6]">
        ↗
      </span>
    </div>

    <h3 className="mt-12 text-xl font-semibold">
      {domain.title}
    </h3>

    <p className="mt-4 text-sm leading-6 text-slate-500">
      {domain.description}
    </p>

    <div className="mt-6 flex flex-wrap gap-2">
      {domain.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-[10px] uppercase tracking-wider text-slate-600"
        >
          {tag}
        </span>
      ))}
    </div>
  </Link>
))}
        </div>
      </section>
      
      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
            Toolkit
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-5xl">
            Tools I work with
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(tools).map(([category, items]) => (
            <div key={category} className="bg-[#070b10] p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
                {category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-xs text-slate-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
                Experience
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-5xl">
                Security Engineering
              </h2>
            </div>

            <div className="border-l border-[#38D9E6]/30 pl-7">
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-[#38D9E6]">
                Application & Product Security
              </div>

              <h3 className="mt-4 text-2xl font-semibold">
                Security Engineer
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Experience across web application security, API assessments,
                Android and iOS security testing, source code review,
                vulnerability research, security automation and secure SDLC
                practices.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Web",
                  "API",
                  "Android",
                  "iOS",
                  "Cloud",
                  "Source Review",
                  "DevSecOps",
                  "AI Security",
                ].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-white/10 bg-[#070b10]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
              Contact
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Interested in security research?
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-500">
              Security engineering, research, collaboration or technical
              discussions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://github.com/moolakarapasanga"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-[#38D9E6]/40 hover:text-[#38D9E6]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/smartsunil"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-[#38D9E6]/40 hover:text-[#38D9E6]"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:assunil07@gmail.com"
                className="rounded-lg bg-[#38D9E6] px-5 py-3 text-sm font-semibold text-[#041014] transition hover:bg-[#65e5ee]"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}