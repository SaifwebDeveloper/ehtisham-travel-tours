
import { packages } from "../data/travelData";

const USD_RATE = 280;

const getPKRValue = (price) => {
  if (typeof price !== "string") return null;

  const match = price.match(/[\d,]+/);

  if (!match) return null;

  return Number(match[0].replace(/,/g, ""));
};

const getUSDPrice = (price) => {
  const pkr = getPKRValue(price);

  if (!pkr) return null;

  return Math.round(pkr / USD_RATE);
};

export default function Packages({ onBook }) {
  return (
    <section
      id="packages"
      className="border-t border-white/5 bg-night py-28"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="section-kicker">
              Tour Packages
            </p>

            <h2 className="section-title">
              Journeys ready
              <br />
              <em>to book.</em>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Every package includes transport, hotels, meals, guide, tolls
              and fuel. Choose a route or ask us to build a custom plan.
            </p>

            {/* 25% Offer */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-black text-night">
                %
              </span>

              <span className="text-xs font-bold text-gold">
                Special Offer · 25% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const usdPrice = getUSDPrice(pkg.price);

            return (
              <article
                key={pkg.id}
                className="
                  package-card
                  group
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-gold/30
                "
              >
                {/* Image */}
                <div
                  className="
                    package-img
                    relative
                    overflow-hidden
                  "
                  style={{
                    backgroundImage: `url("${pkg.image}")`,
                  }}
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Duration */}
                  <span className="package-badge relative z-10">
                    {pkg.duration}
                  </span>

                  {/* 25% OFF */}
                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      z-10
                      rounded-full
                      bg-gold
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-night
                      shadow-lg
                    "
                  >
                    25% OFF
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Location */}
                  {pkg.location && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      📍 {pkg.location}
                    </p>
                  )}

                  {/* Price */}
                  <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-4">

                    {usdPrice ? (
                      <>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Starting Price
                        </p>

                        <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-2xl font-black text-gold">
                            {pkg.price}
                          </span>

                          <span className="text-sm font-semibold text-white/60">
                            ≈ ${usdPrice.toLocaleString()}
                          </span>
                        </div>

                        <p className="mt-1 text-[10px] text-white/30">
                          PKR / person
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Pricing
                        </p>

                        <p className="mt-1 text-lg font-bold text-gold">
                          {pkg.price}
                        </p>

                        <p className="mt-1 text-[10px] text-white/35">
                          Contact us for a personalized quotation.
                        </p>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="package-title mt-5">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="package-description">
                    {pkg.description}
                  </p>

                  {/* Booking */}
                  <button
                    type="button"
                    onClick={() => onBook(pkg.destination || pkg.title)}
                    className="
                      mt-5
                      text-sm
                      font-bold
                      text-gold
                      transition
                      duration-300
                      hover:text-emerald-400
                    "
                  >
                    Book this journey →
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Offer Note */}
        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/[0.04] px-5 py-4">
          <p className="text-center text-xs leading-6 text-white/50">
            <span className="font-bold text-gold">
              25% OFF Special Offer:
            </span>{" "}
            The package prices displayed above are the original package
            prices. The promotional offer is shown separately and does not
            change the actual prices stored in your package data.
          </p>
        </div>

      </div>
    </section>
  );
}
