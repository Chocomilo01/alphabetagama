import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Eye, Target, Heart, Award, Handshake, ShieldCheck, TrendingUp, Star } from "lucide-react";
import vessel from "@/assets/vessel.png";
import offshore from "@/assets/offshore-platform.png";
import ceoImage from "@/assets/ceo.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — E&R Global Resources Ltd | Indigenous Oil & Gas Service Company" },
      { name: "description", content: "Established 2009. ISO 9001:2015 certified. Vision, mission, values & leadership of E&R Global Resources." },
      { property: "og:title", content: "About E&R Global Resources Ltd" },
      { property: "og:description", content: "An indigenous Oil & Gas service company committed to excellent delivery, partnership-driven solutions, and Nigerian content development." },
    ],
  }),
});

function About() {
  const values = [
    { icon: Handshake, t: "Strategic Partnerships", d: "Building lasting alliances with global leaders." },
    { icon: ShieldCheck, t: "Integrity", d: "Unwavering ethical standards in every engagement." },
    { icon: Heart, t: "Customer Satisfaction", d: "Client-centric approach to every project." },
    { icon: Target, t: "Accountability", d: "Taking ownership of results, every time." },
    { icon: Star, t: "Excellence", d: "Best-in-class delivery — no compromises." },
    { icon: TrendingUp, t: "Knowledge Transfer", d: "Training local talent with international expertise." },
  ];
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={offshore} alt="" className="w-full h-full object-cover"/></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-drift" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">About Us</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold max-w-4xl leading-tight">A One-Stop Center for <span className="text-gold-shimmer">Specialized</span> Upstream Services</h1>
            <p className="mt-6 max-w-2xl text-white/80 text-lg">Established 2009 · 100% Nigerian Content · ISO 9001:2015 Certified · RC: 858975</p>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Company Profile" title="Dynamic. Indigenous. Committed." center={false} />
            <p className="text-muted-foreground text-lg leading-relaxed">
              E&R Global Resources Ltd is a dynamic Oil and Gas Service company with interest in the Upstream Sector. The focus of its set up was borne out of the need to form international partnerships to be a one-stop center for the offering of many specialized services in the sector.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are a one-stop center for Drill Bits sales & PDC Bits repair, Fishing Operations and Whipstock Services, Cementing & Liner Hanger Services, OCTG/Pipes, Drilling & Production Chemicals, Consultancy Services & Materials Supply.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We identify, attract local talents to under-study the expatriates and retain them for knowledge transfer in the Oil and Gas Sector.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-30 blur-2xl" />
            <img src={vessel} alt="Specialized vessel" className="relative rounded-3xl shadow-elegant border-2 border-gold/20" />
          </motion.div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Our Foundation" title="Vision, Mission & Core Values" />
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Eye, t: "Our Vision", d: "To be the best indigenous service provider in the upstream sector for downhole tools, drilling/production product line and consulting services." },
              { icon: Target, t: "Our Mission", d: "Leveraging strategic alliance, acting as a one-stop centre in delivering best-in-class solutions to our teeming customers." },
            ].map((b, i) => (
              <motion.div key={b.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="relative bg-white rounded-3xl p-8 shadow-soft border border-border hover:border-gold/40 hover:shadow-elegant transition-all overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gradient-gold/20 transition-all" />
                <div className="relative h-14 w-14 rounded-2xl bg-gradient-navy-gold flex items-center justify-center mb-5 group-hover:animate-soft-bounce">
                  <b.icon className="h-7 w-7 text-white"/>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-deep mb-3">{b.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }} className="bg-white rounded-2xl p-5 border border-border hover:border-gold/50 hover:-translate-y-1 transition-all group">
                <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gradient-gold group-hover:scale-110 transition-all">
                  <v.icon className="h-5 w-5 text-navy"/>
                </div>
                <div className="font-serif font-bold text-sm text-navy-deep">{v.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{v.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Leadership" title="Guided by Vision & Experience" />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-navy-gold rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-elegant">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative">
               <div className="relative">
  <img
    src={ceoImage}
    alt="Iyke Osuji"
    className="h-32 w-32 object-cover rounded-3xl shadow-lg border-2 border-white animate-soft-bounce"
  />
</div>
                <Award className="absolute -bottom-2 -right-2 h-10 w-10 p-2 bg-white text-navy rounded-full"/>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold-soft mb-2">Chairman & CEO</div>
                <h3 className="font-serif text-3xl font-bold mb-3">Iyke Osuji</h3>
                <p className="text-white/80 leading-relaxed">A seasoned architect and successful businessman with many years of cognate experience in business management — specializing in growing start-ups to multi-million dollar companies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
