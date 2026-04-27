import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import { SERVICES, type Service, type ServiceSection } from "@/lib/services";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/services_/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-gradient-hero text-white pt-20 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.cover} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gold-soft mb-6">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>

          <h1 className="text-5xl font-bold">{service.title}</h1>
          <p className="mt-4 text-white/80">{service.short}</p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {service.sections.map((sec: ServiceSection) => (
            <motion.div
              key={sec.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* LEFT */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold text-navy-deep">{sec.heading}</h2>
                <div className="gold-divider mt-3 w-12" />
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">
                {sec.subText && (
                  <p className="italic text-sm text-muted-foreground mb-2">
                    {sec.subText}
                  </p>
                )}

                <p className="text-muted-foreground">{sec.body}</p>

                {/* IMAGES */}
                {sec.image && (
                  <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sec.image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        className="w-full h-40 object-cover rounded-xl border"
                      />
                    ))}
                  </div>
                )}

                {/* BULLETS */}
                {sec.bullets && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {sec.bullets.map((b, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-secondary/50 rounded-xl">
                        <CheckCircle2 className="text-gold" />
                        <div>
                          <div className="font-semibold">{b.t}</div>
                          <div className="text-xs text-muted-foreground">{b.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {service.gallery.length > 0 && (
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.gallery.map((img, i) => (
              <motion.div key={i} className="overflow-hidden rounded-xl border">
                <img
                  src={img}
                  className="w-full h-56 object-cover hover:scale-105 transition"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SPEC SHEET — CLEAN VERSION (NO TABLES) */}
      {service.specSheet && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl border shadow-lg overflow-hidden">

            {/* HEADER */}
            <div className="bg-navy-deep text-white flex justify-between items-center p-6 border-b-4 border-gold">
              <div className="flex items-center gap-4">
                <img
                  src={service.specSheet.brandLogo}
                  className="h-16 w-16 rounded-full bg-white p-1"
                />
                <div>
                  <div className="text-xs text-gold-soft uppercase">Sole Representative</div>
                  <div className="font-bold">Wildcat Oil Tools</div>
                </div>
              </div>

              {service.specSheet.productLogo && (
                <img src={service.specSheet.productLogo} className="h-12" />
              )}
            </div>

            {/* TITLE */}
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold text-navy-deep">
                {service.specSheet.title}
              </h2>
            </div>

            {/* ✅ ONLY DIAGRAM */}
            {service.specSheet.diagram && (
              <div className="p-10 flex justify-center">
                <img
                  src={service.specSheet.diagram}
                  className="max-w-2xl w-full object-contain"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* CONTACT */}
<section className="py-20 px-6 text-center bg-gradient-hero text-white">
  <h2 className="text-3xl font-bold">
    Talk to us about {service.title}
  </h2>

  <div className="mt-6 flex justify-center gap-4">
    <a
      href={`tel:${CONTACT.phones[0].number}`}
      className="bg-gold px-6 py-3 rounded-full text-navy-deep font-bold"
    >
      <Phone className="inline mr-2" />
      {CONTACT.phones[0].display}
    </a>

    <a
      href={`mailto:${CONTACT.emails[0]}`}
      className="border px-6 py-3 rounded-full"
    >
      <Mail className="inline mr-2" />
      {CONTACT.emails[0]}
    </a>
  </div>

  <Link
    to="/services/$slug"
    params={{ slug: next.slug }}
    className="block mt-8 text-gold"
  >
    Next: {next.title} <ArrowRight className="inline" />
  </Link>
</section>

        
    </PageShell>
  );
}