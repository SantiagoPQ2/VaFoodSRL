import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <div className="flex items-center">
            <span className="font-display text-2xl font-bold text-brand-red leading-none tracking-tight">Pidibro</span>
          </div>
          <span className="hidden sm:block text-xs text-brand-gray-mid font-sans font-normal uppercase tracking-widest border-l border-gray-200 pl-3">
            S.R.L.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-sans font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-brand-red bg-red-50"
                    : "text-brand-gray hover:text-brand-red hover:bg-red-50"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="btn-primary ml-4">
            Contactar
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-brand-gray hover:text-brand-red"
          onClick={() => setOpen(!open)}
          aria-label="Menú de navegación"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-brand-red bg-red-50" : "text-brand-gray"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  );
}
