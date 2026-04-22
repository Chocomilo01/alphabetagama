import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CONTACT } from "@/lib/contact";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — E&R Global Resources Ltd | Lagos & Port Harcourt Offices" },
      { name: "description", content: "Get in touch with E&R Global Resources. Lagos and Port Harcourt offices. Call, email or chat on WhatsApp for Oil & Gas upstream services." },
      { property: "og:title", content: "Contact E&R Global Resources" },
      { property: "og:description", content: "Ready to discuss your Oil & Gas upstream needs? Reach out to our team of experts today." },
    ],
  }),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const wa = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;
  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.emails[1]}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New enquiry from ${fd.get("name")} — E&R Global Resources website`,
          _template: "table",
          _captcha: "false",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      // Fallback to mailto so the message still gets through
      const subject = encodeURIComponent(`Enquiry from ${fd.get("name")}`);
      const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nCompany: ${fd.get("company")}\n\nMessage:\n${fd.get("message")}`);
      window.location.href = `mailto:${CONTACT.emails[1]}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <PageShell>
      <section className="relative bg-gradient-hero text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-drift" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky/15 blur-3xl animate-drift" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-gold"/>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">Get in Touch</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">Let's Talk <span className="text-gold-shimmer">Upstream</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">Ready to discuss your Oil & Gas upstream needs? Reach out to our team of experts today.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact cards */}
          <div className="lg:col-span-2 space-y-5">
            <SectionHeader eyebrow="Reach Us" title="Direct lines" center={false} />

            {CONTACT.phones.map((p, i) => (
              <motion.div key={p.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }} className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-gold/50 hover:shadow-soft transition-all">
                <a href={`tel:${p.number}`} className="h-12 w-12 rounded-xl bg-gradient-gold/20 flex items-center justify-center group-hover:bg-gradient-gold group-hover:animate-soft-bounce shrink-0">
                  <Phone className="h-5 w-5 text-navy-deep"/>
                </a>
                <a href={`tel:${p.number}`} className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.label}</div>
                  <div className="font-serif font-bold text-navy-deep">{p.display}</div>
                </a>
                {p.whatsapp && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="p-2 rounded-full bg-[oklch(0.62_0.18_145)] text-white hover:scale-110 transition-transform shrink-0">
                    <MessageCircle className="h-4 w-4"/>
                  </a>
                )}
              </motion.div>
            ))}

            {CONTACT.emails.map((e, i) => (
              <motion.a key={e} href={`mailto:${e}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i*0.08 }} className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-gold/50 hover:shadow-soft transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold/20 flex items-center justify-center group-hover:bg-gradient-gold group-hover:animate-soft-bounce">
                  <Mail className="h-5 w-5 text-navy-deep"/>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-serif font-bold text-navy-deep break-all">{e}</div>
                </div>
              </motion.a>
            ))}

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-navy-deep"/>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Website</div>
                <div className="font-serif font-bold text-navy-deep">{CONTACT.website}</div>
              </div>
            </motion.div>

            <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-[oklch(0.62_0.18_145)] text-white font-semibold shadow-soft hover:shadow-elegant hover:scale-[1.02] transition-all animate-soft-bounce">
              <MessageCircle className="h-5 w-5"/> Chat on WhatsApp Now
            </a>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="relative bg-gradient-navy-gold rounded-3xl p-8 md:p-10 text-white shadow-elegant overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative">
                <h3 className="font-serif text-3xl font-bold mb-2">Send us a message</h3>
                <p className="text-white/75 text-sm mb-7">We respond within one business day.</p>
                <form onSubmit={handle} className="grid sm:grid-cols-2 gap-4">
                  {[
                    { n: "name", l: "Full name", t: "text", req: true },
                    { n: "email", l: "Email", t: "email", req: true },
                    { n: "phone", l: "Phone", t: "tel" },
                    { n: "company", l: "Company" },
                  ].map(f => (
                    <label key={f.n} className="block">
                      <span className="text-xs uppercase tracking-wider text-gold-soft">{f.l}{f.req && " *"}</span>
                      <input name={f.n} type={f.t} required={f.req} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 placeholder-white/40 transition-all"/>
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="text-xs uppercase tracking-wider text-gold-soft">Message *</span>
                    <textarea name="message" rows={5} required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 placeholder-white/40 transition-all resize-none"/>
                  </label>
                  <button type="submit" disabled={status === "sending"} className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-bold shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-70">
                    {status === "sending" && "Sending..."}
                    {status === "sent" && (<><CheckCircle2 className="h-4 w-4"/> Message sent! We'll be in touch.</>)}
                    {status === "error" && "Opening your email app..."}
                    {status === "idle" && (<>Send Message <Send className="h-4 w-4"/></>)}
                  </button>
                  {status === "sent" && (
                    <p className="sm:col-span-2 text-sm text-gold-soft text-center">Your message was delivered to {CONTACT.emails[1]}.</p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Locations" title="Our Offices" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { city: "Lagos", addr: CONTACT.offices.lagos },
              { city: "Port Harcourt", addr: CONTACT.offices.portHarcourt },
            ].map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-border hover:border-gold/50 hover:shadow-elegant transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-navy-gold flex items-center justify-center group-hover:animate-soft-bounce shrink-0">
                      <MapPin className="h-7 w-7 text-white"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-gold-deep">Office</div>
                      <h4 className="font-serif text-2xl font-bold text-navy-deep">{o.city}</h4>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{o.addr}</p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(o.addr)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="text-sm text-navy font-semibold mt-3 inline-flex items-center gap-1 group-hover:text-gold-deep"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative h-72 w-full border-t border-border overflow-hidden">
                  <iframe
                    title={`Map of ${o.city} office`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(o.addr)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
