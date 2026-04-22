import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { ChevronDown, Menu, X, Phone, Mail, Drill, Anchor, FlaskConical, Cog, Briefcase, Layers } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const services = [
  { slug: "drill-bits", icon: Drill, title: "Drill Bits & Optimization", desc: "PDC, Roller Cone, Bi-Center, Reamers" },
  { slug: "fishing-whipstock", icon: Anchor, title: "Fishing & Whipstock", desc: "XpressDrill wellbore departure" },
  { slug: "cementing-casing", icon: Layers, title: "Cementing & Casing", desc: "Centralizers, float equipment, plugs" },
  { slug: "chemicals", icon: FlaskConical, title: "Drilling Chemicals", desc: "Eco-friendly emulsifiers & inhibitors" },
  { slug: "octg-machine-shop", icon: Cog, title: "OCTG & Machine Shop", desc: "API threading, flanges, repairs" },
  { slug: "consultancy-supply", icon: Briefcase, title: "Consultancy & Supply", desc: "Directional drilling, mud engineering" },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", mega: true },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeT = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (k: string) => { if (closeT.current) window.clearTimeout(closeT.current); setOpen(k); };
  const leave = () => { closeT.current = window.setTimeout(() => setOpen(null), 150); };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy-deep text-white/90 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${CONTACT.phones[0].number}`} className="flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3 w-3 text-gold"/>{CONTACT.phones[0].display}</a>
            <a href={`mailto:${CONTACT.emails[0]}`} className="flex items-center gap-1.5 hover:text-gold transition-colors"><Mail className="h-3 w-3 text-gold"/>{CONTACT.emails[0]}</a>
          </div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-gold-soft">Totally Committed to Excellent Delivery</div>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl shadow-soft" : "bg-white/60 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/"><Logo /></Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => l.mega ? (
              <div key={l.to} onMouseEnter={() => enter(l.to)} onMouseLeave={leave} className="relative">
                <Link to={l.to} className="flex items-center gap-1 px-4 py-2.5 rounded-full text-sm font-medium text-foreground/80 hover:text-navy hover:bg-secondary transition-all">
                  {l.label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open===l.to?"rotate-180":""}`} />
                </Link>
                <AnimatePresence>
                  {open === l.to && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px]"
                    >
                      <div className="relative rounded-2xl bg-white shadow-elegant border border-border/50 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
                        <div className="p-6 grid grid-cols-2 gap-2">
                          {services.map((s, i) => (
                            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group flex gap-3 p-3 rounded-xl hover:bg-secondary transition-all" style={{ animation: `fade-up 0.3s ${i*0.04}s both` }}>
                              <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-gold/20 flex items-center justify-center group-hover:bg-gradient-gold group-hover:scale-110 transition-all">
                                <s.icon className="h-5 w-5 text-navy group-hover:text-navy-deep" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm text-foreground group-hover:text-navy">{s.title}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-6 py-4 bg-gradient-hero text-white flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-gold">Sole Representative</div>
                            <div className="text-sm font-semibold">XpressDrill™ Wellbore Departure System in Nigeria</div>
                          </div>
                          <Link to="/services" className="text-xs font-semibold px-4 py-2 rounded-full bg-gold text-navy-deep hover:scale-105 transition-transform">View all</Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.to} to={l.to} className="px-4 py-2.5 rounded-full text-sm font-medium text-foreground/80 hover:text-navy hover:bg-secondary transition-all" activeProps={{ className: "px-4 py-2.5 rounded-full text-sm font-semibold text-navy bg-secondary" }} activeOptions={{ exact: true }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-navy-gold text-white shadow-soft hover:shadow-gold hover:scale-105 transition-all">
              Get a Quote
            </Link>
            <button onClick={() => setMobile(!mobile)} className="lg:hidden p-2 rounded-lg hover:bg-secondary">
              {mobile ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobile && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-white border-t border-border overflow-hidden">
              <div className="px-6 py-4 space-y-1">
                {links.map(l => (
                  <Link key={l.to} to={l.to} onClick={() => setMobile(false)} className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary">{l.label}</Link>
                ))}
                <Link to="/contact" onClick={() => setMobile(false)} className="block text-center mt-3 px-5 py-3 rounded-full bg-gradient-navy-gold text-white font-semibold">Get a Quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
