import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Globe2, Award, Users, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import refinery from "@/assets/refinery-aerial.jpeg";
import whipstock from "@/assets/whipstock.png";

export const Route = createFileRoute("/partners")({
  component: Partners,
  head: () => ({
    meta: [
      { title: "Technical Partnerships — XpressDrill™ & Wildcat Oil Tools | E&R Global Resources" },
      { name: "description", content: "Sole Nigerian representative of Wildcat Oil Tools' XpressDrill™ Wellbore Departure System. Strategic alliances bringing world-class technology to Africa." },
      { property: "og:title", content: "Strategic Alliances — E&R Global Resources" },
      { property: "og:description", content: "We partner with reputable international companies for knowledge transfer and world-class delivery in the Oil & Gas upstream sector." },
    ],
  }),
});

function Partners() {
  const features = [
    { t: "True Single-Trip", d: "RIH, orient, set & mill in one run" },
    { t: "Multi-Slip Anchor", d: "Enhanced wall contact, secure setting" },
    { t: "Ball-Drop Activation", d: "Proven cement system reliability" },
    { t: "Adjustable Shear Set", d: "Field-configurable release" },
    { t: "2.5° Engineered Slide", d: "Reduced dogleg severity" },
    { t: "Hydraulic Bypass Valve", d: "Unlimited pump cycles" },
  ];
  return (
    <PageShell>
      <section className="relative bg-gradient-hero text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15"><img src={refinery} alt="" className="w-full h-full object-cover"/></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 to-navy-deep" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-drift" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-gold"/>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">Strategic Alliances</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">Technical <span className="text-gold-shimmer">Partnerships</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">We partner with reputable international companies for knowledge transfer in the Oil & Gas upstream sector.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Featured Partner" title="Wildcat Oil Tools — XpressDrill™ System" subtitle="E&R Global Resources Ltd is the Sole Representative of XpressDrill™ Wellbore Departure System in Nigeria, developed by Wildcat Oil Tools, USA." />
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-6 bg-gradient-gold rounded-3xl opacity-30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-gradient-navy-gold p-10 border-2 border-gold/30">
                <img src={whipstock} alt="XpressDrill whipstock" className="w-full h-72 object-contain animate-float"/>
                <div className="mt-6 text-white text-center">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-soft">Sole Representative · Nigeria</div>
                  <div className="font-serif text-2xl font-bold mt-2">XpressDrill™</div>
                  <div className="text-sm text-white/75">Wellbore Departure System</div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.07 }} className="bg-white rounded-2xl p-5 border border-border hover:border-gold/50 hover:shadow-soft transition-all group">
                  <CheckCircle2 className="h-6 w-6 text-gold mb-3 group-hover:animate-soft-bounce"/>
                  <div className="font-serif font-bold text-navy-deep">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Credentials" title="Built on Trust & Expertise" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: "Established 2012", d: "Premier provider in Nigeria" },
              { icon: Users, t: "500+ Years", d: "Combined industry experience" },
              { icon: Globe2, t: "Sub-Sahara Africa", d: "Continental operations reach" },
              { icon: Wrench, t: "In-Country Engineers", d: "International training & expertise" },
            ].map((c, i) => (
              <motion.div key={c.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }} className="bg-white rounded-2xl p-7 text-center border border-border hover:border-gold/40 hover:-translate-y-2 transition-all group">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-navy-gold flex items-center justify-center mb-4 group-hover:animate-soft-bounce">
                  <c.icon className="h-7 w-7 text-white"/>
                </div>
                <div className="font-serif text-xl font-bold text-navy-deep">{c.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
