# ADR 0001: Estructura de cuentas AWS con Organizations

- Estado: aceptada
- Fecha: 2026-11-09

## Contexto

Todos los recursos de CodeLabs viven en una sola cuenta AWS, que además es la cuenta de administración de una organización sin miembros (`FeatureSet: ALL`, sin políticas de control de servicio habilitadas, sin IAM Identity Center). Los dominios `codelabsecuador.com` y `emiliabeautybar.com` están registrados en esa cuenta.

Con varios clientes, la cuenta debe ser la frontera de aislamiento: cuotas, costos, permisos, datos y entrega al cliente si deja de trabajar con CodeLabs.

Las políticas de control de servicio (SCP) no se aplican a la cuenta de administración, y esa cuenta puede crear, mover y acceder a todas las demás. No debe alojar cargas expuestas a internet.

La función de cuenta de administración no se puede transferir. Una cuenta de administración nueva exigiría registrar otro medio de pago, y el titular no dispone de los datos de la tarjeta vigente. Las cuentas creadas desde la organización no requieren medio de pago propio.

## Decisión

1. **La cuenta actual queda como cuenta de administración** y se reserva para facturación consolidada, Organizations, IAM Identity Center, presupuestos, registro de dominios y WorkMail.
2. **Las cargas de trabajo salen de ella.** El sitio de CodeLabs, su certificado, su zona DNS, el rol de despliegue de GitHub y la recepción de leads se mudan a una cuenta miembro nueva, `codelabs-prod`.
3. **Una cuenta por cliente:** `emilia-prod` como piloto, con la zona DNS de su dominio.
4. **WorkMail permanece en la cuenta de administración.** Recibe los correos dueños de todas las cuentas, y quien lee ese buzón puede recuperar el acceso a cualquiera de ellas. Además, WorkMail no se puede trasladar entre cuentas.
5. **Los registros de dominio permanecen en la cuenta de administración,** con bloqueo de transferencia. Se transfieren a la cuenta de un cliente solo si ese cliente deja de trabajar con CodeLabs.
6. **Unidades organizativas:** `Workloads/CodeLabs` y `Workloads/Clients`.
7. **SCP base para `Workloads`:** impedir salir de la organización, impedir el uso del usuario raíz, limitar las regiones a `us-east-1` e impedir que las cuentas de carga de trabajo modifiquen los registros de correo (MX, SPF, DKIM y DMARC).
8. **Acceso con IAM Identity Center,** con MFA y sesiones de 4 horas; sin usuarios IAM con claves de larga duración.
9. **Presupuesto de la organización** con alerta a `billing@codelabsecuador.com`.

## Migración

1. Habilitar IAM Identity Center, crear el usuario, el grupo y el conjunto de permisos.
2. Crear `codelabs-prod` y `emilia-prod`, moverlas a sus unidades y asignar el acceso.
3. Crear la zona de `codelabsecuador.com` en `codelabs-prod` con todos los registros y apuntar el dominio a ella. Esperar la propagación, hasta 48 horas.
4. Ejecutar `cdk bootstrap` en `codelabs-prod`.
5. En una ventana nocturna, de unos 15 minutos sin servicio: quitar los dominios de la distribución anterior, desplegar el stack en `codelabs-prod` y publicar el contenido.
6. Actualizar en GitHub el ID de cuenta del pipeline, las variables del repositorio y el rol de despliegue.
7. Crear la zona de `emiliabeautybar.com` en `emilia-prod` y apuntar el dominio a ella.
8. Aplicar las SCP y el presupuesto.
9. Eliminar lo reemplazado (ver limpieza).

## Limpieza

| Recurso anterior en la cuenta de administración | Momento |
|---|---|
| Stack `CodelabsWebProdStack`, distribución, certificado, proveedor OIDC y rol de GitHub | Tras verificar el sitio en `codelabs-prod` |
| Bucket del sitio con todas sus versiones (el stack lo conserva al eliminarse) | Junto con el stack |
| Zona DNS anterior de `codelabsecuador.com` | Tras la propagación |
| Stack `CDKToolkit` y su bucket, si no se usan | Al final |
| Parámetro `/codelabs-web/brevo-api-key` | Al desplegar `codelabs-lead-intake`, con la rotación de la clave |
| Usuario IAM `fulloa_admin` y su clave, perfil local `codelabs` | Tras verificar el acceso con Identity Center |

## Hallazgo relacionado

`emiliabeautybar.com` apunta a servidores de nombres de Route 53, pero no existe una zona alojada para ese dominio en la cuenta. Una delegación así queda expuesta a que un tercero cree una zona en servidores coincidentes y controle el DNS del dominio. Se corrige en el paso 7 de la migración.

## Alternativas consideradas

| Alternativa | Motivo del rechazo |
|---|---|
| Cuenta de administración nueva y vacía | Exige un medio de pago nuevo, del que no se dispone. |
| Cuenta actual como administración y además con el sitio | Las SCP no la alcanzan; comprometer el sitio expondría las cuentas de todos los clientes. |
| Todos los clientes en una sola cuenta | Cuotas compartidas (concurrencia de Lambda limitada a 10), costos mezclados y sin frontera de entrega al cliente. |
| AWS Control Tower | Agrega servicios con costo que no se justifican con este tamaño. |

## Consecuencias

- Unos 15 minutos sin servicio en el sitio, una sola vez.
- La capa gratuita de AWS se comparte entre todas las cuentas de la organización.
- Cada cuenta nueva empieza con cuotas bajas; se solicitan aumentos cuando hagan falta.
- Cambiar registros de correo requiere operar desde la cuenta de administración.
