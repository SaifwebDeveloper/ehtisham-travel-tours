
const services = [
  {
    number: "01",
    title: "Family Tours",
    description:
      "Comfortable and carefully planned journeys for families who want to explore without unnecessary stress.",
  },
  {
    number: "02",
    title: "Honeymoon Escapes",
    description:
      "Private mountain getaways designed around beautiful locations, comfortable stays and memorable experiences.",
  },
  {
    number: "03",
    title: "Student Groups",
    description:
      "Organized group trips with practical planning, transportation and on-ground coordination.",
  },
  {
    number: "04",
    title: "Corporate Retreats",
    description:
      "Travel experiences for teams, organizations and groups looking for a change of environment.",
  },
  {
    number: "05",
    title: "Winter Adventures",
    description:
      "Mountain experiences designed around snow, winter landscapes and seasonal destinations.",
  },
  {
    number: "06",
    title: "Custom Itineraries",
    description:
      "Tell us your destination, schedule and preferences and we will help shape the journey around you.",
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
    <div className="bg-night pt-24">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Our Services
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Everything you need for a smoother journey.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          From transportation and accommodation to complete tour management,
          we take care of the details so you can enjoy the journey.
        </p>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="bg-night p-8 transition hover:bg-white/[0.03]"
            >
              <span className="text-sm font-bold text-gold">
                {service.number}
              </span>

              <h2 className="mt-8 font-display text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                On The Ground
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold">
                We manage the details.
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                Good travel is not only about where you go. It is also about
                how smoothly everything comes together. Our team coordinates
                the practical parts of your journey.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {support.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="mb-4 h-2 w-2 rounded-full bg-gold" />
                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold">
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
          className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 font-bold text-night transition hover:bg-gold-light"
        >
          Talk to Us on WhatsApp
        </a>
      </section>
    </div>
  );
}
