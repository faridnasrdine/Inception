import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, subtitle, children }: Props) => (
  <section id={id} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-3">
        <span className="text-gradient-neon">{title}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
    {children}
  </section>
);

export default SectionWrapper;
