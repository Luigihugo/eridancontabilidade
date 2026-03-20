import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">
                  E
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-wide text-foreground">
                  Eridan
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">
                  Contabilidade
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-warm leading-relaxed max-w-xs">
              O escritório de contabilidade mais antigo em funcionamento no Rio
              de Janeiro. Tradição desde 1947, inovação para o futuro.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#servicos", label: "Serviços" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-warm hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:eridan@eridan.com.br"
                className="flex items-center gap-3 text-sm text-slate-warm hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold/60" />
                eridan@eridan.com.br
              </a>
              <a
                href="tel:+552125241515"
                className="flex items-center gap-3 text-sm text-slate-warm hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold/60" />
                (21) 2524-1515
              </a>
              <a
                href="https://wa.me/5521990110475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-warm hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold/60" />
                (21) 99011-0475
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-warm">
                <MapPin size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <span>
                  Av. Franklin Roosevelt, 39
                  <br />
                  Grupo 401 a 407 — Centro
                  <br />
                  Rio de Janeiro, RJ
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold-subtle/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-warm/60">
              &copy; {new Date().getFullYear()} Eridan Contabilidade. Todos os
              direitos reservados.
            </p>
            <p className="text-xs text-slate-warm/40">
              Desde 1947 — O escritório de contabilidade mais antigo do Rio de
              Janeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
