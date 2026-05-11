import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-brand-red font-display text-8xl font-bold opacity-10 mb-4 select-none">404</div>
      <h1 className="font-display text-3xl font-bold text-brand-dark mb-3">Página no encontrada</h1>
      <p className="text-brand-gray-mid mb-8 max-w-md">
        La página que estás buscando no existe o fue movida. Podés volver al inicio o navegar por el menú.
      </p>
      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
