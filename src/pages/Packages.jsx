import { useRef, useState } from "react";
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

function InfiniteCardRow({ items, onBook, rowPrefix }) {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const tripledItems = [...items, ...items, ...items];

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth / 3;
    if (el.scrollLeft <= 0) {
      el.scrollLeft = maxScroll;
    } else if (el.scrollLeft >= maxScroll * 2) {
      el.scrollLeft = maxScroll;
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX((e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseLeaveOrUp}
      onTouchMove={handleMouseMove}
      className="no-scrollbar overflow-x-auto py-1 cursor-grab active:cursor-grabbing snap-x snap-mandatory lg:snap-none"
    >
      <div className="animate-marquee-rtl flex gap-4 px-4 sm:gap-5 sm:px-6">
        {tripledItems.map((item, index) => (
          <article
            key={`${rowPrefix}-${item.title}-${index}`}
            className="group w-[calc(100vw-2rem)] sm:w-[330px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:border-gold/30 hover:bg-white/[0.05]"
          >
            {/* Height increased specifically for mobile: h-56 on mobile, h-48 on sm and up */}
            <div className="relative h-56 sm:h-48 overflow-hidden">
              <img
                src={item.image}
                alt={`${item.title} travel package`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                {item.category}
              </span>

              <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                {item.duration}
              </span>

              <span className="absolute bottom-3 right-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold text-night">
                {item.price}
              </span>
            </div>

            {/* Increased padding and room for description text on mobile */}
            <div className="p-5 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                {item.location}
              </p>
              <h2 className="mt-0.5 font-display text-lg font-bold">
                {item.title}
              </h2>
              <p className="mt-1 line-clamp-3 sm:line-clamp-2 text-xs leading-5 text-white/55">
                {item.description}
              </p>
              <button
                type="button"
                onClick={() => onBook(item.title)}
                className="mt-4 sm:mt-3.5 w-full rounded-xl bg-gold px-3.5 py-3 sm:py-2.5 text-xs font-bold text-night transition duration-300 hover:bg-gold-light"
              >
                Book This Journey
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function PackagesPage({ onBook }) {
  const row1Packages = packages;
  const row2Packages = [
    ...packages.slice(3),
    ...packages.slice(0, 3),
  ];

  return (
    <div className="bg-night pt-16 sm:pt-20 text-white overflow-x-hidden min-h-screen">
      <style>{`
        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @media (min-width: 1024px) {
          .animate-marquee-rtl {
            display: flex;
            width: max-content;
            animation: marquee-right-to-left 40s linear infinite;
          }
          .animate-marquee-rtl:hover {
            animation-play-state: paused;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-10 pb-6 sm:px-6 sm:pt-12 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,173,96,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Find Your Way North
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Real destinations,{" "}
            <em className="text-gold not-italic">made for your journey.</em>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base leading-relaxed text-white/60">
            Real destinations, flexible schedules, and a local team managing
            every important detail.
          </p>
        </div>
      </section>

      {/* Package Slider Section */}
      <section className="relative py-2 space-y-4 sm:space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-night to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-night to-transparent sm:w-24" />

        {/* First Row */}
        <div>
          <InfiniteCardRow items={row1Packages} onBook={onBook} rowPrefix="r1" />
        </div>

        {/* Second Row */}
        <div>
          <InfiniteCardRow items={row2Packages} onBook={onBook} rowPrefix="r2" />
        </div>
      </section>

      {/* Essentials */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Every Journey
            </p>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
              The essentials are handled.
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-white/55">
              Your final inclusions are confirmed clearly before booking, with
              no hidden surprises.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {essentials.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-gold/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-lg">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-sm font-bold">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private and Group Tours */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Private & Group Tours
            </p>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
              One route, <em className="text-gold not-italic">made entirely yours.</em>
            </h2>

            <p className="mt-4 text-xs sm:text-sm leading-6 text-white/55">
              Travelling with family, university friends, colleagues or as a
              couple? We adapt the pace, accommodation and experiences to your
              priorities.
            </p>

            <div className="mt-6 space-y-3">
              {travelStyles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/70"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
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
              className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Private Family Tour
              </p>
              <p className="mt-1 text-lg font-bold">
                Beautiful places. Comfortable journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Booking Journey
            </p>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
              From idea to departure.
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-white/55">
              A simple process designed to make your travel planning clear and
              comfortable.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-night p-5 transition duration-300 hover:border-gold/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-gold">
                    {step.number}
                  </span>
                  <span className="text-lg">{step.icon}</span>
                </div>

                <h3 className="mt-5 text-sm font-bold">{step.title}</h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Custom Travel
          </p>

          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
            Looking for something different?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-6 text-white/55">
            Tell us where you want to go, how many people are traveling and
            what kind of experience you want.
          </p>

          <button
            type="button"
            onClick={() => onBook()}
            className="mt-6 rounded-full bg-gold px-6 py-3 text-xs font-bold text-night transition hover:bg-gold-light"
          >
            Plan a Custom Trip
          </button>
        </div>
      </section>

      {/* Contact Link */}
      <div className="pb-12 text-center">
        <Link
          to="/contact"
          className="text-xs font-semibold text-gold transition hover:text-gold-light"
        >
          Need help choosing a package? Contact us →
        </Link>
      </div>
    </div>
  );
}