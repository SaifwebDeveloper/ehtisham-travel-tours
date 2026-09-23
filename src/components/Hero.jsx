import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageFamilyLake from "../assets/package-family-lake.jpg";

const slides = [
  packageSkardu,
  packageHunza,
  packageNeelam,
  packageFamilyLake,
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
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id={isHome ? "home" : undefined}
      className={`relative flex items-center overflow-hidden ${
        isHome ? "min-h-[850px]" : "min-h-[420px] sm:min-h-[480px]"
      }`}
    >
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 ${
          isHome
            ? "bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40"
            : "bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/85"
        }`}
      />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:pt-32 ${
          isHome ? "" : "text-center"
        }`}
      >
        {isHome ? (
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur sm:px-4 sm:text-xs">
              <span className="text-gold">✓</span>
              PTDC Certified Tour Guide · Licence ID 1010
            </div>

            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.32em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Northern Pakistan · Hosted Journeys
            </p>

            <h1 className="font-display text-6xl font-bold leading-[.98] tracking-[-.03em] text-white sm:text-7xl lg:text-[88px]">
              Welcome to 
              <br />
              <em className="text-gold">Ehtisham Travel & Tours</em>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Professional honeymoon, family, student, corporate and winter
              journeys through the mountains, lakes and valleys of Northern
              Pakistan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/packages"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                Explore Packages ↗
              </Link>

              <button
                type="button"
                onClick={onBook}
                className="inline-flex items-center rounded-lg border border-gold/50 bg-amber-500/10 px-7 py-4 text-sm font-bold text-gold backdrop-blur transition hover:bg-gold hover:text-night"
              >
                Book Your Adventure
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold text-slate-400">
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

            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
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
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                {description}
              </p>
            )}

            {onBook && (
              <button
                type="button"
                onClick={() => onBook()}
                className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-night transition hover:bg-gold-light"
              >
                Book Your Adventure
              </button>
            )}
          </div>
        )}
      </div>

      {isHome && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[.25em] text-slate-400">
          Scroll to explore
          <span className="ml-2 inline-block animate-bounce text-gold">↓</span>
        </div>
      )}

      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 sm:flex">
        {slides.map((_, index) => (
          <button
            key={index}
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
