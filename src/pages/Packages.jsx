import { useEffect, useRef, useState } from "react";
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
    description:
      "Skardu, Kachura Lakes, Shangrila, Deosai and Katpana.",
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


const DISCOUNT_RATE = 0.25;

const getPKRValue = (price) => {
  if (typeof price !== "string") return null;

  const match = price.match(/[\d,]+/);

  if (!match) return null;

  return Number(match[0].replace(/,/g, ""));
};

const getOriginalPrice = (finalPrice) => {
  const pkr = getPKRValue(finalPrice);

  if (!pkr) return null;

  return Math.round(pkr / (1 - DISCOUNT_RATE));
};

const formatPKR = (price) => {
  return `Rs ${price.toLocaleString("en-PK")}`;
};

const essentials = [
  {
    icon: "🚙",
    title: "Private transport",
    description:
      "Comfortable vehicles and experienced mountain drivers.",
  },
  {
    icon: "🏨",
    title: "Selected hotels",
    description:
      "Clean, trusted stays matched to your group and budget.",
  },
  {
    icon: "🍽️",
    title: "Daily meals",
    description:
      "Practical meal plans arranged throughout your journey.",
  },
  {
    icon: "🧭",
    title: "Local guidance",
    description:
      "Sightseeing, route planning and on-ground support.",
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
    description:
      "Tell us the destination, group size and departure city.",
  },
  {
    number: "02",
    icon: "🧳",
    title: "Choose your style",
    description:
      "Private, family, student, corporate or open group.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Approve the plan",
    description:
      "Review hotels, transport, inclusions and exact cost.",
  },
  {
    number: "04",
    icon: "🏔️",
    title: "Start travelling",
    description:
      "Our team hosts and supports your complete journey.",
  },
];

