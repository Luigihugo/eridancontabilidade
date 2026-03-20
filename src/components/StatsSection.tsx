"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

const stats = [
  { value: 77, suffix: " anos", label: "de tradição ininterrupta" },
  { value: 1947, suffix: "", label: "ano de fundação", isYear: true },
  { value: 500, suffix: "+", label: "empresas assessoradas" },
  { value: 100, suffix: "%", label: "digital e conectado" },
];

export default function StatsSection() {
  return (
    <section id="numeros" className="relative py-20 bg-navy-light border-y border-gold-subtle">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(46,134,171,0.5) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  index,
  isYear,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  isYear?: boolean;
}) {
  const { count, ref } = useCountUp(value, isYear ? 2500 : 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="text-center space-y-2"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
        {isYear ? count : count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <p className="text-sm text-slate-warm">{label}</p>
    </motion.div>
  );
}
