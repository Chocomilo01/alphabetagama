import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Drill, Anchor, Layers, FlaskConical, Cog, Briefcase, ArrowRight, Award, ShieldCheck, Globe2, Users, Sparkles, CheckCircle2 } from "lucide-react";
import rig from "@/assets/rig.png";
import offshore from "@/assets/offshore-platform.png";
import refinery from "@/assets/refinery-aerial.jpeg";
import drillBits from "@/assets/drill-bits-gold.png";
import downhole from "@/assets/downhole-tools.png";
import centralizers from "@/assets/centralizers.png";
import chemicals from "@/assets/chemicals.jpeg";
import octg from "@/assets/octg-pipes.png";
import welding from "@/assets/welding.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "E&R Global Resources Ltd — Specialized Oil & Gas Upstream Services in Nigeria" },
      { name: "description", content: "Indigenous Oil & Gas one-stop center: Drill Bits, Fishing & Whipstock, Cementing, OCTG, Drilling Chemicals & Consultancy. ISO 9001:2015. Established 2009." },
    ],
  }),
});

const services = [
  { icon: Drill, title: "Drill Bits & Optimization", desc: "PDC, Roller Cone, Bi-Center Bits, Staged Hole Openers, vibration & shock mitigation tools.", img: drillBits, tag: "OEM Rep" },
  { icon: Anchor, title: "Fishing & Whipstock", desc: "Sole representative of Wildcat Oil Tools' XpressDrill™ Wellbore Departure System in Nigeria.", img: downhole, tag: "Sole Rep" },
  { icon: Layers, title: "Cementing & Casing", desc: "Centralizers, float equipment, bridge plugs, stage cementing tools, liner hangers, reamer shoes.", img: centralizers, tag: "Accessories" },
  { icon: FlaskConical, title: "Drilling & Production Chemicals", desc: "Environmental-friendly emulsifiers, corrosion & shale inhibitors, lubricants — without compromising quality.", img: chemicals, tag: "Eco-Friendly" },
  { icon: Cog, title: "OCTG & Machine Shop", desc: "API threading, flanges, cold cutting, PDC bit cutter replacement and re-brazing.", img: octg, tag: "Precision" },
  { icon: Briefcase, title: "Consultancy & Supply", desc: "Directional drilling, mud engineering, drilling optimization and material supply by expert crews.", img: welding, tag: "Expertise" },
];

