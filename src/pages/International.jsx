import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import internationalGuests from "../assets/IMG-20260919-WA0223.jpg";

const pricingTiers = [
  { pax: "2 PAX", tourLeader: "0", executive: "USD 2,630", economy: "USD 2,250", transport: "Car" },
  { pax: "4 PAX", tourLeader: "0", executive: "USD 2,480", economy: "USD 2,030", transport: "BRV Car" },
  { pax: "6 PAX", tourLeader: "0", executive: "USD 2,180", economy: "USD 1,770", transport: "Grand Cabin" },
  { pax: "8 PAX", tourLeader: "0", executive: "USD 1,980", economy: "USD 1,600", transport: "Grand Cabin" },
  { pax: "10 PAX", tourLeader: "1 - Free", executive: "USD 1,800", economy: "USD 1,400", transport: "Coaster" },
  { pax: "12 PAX", tourLeader: "1 - Free", executive: "USD 1,700", economy: "USD 1,200", transport: "Coaster" },
  { pax: "14 PAX", tourLeader: "1 - Free", executive: "USD 1,550", economy: "USD 1,100", transport: "Coaster" },
  { pax: "16 PAX", tourLeader: "1 - Free", executive: "USD 1,430", economy: "USD 1,020", transport: "Coaster" },
  { pax: "18 PAX", tourLeader: "1 - Free", executive: "USD 1,320", economy: "USD 920", transport: "Coaster" },
];

const packageIncludes = [
  "Comfortable Transport as per group size",
  "Hotel Accommodation",
  "Daily Breakfast & Dinner (FB/HB as per plan)",
  "Sightseeing as per itinerary",
  "Experienced Local Guide",
  "All Applicable Taxes",
];

const benefits = [
  {
    icon: "✈️",
    title: "Arrival coordination",
    description:
      "We plan your first and final travel days around the flight details you share.",
  },
  {
    icon: "🌍",
    title: "English-speaking assistance",
    description:
      "Clear pre-arrival communication and English-speaking support during the tour.",
  },
  {
    icon: "🏨",
    title: "Comfort matched to you",
    description:
      "Hotel categories and room arrangements are confirmed before you book.",
  },
  {
    icon: "🏔️",
    title: "Responsible route planning",
    description:
      "Weather, road conditions, altitude and realistic driving times shape every plan.",
  },
  {
    icon: "📋",
    title: "Clear quotation",
    description:
      "Your written quote explains inclusions, exclusions and payment arrangements in advance.",
  },
  {
    icon: "👥",
    title: "Private or group travel",
    description:
      "Choose a personal journey, family trip, student visit or organised group experience.",
  },
];

const itinerary = [
  {
    day: "D1",
    title: "Arrive in Islamabad",
    description:
      "Airport coordination, hotel check-in and a relaxed welcome briefing.",
  },
  {
    day: "D2",
    title: "Islamabad to the mountains",
    description:
      "Begin the scenic journey north with planned comfort and photography stops.",
  },
  {
    day: "D3",
    title: "Lakes and local landscapes",
    description:
      "Explore signature viewpoints and lakes with your local host.",
  },
  {
    day: "D4",
    title: "Culture and heritage",
    description:
      "Discover historic places, local traditions and regional food at an unhurried pace.",
  },
  {
    day: "D5",
    title: "High mountain experience",
    description:
      "A weather-appropriate excursion by suitable vehicle with route checks.",
  },
  {
    day: "D6",
    title: "Flexible discovery day",
    description:
      "Choose a valley, village, market or additional scenic experience.",
  },
  {
    day: "D7",
    title: "Return journey",
    description:
      "Travel back with rest stops and an overnight stay arranged around your onward plans.",
  },
  {
    day: "D8",
    title: "International departure",
    description:
      "Planned transfer for your departing flight or an optional tour extension.",
  },
];

const practicalGuidance = [
  {
    icon: "🛂",
    title: "Visa and entry documents",
    description:
      "International visitors must obtain the appropriate Pakistan visa and confirm current entry rules through official Pakistani government sources or their nearest mission.",
  },
  {
    icon: "☀️",
    title: "Best time to travel",
    description:
      "Your ideal month depends on the destination. Some high mountain roads and parks are seasonal.",
  },
  {
    icon: "🛫",
    title: "Flights and meeting point",
    description:
      "Share confirmed international and domestic flight details before arrival coordination is finalised.",
  },
];

