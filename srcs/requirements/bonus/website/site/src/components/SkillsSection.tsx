import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "HTML", "Bash", "Assembly"],
  },
  {
    category: "Cybersecurity",
    skills: ["Penetration Testing", "Network Security", "Cryptography", "Reverse Engineering", "OSINT", "Forensics"],
  },
  {
    category: "Systems & DevOps",
    skills: ["Linux", "Docker", "NGINX", "Git", "Makefile", "CI/CD"],
  },
  {
    category: "Web & Tools",
    skills: ["React", "Node.js", "PostgreSQL", "REST APIs", "WebSocket", "Wireshark"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies and tools I work with">
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {skillGroups.map((group) => (
        <div key={group.category} className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-sm font-mono font-semibold text-primary mb-4 uppercase tracking-wider">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-mono rounded-md bg-muted text-foreground border border-border transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
