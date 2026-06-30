import Image from "next/image";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const awsLogos = [
  { name: "AWS", src: "/logos/aws.png" },
  { name: "Lambda", src: "/logos/aws-lambda.png" },
  { name: "ECS", src: "/logos/aws-ecs.png" },
  { name: "EventBridge", src: "/logos/aws-eventbridge.png" },
  { name: "SQS", src: "/logos/aws-sqs.png" },
  { name: "RDS", src: "/logos/aws-rds.png" },
];

const AwsShowcase = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).awsShowcase;

  return (
    <section
      id="aws"
      aria-labelledby="aws-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-black/5 bg-gradient-to-br from-[#EEF0FB] via-white to-[#E0E4FA] px-6 py-10 shadow-xl shadow-indigo-500/10 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.eyebrow}
            </p>
            <h2
              id="aws-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {dict.title}
            </h2>
            <p className="max-w-2xl text-base text-black/70">{dict.description}</p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/70 px-4 py-3 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6D5FEF] text-sm font-semibold text-white">
                AWS
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  {dict.partnerLabel}
                </p>
                <p className="text-xs text-black/60">{dict.partnerSub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ul className="space-y-3 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-lg shadow-indigo-500/10">
            {dict.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-black/80">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-lg shadow-indigo-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.servicesLabel}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {awsLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-md shadow-indigo-500/10"
                >
                  <Image
                    src={logo.src}
                    alt={`Logo de ${logo.name}`}
                    width={140}
                    height={70}
                    className="h-12 w-auto object-contain sm:h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwsShowcase;
