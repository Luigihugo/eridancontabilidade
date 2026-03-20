"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Cpu,
  TrendingUp,
} from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Atendimento Ágil",
    description:
      "Respostas rápidas e processos otimizados. Sua empresa não pode esperar — e com a Eridan, não precisa.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description:
      "Sistemas integrados, automação inteligente e processos digitais que eliminam burocracia e maximizam eficiência.",
  },
  {
    icon: Shield,
    title: "Blindagem Fiscal",
    description:
      "Análise tributária estratégica para reduzir riscos, otimizar impostos e proteger seu patrimônio com segurança jurídica.",
  },
  {
    icon: BarChart3,
    title: "Gestão Estratégica",
    description:
      "Muito além da contabilidade básica. Auxiliamos na tomada de decisões com visão financeira e planejamento inteligente.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais dedicados com expertise em diferentes áreas, garantindo um atendimento completo e personalizado.",
  },
  {
    icon: TrendingUp,
    title: "Recuperação Empresarial",
    description:
      "Suporte completo para empresas em momentos desafiadores, incluindo reestruturação financeira e recuperação judicial.",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 lg:py-32 bg-navy-light"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Por que a Eridan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] leading-tight">
            Tradição encontra{" "}
            <span className="text-gradient-gold">vanguarda.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-warm text-lg">
            Combinamos a solidez de 77 anos de experiência com processos
            modernos e tecnologia para entregar resultados reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl border border-gold-subtle bg-navy p-8 hover:border-gold/30 transition-all duration-500 hover:glow-gold"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-500" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-500">
                  <item.icon
                    size={22}
                    className="text-gold"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-warm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
