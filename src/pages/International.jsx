
import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import internationalGuests from "../assets/IMG-20260919-WA0223.jpg";
import tripLakeBanner from "../assets/trip-lake-banner.jpg";
import tripMalamJabba from "../assets/trip-malam-jabba-wide.jpg";
import tripFamilyValley from "../assets/trip-family-valley.jpg";

const pricingTiers = [
  {
    pax: "2 PAX",
    tourLeader: "0",
    executive: "USD 2,630",
    economy: "USD 2,250",
    transport: "Car",
    image: packageSkardu,
  },
  {
    pax: "4 PAX",
    tourLeader: "0",
    executive: "USD 2,480",
    economy: "USD 2,030",
    transport: "BRV Car",
    image: tripLakeBanner,
  },
  {
    pax: "6 PAX",
    tourLeader: "0",
    executive: "USD 2,180",
    economy: "USD 1,770",
    transport: "Grand Cabin",
    image: tripFamilyValley,
  },
  {
    pax: "8 PAX",
    tourLeader: "0",
    executive: "USD 1,980",
    economy: "USD 1,600",
    transport: "Grand Cabin",
    image: tripMalamJabba,
  },
  {
    pax: "10 PAX",
    tourLeader: "1 - Free",
    executive: "USD 1,800",
    economy: "USD 1,400",
    transport: "Coaster",
    image: packageSkardu,
  },
  {
    pax: "12 PAX",
    tourLeader: "1 - Free",
    executive: "USD 1,700",
    economy: "USD 1,200",
    transport: "Coaster",
    image: tripLakeBanner,
  },
  {
    pax: "14 PAX",
    tourLeader: "1 - Free",
    executive: "USD 1,550",
    economy: "USD 1,100",
    transport: "Coaster",
    image: tripFamilyValley,
  },
  {
    pax: "16 PAX",
    tourLeader: "1 - Free",
    executive: "USD 1,430",
    economy: "USD 1,020",
    transport: "Coaster",
    image: tripMalamJabba,
  },
  {
    pax: "18 PAX",
    tourLeader: "1 - Free",
    executive: "USD 1,320",
    economy: "USD 920",
    transport: "Coaster",
    image: packageSkardu,
  },
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

      {/* =====================================================
          HERO
      ===================================================== */}
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

      {/* =====================================================
          BENEFITS
      ===================================================== */}
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

      {/* =====================================================
          INTERNATIONAL PACKAGES
      ===================================================== */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Center Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              2026  Packages for international visitors
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Packages for International Visitors
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Explore Skardu, Hunza, Nalter and Gilgit with transparent
              package options designed around your group size.
            </p>
          </div>

          {/* Route */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2">
            {["Skardu", "Hunza", "Nalter", "Gilgit"].map((destination) => (
              <span
                key={destination}
                className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold"
              >
                {destination}
              </span>
            ))}
          </div>

          {/* Package Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((pkg) => (
              <button
                key={pkg.pax}
                type="button"
                onClick={() =>
                  onBook?.(
                    `International Package - ${pkg.pax} - ${pkg.executive} Executive`
                  )
                }
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] text-left transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.pax} international Pakistan tour package`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Pax Badge */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    {pkg.pax}
                  </div>

                  {/* Click Icon */}
                  <div className="absolute right-5 top-5 grid h-10 w-10 translate-y-2 place-items-center rounded-full border border-white/20 bg-black/30 text-lg text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>

                  {/* Image Title */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      Northern Pakistan
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-bold text-white">
                      {pkg.pax} Group Package
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Pricing */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gold/15 bg-gold/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Executive
                      </p>

                      <p className="mt-2 text-xl font-bold text-gold">
                        {pkg.executive}
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        Per Person
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Economy
                      </p>

                      <p className="mt-2 text-xl font-bold text-emerald-400">
                        {pkg.economy}
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        Per Person
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/45">
                        Tour Leader FOC
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {pkg.tourLeader}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/45">
                        Transport
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {pkg.transport}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-gold">
                      Request This Package
                    </span>

                    <span className="text-lg text-gold transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Package Note */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <p className="text-xs leading-6 text-white/45 sm:text-sm">
              Pricing is structured according to group size. Contact us to
              confirm availability, dates, accommodation preferences and your
              final personalised quotation.
            </p>
          </div>

          {/* Supplements */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                Single Supplement
              </h4>

              <div className="mt-3 space-y-2">
                <p className="text-sm text-white/70">
                  Executive:
                  <span className="ml-2 font-bold text-gold">
                    USD 400
                  </span>
                </p>

                <p className="text-sm text-white/70">
                  Economy:
                  <span className="ml-2 font-bold text-emerald-400">
                    USD 250
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                Child Policy
              </h4>

              <div className="mt-3 space-y-2">
                <p className="text-sm text-white/70">
                  Under 3 years:
                  <span className="ml-2 font-bold text-white">
                    USD 200
                  </span>
                </p>

                <p className="text-sm leading-6 text-white/70">
                  Age 3–10 (Bed + Full Extra Board):
                  <span className="ml-2 font-bold text-gold">
                    50% of Package Price
                  </span>
                </p>

                <p className="text-sm leading-6 text-white/70">
                  Age 3–10 (Bed + Half Price):
                  <span className="ml-2 font-bold text-gold">
                    50% of Package Price
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                Destinations Covered
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Skardu", "Hunza", "Nalter", "Gilgit"].map((dest) => (
                  <span
                    key={dest}
                    className="rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Includes */}
          <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/5 p-7 sm:p-8">
            <h3 className="text-lg font-bold text-gold">
              Package Includes
            </h3>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {packageIncludes.map((inc) => (
                <li
                  key={inc}
                  className="flex items-start gap-3 text-sm leading-6 text-white/80"
                >
                  <span className="mt-0.5 text-gold">✓</span>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAMPLE ITINERARY
      ===================================================== */}
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
                <em className="text-gold">
                  northern Pakistan.
                </em>
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

      {/* =====================================================
          INTERNATIONAL GUESTS
      ===================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="group overflow-hidden rounded-3xl border border-white/10">
            <img
              src={internationalGuests}
              alt="International guests with their local Pakistan tour host"
              className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
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
              <em className="text-gold">
                on your side.
              </em>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/55 sm:text-base">
              From your first planning conversation to your departure,
              we help coordinate the important details of your journey
              through Pakistan.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Pre-arrival communication",
                "Airport and arrival coordination",
                "English-speaking assistance",
                "On-ground travel support",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-gold">✓</span>

                  <span className="text-sm text-white/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEFORE YOU TRAVEL
      ===================================================== */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Before You Travel
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Practical guidance,
              <br />
              <em className="text-gold">
                without guesswork.
              </em>
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
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/30"
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

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
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
            <em className="text-gold">
              to Pakistan.
            </em>
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
