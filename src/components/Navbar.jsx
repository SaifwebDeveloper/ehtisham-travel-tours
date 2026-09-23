import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ehtisham-logo.jpg";

export default function Navbar({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    ["Packages", "/packages"],
    ["Destinations", "/destinations"],
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <img
            src={logo}
            alt="Ehtisham Travel & Tours"
            width="48"
            height="48"
            className="h-10 w-10 rounded-full object-cover shadow-lg ring-1 ring-white/10 sm:h-11 sm:w-11"
          />

          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-extrabold text-white sm:text-base">
              Ehtisham Travel & Tours
            </span>

            <span className="block truncate text-[9px] font-bold uppercase tracking-wide text-white/65 sm:text-[11px]">
              We Plan Your Adventures
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={`relative text-sm font-bold transition duration-300 ${
                isActive(path)
                  ? "text-gold"
                  : "text-white/75 hover:text-gold"
              }`}
            >
              {label}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                  isActive(path) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/travel_with_ehtisham_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="group grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[19px] w-[19px]"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* Google Maps */}
          <a
            href="https://maps.app.goo.gl/d1QDQKVXQnn2CBwf7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
            title="Google Maps"
            className="group grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[20px] w-[20px]"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </a>

          {/* BOOK NOW */}
          <button
            type="button"
            onClick={onBook}
            className="ml-1 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-night shadow-lg transition duration-300 hover:scale-105 hover:shadow-gold/20"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-white transition duration-300 hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">

          <div className="flex flex-col gap-1">

            {navItems.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`rounded-xl px-3 py-3 font-semibold transition duration-300 ${
                  isActive(path)
                    ? "bg-white/5 text-gold"
                    : "text-white/80 hover:bg-white/5 hover:text-gold"
                }`}
              >
                <span className="flex items-center justify-between">
                  {label}

                  {isActive(path) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </span>
              </Link>
            ))}

            {/* MOBILE SOCIAL LINKS */}
            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-4">

              <a
                href="https://www.instagram.com/travel_with_ehtisham_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold/60 hover:bg-white/10 hover:text-gold"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://maps.app.goo.gl/d1QDQKVXQnn2CBwf7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold/60 hover:bg-white/10 hover:text-gold"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </a>

              <span className="text-xs font-medium text-white/40">
                Follow & Find Us
              </span>
            </div>

            {/* MOBILE BOOKING */}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onBook();
              }}
              className="mt-4 rounded-xl bg-gold px-5 py-3.5 font-bold text-night transition duration-300 hover:brightness-110"
            >
              Book Your Adventure
            </button>

          </div>
        </div>
      )}
    </header>
  );
}