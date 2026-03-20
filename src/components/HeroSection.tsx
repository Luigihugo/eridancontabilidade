"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(46,134,171,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46,134,171,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/20 bg-gold/[0.05] backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Desde 1947 — Rio de Janeiro
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] leading-[1.1] tracking-tight">
            <span className="text-foreground">Há 77 anos construindo</span>
            <br />
            <span className="text-gradient-gold">o futuro da contabilidade.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-warm leading-relaxed">
            O escritório contábil mais antigo do Rio de Janeiro, reinventado
            para a era digital. Tradição que inspira confiança. Tecnologia que
            gera resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/5521990110475"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-semibold bg-gradient-gold text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Agende uma Consulta
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 text-sm font-medium text-foreground border border-gold/20 rounded-lg hover:bg-gold/[0.05] transition-all duration-300"
            >
              Conheça Nossa História
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#numeros"
            className="flex flex-col items-center gap-2 text-slate-warm/50 hover:text-gold transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Explore
            </span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
