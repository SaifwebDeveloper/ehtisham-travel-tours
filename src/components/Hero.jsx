import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageFamilyLake from "../assets/package-family-lake.jpg";
import heroVideo from "../assets/media/video.mp4";

const slides = [
  {
    type: "video",
    src: heroVideo,
  },
  {
    type: "image",
    src: packageSkardu,
  },
  {
    type: "image",
    src: packageHunza,
  },
  {
    type: "image",
    src: packageNeelam,
  },
  {
    type: "image",
    src: packageFamilyLake,
  },
];

export default function Hero({
  onBook,
  eyebrow,
  title,
  description,
  titleEmphasis,
}) {
  const isHome = !eyebrow && !title;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const currentSlide = slides[activeSlide];

    const duration = currentSlide.type === "video" ? 12000 : 5000;

    const timer = setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section
      id={isHome ? "home" : undefined}
      className={`relative flex items-center overflow-hidden ${
        isHome ? "min-h-screen" : "min-h-[50vh]"
      }`}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={`${slide.type}-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.type === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.src})`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 ${
          isHome
            ? "bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40"
            : "bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/85"
        }`}
      />

      {/* Content Container - Fixed Navbar overlap with pt-28 sm:pt-36 */}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 sm:pt-36 md:pt-32 ${
          isHome ? "" : "text-center"
        }`}
      >
        {isHome ? (
          <div className="max-w-3xl">
            {/* Certification Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
              <span className="text-gold">✓</span>
              PTDC Certified Tour Guide · Licence ID 1010
            </div>

            {/* Location Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur sm:mb-5 sm:ml-2 sm:px-4 sm:py-2 sm:text-xs">
              <span className="text-gold">✓</span>
              Northern Pakistan · Hosted Journeys
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to
              <br />
              <em className="text-gold not-italic">
                Ehtisham Travel & Tours
              </em>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
              Professional honeymoon, family, student, corporate and winter
              journeys through the mountains, lakes and valleys of Northern
              Pakistan.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full sm:mt-10">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Packages ↗
              </Link>

              <button
                type="button"
                onClick={onBook}
                className="inline-flex items-center justify-center rounded-lg border border-gold/50 bg-amber-500/10 px-7 py-3.5 text-sm font-bold text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:px-8 sm:py-4 sm:text-base"
              >
                Book Your Adventure
              </button>
            </div>

            {/* Features */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-400 sm:mt-10 sm:gap-x-8 sm:text-sm">
              <span>
                <strong className="text-emerald-400">✓</strong> Transport
              </span>

              <span>
                <strong className="text-emerald-400">✓</strong> Hotels
              </span>

              <span>
                <strong className="text-emerald-400">✓</strong> Meals
              </span>

              <span>
                <strong className="text-emerald-400">✓</strong> Local Guide
              </span>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
              {titleEmphasis ? (
                <>
                  {title}{" "}
                  <span className="text-gold">{titleEmphasis}</span>
                </>
              ) : (
                title
              )}
            </h1>

            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
                {description}
              </p>
            )}

            {onBook && (
              <button
                type="button"
                onClick={() => onBook()}
                className="mt-6 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-night transition hover:bg-gold-light sm:mt-8 sm:px-8 sm:py-4"
              >
                Book Your Adventure
              </button>
            )}
          </div>
        )}
      </div>

      {/* Scroll Down Indicator */}
      {isHome && (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[.25em] text-slate-400 sm:bottom-8">
          Scroll to explore
          <span className="ml-2 inline-block animate-bounce text-gold">
            ↓
          </span>
        </div>
      )}

      {/* Slide Controls */}
      <div className="absolute bottom-6 right-6 z-10 hidden gap-2 sm:flex sm:bottom-8">
        {slides.map((slide, index) => (
          <button
            key={`${slide.type}-${index}`}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "w-8 bg-gold"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}