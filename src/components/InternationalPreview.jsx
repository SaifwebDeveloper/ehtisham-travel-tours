import { Link } from "react-router-dom";
import internationalGuests from "../assets/IMG-20260919-WA0223.jpg";

const features = [
  {
    icon: "✈️",
    title: "Arrival Coordination",
    text: "We plan your Pakistan journey around your international flight schedule, arrival city and available travel days.",
  },
  {
    icon: "🌍",
    title: "International Guest Support",
    text: "Get clear pre-arrival communication and English-speaking assistance throughout your journey.",
  },
  {
    icon: "🏨",
    title: "Comfortable Stays",
    text: "Choose accommodation and room arrangements according to your preferred comfort level and budget.",
  },
  {
    icon: "🏔️",
    title: "Local Mountain Experience",
    text: "Explore Pakistan with local route planning, experienced drivers and on-ground travel support.",
  },
];

export default function InternationalPreview({ onBook }) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={internationalGuests}
              alt="International visitors enjoying a guided tour in Pakistan"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[520px]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Welcome to Pakistan
                </p>

                <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                  Your journey. Our local expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              For International Visitors
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Discover Pakistan
              <br />
              <em className="text-gold">with a local team.</em>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
              Planning your first visit to Pakistan? We help international
              travellers turn their available travel days and flight schedule
              into a practical journey through the country's mountains,
              valleys, lakes and cultural destinations.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Share your nationality, country of residence, arrival city,
              travel dates and interests. Our team can then help you plan the
              right route, accommodation, transportation and local experiences.
            </p>

            {/* Features */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-lg">
                    {feature.icon}
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onBook?.("International Pakistan Tour")}
                className="rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-night shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-gold-light"
              >
                Plan My Pakistan Trip
              </button>

              <Link
                to="/international"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-gold/40 hover:bg-white/10"
              >
                International Travel Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-3">
          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Before Arrival
            </p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Share your flight details and travel dates so we can coordinate
              your arrival and onward journey.
            </p>
          </div>

          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Your Journey
            </p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Private and group tours can be planned around your preferred
              destinations, pace and accommodation.
            </p>
          </div>

          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Local Support
            </p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              From airport coordination to mountain routes, our local team
              remains available throughout your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}