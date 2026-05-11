import PageHero from "../components/PageHero";
import { Truck, BarChart2, Package, Handshake, ClipboardList, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Truck size={32} className="text-brand-red" />,
    title: "Distribución y Logística",
    desc: "Gestionamos la distribución de productos alimentarios con una cadena logística eficiente, puntual y segura. Contamos con vehículos equipados y rutas planificadas para garantizar la integridad de cada entrega.",
  },
  {
    icon: <Package size={32} className="text-brand-red" />,
    title: "Comercialización de Productos",
    desc: "Ofrecemos un catálogo amplio de productos alimentarios de primera calidad, seleccionados de proveedores confiables. Trabajamos con marcas líderes y productos regionales de alto valor.",
  },
  {
    icon: <BarChart2 size={32} className="text-brand-red" />,
    title: "Gestión Comercial",
    desc: "Asesoramos a nuestros clientes en la selección de productos, volúmenes y condiciones comerciales para maximizar su rentabilidad y optimizar su gestión de stock.",
  },
  {
    icon: <Handshake size={32} className="text-brand-red" />,
    title: "Relaciones con Proveedores",
    desc: "Actuamos como nexo entre productores y canales de distribución, facilitando acuerdos comerciales que beneficien a ambas partes con condiciones claras y transparentes.",
  },
  {
    icon: <ClipboardList size={32} className="text-brand-red" />,
    title: "Gestión de Pedidos",
    desc: "Proceso de pedidos simple y ágil, con seguimiento en tiempo real y comunicación directa con nuestro equipo para resolver cualquier consulta durante el proceso.",
  },
  {
    icon: <HeadphonesIcon size={32} className="text-brand-red" />,
    title: "Soporte Postventa",
    desc: "Acompañamos a nuestros clientes después de cada operación. Ante cualquier inconveniente o reclamo, respondemos con rapidez y buscamos soluciones concretas.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        accent="Lo que hacemos"
        title="Servicios y Soluciones"
        subtitle="Ofrecemos un servicio integral en la cadena alimentaria, desde la selección y comercialización hasta la entrega final en el punto de venta."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.title} className="card group hover:border-l-4 hover:border-brand-red transition-all duration-200">
              <div className="mb-5">{s.icon}</div>
              <h3 className="font-sans font-bold text-brand-dark text-lg mb-3">{s.title}</h3>
              <p className="text-brand-gray-mid text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">¿Necesitás una solución personalizada?</h2>
          <p className="text-red-100 text-lg mb-8">
            Contanos tu situación y armamos juntos una propuesta adaptada a tu empresa.
          </p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-brand-red px-8 py-4 rounded-md font-semibold hover:bg-red-50 transition-colors">
            Hablar con un asesor <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
