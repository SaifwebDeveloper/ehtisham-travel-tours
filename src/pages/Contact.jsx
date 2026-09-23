import { Link } from "react-router-dom";

import {
  FacebookIcon,
  InstagramIcon,
  MapsIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../components/ContactIcons";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL_WITH_MESSAGE,
  MAPS_URL,
  instagramLinks,
  facebookLinks,
} from "../data/contactInfo";

const contactCards = [
  {
    title: "Phone",
    label: PHONE_DISPLAY,
    description: "Call us to discuss your trip.",
    href: `tel:${PHONE_TEL}`,
    icon: PhoneIcon,
    iconClass: "text-gold",
  },
  {
    title: "WhatsApp",
    label: "WhatsApp chat",
    description: "Message us about dates, group size, and destinations.",
    href: WHATSAPP_URL_WITH_MESSAGE,
    icon: WhatsAppIcon,
    iconClass: "text-emerald-400",
    external: true,
  },
  {
    title: "Location",
    label: "Find us on Google Maps",
    description: "Open our office location on the map.",
    href: MAPS_URL,
    icon: MapsIcon,
    iconClass: "text-gold",
    external: true,
  },
];

export default function ContactPage({ onBook }) {
  return (
    <div className="bg-night pt-24">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Contact
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Let&apos;s plan your next journey.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          Have a destination in mind? Reach out by phone, WhatsApp, or social
          media and tell us what kind of experience you are looking for.
        </p>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-gold/30"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] ${card.iconClass}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="mt-5 text-xs font-bold uppercase tracking-wider text-gold">
                  {card.title}
                </div>

                <h2 className="mt-2 text-xl font-bold group-hover:text-gold">
                  {card.label}
                </h2>

                <p className="mt-3 text-sm text-white/45">{card.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Follow our journeys
          </p>

          <h2 className="mt-4 text-center font-display text-3xl font-bold sm:text-4xl">
            Stay connected on social
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-gold">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Instagram</h3>
              </div>

              <ul className="mt-6 space-y-4">
                {instagramLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 transition hover:text-gold"
                    >
                      <InstagramIcon className="h-4 w-4 shrink-0 text-gold/80" />
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-[#1877F2]">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Facebook</h3>
              </div>

              <ul className="mt-6 space-y-4">
                {facebookLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 transition hover:text-gold"
                    >
                      <FacebookIcon className="h-4 w-4 shrink-0 text-[#1877F2]" />
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold">Ready to book?</h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
          Share your travel plans and we will help you build the right
          itinerary.
        </p>

        <button
          type="button"
          onClick={() => onBook()}
          className="mt-8 rounded-full bg-gold px-8 py-3.5 font-bold text-night transition hover:bg-gold-light"
        >
          Book Your Adventure
        </button>

        <div className="mt-6">
          <Link
            to="/packages"
            className="text-sm font-semibold text-white/50 transition hover:text-gold"
          >
            Explore packages →
          </Link>
        </div>
      </section>
    </div>
  );
}
