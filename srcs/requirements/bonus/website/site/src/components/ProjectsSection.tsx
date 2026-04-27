import { ExternalLink, Github, Lock, Terminal, Globe, Cpu } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "minishell",
    description: "A custom Unix shell built from scratch in C. Supports pipes, redirections, environment variables, and signal handling.",
    tags: ["C", "Unix", "Parsing", "Processes"],
    icon: Terminal,
    color: "primary" as const,
    Github: "https://github.com/faridnasrdine/Minishell_42",
    live: "https://minishell-demo.example.com",
  },
  {
    title: "cub3D",
    description: "Raycasting engine inspired by Wolfenstein 3D. Real-time 3D rendering from a 2D map using ray-casting algorithms.",
    tags: ["C", "Graphics", "Math", "MiniLibX"],
    icon: Cpu,
    color: "secondary" as const,
    Github: "https://github.com/faridnasrdine/cub3d",

  },
  // {
  //   title: "ft_transcendence",
  //   description: "Full-stack multiplayer Pong game with real-time gameplay, chat, user auth, and tournament system.",
  //   tags: ["TypeScript", "NestJS", "React", "WebSocket"],
  //   icon: Globe,
  //   color: "accent" as const,
  // },
  {
    title: "NetPractice",
    description: "Network configuration exercises — subnetting, routing tables, TCP/IP stack mastery.",
    tags: ["Networking", "TCP/IP", "Subnetting"],
    icon: Lock,
    color: "primary" as const,
  },
  {
    title: "Philosophers",
    description: "Dining philosophers problem solved with multithreading and mutexes. Zero data races, zero deadlocks.",
    tags: ["C", "Threads", "Mutexes", "Concurrency"],
    icon: Cpu,
    color: "secondary" as const,
    Github: "https://github.com/faridnasrdine/42cursus",
  },
  // {
  //   title: "Inception",
  //   description: "Docker infrastructure with NGINX, WordPress, and MariaDB. Multi-container orchestration with docker-compose.",
  //   tags: ["Docker", "DevOps", "Linux", "NGINX"],
  //   icon: Terminal,
  //   color: "accent" as const,
  // },
];

const colorMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    tag: "bg-primary/10 text-primary",
    border: "hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.08)]",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    tag: "bg-secondary/10 text-secondary",
    border: "hover:border-secondary/30 hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.08)]",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    tag: "bg-accent/10 text-accent",
    border: "hover:border-accent/30 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.08)]",
  },
};

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Selected work from 42 and beyond">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => {
        const c = colorMap[p.color];
        return (
          <div
            key={p.title}
            className={`group p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:scale-[1.02] ${c.border}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                <p.icon className={`w-5 h-5 ${c.iconText}`} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.Github && (
                  <a
                    href={p.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                  </a>
                )}
                {p.live &&(
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    >
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </a>
                )}
              </div>
            </div>
            <h3 className="text-lg font-semibold font-mono mb-2 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className={`text-xs px-2 py-1 rounded-md font-mono ${c.tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