export default function International({ onBook }) {
  return (
    <main className="bg-night pt-24 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,173,96,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Welcome to Pakistan
            </p>

            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Designed for guests
              <br />
              <em className="text-gold">arriving from abroad.</em>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
              Your itinerary begins with your flight schedule, not a fixed
              domestic departure. Share your passport nationality, country of
              residence, arrival city and available days so we can recommend
              the right route and season.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onBook?.("International Pakistan Tour")}
                className="rounded-xl bg-gold px-7 py-4 text-sm font-bold text-night transition hover:bg-gold-light"
              >
                Request Your International Itinerary
              </button>

              <Link
                to="/packages"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Designed Around You
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Travel to Pakistan
              <br />
              <em className="text-gold">with clarity.</em>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-night p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Quotation & Pricing Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Quotation for 2026
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              10D 9N Skardu – Hunza – Nalter – Gilgit
            </h2>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              Explore the beauty of Skardu, Hunza, Nalter & Gilgit with transparent pricing structured by group size.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-bold uppercase text-gold">
                <tr>
                  <th className="px-6 py-4">No. of Pax</th>
                  <th className="px-6 py-4">Tour Leader FOC</th>
                  <th className="px-6 py-4">Per Person (Executive)</th>
                  <th className="px-6 py-4">Per Person (Economy)</th>
                  <th className="px-6 py-4">Transport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {pricingTiers.map((row, idx) => (
                  <tr key={idx} className="transition hover:bg-white/5">
                    <td className="px-6 py-4 font-bold text-white">{row.pax}</td>
                    <td className="px-6 py-4">{row.tourLeader}</td>
                    <td className="px-6 py-4 font-semibold text-gold">{row.executive}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-400">{row.economy}</td>
                    <td className="px-6 py-4">{row.transport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Supplements & Policy Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Single Supplement</h4>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-white/70">Executive: <span className="font-bold text-gold">USD 400</span></p>
                <p className="text-sm text-white/70">Economy: <span className="font-bold text-emerald-400">USD 250</span></p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Child Policy</h4>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-white/70">Under 3 years: <span className="font-bold text-white">USD 200</span></p>
                <p className="text-sm text-white/70">Age 3–10 (Bed + Full Extra Board): <span className="font-bold text-gold">50% of Package Price</span></p>
                <p className="text-sm text-white/70">Age 3–10 (Bed + Half Price): <span className="font-bold text-gold">50% of Package Price</span></p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Destinations Covered</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Skardu", "Hunza", "Nalter", "Gilgit"].map((dest) => (
                  <span key={dest} className="rounded-lg border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h3 className="text-lg font-bold text-gold">Package Includes</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {packageIncludes.map((inc, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-gold">✓</span>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Image */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Sample Itinerary
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Eight days in
                <br />
                <em className="text-gold">northern Pakistan.</em>
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/55 sm:text-base">
                A starting point for international guests. The final route
                depends on your season, flight timings, road access and
                preferred pace.
              </p>

              <div className="group relative mt-8 overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={packageSkardu}
                  alt="Mountain landscape on an international Pakistan itinerary"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">
                    Northern Pakistan
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    Mountains, lakes and valleys
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-5">
              {itinerary.map((item) => (
                <article
                  key={item.day}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-gold/30 hover:bg-white/[0.04] sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-xs font-black text-night">
                    {item.day}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}

              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm leading-7 text-white/60">
                  <strong className="text-gold">
                    Please note:
                  </strong>{" "}
                  This is a sample itinerary, not a fixed departure.
                  High-altitude routes and flight connections remain subject
                  to season, weather and local conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Guests */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={internationalGuests}
              alt="International guests with their local Pakistan tour host"
              className="h-[430px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              International Experience
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              A local team
              <br />
              <em className="text-gold">on your side.</em>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/55 sm:text-base">
              From your first planning conversation to your departure,
              we help coordinate the important details of your journey
              through Pakistan.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span className="text-sm text-white/65">
                  Pre-arrival communication
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span className="text-sm text-white/65">
                  Airport and arrival coordination
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span className="text-sm text-white/65">
                  English-speaking assistance
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span className="text-sm text-white/65">
                  On-ground travel support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Travel */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Before You Travel
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Practical guidance,
              <br />
              <em className="text-gold">without guesswork.</em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
              We help organise the tour within Pakistan and share the
              information needed to prepare confidently.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {practicalGuidance.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-gold px-7 py-4 text-sm font-bold text-night transition hover:bg-gold-light"
            >
              Request Your International Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <img
            src="/assets/ehtisham-logo.jpg"
            alt="Ehtisham Travel & Tours logo"
            className="mx-auto mb-8 h-20 w-20 rounded-2xl object-cover ring-1 ring-white/10"
          />

          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Plan your visit
            <br />
            <em className="text-gold">to Pakistan.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Share your country, travel dates, arrival airport and interests.
            We will prepare a personalised route and quotation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onBook?.("International Pakistan Tour")}
              className="rounded-xl bg-gold px-7 py-4 text-sm font-bold text-night transition hover:bg-gold-light"
            >
              Request International Itinerary
            </button>

            <a
              href="https://wa.me/923468860855"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              WhatsApp us
            </a>

            <Link
              to="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}