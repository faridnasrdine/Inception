import { Shield, GraduationCap, Lightbulb } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Deep knowledge of network security, vulnerability assessment, penetration testing, and secure systems design. Constantly exploring offensive and defensive security techniques.",
    color: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "1337 / 42 Network",
    description:
      "Student at 1337, part of the 42 Network — a peer-to-peer, project-based school. Mastering C, C++, systems programming, and collaborative problem solving.",
    color: "secondary" as const,
  },
  {
    icon: Lightbulb,
    title: "Learning Philosophy",
    description:
      "Driven by curiosity and a hacker mindset. I learn by building, breaking, and rebuilding. Every bug is a lesson, every project is a step forward.",
    color: "accent" as const,
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.1)]",
  },
  secondary: {
    icon: "text-secondary",
    bg: "bg-secondary/10",
    border: "hover:border-secondary/40 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.1)]",
  },
  accent: {
    icon: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/40 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.1)]",
  },
};

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Who I am and what drives me">
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => {
        const colors = colorClasses[card.color];
        return (
          <div
            key={card.title}
            className={`p-6 rounded-xl bg-card border border-border transition-all duration-300 ${colors.border} group`}
          >
            <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
              <card.icon className={`w-6 h-6 ${colors.icon}`} />
            </div>
            <h3 className="text-lg font-semibold font-mono mb-2 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default AboutSection;
