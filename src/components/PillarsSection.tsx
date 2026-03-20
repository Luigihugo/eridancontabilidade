"use client";

import { motion } from "framer-motion";
import { Settings, Handshake } from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] leading-tight">
            Dois pilares.{" "}
            <span className="text-gradient-gold">Uma visão.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-warm text-lg">
            Uma estrutura redesenhada com foco em excelência operacional e
            atendimento de alto nível — cada frente com liderança dedicada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl border border-gold-subtle bg-navy-light overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold opacity-60" />
            <div className="p-8 lg:p-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Settings size={26} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-1">
                    Pilar 01
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Excelência Operacional
                  </h3>
                </div>
              </div>

              <p className="text-slate-warm leading-relaxed">
                Uma liderança dedicada à reestruturação completa dos processos
                internos — modernizando fluxos, implementando tecnologia e
                garantindo que cada entrega tenha qualidade e velocidade.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Processos internos redesenhados e digitalizados",
                  "Automação de rotinas contábeis e fiscais",
                  "Controle de qualidade e SLA de entrega",
                  "Integração de sistemas e plataformas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <span className="text-sm text-slate-warm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative rounded-2xl border border-gold-subtle bg-navy-light overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold opacity-60" />
            <div className="p-8 lg:p-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Handshake
                    size={26}
                    className="text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-1">
                    Pilar 02
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Gestão Comercial & Institucional
                  </h3>
                </div>
              </div>

              <p className="text-slate-warm leading-relaxed">
                Um gestor comercial focado no relacionamento com clientes — do
                primeiro contato à fidelização. Onboarding ágil, propostas
                sob medida e negociação de honorários com excelência.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Onboarding estruturado e célere de clientes",
                  "Propostas personalizadas e negociação ágil",
                  "Gestão de relacionamento e fidelização",
                  "Posicionamento institucional e marketing",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <span className="text-sm text-slate-warm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
