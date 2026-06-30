export default function DesuscripcionPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#F5F6FD] via-white to-[#EEF0FB] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Desuscripción
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Cómo darte de baja de nuestras comunicaciones
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            En ejercicio de tu derecho de oposición previsto en la Ley Orgánica de
            Protección de Datos Personales del Ecuador (LOPDP), puedes solicitar en
            cualquier momento dejar de recibir comunicaciones comerciales o de
            marketing de CodeLabs. Procesaremos tu solicitud en el menor tiempo
            posible.
          </p>
          <p className="text-sm text-black/60">Última actualización: 29 de junio de 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-sm text-black/80">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Alcance de esta solicitud</h2>
            <p className="mt-2">
              La desuscripción aplica a comunicaciones comerciales y de marketing
              (por ejemplo, novedades, contenido promocional o invitaciones). No
              aplica a comunicaciones transaccionales o contractuales
              indispensables para la prestación del servicio (como confirmaciones,
              avisos de facturación o notificaciones relacionadas con un proyecto
              en curso), las cuales seguirán enviándose mientras exista una
              relación contractual vigente, conforme a lo necesario para su
              correcta ejecución.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Opciones para darte de baja</h2>
            <ul className="mt-3 space-y-2">
              <li>
                • Enviar un correo a{" "}
                <a className="font-semibold text-black underline" href="mailto:info@codelabsecuador.com?subject=Desuscripci%C3%B3n">
                  info@codelabsecuador.com
                </a>{" "}
                indicando el correo electrónico que deseas remover de nuestras
                listas de comunicación.
              </li>
              <li>
                • Contactarnos por WhatsApp al{" "}
                <a className="font-semibold text-black underline" href="https://wa.me/593984522092?text=Solicito%20desuscripci%C3%B3n">
                  +593 984522092
                </a>{" "}
                solicitando expresamente la desuscripción.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Tiempo de procesamiento</h2>
            <p className="mt-2">
              Atendemos las solicitudes de desuscripción dentro de los plazos
              establecidos por la normativa aplicable y, en la práctica, en el
              menor tiempo posible. Si recibes una comunicación adicional mientras
              tu solicitud está en proceso, puedes ignorarla; tu baja quedará
              efectiva una vez completado el proceso.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Privacidad y seguridad</h2>
            <p className="mt-2">
              Tu solicitud de desuscripción y los datos asociados a ella se
              gestionan conforme a nuestra{" "}
              <a className="font-semibold text-black underline" href="/privacidad">
                Política de Privacidad
              </a>{" "}
              y nuestra{" "}
              <a className="font-semibold text-black underline" href="/tratamiento-datos">
                Política de Tratamiento de Datos
              </a>
              . Solo utilizaremos la información que nos proporciones para
              procesar tu baja y, cuando aplique, podremos conservar un registro
              mínimo de la solicitud para acreditar su cumplimiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
