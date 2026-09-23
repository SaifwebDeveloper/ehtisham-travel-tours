import { WHATSAPP_URL_WITH_MESSAGE } from "../data/contactInfo";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL_WITH_MESSAGE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ehtisham Travel & Tours on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-xl shadow-emerald-950/30 ring-4 ring-emerald-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-500/30 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5 sm:text-sm"
    >
      {/* Online Indicator */}
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
      </span>

      {/* WhatsApp Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.43ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.95 9.91Zm5.43-7.43c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51s1.09 2.91 1.24 3.11c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>

      {/* Text */}
      <span className="hidden sm:inline">
        WhatsApp Chat
      </span>
    </a>
  );
}