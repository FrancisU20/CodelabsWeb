export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#F5F6FD] via-white to-[#EEF0FB] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Política de privacidad
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Política de privacidad
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            En CodeLabs respetamos tu privacidad y tratamos tus datos personales
            conforme a la Ley Orgánica de Protección de Datos Personales del
            Ecuador (LOPDP) y demás normativa aplicable. Este documento explica qué
            información recolectamos, con qué finalidad, en qué basamos su
            tratamiento y cuáles son tus derechos como titular de los datos.
          </p>
          <p className="text-sm text-black/60">Última actualización: 29 de junio de 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">1. Responsable del tratamiento</h2>
            <p className="text-sm text-black/80">
              El responsable del tratamiento de tus datos personales es ULLOA TERAN
              FRANCISCO MATEO, persona natural con identificación 1003368725, quien
              opera bajo el nombre comercial CodeLabs. Puedes contactarnos para
              cualquier asunto relacionado con esta política en{" "}
              <a className="font-semibold text-black underline" href="mailto:info@codelabsecuador.com">
                info@codelabsecuador.com
              </a>
              .
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">2. Información que recolectamos</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li>Datos de identificación y contacto: nombre, correo electrónico, teléfono y empresa.</li>
              <li>
                Información del proyecto: contexto de negocio, requerimientos
                técnicos y objetivos que nos compartes para preparar una propuesta.
              </li>
              <li>
                Datos técnicos mínimos de navegación: registros básicos (logs) y
                cookies estrictamente necesarias para la seguridad y el
                funcionamiento del Sitio. No utilizamos cookies de publicidad ni de
                seguimiento de terceros.
              </li>
              <li>
                Comunicaciones: el contenido de los mensajes que nos envías por
                correo, WhatsApp o formularios de contacto.
              </li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">3. Finalidades del tratamiento</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li>Responder tus consultas y coordinar reuniones o llamadas.</li>
              <li>Preparar propuestas, cotizaciones y planes técnicos.</li>
              <li>Ejecutar y dar seguimiento a contratos de servicios vigentes.</li>
              <li>Mantener la seguridad, integridad y buen funcionamiento del Sitio.</li>
              <li>Cumplir obligaciones legales, contables y tributarias aplicables.</li>
            </ul>
            <p className="text-sm text-black/80">
              No utilizamos tus datos para fines distintos a los descritos sin
              informarte y, cuando la ley lo requiera, sin tu consentimiento previo.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">4. Base legal del tratamiento</h2>
            <p className="text-sm text-black/80">
              Tratamos tus datos personales con base en: (i) tu consentimiento,
              otorgado por ejemplo al completar un formulario de contacto; (ii) la
              ejecución de un contrato de servicios del que eres parte o sus
              tratativas precontractuales; (iii) el cumplimiento de obligaciones
              legales aplicables a CodeLabs; y (iv) nuestro interés legítimo en
              responder solicitudes y mantener la seguridad de nuestros sistemas,
              siempre que dicho interés no prevalezca sobre tus derechos
              fundamentales.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">5. Plazos de conservación</h2>
            <p className="text-sm text-black/80">
              Conservamos tus datos personales únicamente durante el tiempo
              necesario para cumplir las finalidades descritas, mientras dure la
              relación contractual (si la hay) y, posteriormente, durante los
              plazos exigidos por la normativa tributaria, contable o de otra
              índole aplicable en Ecuador, o mientras sea necesario para atender
              eventuales reclamos o requerimientos de autoridad competente.
              Transcurridos esos plazos, los datos se eliminan o se anonimizan de
              forma segura.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">6. Seguridad de la información</h2>
            <p className="text-sm text-black/80">
              Aplicamos medidas técnicas y organizativas razonables para proteger
              tus datos personales, incluyendo cifrado en tránsito (TLS), control
              de accesos bajo el principio de mínimo privilegio y revisión
              periódica de nuestras prácticas de seguridad. Ningún sistema es
              completamente infalible; si llegáramos a detectar una afectación a
              tus datos personales que represente un riesgo para tus derechos,
              te lo notificaremos conforme a lo exigido por la LOPDP.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">7. Compartición con terceros</h2>
            <p className="text-sm text-black/80">
              No vendemos ni comercializamos tus datos personales. Podemos
              compartir información con proveedores que nos prestan servicios
              necesarios para operar (por ejemplo, hosting en la nube, correo
              electrónico o herramientas de gestión de proyectos), quienes actúan
              como encargados del tratamiento bajo acuerdos de confidencialidad y
              protección de datos, y únicamente en la medida necesaria para prestar
              dichos servicios. También podemos divulgar información cuando una
              autoridad competente lo requiera conforme a la ley.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">8. Transferencias internacionales de datos</h2>
            <p className="text-sm text-black/80">
              Algunos de nuestros proveedores tecnológicos (por ejemplo, servicios
              de infraestructura en la nube) pueden almacenar o procesar datos
              fuera de Ecuador. En esos casos, exigimos que dichos proveedores
              mantengan niveles de protección adecuados, mediante cláusulas
              contractuales, certificaciones de seguridad u otros mecanismos
              reconocidos, conforme a lo previsto en la LOPDP para transferencias
              internacionales de datos personales.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">9. Tus derechos como titular</h2>
            <p className="text-sm text-black/80">
              Conforme a la LOPDP, puedes ejercer en cualquier momento tus derechos
              de acceso, rectificación, actualización, eliminación, oposición,
              portabilidad y a no ser objeto de decisiones automatizadas que
              produzcan efectos jurídicos sobre ti, así como revocar el
              consentimiento que hayas otorgado. Para ejercerlos, escríbenos a{" "}
              <a className="font-semibold text-black underline" href="mailto:info@codelabsecuador.com">
                info@codelabsecuador.com
              </a>{" "}
              indicando tu solicitud y los datos que permitan identificarte.
              Atenderemos tu solicitud dentro de los plazos establecidos por la
              normativa aplicable. Si consideras que tus derechos no han sido
              atendidos adecuadamente, puedes acudir ante la autoridad de
              protección de datos personales competente en Ecuador.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">10. Menores de edad</h2>
            <p className="text-sm text-black/80">
              Nuestros servicios están dirigidos a empresas y profesionales, no a
              menores de edad. No recolectamos intencionalmente datos personales de
              menores de edad a través del Sitio. Si tomamos conocimiento de que se
              han recolectado datos de un menor sin la autorización correspondiente
              de su representante legal, procederemos a eliminarlos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">11. Cambios a esta política</h2>
            <p className="text-sm text-black/80">
              Podemos actualizar esta política para reflejar cambios legales,
              regulatorios o en nuestras prácticas de tratamiento de datos. La
              versión vigente estará siempre disponible en esta página, junto con
              su fecha de última actualización.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">12. Contacto</h2>
            <p className="text-sm text-black/80">
              Para ejercer tus derechos o resolver dudas sobre esta política,
              contáctanos en{" "}
              <a className="font-semibold text-black underline" href="mailto:info@codelabsecuador.com">
                info@codelabsecuador.com
              </a>{" "}
              o al teléfono 0984522092. Esta política se complementa con nuestra{" "}
              <a className="font-semibold text-black underline" href="/tratamiento-datos">
                Política de Tratamiento de Datos
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
