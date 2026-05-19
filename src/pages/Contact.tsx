import { useState, FormEvent } from "react";
import PageHero from "../components/PageHero";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { COMPANY } from "../config/company";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const INITIAL: FormState = { nombre: "", email: "", telefono: "", mensaje: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulated submit — integrate with Netlify Forms, Formspree, or backend
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(INITIAL);
    }, 800);
  }

  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=Hola%2C%20me%20comunico%20desde%20el%20sitio%20web%20de%20Pidibro.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n.`;

  return (
    <>
      <PageHero
        accent="Estamos aquí"
        title="Contacto"
        subtitle="Completá el formulario o escribinos directamente por WhatsApp. Te respondemos a la brevedad."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">

          {/* Info */}
          <div>
            <h2 className="font-sans font-bold text-brand-dark text-xl mb-6">Información de contacto</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="bg-red-50 rounded-lg p-2"><MapPin size={20} className="text-brand-red" /></span>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Dirección</p>
                  <p className="text-brand-gray-mid text-sm">{COMPANY.direccion}</p>
                  <p className="text-brand-gray-mid text-sm">{COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-red-50 rounded-lg p-2"><Mail size={20} className="text-brand-red" /></span>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-brand-red hover:underline text-sm">{COMPANY.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-red-50 rounded-lg p-2"><Phone size={20} className="text-brand-red" /></span>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Teléfono</p>
                  <a href={`tel:${COMPANY.telefono}`} className="text-brand-gray-mid text-sm hover:text-brand-red">{COMPANY.telefono}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-red-50 rounded-lg p-2"><Clock size={20} className="text-brand-red" /></span>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Horario de atención</p>
                  <p className="text-brand-gray-mid text-sm">{COMPANY.horario}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-brand-dark rounded-xl text-white">
              <p className="text-sm text-gray-300 mb-1 font-medium">CUIT</p>
              <p className="font-display text-xl font-bold">{COMPANY.cuit}</p>
              <p className="text-xs text-gray-400 mt-1">{COMPANY.razonSocial}</p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors"
            >
              <MessageCircle size={18} />
              Escribinos por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="card">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-2">¡Mensaje enviado!</h3>
                <p className="text-brand-gray-mid text-sm">
                  Gracias por contactarnos. Un miembro de nuestro equipo se comunicará con usted a la brevedad en el horario de atención.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-brand-red text-sm font-semibold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-sans font-bold text-brand-dark text-lg mb-2">Envienos un mensaje</h2>

                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-brand-dark mb-1">Nombre completo *</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Juan García"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="juan@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-brand-dark mb-1">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="+54 351 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-brand-dark mb-1">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                    placeholder="Contenos en qué podemos ayudarle..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
                <p className="text-xs text-brand-gray-mid">
                  Sus datos serán tratados conforme a nuestra{" "}
                  <a href="/politica-de-privacidad" className="text-brand-red hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
