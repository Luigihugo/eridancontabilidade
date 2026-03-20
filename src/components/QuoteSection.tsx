"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-16 h-px mx-auto bg-gradient-gold" />

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] leading-relaxed text-foreground italic">
            &ldquo;Não existe gestão empresarial sólida sem contabilidade
            estratégica — e não existe contabilidade estratégica sem visão de
            negócio.&rdquo;
          </blockquote>

          <div className="w-16 h-px mx-auto bg-gradient-gold" />

          <div>
            <p className="text-sm font-medium text-gold">
              Eridan Contabilidade
            </p>
            <p className="text-xs text-slate-warm mt-1">
              Desde 1947 — Rio de Janeiro
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
