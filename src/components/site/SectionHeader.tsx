import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-5`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      <div className={`gold-divider mt-6 w-24 ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
