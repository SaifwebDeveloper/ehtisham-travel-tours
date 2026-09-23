
import hostImage from "../assets/IMG-20260919-WA0223.jpg";
import guestsImage from "../assets/IMG-20260919-WA0231.jpg";
import logo from "../assets/ehtisham-logo.jpg";

const values = [
  {
    title: "Safety Before Schedule",
    text: "We believe a good journey starts with responsible planning and attention to the road ahead.",
  },
  {
    title: "Hospitality With Heart",
    text: "Every guest should feel welcomed, respected and looked after throughout the journey.",
  },
  {
    title: "Local Knowledge",
    text: "Our experience with northern destinations helps us plan journeys around real conditions and experiences.",
  },
  {
    title: "Travel For Everyone",
    text: "Families, students, couples, friends and organizations can all find a journey that fits them.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-night pt-24">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          About Us
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Travel the north with people who know it.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          Ehtisham Travel & Tours creates carefully managed journeys across
          the mountains and valleys of Northern Pakistan.
        </p>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:grid-cols-2">
          <div className="h-[450px]">
            <img
              src={hostImage}
              alt="Ehtisham Travel & Tours"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Meet Your Hosts
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold">
              Local experience. Personal hosting.
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Our goal is simple: make it easier for travelers to experience
              the beauty of Pakistan's northern regions while taking care of
              the details that make a trip comfortable.
            </p>

            <div className="mt-7 rounded-2xl border border-gold/20 bg-gold/5 p-5">
              <p className="text-sm font-bold text-gold">
                PTDC Certified Tour Guide
              </p>

              <p className="mt-1 text-sm text-white/60">
                Licence ID 1010
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Our Values
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold">
              How we approach travel.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="h-2 w-2 rounded-full bg-gold" />

                <h3 className="mt-6 font-display text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Our Promise
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold">
              You enjoy the journey. We manage the details.
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              From the first conversation to the final day of your trip, we
              aim to make your travel experience organized, comfortable and
              memorable.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["500+", "Travellers"],
                ["9", "Years Experience"],
                ["40+", "Tours Yearly"],
                ["4.9", "Guest Rating"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="font-display text-3xl font-bold text-gold">
                    {number}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-wider text-white/40">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={guestsImage}
              alt="Guests travelling with Ehtisham Travel & Tours"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-6 lg:px-8">
        <img
          src={logo}
          alt="Ehtisham Travel & Tours"
          className="mx-auto h-16 w-16 rounded-full object-cover"
        />

        <h2 className="mt-6 font-display text-3xl font-bold">
          Ready to plan your next adventure?
        </h2>

        <a
          href="https://wa.me/923450885842"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex rounded-full bg-gold px-7 py-3.5 font-bold text-night transition hover:bg-gold-light"
        >
          Chat With Us
        </a>
      </section>
    </div>
  );
}
