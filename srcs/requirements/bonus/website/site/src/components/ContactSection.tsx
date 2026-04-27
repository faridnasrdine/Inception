import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const links = [
  { icon: Mail, label: "Email", value: "nasrdinefarid@gmail.com", href: "mailto:nasrdinefarid@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/faridnasrdine", href: "https://github.com/faridnasrdine" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nasr-eddine-farid", href: "https://linkedin.com/in/nasr-eddine-farid" },
  { icon: MapPin, label: "Location", value: "Morocco 🇲🇦", href: "#" },
];

const ContactSection = () => (
  <SectionWrapper id="contact" title="Contact" subtitle="Let's build something together">
    <div className="max-w-2xl mx-auto space-y-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.08)] group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <link.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{link.label}</div>
            <div className="text-foreground font-medium">{link.value}</div>
          </div>
        </a>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-24 text-center border-t border-border pt-8">
      <p className="text-muted-foreground text-sm font-mono">
        © 2024 Nasr-Eddine Farid — Built with passion & caffeine ☕
      </p>
    </div>
  </SectionWrapper>
);

export default ContactSection;
