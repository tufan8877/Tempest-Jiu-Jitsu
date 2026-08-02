import { motion } from "framer-motion";

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function SectionHeader({ title, subtitle, align = "left" }: { title: string, subtitle?: string, align?: "left" | "center" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {subtitle && (
        <motion.span 
          variants={fadeIn}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        variants={fadeIn}
        className="text-4xl md:text-5xl font-display uppercase"
      >
        {title}
      </motion.h2>
    </div>
  );
}
