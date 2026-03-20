"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-navy-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
                Próximo passo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] leading-tight">
                Pronto para{" "}
                <span className="text-gradient-gold">transformar</span> a
                gestão da sua empresa?
              </h2>
            </div>

            <p className="text-lg text-slate-warm leading-relaxed">
              Agende uma conversa sem compromisso. Vamos entender seu cenário e
              mostrar como a Eridan pode ser sua parceira de confiança — com a
              solidez de quem atua há 77 anos e a agilidade que seu negócio
              exige.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5521990110475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-gradient-gold text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Fale pelo WhatsApp
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:eridan@eridan.com.br"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-foreground border border-gold/20 rounded-lg hover:bg-gold/[0.05] transition-all duration-300"
              >
                Envie um E-mail
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl border border-gold-subtle bg-navy p-8 space-y-6 glow-gold">
              <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                Informações de Contato
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:+552125241515"
                  className="flex items-center gap-4 text-slate-warm hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-warm/60 mb-0.5">
                      Telefone
                    </div>
                    <span className="text-sm">(21) 2524-1515</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/5521990110475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-warm hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-warm/60 mb-0.5">
                      WhatsApp
                    </div>
                    <span className="text-sm">(21) 99011-0475</span>
                  </div>
                </a>

                <a
                  href="mailto:eridan@eridan.com.br"
                  className="flex items-center gap-4 text-slate-warm hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-warm/60 mb-0.5">
                      E-mail
                    </div>
                    <span className="text-sm">eridan@eridan.com.br</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-slate-warm">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-warm/60 mb-0.5">
                      Endereço
                    </div>
                    <span className="text-sm">
                      Av. Franklin Roosevelt, 39
                      <br />
                      Grupo 401 a 407 — Centro
                      <br />
                      Rio de Janeiro, RJ
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-warm">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-warm/60 mb-0.5">
                      Horário
                    </div>
                    <span className="text-sm">
                      Segunda a Sexta, 9h às 18h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
