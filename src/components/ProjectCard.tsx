import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
}

export const ProjectCard = ({ title, description, tags = [], href }: ProjectCardProps) => {
  const card = (
    <Card className="relative overflow-hidden h-full border-0 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-elevated hover:shadow-glow transition-[box-shadow,transform] will-change-transform">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-accent opacity-10 mix-blend-overlay" />
      </div>
      <CardContent className="space-y-3 py-5">
        <h3 className="text-lg font-semibold leading-tight font-display">{title}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      whileHover={{ y: -4, rotateX: 1, rotateY: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full group [transform-style:preserve-3d]"
      style={{ perspective: 1000 }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} – open link`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </motion.div>
  );
};
