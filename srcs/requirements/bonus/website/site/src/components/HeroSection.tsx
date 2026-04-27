import { Github, ArrowDown, Mail, FolderOpen } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const codeSnippets = [
  'if (access == "granted") {',
  "  exploit(vulnerability);",
  "  escalate_privileges();",
  "}",
  "// scanning ports...",
  "nmap -sV target",
  "gcc -o exploit payload.c",
  "chmod +x ./rootkit",
  "ssh root@10.0.0.1",
  "void *ft_memcpy(void *d,",
  "  const void *s, size_t n)",
  "while (n--) *dp++ = *sp++;",
  "return (d);",
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Interactive particle background */}
    <ParticleBackground />
    
    {/* Animated background */}
    <div className="absolute inset-0 bg-grid" style={{ zIndex: 0 }} />
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 animate-glow-pulse" style={{ zIndex: 0 }} />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/10 animate-glow-pulse animate-float-delayed" style={{ zIndex: 0 }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial pointer-events-none" style={{ zIndex: 0 }} />

    {/* Code snippets */}
    <div className="absolute left-4 top-20 bottom-0 w-48 overflow-hidden opacity-[0.06] pointer-events-none hidden lg:block">
      <div className="animate-code-scroll font-mono text-xs text-primary space-y-2">
        {[...codeSnippets, ...codeSnippets].map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
    <div className="absolute right-4 top-20 bottom-0 w-48 overflow-hidden opacity-[0.06] pointer-events-none hidden lg:block">
      <div className="animate-code-scroll font-mono text-xs text-secondary space-y-2" style={{ animationDelay: "5s" }}>
        {[...codeSnippets, ...codeSnippets].reverse().map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Profile image */}
      <div className="mb-8 flex justify-center animate-slide-up">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-sm animate-pulse" />
          <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-primary/50">
            <img src="https://avatars.githubusercontent.com/u/178327346?v=4" alt="Nasr-Eddine Farid" className="w-full h-full object-cover" />
          </div>
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4">
            <div className="absolute inset-0 rounded-full bg-primary/70 animate-ping opacity-75" />
            <div className="relative w-4 h-4 rounded-full bg-primary border-2 border-background" />
          </div>
        </div>
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold font-mono mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <span className="text-gradient-neon">Nasr-Eddine</span>
        <br />
        <span className="text-foreground">Farid</span>
      </h1>

      <p
        className="font-mono text-primary text-lg sm:text-xl mb-4 glow-text animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        Software Engineer & Cybersecurity Specialist
      </p>

      <p
        className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-10 animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        Building secure, high-performance systems from the ground up. 42 Network student passionate about
        low-level programming, network security, and elegant code.
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--neon-cyan)/0.4)]"
        >
          <FolderOpen className="w-4 h-4" />
          Projects
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-lg neon-border bg-muted/50 text-foreground font-mono text-sm font-semibold transition-all hover:scale-105 neon-border-hover"
        >
          <Mail className="w-4 h-4" />
          Contact
        </a>
        <a
          href="/CV.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-lg neon-border bg-muted/50 text-foreground font-mono text-sm font-semibold transition-all hover:scale-105 neon-border-hover"
        >
          <ArrowDown className="w-4 h-4" />
          Download CV
        </a>
        <a
          href="https://github.com/faridnasrdine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg neon-border bg-muted/50 text-foreground font-mono text-sm font-semibold transition-all hover:scale-105 neon-border-hover"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground mx-auto" />
      </div>
    </div>
  </section>
);

export default HeroSection;
