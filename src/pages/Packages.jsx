
import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageFamilyLake from "../assets/package-family-lake.jpg";
import packageHeartMountains from "../assets/package-heart-mountains.jpg";

const packages = [
  {
    title: "Skardu Escape",
    location: "Skardu, Gilgit-Baltistan",
    image: packageSkardu,
    duration: "5 Days / 4 Nights",
    description:
      "Discover the dramatic landscapes, lakes, valleys and mountain views of Skardu.",
  },
  {
    title: "Hunza Adventure",
    location: "Hunza Valley",
    image: packageHunza,
    duration: "6 Days / 5 Nights",
    description:
      "Experience Hunza's peaceful valleys, historic forts, culture and breathtaking views.",
  },
  {
    title: "Neelam Valley",
    location: "Azad Kashmir",
    image: packageNeelam,
    duration: "4 Days / 3 Nights",
    description:
      "Explore lush valleys, rivers, mountain villages and beautiful Kashmir landscapes.",
  },
  {
    title: "Family Lake Escape",
    location: "Northern Pakistan",
    image: packageFamilyLake,
    duration: "5 Days / 4 Nights",
    description:
      "A comfortable family adventure designed around beautiful scenery and relaxed travel.",
  },
  {
    title: "Heart of the Mountains",
    location: "Northern Pakistan",
    image: packageHeartMountains,
    duration: "7 Days / 6 Nights",
    description:
      "A longer mountain journey for travelers who want to explore more of the north.",
  },
];

export default function PackagesPage({ onBook }) {
  return (
    <div className="bg-night pt-24">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,173,96,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Our Packages
          </p>

          <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Journeys designed for the way you travel.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Explore professionally planned journeys across the mountains,
            valleys and lakes of Northern Pakistan.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-gold/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  {item.duration}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  {item.location}
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => onBook(item.location)}
                  className="mt-6 w-full rounded-xl bg-gold px-5 py-3 font-bold text-night transition hover:bg-gold-light"
                >
                  Book This Journey
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Looking for something different?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/55">
            Tell us where you want to go, how many people are traveling and
            what kind of experience you want. We can help plan a custom
            journey.
          </p>

          <button
            type="button"
            onClick={() => onBook()}
            className="mt-8 rounded-full bg-gold px-7 py-3.5 font-bold text-night transition hover:bg-gold-light"
          >
            Plan a Custom Trip
          </button>
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link
          to="/contact"
          className="text-sm font-semibold text-gold hover:text-gold-light"
        >
          Need help choosing a package? Contact us →
        </Link>
      </div>
    </div>
  );
}