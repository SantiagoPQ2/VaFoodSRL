import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, Users, Award } from "lucide-react";
import { COMPANY } from "../config/company";

const STATS = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+500", label: "Clientes activos" },
  { value: "24hs", label: "Tiempo de respuesta" },
  { value: "100%", label: "Compromiso" },
];

const HIGHLIGHTS = [
  {
    icon: <Truck size={28} className="text-brand-red" />,
    title: "Distribución Eficiente",
    desc: "Logística confiable para llevar los mejores productos alimentarios a tiempo y en perfectas condiciones a todo el territorio.",
  },
  {
    icon: <ShieldCheck size={28} className="text-brand-red" />,
    title: "Calidad Garantizada",
    desc: "Trabajamos con proveedores seleccionados y cumplimos estrictos controles de calidad en cada etapa de la cadena comercial.",
  },
  {
    icon: <Users size={28} className="text-brand-red" />,
    title: "Atención Personalizada",
    desc: "Nuestro equipo acompaña a cada cliente con asesoramiento comercial adaptado a sus necesidades reales.",
  },
  {
    icon: <Award size={28} className="text-brand-red" />,
    title: "Trayectoria Comprobada",
    desc: "Más de una década en el mercado alimentario argentino nos respalda con una reputación construida sobre resultados concretos.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C0392B 0%, transparent 60%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <span className="inline-block text-brand-red font-sans font-semibold text-xs uppercase tracking-widest mb-4">
              Buenos Aires · Argentina
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Soluciones <span className="text-brand-red">alimentarias</span> que mueven tu negocio
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              {COMPANY.razonSocial} es una empresa cordobesa dedicada a la distribución y comercialización de productos alimentarios de calidad. Nuestros años de presencia en el mercado nos avalan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link to="/servicios" className="btn-primary">
                Nuestros Servicios <ArrowRight size={16} />
              </Link>
              <Link to="/contacto" className="btn-outline border-gray-400 text-gray-300 hover:bg-gray-700 hover:border-gray-700 hover:text-white">
                Contactar ahora
              </Link>
            </div>
          </div>

          {/* Logo display */}
          <div className="flex-shrink-0 animate-fade-in-up animate-delay-200">
            <div className="bg-white rounded-2xl shadow-2xl px-12 py-10 flex flex-col items-center gap-1">
              <div className="flex items-end">
                <span className="font-display text-6xl font-bold text-brand-red leading-none">VA</span>
                <span className="font-script text-6xl text-brand-dark leading-none">food</span>
              </div>
              <span className="text-brand-gray-mid text-xs font-sans uppercase tracking-widest">S.R.L.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-red">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-white">{s.value}</p>
              <p className="text-red-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 bg-brand-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="inline-block text-brand-red font-sans font-semibold text-xs uppercase tracking-widest mb-3">Por qué elegirnos</span>
            <h2 className="section-title">Comprometidos con tu negocio</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              En Pidibro trabajamos cada día para ser el socio comercial confiable que su empresa necesita.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.title} className={`card animate-fade-in-up animate-delay-${(i + 1) * 100}`}>
                <div className="mb-4">{h.icon}</div>
                <h3 className="font-sans font-bold text-brand-dark text-base mb-2">{h.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">¿Listo para trabajar juntos?</h2>
          <p className="section-subtitle mb-8">
            Contactenos hoy y un representante de {COMPANY.nombreComercial} se comunicará con usted a la brevedad para conocer sus necesidades.
          </p>
          <Link to="/contacto" className="btn-primary text-base px-8 py-4">
            Iniciar conversación <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
