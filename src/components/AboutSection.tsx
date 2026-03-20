"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
                Nossa história
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] leading-tight">
                Tradição que{" "}
                <span className="text-gradient-gold">inspira confiança.</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-warm leading-relaxed">
              <p>
                Fundada em 1947 por Fernando Gomes de Abreu, a Eridan é o
                escritório de contabilidade mais antigo em funcionamento no Rio
                de Janeiro — uma trajetória ininterrupta de quase oito décadas
                de excelência.
              </p>
              <p>
                Desde 1984, sob a gestão de Marco Antônio dos Reis Gomes, o
                escritório passou por um profundo processo de modernização,
                aliando o rigor técnico herdado à visão estratégica que o
                mercado atual exige.
              </p>
              <p className="text-foreground font-medium">
                Hoje, a Eridan se reinventa mais uma vez: processos
                digitalizados, atendimento ágil e uma equipe preparada para
                transformar contabilidade em vantagem competitiva.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gold-subtle bg-navy-light p-8 lg:p-12 glow-gold">
              <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              <div className="space-y-10">
                {[
                  {
                    year: "1947",
                    title: "Fundação",
                    text: "Fernando Gomes de Abreu funda a Eridan Contabilidade no centro do Rio de Janeiro.",
                  },
                  {
                    year: "1984",
                    title: "Modernização",
                    text: "Marco Antônio dos Reis Gomes ingressa como sócio e inicia a modernização do escritório.",
                  },
                  {
                    year: "Hoje",
                    title: "Reinvenção",
                    text: "Transformação digital completa: processos ágeis, tecnologia de ponta e atendimento de excelência.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-gold">
                          {item.year}
                        </span>
                      </div>
                      {i < 2 && (
                        <div className="w-px h-full bg-gradient-to-b from-gold/20 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-warm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
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
