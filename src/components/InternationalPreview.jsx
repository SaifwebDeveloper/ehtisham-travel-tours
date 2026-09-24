
import { Link } from "react-router-dom";

import internationalGuests from "../assets/IMG-20260919-WA0223.jpg";
import packageSkardu from "../assets/package-skardu.jpg";
import tripLakeBanner from "../assets/trip-lake-banner.jpg";
import tripFamilyValley from "../assets/trip-family-valley.jpg";
import tripMalamJabbaWide from "../assets/trip-malam-jabba-wide.jpg";

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

/*
|--------------------------------------------------------------------------
| International Packages
|--------------------------------------------------------------------------
| These packages use the same pricing information from the
| International.jsx page.
*/

const internationalPackages = [
  {
    pax: "2 PAX",
    title: "Private Couple Journey",
    image: packageSkardu,
    executive: "$2,630",
    economy: "$2,250",
    transport: "Car",
    leader: "Not Included",
  },
  {
    pax: "4 PAX",
    title: "Small Group Escape",
    image: tripLakeBanner,
    executive: "$2,480",
    economy: "$2,030",
    transport: "BRV Car",
    leader: "Not Included",
  },
  {
    pax: "6 PAX",
    title: "Mountain Group Adventure",
    image: tripFamilyValley,
    executive: "$2,180",
    economy: "$1,770",
    transport: "Grand Cabin",
    leader: "Not Included",
  },
  {
    pax: "8 PAX",
    title: "Northern Explorer",
    image: tripMalamJabbaWide,
    executive: "$1,980",
    economy: "$1,600",
    transport: "Grand Cabin",
    leader: "Not Included",
  },
  {
    pax: "10 PAX",
    title: "Group Pakistan Experience",
    image: packageSkardu,
    executive: "$1,800",
    economy: "$1,400",
    transport: "Coaster",
    leader: "1 Tour Leader Free",
  },
  {
    pax: "12 PAX",
    title: "Large Group Adventure",
    image: tripLakeBanner,
    executive: "$1,700",
    economy: "$1,200",
    transport: "Coaster",
    leader: "1 Tour Leader Free",
  },
];

const destinations = [
  {
    image: packageSkardu,
    title: "Skardu",
    text: "Lakes, valleys and dramatic mountain landscapes.",
  },
  {
    image: tripFamilyValley,
    title: "Hunza",
    text: "Beautiful valleys, culture and unforgettable views.",
  },
  {
    image: tripMalamJabbaWide,
    title: "Northern Pakistan",
    text: "Mountain adventures designed around your travel plans.",
  },
];

export default function InternationalPreview({ onBook }) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold sm:text-xs">
              For International Visitors
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover Pakistan
            <br />
            <em className="text-gold">with a local team.</em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Planning your first visit to Pakistan? We help international
            travellers turn their available travel days and flight schedule
            into a practical journey through the country's mountains,
            valleys, lakes and cultural destinations.
          </p>
        </div>

        {/* =========================================================
            MAIN INTERNATIONAL VISITOR SECTION
        ========================================================= */}
        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative h-[430px] overflow-hidden sm:h-[560px]">

              <img
                src={internationalGuests}
                alt="International visitors enjoying a guided tour in Pakistan"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Welcome to Pakistan
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Your Journey
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Your journey. Our local expertise.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    From your arrival to your departure, experience Pakistan
                    with a locally planned itinerary.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Travel with confidence
            </p>

            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              A Pakistan journey
              <br />
              <span className="text-white/60">
                planned around you.
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Share your nationality, country of residence, arrival city,
              travel dates and interests. Our team can then help you plan the
              right route, accommodation, transportation and local
              experiences.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.05] sm:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-lg transition duration-300 group-hover:scale-105">
                    {feature.icon}
                  </div>

                  <h4 className="mt-4 text-sm font-bold text-white">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() =>
                  onBook?.("International Pakistan Tour")
                }
                className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-night shadow-lg shadow-gold/10 transition duration-300 hover:scale-[1.02] hover:bg-yellow-300"
              >
                Plan My Pakistan Trip
                <span className="ml-2">→</span>
              </button>

              <Link
                to="/international"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-gold/40 hover:bg-white/10"
              >
                International Travel Guide
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            INTERNATIONAL PACKAGES
        ========================================================= */}
        <div className="mt-24 sm:mt-28 lg:mt-36">

          {/* Package Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              2026 International Packages
            </p>

            <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Packages for International Visitors
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Carefully planned Pakistan tours for international guests,
              covering Skardu, Hunza, Naltar and Gilgit with transportation,
              accommodation and local support.
            </p>

            {/* Route Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Skardu", "Hunza", "Naltar", "Gilgit"].map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/55"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>

          {/* Package Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internationalPackages.map((pkg) => (
              <div
                key={pkg.pax}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} international Pakistan tour`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* PAX */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-4 py-2 backdrop-blur-md">
                    <span className="text-xs font-bold text-gold">
                      {pkg.pax}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    ↗
                  </div>

                  {/* Image Title */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      Northern Pakistan
                    </p>

                    <h4 className="mt-1 text-xl font-bold text-white">
                      {pkg.title}
                    </h4>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">

                  {/* Prices */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gold/15 bg-gold/[0.06] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Executive
                      </p>

                      <p className="mt-1 text-xl font-bold text-gold">
                        {pkg.executive}
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        Per Person
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Economy
                      </p>

                      <p className="mt-1 text-xl font-bold text-white">
                        {pkg.economy}
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        Per Person
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-white/40">
                        Transportation
                      </span>

                      <span className="text-xs font-semibold text-white">
                        {pkg.transport}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-white/40">
                        Tour Leader
                      </span>

                      <span
                        className={`text-right text-xs font-semibold ${
                          pkg.leader.includes("Free")
                            ? "text-emerald-400"
                            : "text-white/70"
                        }`}
                      >
                        {pkg.leader}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() =>
                      onBook?.(`International Package - ${pkg.pax}`)
                    }
                    className="mt-6 flex w-full items-center justify-center rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-night transition duration-300 hover:bg-yellow-300"
                  >
                    Request This Package
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="mt-8 text-center">
            <Link
              to="/international"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-gold/40 hover:bg-white/10"
            >
              View All International Packages
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        {/* =========================================================
            DESTINATIONS
        ========================================================= */}
        <div className="mt-24 sm:mt-28 lg:mt-36">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Where can you go?
              </p>

              <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Explore Northern Pakistan
              </h3>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center text-sm font-bold text-white/60 transition hover:text-gold"
            >
              View all destinations
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.title} Pakistan travel destination`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-xl font-bold text-white">
                      {destination.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      {destination.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            INFORMATION STRIP
        ========================================================= */}
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:mt-16 sm:grid-cols-3">
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

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 via-white/[0.03] to-emerald-500/10 p-7 text-center sm:mt-16 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Ready to explore?
            </p>

            <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Your Pakistan adventure starts here.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50">
              Tell us when you are arriving, how long you are staying and what
              you want to experience. We will help you plan the journey.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  onBook?.("International Pakistan Tour")
                }
                className="rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-night transition duration-300 hover:bg-yellow-300 hover:shadow-xl hover:shadow-gold/10"
              >
                Start Planning
              </button>

              <Link
                to="/international"
                className="rounded-xl border border-white/15 bg-black/20 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-gold/40 hover:bg-white/10"
              >
                View International Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
