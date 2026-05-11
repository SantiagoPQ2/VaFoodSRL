import PageHero from "../components/PageHero";
import { COMPANY } from "../config/company";

const FECHA = "1 de enero de 2024";

export default function Privacy() {
  return (
    <>
      <PageHero
        accent="Legal"
        title="Política de Privacidad"
        subtitle={`Vigente desde el ${FECHA}. Última actualización: ${FECHA}.`}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-sm prose-gray">

          <div className="bg-brand-gray-light rounded-xl p-6 mb-10 text-sm text-brand-gray-mid">
            <strong className="text-brand-dark">Responsable del tratamiento de datos:</strong><br />
            {COMPANY.razonSocial} · CUIT {COMPANY.cuit}<br />
            {COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}<br />
            Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a>
          </div>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">1. Introducción</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} (en adelante, "la Empresa", "nosotros" o "nuestro") se compromete a proteger la privacidad de los usuarios que visitan el sitio web {COMPANY.dominio} (en adelante, "el Sitio"). La presente Política de Privacidad describe qué datos personales recopilamos, cómo los usamos, con quién los compartimos y cuáles son sus derechos.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Al utilizar este Sitio, usted acepta las prácticas descritas en esta política. Si no está de acuerdo, le solicitamos que no utilice el Sitio.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">2. Datos que recopilamos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-2">Podemos recopilar los siguientes tipos de datos personales:</p>
          <ul className="list-disc list-inside text-brand-gray-mid space-y-1 mb-4 text-sm">
            <li><strong>Datos de contacto:</strong> nombre completo, dirección de email, número de teléfono.</li>
            <li><strong>Datos del mensaje:</strong> el contenido de los mensajes enviados a través del formulario de contacto.</li>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia, datos de sesión.</li>
            <li><strong>Datos de comunicación:</strong> mensajes intercambiados por email o WhatsApp.</li>
          </ul>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            No recopilamos datos sensibles como números de documentos de identidad, datos bancarios ni información médica a través de este Sitio.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">3. Finalidades del tratamiento</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-2">Los datos personales recopilados se utilizan para:</p>
          <ul className="list-disc list-inside text-brand-gray-mid space-y-1 mb-4 text-sm">
            <li>Responder consultas y solicitudes enviadas a través del formulario de contacto o por WhatsApp.</li>
            <li>Gestionar la relación comercial con clientes y potenciales clientes.</li>
            <li>Enviar información sobre nuestros productos y servicios, cuando el usuario lo haya solicitado.</li>
            <li>Mejorar el funcionamiento del Sitio y analizar el comportamiento de los usuarios (estadísticas anónimas).</li>
            <li>Cumplir con obligaciones legales y regulatorias aplicables en la República Argentina.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">4. Herramientas de medición y publicidad</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Este Sitio puede incorporar en el futuro herramientas de análisis y publicidad como <strong>Meta Pixel</strong> (Facebook/Instagram) o <strong>Google Analytics</strong>. Estas herramientas pueden recopilar datos de navegación de manera automática mediante cookies. Ante cualquier incorporación de dichas herramientas, esta Política será actualizada oportunamente.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Le informamos que, en caso de utilizarse Meta Pixel, los datos de comportamiento pueden ser utilizados por Meta Platforms Inc. para mostrar publicidad segmentada. Meta cuenta con su propia política de privacidad disponible en <a href="https://www.facebook.com/privacy/policy" className="text-brand-red" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">5. No vendemos sus datos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} <strong>no vende, alquila ni cede</strong> sus datos personales a terceros con fines comerciales. Solo compartimos datos con proveedores de servicios tecnológicos que actúan como encargados del tratamiento bajo instrucciones precisas, y con autoridades cuando exista obligación legal de hacerlo.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">6. Seguridad de los datos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Adoptamos medidas técnicas y organizativas razonables para proteger sus datos personales contra acceso no autorizado, pérdida o divulgación accidental. Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">7. Derechos del titular de los datos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-2">
            De conformidad con la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina, usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside text-brand-gray-mid space-y-1 mb-4 text-sm">
            <li>Acceder a sus datos personales que obran en nuestros registros.</li>
            <li>Rectificar datos inexactos, incompletos o desactualizados.</li>
            <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
            <li>Oponerse al tratamiento de sus datos para fines de marketing directo.</li>
          </ul>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Para ejercer cualquiera de estos derechos, puede escribirnos a <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a> indicando su nombre completo, el derecho que desea ejercer y los datos involucrados.
          </p>
          <p className="text-brand-gray-mid leading-relaxed mb-4 text-xs">
            La Dirección Nacional de Protección de Datos Personales (DNPDP) es el organismo de control en Argentina. Para más información: <a href="https://www.argentina.gob.ar/aaip/datospersonales" className="text-brand-red" target="_blank" rel="noopener noreferrer">argentina.gob.ar/aaip/datospersonales</a>.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">8. Retención de datos</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            Conservamos sus datos personales mientras sea necesario para cumplir con las finalidades descritas en esta política o conforme lo exija la legislación aplicable.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">9. Cambios en esta política</h2>
          <p className="text-brand-gray-mid leading-relaxed mb-4">
            {COMPANY.razonSocial} se reserva el derecho de modificar esta Política de Privacidad. Los cambios serán publicados en esta página con la fecha de actualización. Le recomendamos revisarla periódicamente.
          </p>

          <h2 className="font-display text-xl font-bold text-brand-dark mt-8 mb-3">10. Contacto</h2>
          <p className="text-brand-gray-mid leading-relaxed">
            Ante cualquier consulta, reclamo o ejercicio de derechos relacionados con esta política, puede comunicarse con nosotros:<br />
            <strong>{COMPANY.razonSocial}</strong><br />
            {COMPANY.direccion}, {COMPANY.ciudad}, {COMPANY.provincia}, {COMPANY.pais}<br />
            Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-red">{COMPANY.email}</a><br />
            Teléfono: {COMPANY.telefono}
          </p>
        </div>
      </section>
    </>
  );
}
