import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Sparkles, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Products & Services Overview — E&R Global Resources" },
      { name: "description", content: "Your comprehensive one-stop center for Oil & Gas upstream services: Drill Bits, Fishing & Whipstock, Cementing, Chemicals, OCTG and Consultancy." },
      { property: "og:title", content: "Products & Services — E&R Global Resources" },
      { property: "og:description", content: "Comprehensive Oil & Gas upstream services delivered with international partnerships." },
    ],
  }),
});

function Services() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-drift" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky/15 blur-3xl animate-drift" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-gold"/>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">What We Offer</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Products & Services <span className="text-gold-shimmer">Overview</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/85 text-lg">
            Your Comprehensive One-Stop Center for Oil & Gas Upstream Services.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="block relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant border border-border hover:border-gold/40 transition-all duration-500 h-[440px]"
              >
                <img src={s.cover} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/10" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-navy-deep text-[10px] font-bold uppercase tracking-wider shadow-gold">{s.tag}</div>
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center group-hover:animate-soft-bounce">
                  <s.icon className="h-6 w-6 text-navy-deep"/>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft mb-2">{s.productLine}</div>
                  <h3 className="font-serif text-2xl font-bold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/85 leading-relaxed line-clamp-3">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft group-hover:gap-3 transition-all">
                    Discover more <ArrowRight className="h-4 w-4"/>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