const stats = [
  { v: "15+", l: "Years of Excellence" },
  { v: "500+", l: "Combined Industry Years" },
  { v: "100%", l: "Nigerian Content" },
  { v: "ISO", l: "9001:2015 Certified" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0">
          <img src={rig} alt="Drilling rig" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </div>
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gold/20 blur-3xl animate-drift" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-sky/15 blur-3xl animate-drift" />

        <div className="relative w-full px-6 md:px-12 lg:px-20 pt-24 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">Established 2009 · RC: 858975</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your One-Stop Center for <span className="text-gold-shimmer">Specialized</span> Oil & Gas Upstream Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Totally Committed to Excellent Delivery. An indigenous Nigerian service company forming international partnerships to deliver best-in-class upstream solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/services" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-navy-deep font-semibold shadow-gold hover:scale-105 transition-transform">
                Explore Our Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 font-semibold transition-colors">
                Talk to Our Team
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i*0.1 }} className="text-center md:text-left">
                  <div className="font-serif text-3xl md:text-4xl text-gold-shimmer font-bold">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-6 bg-gradient-gold rounded-3xl opacity-30 blur-2xl" />
              <img src={offshore} alt="Offshore platform" className="relative rounded-3xl shadow-elegant border-2 border-gold/30" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -bottom-6 -left-6 bg-white text-navy-deep rounded-2xl shadow-elegant px-5 py-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center"><ShieldCheck className="h-6 w-6 text-navy-deep"/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Quality</div>
                  <div className="font-serif font-bold">ISO 9001:2015 Certified</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={refinery} alt="Oil & Gas refinery aerial" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-wider text-gold mb-1">Sub-Sahara Africa</div>
                <div className="font-serif text-2xl font-bold">Serving Nigeria & Beyond</div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.8 }} className="absolute -top-6 -right-6 bg-gradient-navy-gold text-white rounded-2xl px-5 py-4 shadow-elegant">
              <div className="text-3xl font-serif font-bold text-gold-shimmer">2009</div>
              <div className="text-[11px] uppercase tracking-wider">Incorporated</div>
            </motion.div>
          </motion.div>

          <div>
            <SectionHeader eyebrow="About Us" title="A Dynamic Indigenous Oil & Gas Service Company" center={false} />
            <p className="text-muted-foreground leading-relaxed text-lg">
              E&R Global Resources Ltd is a dynamic Oil and Gas Service company with interest in the Upstream Sector. The focus of its set up was borne out of the need to form international partnerships to be a one-stop center for many specialized services in the sector.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We identify and attract local talents to under-study expatriates and retain them for knowledge transfer in the Oil and Gas Sector — supporting Nigerian content development at every level.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Award, t: "ISO 9001:2015", d: "Quality Certified" },
                { icon: ShieldCheck, t: "Licensed", d: "NI099999" },
                { icon: Globe2, t: "100% Nigerian", d: "Content Compliant" },
                { icon: Users, t: "RC: 858975", d: "Registered with CAC" },
              ].map((b, i) => (
                <motion.div key={b.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }} className="group p-5 rounded-2xl bg-white border border-border hover:border-gold/50 hover:shadow-soft transition-all">
                  <div className="h-10 w-10 rounded-xl bg-gradient-gold/20 flex items-center justify-center mb-3 group-hover:bg-gradient-gold group-hover:scale-110 transition-all">
                    <b.icon className="h-5 w-5 text-navy"/>
                  </div>
                  <div className="font-serif font-bold text-navy-deep">{b.t}</div>
                  <div className="text-sm text-muted-foreground">{b.d}</div>
                </motion.div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-semibold group">Learn more about us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/></Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary/40 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader eyebrow="What We Offer" title="Products & Services Overview" subtitle="Your comprehensive one-stop center for Oil & Gas upstream services." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border hover:border-gold/40 shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden bg-navy-deep">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/90 text-navy-deep text-[10px] font-bold uppercase tracking-wider">{s.tag}</div>
                  <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center group-hover:animate-soft-bounce">
                    <s.icon className="h-6 w-6 text-navy-deep"/>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep hover:gap-3 transition-all">
                    Discover more <ArrowRight className="h-3.5 w-3.5"/>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl animate-drift" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/50 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Why E&R Global</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.1]">
              Built on Partnership, <span className="text-gold-shimmer">Driven by Excellence</span>
            </h2>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              We partner with reputable international companies for knowledge transfer in the Oil & Gas upstream sector.
            </p>
            <div className="gold-divider mt-6 w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { t: "International Partnerships", d: "Strategic alliances with world-class manufacturers across Drill Bits, Cementing, and Whipstock systems." },
              { t: "Sole XpressDrill™ Rep", d: "Exclusive Nigerian representative of Wildcat Oil Tools' Wellbore Departure System." },
              { t: "Expert Field Engineers", d: "In-country team with international training — best hands for fishing, whipstock, and remedial services." },
              { t: "Pocket-Friendly Quality", d: "We deliver world-class technology at competitive pricing without compromising safety or standards." },
            ].map((item, i) => (
              <motion.div key={item.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-gold/40 transition-all group">
                <div className="absolute -top-4 left-6 h-10 w-10 rounded-xl bg-gradient-gold flex items-center justify-center text-navy-deep font-serif font-bold group-hover:animate-soft-bounce">
                  0{i+1}
                </div>
                <h4 className="font-serif text-lg font-bold mt-4 mb-2 text-gold-soft">{item.t}</h4>
                <p className="text-sm text-white/75 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-navy-gold p-12 md:p-16 text-white overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sky/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-soft mb-3">Ready to start?</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Discuss your Oil & Gas <span className="text-gold-shimmer">upstream needs</span> with our team today.</h2>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {["Same-day response","ISO certified","100% local content"].map(t=>(
                  <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold"/> {t}</div>
                ))}
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-navy-deep font-bold shadow-gold hover:scale-105 transition-transform animate-soft-bounce">
              Get in Touch <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
