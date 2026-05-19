import PageHero from "../components/PageHero";
import { COMPANY } from "../config/company";

export default function Terms() {
  return (
    <>
      <PageHero
        accent="Legal"
        title="Términos y Condiciones"
        subtitle="Por favor, lea atentamente estos términos antes de utilizar nuestro sitio web."
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <div className="bg-brand-gray-light rounded-xl p-6 mb-10 text-sm text-brand-gray-mid">
            <strong className="text-brand-dark">Empresa responsable:</strong><br />
            {COMPANY.razonSocial} · CUIT {COMPANY.cuit}<br />
            {COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}<br />
            Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a>
          </div>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">1. Aceptación de los términos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            El acceso y uso del sitio web {COMPANY.dominio} (en adelante, "el Sitio") implica la aceptación plena y sin reservas de los presentes Términos y Condiciones por parte del usuario. Si no está de acuerdo con alguno de estos términos, le rogamos que abandone el Sitio.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">2. Naturaleza del Sitio</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Este Sitio tiene carácter informativo y comercial. Su finalidad es dar a conocer la empresa {COMPANY.razonSocial}, sus productos, servicios y canales de contacto. La información publicada no constituye oferta comercial vinculante salvo que se indique expresamente.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">3. Responsabilidad sobre la información</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} procura mantener la información del Sitio actualizada y veraz. No obstante, no garantiza la exactitud, integridad o actualización permanente de los contenidos. La Empresa no será responsable por errores u omisiones en la información publicada ni por daños derivados del uso de dicha información.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            El Sitio puede contener enlaces a sitios web de terceros. {COMPANY.razonSocial} no controla ni se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios externos.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">4. Propiedad intelectual</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Todos los contenidos del Sitio —incluyendo textos, imágenes, logotipos, diseño gráfico, código fuente y estructura— son propiedad de {COMPANY.razonSocial} o de sus respectivos titulares, y están protegidos por las leyes de propiedad intelectual vigentes en la República Argentina.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Queda expresamente prohibida la reproducción, distribución, transformación o comunicación pública de cualquier contenido del Sitio sin autorización previa y por escrito de {COMPANY.razonSocial}.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">5. Uso aceptable</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            El usuario se compromete a utilizar el Sitio de manera lícita, sin vulnerar derechos de terceros ni infringir la legislación aplicable. Queda prohibido el uso del Sitio con fines fraudulentos, ilegales o que puedan causar daño a {COMPANY.razonSocial} o a terceros.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">6. Canales de contacto</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Los usuarios pueden contactarse con {COMPANY.razonSocial} a través de los siguientes canales oficiales:
          </p>
          <ul className="list-disc list-inside text-brand-gray-mid space-y-1 mb-4 text-sm">
            <li>Email corporativo: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a></li>
            <li>Teléfono: {COMPANY.telefono}</li>
            <li>WhatsApp: {COMPANY.whatsappDisplay}</li>
            <li>Formulario de contacto en el Sitio web.</li>
            <li>Domicilio: {COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">7. Limitación de responsabilidad</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} no será responsable, en ningún caso, por daños directos, indirectos, incidentales o consecuentes que pudieran derivarse del acceso, uso o imposibilidad de uso del Sitio, incluyendo interrupciones del servicio por causas técnicas, ataques informáticos o situaciones de fuerza mayor.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">8. Modificaciones</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio implica la aceptación de los términos vigentes.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">9. Jurisdicción y legislación aplicable</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Los presentes Términos y Condiciones se rigen por las leyes de la <strong>República Argentina</strong>. Ante cualquier conflicto o controversia derivada del uso del Sitio, las partes se someten expresamente a la jurisdicción de los <strong>Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires</strong>, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">10. Contacto legal</h2>
          <p className="text-brand-gray-mid leading-relaxed">
            <strong>{COMPANY.razonSocial}</strong><br />
            CUIT: {COMPANY.cuit}<br />
            {COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}<br />
            Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
