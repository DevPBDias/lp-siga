import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/src/constants/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-[#f1ebe2] bg-[#2c5128] px-4 py-3 font-bebas text-base uppercase text-[#f1ebe2] shadow-[4px_4px_0_0_#4bd12d] transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chamar no WhatsApp</span>
    </a>
  );
}