function InfiniteCardRow({ items, onBook, rowPrefix, reverse = false }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const dragData = useRef({
    startX: 0,
    startScrollLeft: 0,
  });

  const isPaused = useRef(false);

  /*
   * Three copies are required for seamless infinite scrolling.
   */
  const tripledItems = [...items, ...items, ...items];

  /*
   * Move the carousel to the middle copy when mounted.
   * This prevents the user from seeing the actual beginning.
   */
  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const setInitialPosition = () => {
      const oneSetWidth = el.scrollWidth / 3;

      el.scrollLeft = oneSetWidth;
    };

    const timer = setTimeout(setInitialPosition, 100);

    return () => clearTimeout(timer);
  }, [items]);

  /*
   * Infinite auto scrolling.
   *
   * This runs on mobile and desktop.
   * It uses scrollLeft instead of CSS transform so that
   * manual dragging continues to work.
   */
  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    let lastTime = performance.now();

    const speed = 0.035;

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;

      lastTime = currentTime;

      if (!isPaused.current && !isDragging) {
        const movement = delta * speed;

        if (reverse) {
          el.scrollLeft -= movement;
        } else {
          el.scrollLeft += movement;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, reverse]);

  /*
   * Keeps the scroll position inside the middle copy.
   * This creates the infinite loop.
   */
  const handleScroll = () => {
    const el = containerRef.current;

    if (!el) return;

    const oneSetWidth = el.scrollWidth / 3;

    /*
     * Moving forward
     */
    if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }

    /*
     * Moving backward
     */
    if (el.scrollLeft <= 0) {
      el.scrollLeft += oneSetWidth;
    }
  };

  /*
   * Pause when mouse enters the carousel.
   */
  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  /*
   * Resume when mouse leaves.
   */
  const handleMouseLeave = () => {
    if (!isDragging) {
      isPaused.current = false;
    }
  };

  /*
   * Start mouse/touch dragging.
   */
  const handlePointerDown = (e) => {
    const el = containerRef.current;

    if (!el) return;

    setIsDragging(true);
    isPaused.current = true;

    dragData.current.startX = e.clientX;
    dragData.current.startScrollLeft = el.scrollLeft;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore pointer capture errors.
    }
  };

  /*
   * Move cards while dragging.
   */
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const el = containerRef.current;

    if (!el) return;

    const distance = e.clientX - dragData.current.startX;

    el.scrollLeft =
      dragData.current.startScrollLeft - distance * 1.25;
  };

  /*
   * Stop dragging.
   */
  const handlePointerUp = () => {
    setIsDragging(false);
    isPaused.current = false;
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`no-scrollbar overflow-x-auto py-1 select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        touchAction: "pan-y",
      }}
    >
      <div className="flex w-max gap-4 px-4 sm:gap-5 sm:px-6">
        {tripledItems.map((item, index) => (
          <article
            key={`${rowPrefix}-${item.title}-${index}`}
            className="
              group
              w-[calc(100vw-2rem)]
              sm:w-[330px]
              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.035]
              transition
              duration-300
              hover:border-gold/30
              hover:bg-white/[0.05]
            "
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden sm:h-48">
              <img
                src={item.image}
                alt={`${item.title} travel package`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
                loading="lazy"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              {/* Category */}
              <span
                className="
                  absolute
                  left-3
                  top-3
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-gold
                  backdrop-blur
                "
              >
                {item.category}
              </span>

              {/* Duration */}
              <span
                className="
                  absolute
                  bottom-3
                  left-3
                  rounded-full
                  bg-black/50
                  px-2.5
                  py-1
                  text-[11px]
                  font-semibold
                  text-white
                  backdrop-blur
                "
              >
                {item.duration}
              </span>

              {/* Price */}
              {getPKRValue(item.price) ? (
                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    z-10
                    rounded-xl
                    border
                    border-white/10
                    bg-black/75
                    px-3
                    py-2
                    text-right
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  <p className="text-[9px] font-semibold text-white/40 line-through">
                    {formatPKR(getOriginalPrice(item.price))}
                  </p>

                  <p className="mt-0.5 text-[9px] font-black uppercase tracking-wider text-gold">
                    25% OFF
                  </p>

                  <p className="mt-0.5 text-sm font-black text-white">
                    {item.price.replace(/^From\s+/i, "")}
                  </p>
                </div>
              ) : (
                <span
                  className="
                    absolute
                    bottom-3
                    right-3
                    rounded-full
                    bg-gold
                    px-2.5
                    py-1
                    text-[11px]
                    font-bold
                    text-night
                  "
                >
                  {item.price}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-gold
                "
              >
                {item.location}
              </p>

              <h2 className="mt-0.5 font-display text-lg font-bold">
                {item.title}
              </h2>

              <p
                className="
                  mt-1
                  line-clamp-3
                  text-xs
                  leading-5
                  text-white/55
                  sm:line-clamp-2
                "
              >
                {item.description}
              </p>

              {/* Booking Button */}
              <button
                type="button"
                onPointerDown={(e) => {
                  /*
                   * Prevent the carousel drag from starting
                   * when the user presses the booking button.
                   */
                  e.stopPropagation();
                }}
                onClick={() => onBook(item.title)}
                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-gold
                  px-3.5
                  py-3
                  text-xs
                  font-bold
                  text-night
                  transition
                  duration-300
                  hover:bg-gold-light
                  sm:mt-3.5
                  sm:py-2.5
                "
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
    <div className="min-h-screen overflow-x-hidden bg-night pt-16 text-white sm:pt-20">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /*
         * Prevent image dragging from interfering
         * with the carousel interaction.
         */
        img {
          -webkit-user-drag: none;
          user-select: none;
        }

        /*
         * Smooth scrolling is disabled intentionally.
         * The carousel itself controls the movement.
         */
        .no-scrollbar {
          scroll-behavior: auto;
        }
      `}</style>

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,173,96,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Find Your Way North
          </p>

          <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Real destinations,{" "}
            <em className="not-italic text-gold">
              made for your journey.
            </em>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-white/60 sm:text-base">
            Real destinations, flexible schedules, and a local team
            managing every important detail.
          </p>
        </div>
      </section>

      {/* =========================
          PACKAGE CAROUSEL
      ========================== */}
      <section className="relative space-y-4 py-2 sm:space-y-5">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-night to-transparent sm:w-24" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-night to-transparent sm:w-24" />

        {/* First Row */}
        <div>
          <InfiniteCardRow
            items={row1Packages}
            onBook={onBook}
            rowPrefix="r1"
            reverse={false}
          />
        </div>

        {/* Second Row */}
        <div>
          <InfiniteCardRow
            items={row2Packages}
            onBook={onBook}
            rowPrefix="r2"
            reverse={true}
          />
        </div>

        {/* Promotional Offer */}
        <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-lg">
                🎁
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  Special 25% Promotional Offer
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/45">
                  Enjoy 25% OFF selected tour packages. The price shown on
                  each package is the final promotional price, while the
                  original price is displayed with a strikethrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ESSENTIALS
      ========================== */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Every Journey
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              The essentials are handled.
            </h2>

            <p className="mt-3 text-xs text-white/55 sm:text-sm">
              Your final inclusions are confirmed clearly before booking,
              with no hidden surprises.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {essentials.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  transition
                  duration-300
                  hover:border-gold/30
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-lg">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-sm font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PRIVATE & GROUP TOURS
      ========================== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Private & Group Tours
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              One route,{" "}
              <em className="not-italic text-gold">
                made entirely yours.
              </em>
            </h2>

            <p className="mt-4 text-xs leading-6 text-white/55 sm:text-sm">
              Travelling with family, university friends, colleagues or
              as a couple? We adapt the pace, accommodation and
              experiences to your priorities.
            </p>

            <div className="mt-6 space-y-3">
              {travelStyles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-white/70 sm:text-sm"
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
              draggable="false"
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

      {/* =========================
          BOOKING STEPS
      ========================== */}
      <section className="border-t border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Booking Journey
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              From idea to departure.
            </h2>

            <p className="mt-2 text-xs text-white/55 sm:text-sm">
              A simple process designed to make your travel planning
              clear and comfortable.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-night
                  p-5
                  transition
                  duration-300
                  hover:border-gold/30
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-gold">
                    {step.number}
                  </span>

                  <span className="text-lg">{step.icon}</span>
                </div>

                <h3 className="mt-5 text-sm font-bold">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CUSTOM TRIP CTA
      ========================== */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Custom Travel
          </p>

          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Looking for something different?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
            Tell us where you want to go, how many people are traveling
            and what kind of experience you want.
          </p>

          <button
            type="button"
            onClick={() => onBook()}
            className="
              mt-6
              rounded-full
              bg-gold
              px-6
              py-3
              text-xs
              font-bold
              text-night
              transition
              hover:bg-gold-light
            "
          >
            Plan a Custom Trip
          </button>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}
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