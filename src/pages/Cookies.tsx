import PageHero from "../components/PageHero";
import { COMPANY } from "../config/company";

export default function Cookies() {
  return (
    <>
      <PageHero
        accent="Legal"
        title="Política de Cookies"
        subtitle="Información sobre el uso de cookies en este sitio web."
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="font-display text-xl font-bold text-brand-dark mt-2 mb-3">1. ¿Qué son las cookies?</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (computadora, celular, tablet) al visitarlos. Permiten que el sitio recuerde información sobre la visita —como el idioma preferido y otras opciones— para facilitar la experiencia en futuras visitas.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Las cookies no contienen información personal identificable por sí mismas ni son programas o virus. Son utilizadas de manera estándar por la gran mayoría de los sitios web del mundo.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">2. Tipos de cookies que podemos utilizar</h2>

          <h3 className="font-sans font-bold text-brand-dark mt-6 mb-2">2.1 Cookies técnicas o esenciales</h3>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Son estrictamente necesarias para el funcionamiento del Sitio. Permiten al usuario navegar por el sitio web y usar sus funciones básicas, como acceder a áreas seguras o mantener la sesión activa. Sin estas cookies, el Sitio no puede funcionar correctamente. No requieren consentimiento del usuario.
          </p>

          <h3 className="font-sans font-bold text-brand-dark mt-6 mb-2">2.2 Cookies analíticas</h3>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Permiten cuantificar el número de visitantes y analizar estadísticamente cómo los usuarios utilizan el Sitio. Esta información se utiliza para mejorar la experiencia de navegación. Herramientas como <strong>Google Analytics</strong> pueden ser utilizadas en el futuro con este propósito. Los datos obtenidos son anonimizados o pseudonimizados.
          </p>

          <h3 className="font-sans font-bold text-brand-dark mt-6 mb-2">2.3 Cookies publicitarias o de terceros</h3>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Son cookies instaladas por plataformas externas, como <strong>Meta Pixel</strong> (Facebook/Instagram), para rastrear el comportamiento del usuario en el Sitio y mostrar publicidad personalizada en dichas plataformas. Estas cookies solo se activarán si el usuario otorga su consentimiento o si se integran dichas herramientas en el Sitio.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">3. Estado actual de las cookies</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Actualmente, este Sitio utiliza únicamente cookies técnicas esenciales para su funcionamiento. No se han activado aún cookies analíticas ni publicitarias. Esta política será actualizada cuando se incorporen dichas funcionalidades.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">4. Cómo gestionar o deshabilitar las cookies</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies instaladas en su dispositivo. A continuación encontrará los enlaces de ayuda de los navegadores más comunes:
          </p>
          <ul className="list-disc list-inside text-brand-gray-mid space-y-1 mb-4 text-sm">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-ar/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/es-ar/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Microsoft Edge</a></li>
          </ul>
          <p className="text-brand-gray-mid leading-relaxed mb-4 text-sm">
            Tenga en cuenta que deshabilitar las cookies técnicas puede afectar el funcionamiento correcto del Sitio.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">5. Cookies de terceros</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            En caso de que se utilicen servicios de terceros que instalen sus propias cookies (como Google, Meta, etc.), dichos terceros actúan bajo sus propias políticas de privacidad y cookies, que son independientes de la política de {COMPANY.razonSocial}.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">6. Actualizaciones de esta política</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} puede actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies utilizadas o en la legislación aplicable. Le recomendamos revisarla con regularidad.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">7. Contacto</h2>
          <p className="text-brand-gray-mid leading-relaxed">
            Si tiene alguna pregunta sobre el uso de cookies en este Sitio, puede comunicarse con nosotros:<br />
            <strong>{COMPANY.razonSocial}</strong> · CUIT {COMPANY.cuit}<br />
            Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
