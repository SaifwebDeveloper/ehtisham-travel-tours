
import { packages } from "../data/travelData";

const DISCOUNT = 0.25;
const USD_RATE = 280;

// Extract numeric PKR value from price
const getPKRValue = (price) => {
  if (typeof price !== "string") return null;

  const match = price.match(/[\d,]+/);

  if (!match) return null;

  return Number(match[0].replace(/,/g, ""));
};

// Calculate original price before 25% discount
const getOriginalPrice = (finalPrice) => {
  const pkr = getPKRValue(finalPrice);

  if (!pkr) return null;

  return Math.round(pkr / (1 - DISCOUNT));
};

// Convert final PKR price to approximate USD
const getUSDPrice = (price) => {
  const pkr = getPKRValue(price);

  if (!pkr) return null;

  return Math.round(pkr / USD_RATE);
};

// Format PKR
const formatPKR = (price) => {
  return `Rs ${price.toLocaleString("en-PK")}`;
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
            <p className="section-kicker">Tour Packages</p>

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

            {/* Offer Badge */}
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

        {/* Packages */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const finalPKR = getPKRValue(pkg.price);
            const originalPKR = getOriginalPrice(pkg.price);
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
                  className="package-img relative overflow-hidden"
                  style={{
                    backgroundImage: `url("${pkg.image}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Duration */}
                  <span className="package-badge relative z-10">
                    {pkg.duration}
                  </span>

                  {/* Discount */}
                  {finalPKR && (
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
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Location */}
                  {pkg.location && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      📍 {pkg.location}
                    </p>
                  )}

                  {/* Pricing */}
                  {finalPKR ? (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">

                      {/* Original Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-white/35">
                          Original:
                        </span>

                        <span className="text-sm font-semibold text-white/35 line-through">
                          {formatPKR(originalPKR)}
                        </span>
                      </div>

                      {/* Discount */}
                      <div className="mt-2">
                        <span
                          className="
                            inline-flex
                            rounded-full
                            bg-gold/10
                            px-2.5
                            py-1
                            text-[10px]
                            font-black
                            uppercase
                            tracking-wider
                            text-gold
                          "
                        >
                          25% OFF
                        </span>
                      </div>

                      {/* Final Price */}
                      <div className="mt-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Now
                        </p>

                        <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-2xl font-black text-gold">
                            {formatPKR(finalPKR)}
                          </span>

                          {usdPrice && (
                            <span className="text-sm font-semibold text-white/50">
                              ≈ ${usdPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-[10px] text-white/30">
                          per person
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Quote Based Package */
                    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Pricing
                      </p>

                      <p className="mt-1 text-lg font-bold text-gold">
                        {pkg.price}
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-white/35">
                        Contact us for a personalized quotation.
                      </p>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="package-title mt-5">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="package-description">
                    {pkg.description}
                  </p>

                  {/* Book Button */}
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

        {/* Promotional Information */}
        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-lg">
                🎁
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  Special 25% Promotional Offer
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/45">
                  Enjoy 25% OFF selected tour packages.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
