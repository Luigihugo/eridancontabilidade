"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  Calculator,
  ClipboardCheck,
  Scale,
  Search,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Legalização de Empresas",
    items: [
      "Abertura e baixa de empresa",
      "Alterações contratuais",
      "Abertura e fechamento de filial",
      "Certidões diversas",
    ],
  },
  {
    icon: FileText,
    title: "Gestão Fiscal",
    items: [
      "Legislação federal, estadual e municipal",
      "Rotinas e obrigações fiscais",
      "Atendimento à fiscalização",
      "Planejamento tributário",
    ],
  },
  {
    icon: Calculator,
    title: "Departamento Pessoal",
    items: [
      "Admissão e demissão",
      "Folha de pagamento e pró-labore",
      "Programação de férias",
      "CAGED e e-Social",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Inscrições e Alvarás",
    items: [
      "Prefeitura e vigilância sanitária",
      "Corpo de bombeiros",
      "CNPJ e inscrição estadual",
      "Alvarás provisórios",
    ],
  },
  {
    icon: Scale,
    title: "Assessoria Contábil",
    items: [
      "Rotinas trabalhistas completas",
      "Orientação e controle legislativo",
      "Planejamento financeiro",
      "Assessoria à fiscalização",
    ],
  },
  {
    icon: Search,
    title: "Auditoria",
    items: [
      "Auditorias rigorosas",
      "Transparência e conformidade",
      "Normas regulatórias",
      "Relatórios detalhados",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Recuperação Empresarial",
    items: [
      "Recuperação judicial",
      "Reestruturação financeira",
      "Diagnóstico operacional",
      "Planejamento estratégico",
    ],
  },
  {
    icon: Briefcase,
    title: "Consultoria Estratégica",
    items: [
      "Análise de oportunidades",
      "Gestão empresarial eficiente",
      "Redução de carga tributária",
      "Estratégias fiscais inteligentes",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] leading-tight">
            Soluções completas para{" "}
            <span className="text-gradient-gold">sua empresa.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-warm text-lg">
            Da abertura à auditoria, oferecemos um ecossistema integrado de
            serviços contábeis, fiscais e estratégicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-xl border border-gold-subtle bg-navy-light p-6 hover:border-gold/25 transition-all duration-500"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-500">
                    <service.icon
                      size={18}
                      className="text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-warm"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/40 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
