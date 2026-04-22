import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-drift" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky/10 blur-3xl animate-drift" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="bg-white/95 inline-block rounded-xl p-3 shadow-gold"><Logo /></div>
          <p className="mt-5 text-sm text-white/75 leading-relaxed">Totally committed to excellent delivery. Your one-stop center for specialized Oil & Gas upstream services.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["ISO 9001:2015","RC: 858975","NI099999","100% Nigerian"].map(b => (
              <span key={b} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-gold-soft border border-gold/30">{b}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {[["/","Home"],["/about","About"],["/services","Services"],["/partners","Partners"],["/contact","Contact"]].map(([h,l])=>(
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {CONTACT.phones.map(p=>(
              <li key={p.number}><a href={`tel:${p.number}`} className="hover:text-gold transition-colors flex items-start gap-2"><Phone className="h-3.5 w-3.5 mt-1 text-gold"/><span>{p.display}</span></a></li>
            ))}
            {CONTACT.emails.map(e=>(
              <li key={e}><a href={`mailto:${e}`} className="hover:text-gold transition-colors flex items-start gap-2 break-all"><Mail className="h-3.5 w-3.5 mt-1 text-gold"/>{e}</a></li>
            ))}
            <li className="flex items-start gap-2"><Globe className="h-3.5 w-3.5 mt-1 text-gold"/>{CONTACT.website}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Offices</h4>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0"/><div><div className="font-semibold text-white">Lagos</div>{CONTACT.offices.lagos}</div></div>
            <div className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0"/><div><div className="font-semibold text-white">Port Harcourt</div>{CONTACT.offices.portHarcourt}</div></div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} E&R Global Resources Ltd. All rights reserved. — Totally Committed to Excellent Delivery.
      </div>
    </footer>
  );
}
