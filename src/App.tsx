import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/politica-de-privacidad" element={<Privacy />} />
        <Route path="/terminos-y-condiciones" element={<Terms />} />
        <Route path="/politica-de-cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
