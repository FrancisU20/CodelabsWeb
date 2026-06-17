export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#f7f9ff] via-white to-[#f2f6ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Términos y condiciones
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Condiciones de uso de CodeLabs
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            Estos términos regulan el uso del sitio codelabsecuador.com y la relación con CodeLabs.
            Al navegar o contactarnos aceptas estas condiciones.
          </p>
          <p className="text-sm text-black/60">Última actualización: junio 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">1. Identidad y contacto</h2>
            <p className="text-sm text-black/80">
              CodeLabs opera en codelabsecuador.com. El sitio es administrado por ULLOA TERAN
              FRANCISCO MATEO, persona natural con identificación 1003368725. Para consultas,
              soporte o ejercicio de derechos escribe a{" "}
              <a className="font-semibold text-black underline" href="mailto:support@codelabsecuador.com">
                support@codelabsecuador.com
              </a>{" "}
              o al teléfono 0998630405.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">2. Uso permitido</h2>
            <p className="text-sm text-black/80">
              El sitio se ofrece para informar sobre nuestros servicios y canalizar solicitudes.
              No se permite su uso para actividades ilegales, envío de spam o vulnerar seguridad.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">3. Contenido y propiedad</h2>
            <p className="text-sm text-black/80">
              El contenido publicado es propiedad de CodeLabs o de sus titulares autorizados. No se
              permite su reproducción sin permiso. Las marcas de terceros pertenecen a sus dueños.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">4. Responsabilidad</h2>
            <p className="text-sm text-black/80">
              El sitio se ofrece “como está”. Tomamos medidas razonables de seguridad y
              disponibilidad, pero no garantizamos ausencia total de errores o interrupciones. No
              somos responsables por daños derivados del uso del sitio, en la medida permitida por
              la ley.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">5. Enlaces a terceros</h2>
            <p className="text-sm text-black/80">
              Pueden existir enlaces a sitios de terceros. No controlamos su contenido ni políticas;
              revisa sus términos y privacidad antes de usarlos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">6. Privacidad y datos</h2>
            <p className="text-sm text-black/80">
              El tratamiento de datos se rige por nuestra{" "}
              <a className="font-semibold text-black underline" href="/privacidad">
                Política de Privacidad
              </a>{" "}
              y la{" "}
              <a className="font-semibold text-black underline" href="/tratamiento-datos">
                Política de Tratamiento de Datos
              </a>
              .
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">7. Cambios a los términos</h2>
            <p className="text-sm text-black/80">
              Podemos actualizar estos términos para reflejar cambios legales o de servicio. La
              versión vigente estará disponible en este sitio.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">8. Ley aplicable</h2>
            <p className="text-sm text-black/80">
              Estos términos se interpretan conforme a la normativa aplicable en Ecuador o la
              jurisdicción donde se suscriba el contrato, si aplica.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
