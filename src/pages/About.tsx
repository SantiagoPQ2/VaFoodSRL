import { COMPANY } from "../config/company";
import PageHero from "../components/PageHero";
import { CheckCircle2 } from "lucide-react";

const VALUES = [
  { title: "Integridad", desc: "Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales." },
  { title: "Compromiso", desc: "Asumimos la responsabilidad con nuestros clientes y cumplimos lo que prometemos." },
  { title: "Calidad", desc: "Seleccionamos productos y proveedores que cumplen estándares alimentarios exigentes." },
  { title: "Cercanía", desc: "Construimos vínculos duraderos con nuestros clientes basados en la confianza mutua." },
];

export default function About() {
  return (
    <>
      <PageHero
        accent="Quiénes somos"
        title="Una empresa argentina con historia"
        subtitle={`${COMPANY.razonSocial} lleva más de 15 años conectando a productores y comercios en el mercado alimentario de Buenos Aires y el interior del país.`}
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-brand-red font-sans font-semibold text-xs uppercase tracking-widest mb-3">Nuestra historia</span>
            <h2 className="section-title mb-4">Más de una década de presencia en el mercado</h2>
            <p className="text-brand-gray-mid leading-relaxed mb-4">
              Desde nuestra fundación, {COMPANY.razonSocial} ha crecido de la mano de la industria alimentaria argentina. Comenzamos como una pequeña distribuidora regional y hoy somos un referente en Buenos Aires y el resto del país.
            </p>
            <p className="text-brand-gray-mid leading-relaxed mb-4">
              Operamos desde nuestras instalaciones en Ciudad Autónoma de Buenos Aires, lo que nos permite mantener una logística eficiente y un servicio personalizado para cada uno de nuestros clientes.
            </p>
            <p className="text-brand-gray-mid leading-relaxed">
              Nuestro equipo humano es el pilar de esta empresa. Profesionales con vocación de servicio y conocimiento profundo del sector alimentario trabajan diariamente para satisfacer las necesidades de cada cliente.
            </p>
          </div>

          <div className="bg-brand-gray-light rounded-2xl p-8">
            <h3 className="font-sans font-bold text-brand-dark text-lg mb-6">Datos legales</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: "Razón social", value: COMPANY.razonSocial },
                { label: "Nombre comercial", value: COMPANY.nombreComercial },
                { label: "CUIT", value: COMPANY.cuit },
                { label: "Domicilio legal", value: `${COMPANY.direccion}` },
                { label: "Ciudad", value: `${COMPANY.ciudad}, ${COMPANY.provincia}` },
                { label: "País", value: COMPANY.pais },
              ].map((item) => (
                <div key={item.label} className="flex gap-2">
                  <dt className="text-brand-gray-mid font-medium w-36 shrink-0">{item.label}:</dt>
                  <dd className="text-brand-dark font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 bg-brand-gray-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card">
                <CheckCircle2 size={24} className="text-brand-red mb-3" />
                <h3 className="font-sans font-bold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
