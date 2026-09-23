
import familyTour from "../assets/trip-family-mountains.jpg";
import honeymoon from "../assets/trip-lake-banner.jpg";
import studentGroups from "../assets/trip-winter-students.jpg";
import corporate from "../assets/trip-hotel-group.jpg";
import winter from "../assets/trip-malam-jabba.jpg";
import customTour from "../assets/trip-jeep-family.jpg";

const services = [
  {
    number: "01",
    title: "Family Tours",
    description:
      "Comfortable and carefully planned journeys for families who want to explore without unnecessary stress.",
    image: familyTour,
  },
  {
    number: "02",
    title: "Honeymoon Escapes",
    description:
      "Private mountain getaways designed around beautiful locations, comfortable stays and memorable experiences.",
    image: honeymoon,
  },
  {
    number: "03",
    title: "Student Groups",
    description:
      "Organized group trips with practical planning, transportation and on-ground coordination.",
    image: studentGroups,
  },
  {
    number: "04",
    title: "Corporate Retreats",
    description:
      "Travel experiences for teams, organizations and groups looking for a change of environment.",
    image: corporate,
  },
  {
    number: "05",
    title: "Winter Adventures",
    description:
      "Mountain experiences designed around snow, winter landscapes and seasonal destinations.",
    image: winter,
  },
  {
    number: "06",
    title: "Custom Itineraries",
    description:
      "Tell us your destination, schedule and preferences and we will help shape the journey around you.",
    image: customTour,
  },
];

const support = [
  "Transport",
  "Accommodation",
  "Meals",
  "Tour Management",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-night pt-24 text-white">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Our Services
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Everything you need for a smoother journey.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          From transportation and accommodation to complete tour management,
          we take care of the details so you can enjoy the journey.
        </p>
      </section>

      {/* =========================
          SERVICES CARDS
      ========================== */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} travel service`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />

                {/* Service Number */}
                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-gold backdrop-blur-md">
                  {service.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-white/50">
                  {service.description}
                </p>

                {/* Small indicator */}
                <div className="mt-6 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          ON THE GROUND
      ========================== */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                On The Ground
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold leading-tight">
                We manage the details.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/55">
                Good travel is not only about where you go. It is also about
                how smoothly everything comes together. Our team coordinates
                the practical parts of your journey.
              </p>
            </div>

            {/* Support Cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {support.map((item) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 h-2 w-2 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />

                  <h3 className="font-semibold">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================== */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Start Planning
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          Tell us the journey you need.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
          Whether it is a family holiday, student trip, honeymoon or custom
          adventure, we can help you plan it.
        </p>

        <a
          href="https://wa.me/923450885842"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 font-bold text-night transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/10"
        >
          Talk to Us on WhatsApp
        </a>
      </section>

    </div>
  );
}
