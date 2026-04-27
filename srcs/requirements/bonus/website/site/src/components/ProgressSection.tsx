import { Trophy, Zap, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { icon: Trophy, label: "Level", value: "5.4", color: "text-primary" },
  { icon: Target, label: "Projects Done", value: "21", color: "text-secondary" },
  { icon: Zap, label: "Total XP", value: "42,800", color: "text-accent" },
];

const holyGraphNodes = [
  { name: "Libft", x: 200, y: 40, status: "done" },
  { name: "ft_printf", x: 120, y: 110, status: "done" },
  { name: "get_next_line", x: 280, y: 110, status: "done" },
  { name: "Born2beRoot", x: 200, y: 180, status: "done" },
  { name: "push_swap", x: 80, y: 180, status: "done" },
  { name: "minitalk", x: 320, y: 180, status: "done" },
  { name: "so_long", x: 200, y: 250, status: "done" },
  { name: "Philosophers", x: 80, y: 250, status: "done" },
  { name: "minishell", x: 320, y: 250, status: "done" },
  { name: "NetPractice", x: 200, y: 320, status: "done" },
  { name: "cub3d", x: 80, y: 320, status: "done" },
  { name: "CPP 0-4", x: 320, y: 320, status: "done" },
  { name: "CPP 5-9", x: 200, y: 390, status: "done" },
  { name: "Inception", x: 80, y: 390, status: "current" },
  { name: "webserv", x: 320, y: 390, status: "locked" },
  { name: "ft_transcendence", x: 200, y: 460, status: "locked" },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 4], [2, 5], [1, 3], [2, 3],
  [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11],
  [9, 12], [10, 13], [11, 14], [12, 15],
];

const statusColors: Record<string, { fill: string; stroke: string; text: string }> = {
  done: { fill: "hsl(187 94% 43% / 0.15)", stroke: "hsl(187 94% 43% / 0.6)", text: "hsl(187 94% 43%)" },
  current: { fill: "hsl(270 70% 60% / 0.2)", stroke: "hsl(270 70% 60% / 0.8)", text: "hsl(270 70% 60%)" },
  locked: { fill: "hsl(220 15% 15% / 0.5)", stroke: "hsl(220 15% 25%)", text: "hsl(215 15% 40%)" },
};

const ProgressSection = () => (
  <SectionWrapper id="progress" title="1337 Progress" subtitle="My journey through the 42 curriculum">
    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 mb-12 max-w-xl mx-auto">
      {stats.map((s) => (
        <div key={s.label} className="text-center p-4 rounded-xl bg-card border border-border">
          <s.icon className={`w-6 h-6 mx-auto mb-2 ${s.color}`} />
          <div className={`text-2xl font-bold font-mono ${s.color}`}>{s.value}</div>
          <div className="text-xs text-muted-foreground font-mono mt-1">{s.label}</div>
        </div>
      ))}
    </div>

    {/* Holy Graph */}
    <div className="flex justify-center overflow-x-auto">
      <svg viewBox="0 0 400 510" className="w-full max-w-md">
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line
            key={i}
            x1={holyGraphNodes[from].x}
            y1={holyGraphNodes[from].y + 15}
            x2={holyGraphNodes[to].x}
            y2={holyGraphNodes[to].y - 5}
            stroke="hsl(220 15% 20%)"
            strokeWidth="1"
          />
        ))}
        {/* Nodes */}
        {holyGraphNodes.map((node) => {
          const c = statusColors[node.status];
          return (
            <g key={node.name}>
              <rect
                x={node.x - 45}
                y={node.y - 12}
                width={90}
                height={24}
                rx={6}
                fill={c.fill}
                stroke={c.stroke}
                strokeWidth={node.status === "current" ? 1.5 : 0.8}
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={c.text}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                fontWeight={node.status === "current" ? 700 : 400}
              >
                {node.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>

    <div className="flex justify-center gap-6 mt-6 text-xs font-mono">
      <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-primary/30 border border-primary/60" /> Completed</span>
      <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-secondary/30 border border-secondary/60" /> In Progress</span>
      <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-muted border border-border" /> Locked</span>
    </div>
  </SectionWrapper>
);

export default ProgressSection;
