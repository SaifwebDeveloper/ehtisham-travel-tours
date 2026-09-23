import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageFamilyLake from "../assets/package-family-lake.jpg";
import packageHeartMountains from "../assets/package-heart-mountains.jpg";

const packages = [
  {
    title: "Skardu Explorer",
    location: "Skardu, Gilgit-Baltistan",
    image: packageSkardu,
    category: "Signature Adventure",
    duration: "8 days",
    price: "From Rs 32,000",
    description: "Skardu, Kachura Lakes, Shangrila, Deosai and Katpana.",
  },
  {
    title: "Hunza & Khunjerab",
    location: "Hunza Valley",
    image: packageHunza,
    category: "Mountain Classic",
    duration: "5 days",
    price: "From Rs 22,000",
    description:
      "Attabad Lake, Passu Cones, Altit Fort and the Pakistan–China border.",
  },
  {
    title: "Neelam Valley",
    location: "Azad Kashmir",
    image: packageNeelam,
    category: "Valley Escape",
    duration: "3–5 days",
    price: "From Rs 13,000",
    description:
      "Keran, Sharda, Arang Kel and the valley's riverside landscapes.",
  },
  {
    title: "Family Lake Tour",
    location: "Northern Pakistan",
    image: packageFamilyLake,
    category: "Private Tour",
    duration: "Custom",
    price: "Private quote",
    description:
      "Private transport, pristine mountain lakes and a relaxed family-friendly plan.",
  },
  {
    title: "International Skardu Tour",
    location: "Skardu, Gilgit-Baltistan",
    image: packageSkardu,
    category: "Group Travel",
    duration: "5–7 days",
    price: "Group quote",
    description:
      "Hosted stays, safe transport and guided Skardu experiences for international groups.",
  },
  {
    title: "Heart of the Mountains",
    location: "Northern Pakistan",
    image: packageHeartMountains,
    category: "Premium Escape",
    duration: "8 days",
    price: "Premium plan",
    description:
      "Skardu, Kachura Lakes and the sweeping high-altitude Deosai Plains.",
  },
];

const essentials = [
  {
    icon: "🚙",
    title: "Private transport",
    description: "Comfortable vehicles and experienced mountain drivers.",
  },
  {
    icon: "🏨",
    title: "Selected hotels",
    description: "Clean, trusted stays matched to your group and budget.",
  },
  {
    icon: "🍽️",
    title: "Daily meals",
    description: "Practical meal plans arranged throughout your journey.",
  },
  {
    icon: "🧭",
    title: "Local guidance",
    description: "Sightseeing, route planning and on-ground support.",
  },
];

const travelStyles = [
  "Family-friendly pacing and room planning",
  "Student and corporate group coordination",
  "Honeymoon privacy and premium stays",
  "Winter road and weather planning",
];

const bookingSteps = [
  {
    number: "01",
    icon: "📅",
    title: "Share your dates",
    description: "Tell us the destination, group size and departure city.",
  },
  {
    number: "02",
    icon: "🧳",
    title: "Choose your style",
    description: "Private, family, student, corporate or open group.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Approve the plan",
    description: "Review hotels, transport, inclusions and exact cost.",
  },
  {
    number: "04",
    icon: "🏔️",
    title: "Start travelling",
    description: "Our team hosts and supports your complete journey.",
  },
];

export default function PackagesPage({ onBook }) {
  // Split or duplicate cards to create two full continuous rows
  const row1Packages = [...packages, ...packages];
  const row2Packages = [
    ...packages.slice(3),
    ...packages.slice(0, 3),
    ...packages.slice(3),
    ...packages.slice(0, 3),
  ];

  return (
    <div className="bg-night pt-24 text-white overflow-x-hidden">
      {/* Dynamic Keyframe Style for Smooth Right-to-Left Marquee */}
      <style>{`
        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-right-to-left 40s linear infinite;
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,173,96,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Find Your Way North
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Real destinations,
            <br />
            <em className="text-gold">made for your journey.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Real destinations, flexible schedules and a local team managing
            every important detail.
          </p>
        </div>
      </section>

      {/* Two-Row Moving Packages Marquee (Right-to-Left) */}
      <section className="relative py-12 space-y-6">
        {/* Soft Edge Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-night to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-night to-transparent" />

        {/* ROW 1 */}
        <div className="overflow-hidden py-2">
          <div className="animate-marquee-rtl gap-6 px-3">
            {row1Packages.map((item, index) => (
              <article
                key={`r1-${item.title}-${index}`}
                className="group w-[320px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.05] sm:w-[360px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} travel package`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {item.category}
                  </span>

                  <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {item.duration}
                  </span>

                  <span className="absolute bottom-4 right-4 rounded-full bg-gold px-3 py-1.5 text-xs font-bold text-night">
                    {item.price}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    {item.location}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 min-h-[48px] text-xs leading-6 text-white/55">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onBook(item.title)}
                    className="mt-5 w-full rounded-xl bg-gold px-4 py-3 text-xs font-bold text-night transition duration-300 hover:bg-gold-light"
                  >
                    Book This Journey
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden py-2">
          <div className="animate-marquee-rtl gap-6 px-3">
            {row2Packages.map((item, index) => (
              <article
                key={`r2-${item.title}-${index}`}
                className="group w-[320px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.05] sm:w-[360px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} travel package`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {item.category}
                  </span>

                  <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {item.duration}
                  </span>

                  <span className="absolute bottom-4 right-4 rounded-full bg-gold px-3 py-1.5 text-xs font-bold text-night">
                    {item.price}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    {item.location}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 min-h-[48px] text-xs leading-6 text-white/55">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onBook(item.title)}
                    className="mt-5 w-full rounded-xl bg-gold px-4 py-3 text-xs font-bold text-night transition duration-300 hover:bg-gold-light"
                  >
                    Book This Journey
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Every Journey
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              The essentials are handled.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
              Your final inclusions are confirmed clearly before booking, with
              no hidden surprises.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {essentials.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private and Group Tours */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Private & Group Tours
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              One route,
              <br />
              <em className="text-gold">made entirely yours.</em>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
              Travelling with family, university friends, colleagues or as a
              couple? We adapt the pace, accommodation and experiences to your
              priorities.
            </p>

            <div className="mt-8 space-y-4">
              {travelStyles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src={packageFamilyLake}
              alt="Private family tour beside a mountain lake"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Private Family Tour
              </p>

              <p className="mt-2 text-xl font-bold">
                Beautiful places. Comfortable journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Journey */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Booking Journey
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              From idea to departure.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              A simple process designed to make your travel planning clear and
              comfortable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-night p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-gold">
                    {step.number}
                  </span>

                  <span className="text-xl">{step.icon}</span>
                </div>

                <h3 className="mt-7 font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Custom Travel
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Looking for something different?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/55">
            Tell us where you want to go, how many people are traveling and
            what kind of experience you want. We can help plan a custom
            journey.
          </p>

          <button
            type="button"
            onClick={() => onBook()}
            className="mt-8 rounded-full bg-gold px-7 py-3.5 font-bold text-night transition hover:bg-gold-light"
          >
            Plan a Custom Trip
          </button>
        </div>
      </section>

      {/* Contact */}
      <div className="pb-20 text-center">
        <Link
          to="/contact"
          className="text-sm font-semibold text-gold transition hover:text-gold-light"
        >
          Need help choosing a package? Contact us →
        </Link>
      </div>
    </div>
  );
}