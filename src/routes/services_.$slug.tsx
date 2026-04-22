import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Phone, Mail } from "lucide-react";
import { SERVICES, type Service, type ServiceSection } from "@/lib/services";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/services_/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — E&R Global Resources` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:image", content: loaderData.service.cover },
        ]
      : [{ title: "Service — E&R Global Resources" }],
  }),
  notFoundComponent: () => (
    <PageShell>
      <div className="max-w-3xl mx-auto py-32 px-6 text-center">
        <h1 className="font-serif text-4xl font-bold text-navy-deep">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-navy font-semibold">
          <ArrowLeft className="h-4 w-4"/> Back to all services
        </Link>
      </div>
    </PageShell>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-white pt-20 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.cover} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        </div>
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gold/15 blur-3xl animate-drift" />

        <div className="relative max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold transition-colors mb-6">
            <ArrowLeft className="h-4 w-4"/> All Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-gold"/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{service.productLine}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-3xl">{service.title}</h1>
              <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">{service.short}</p>
            </div>
            <div className="hidden lg:flex h-20 w-20 rounded-3xl bg-gradient-gold items-center justify-center shadow-gold animate-float">
              <service.icon className="h-10 w-10 text-navy-deep"/>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {service.sections.map((sec: ServiceSection) => (
            <motion.div
              key={sec.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-12 gap-8 items-start`}
            >
              <div className="lg:col-span-4">
                <h2 className="font-serif text-3xl font-bold text-navy-deep leading-tight">{sec.heading}</h2>
                <div className="gold-divider mt-4 w-16" />
              </div>
              <div className="lg:col-span-8">
                <p className="text-muted-foreground leading-relaxed text-lg">{sec.body}</p>
                {sec.bullets && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {sec.bullets.map((b: { t: string; d: string }, bi: number) => (
                      <motion.div
                        key={b.t}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.05 }}
                        className="flex gap-3 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors border border-border"
                      >
                        <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5"/>
                        <div>
                          <div className="font-semibold text-sm text-navy-deep">{b.t}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{b.d}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spec Sheet (e.g. Wildcat XpressDrill) */}
      {service.specSheet && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border-2 border-gold/30 shadow-elegant bg-white">
            {/* Brand header */}
            <div className="bg-navy-deep px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-6 border-b-4 border-gold">
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white p-1 shadow-gold ring-4 ring-gold/40 shrink-0">
                  <img src={service.specSheet.brandLogo} alt="Wildcat Oil Tools" className="h-full w-full object-contain rounded-full" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-soft">Sole Representative · Nigeria</div>
                  <div className="font-serif text-xl md:text-2xl font-bold text-white mt-1">Wildcat Oil Tools</div>
                  <div className="text-xs text-white/70 mt-0.5">Specification Sheet</div>
                </div>
              </div>
              {service.specSheet.productLogo && (
                <img src={service.specSheet.productLogo} alt="XpressDrill" className="h-12 md:h-16 object-contain" />
              )}
            </div>

            {/* Title + intro */}
            <div className="px-6 md:px-10 pt-10 pb-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep">{service.specSheet.title}</h2>
              <div className="gold-divider mt-4 w-20" />
              <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-4xl">
                {service.specSheet.intro}
              </p>
            </div>

            {/* Tables + diagram */}
            <div className="px-6 md:px-10 pb-10 grid lg:grid-cols-[1fr_auto] gap-10 items-start">
              <div className="grid sm:grid-cols-2 gap-5">
                {service.specSheet.tables.map((tbl) => (
                  <div key={tbl.title} className="rounded-2xl border border-border bg-secondary/40 overflow-hidden">
                    <div className="bg-gradient-navy-gold px-4 py-2.5">
                      <div className="text-sm font-bold text-white">{tbl.title}</div>
                    </div>
                    <table className="w-full text-sm">
                      <tbody>
                        {tbl.rows.map((r, ri) => (
                          <tr key={r.k} className={ri % 2 ? "bg-white" : "bg-transparent"}>
                            <td className="px-4 py-2 text-muted-foreground">{r.k}</td>
                            <td className="px-4 py-2 text-right font-semibold text-navy-deep">{r.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              {service.specSheet.diagram && (
                <div className="mx-auto lg:mx-0 w-full max-w-[280px] rounded-2xl bg-gradient-to-b from-secondary to-white p-4 border border-border">
                  <img src={service.specSheet.diagram} alt={service.specSheet.diagramAlt ?? ""} className="w-full h-auto object-contain" />
                  <div className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tool Assembly</div>
                </div>
              )}
            </div>

            {service.specSheet.footer && (
              <div className="bg-navy-deep px-6 md:px-10 py-4 text-xs md:text-sm text-white/80 text-center border-t-2 border-gold/40">
                {service.specSheet.footer}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
            {service.gallery.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-elegant border-2 border-gold/20 bg-white aspect-[4/3]"
              >
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl animate-drift" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-soft mb-3">Contact Us</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Talk to us about <span className="text-gold-shimmer">{service.title.split(" ").slice(0,3).join(" ")}</span></h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${CONTACT.phones[0].number}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-navy-deep font-bold shadow-gold hover:scale-105 transition-transform">
              <Phone className="h-4 w-4"/> {CONTACT.phones[0].display}
            </a>
            <a href={`mailto:${CONTACT.emails[0]}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 font-semibold transition-colors">
              <Mail className="h-4 w-4"/> {CONTACT.emails[0]}
            </a>
          </div>
          <Link to="/services/$slug" params={{ slug: next.slug }} className="mt-10 inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold">
            Next: {next.title} <ArrowRight className="h-4 w-4"/>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
