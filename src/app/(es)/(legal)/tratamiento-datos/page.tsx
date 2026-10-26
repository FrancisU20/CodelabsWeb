import { buildLegalMetadata } from "@/i18n/page-metadata";
import { LEGAL_PATHS } from "@/i18n/routing";

export const metadata = buildLegalMetadata(
  "Política de tratamiento de datos personales",
  "Cómo CodeLabs trata los datos de clientes, prospectos y proveedores según la LOPDP.",
  LEGAL_PATHS.dataProcessing,
);

export default function TratamientoDatosPage() {
  return (
    <div className="text-fg">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Política de tratamiento de datos
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Política de tratamiento de datos personales
          </h1>
          <p className="max-w-3xl text-base text-muted">
            Esta política describe, en cumplimiento de la Ley Orgánica de
            Protección de Datos Personales del Ecuador (LOPDP), cómo CodeLabs
            trata los datos personales de clientes, prospectos, proveedores y
            usuarios del Sitio. Complementa nuestra Política de Privacidad y
            forma parte de nuestros Términos y Condiciones.
          </p>
          <p className="text-sm text-dim">Última actualización: 29 de junio de 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">1. Responsable del tratamiento</h2>
            <p className="text-sm text-muted">
              CodeLabs, operado por ULLOA TERAN FRANCISCO MATEO (identificación
              1003368725), actúa como responsable del tratamiento de los datos
              personales descritos en esta política. Para ejercer derechos o
              realizar consultas, escríbenos a{" "}
              <a className="font-semibold text-fg underline" href="mailto:info@codelabsecuador.com">
                info@codelabsecuador.com
              </a>
              .
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">2. Finalidades del tratamiento</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Atender solicitudes de información, reuniones y propuestas comerciales.</li>
              <li>Negociar, formalizar y ejecutar contratos de desarrollo y arquitectura de software.</li>
              <li>Gestionar facturación, cobranza, soporte postventa y continuidad operativa.</li>
              <li>Monitorear la seguridad, el rendimiento y la calidad de nuestros servicios y del Sitio.</li>
              <li>Cumplir obligaciones legales, tributarias y regulatorias aplicables en Ecuador.</li>
              <li>Prevenir fraude y proteger nuestros sistemas frente a usos indebidos.</li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">3. Categorías de datos tratados</h2>
            <p className="text-sm text-muted">
              Tratamos datos de identificación y contacto (nombre, correo,
              teléfono), información profesional y empresarial (cargo, empresa,
              necesidades del proyecto), datos técnicos mínimos necesarios para la
              seguridad del Sitio (registros de acceso, métricas de rendimiento) y
              la documentación contractual y de facturación propia de la relación
              comercial. No solicitamos categorías especiales de datos personales
              (datos sensibles) salvo que un proyecto específico lo requiera de
              forma excepcional y bajo acuerdos y medidas de protección reforzadas.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">4. Base legal y legitimación</h2>
            <p className="text-sm text-muted">
              El tratamiento se legitima, según el caso, en: el consentimiento del
              titular; la necesidad del tratamiento para la ejecución de un
              contrato o de medidas precontractuales solicitadas por el titular; el
              cumplimiento de obligaciones legales que correspondan a CodeLabs; y
              el interés legítimo de CodeLabs en responder solicitudes, mantener la
              seguridad de sus sistemas y mejorar sus servicios, siempre que dicho
              interés no afecte de forma desproporcionada los derechos del titular.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">5. Conservación de los datos</h2>
            <p className="text-sm text-muted">
              Conservamos los datos personales durante la vigencia de la relación
              contractual y, posteriormente, durante los plazos exigidos por la
              normativa tributaria, contable, laboral o de otra índole aplicable en
              Ecuador, o mientras sea necesario para la defensa frente a reclamos.
              Vencidos dichos plazos, los datos se eliminan de forma segura o se
              anonimizan.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">6. Encargados del tratamiento y terceros</h2>
            <p className="text-sm text-muted">
              Podemos compartir datos personales con proveedores que actúan como
              encargados del tratamiento por cuenta de CodeLabs (por ejemplo,
              proveedores de infraestructura en la nube, correo electrónico,
              herramientas de gestión de proyectos o soporte), quienes están
              obligados contractualmente a tratar los datos conforme a nuestras
              instrucciones, a guardar confidencialidad y a aplicar medidas de
              seguridad adecuadas. No vendemos ni cedemos datos personales a
              terceros para fines comerciales propios de dichos terceros.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">7. Transferencias internacionales</h2>
            <p className="text-sm text-muted">
              Cuando un encargado del tratamiento se encuentre fuera de Ecuador,
              aplicamos las salvaguardas previstas en la LOPDP para transferencias
              internacionales de datos personales, tales como cláusulas
              contractuales, certificaciones de seguridad reconocidas o la
              verificación de que el país de destino cuenta con un nivel adecuado
              de protección, según corresponda.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">8. Derechos de los titulares</h2>
            <p className="text-sm text-muted">
              Puedes ejercer en cualquier momento tus derechos de acceso,
              rectificación, actualización, eliminación, oposición y portabilidad
              de tus datos personales, así como revocar el consentimiento otorgado,
              cuando aplique. Para ello, escríbenos a{" "}
              <a className="font-semibold text-fg underline" href="mailto:info@codelabsecuador.com">
                info@codelabsecuador.com
              </a>{" "}
              indicando claramente tu solicitud. Atenderemos tu requerimiento dentro
              de los plazos previstos por la normativa aplicable y, de no quedar
              satisfecho con la respuesta, puedes acudir ante la autoridad de
              protección de datos personales competente en Ecuador.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">9. Seguridad de la información</h2>
            <p className="text-sm text-muted">
              Implementamos medidas técnicas y organizativas razonables —cifrado en
              tránsito, control de accesos bajo el principio de mínimo privilegio,
              segmentación de información sensible y monitoreo— para prevenir
              accesos no autorizados, pérdida, alteración o divulgación indebida de
              los datos personales que tratamos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">10. Notificación de incidentes</h2>
            <p className="text-sm text-muted">
              En caso de que se produzca una vulneración de seguridad que afecte
              datos personales y que represente un riesgo para los derechos de los
              titulares, CodeLabs notificará el incidente a los titulares y, cuando
              corresponda, a la autoridad de protección de datos personales
              competente, conforme a los plazos y condiciones establecidos en la
              LOPDP.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-fg">11. Actualizaciones de esta política</h2>
            <p className="text-sm text-muted">
              Podremos actualizar esta política para reflejar cambios legales,
              regulatorios o en nuestras prácticas de tratamiento de datos. La
              versión vigente estará siempre disponible en este Sitio, junto con su
              fecha de última actualización.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
