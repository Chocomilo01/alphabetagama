import { CONTACT } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello E&R Global Resources, I would like to enquire about your services.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_145)] text-white pl-4 pr-5 py-3.5 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 animate-float">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
      </span>
    </a>
  );
}
