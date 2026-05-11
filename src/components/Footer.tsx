import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { COMPANY } from "../config/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Columna 1 — Identidad */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-2xl font-bold text-brand-red leading-none">VA</span>
            <span className="font-script text-2xl text-white leading-none">food</span>
            <span className="text-xs text-gray-400 font-sans uppercase tracking-widest border-l border-gray-600 pl-2 ml-1">S.R.L.</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Distribución y comercialización de productos alimentarios de calidad en todo el territorio argentino.
          </p>
          <p className="text-gray-500 text-xs">
            <span className="text-gray-300 font-medium">Razón social:</span> {COMPANY.razonSocial}
          </p>
          <p className="text-gray-500 text-xs mt-1">
            <span className="text-gray-300 font-medium">CUIT:</span> {COMPANY.cuit}
          </p>
        </div>

        {/* Columna 2 — Contacto */}
        <div>
          <h3 className="text-white font-sans font-semibold text-sm uppercase tracking-widest mb-5">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="text-brand-red mt-0.5 shrink-0" />
              <span>{COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-brand-red shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-brand-red shrink-0" />
              <a href={`tel:${COMPANY.telefono}`} className="hover:text-white transition-colors">
                {COMPANY.telefono}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={15} className="text-brand-red mt-0.5 shrink-0" />
              <span>{COMPANY.horario}</span>
            </li>
          </ul>
        </div>

        {/* Columna 3 — Legal */}
        <div>
          <h3 className="text-white font-sans font-semibold text-sm uppercase tracking-widest mb-5">Legal & Políticas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-y-condiciones" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link to="/politica-de-cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </Link>
            </li>
            <li className="pt-2">
              <Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} {COMPANY.razonSocial} — CUIT {COMPANY.cuit} — Todos los derechos reservados.</p>
          <p>{COMPANY.direccion} · {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}</p>
        </div>
      </div>
    </footer>
  );
}
