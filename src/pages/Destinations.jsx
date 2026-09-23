
import { Link } from "react-router-dom";

import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageHeartMountains from "../assets/package-heart-mountains.jpg";

const destinations = [
  {
    name: "Skardu",
    region: "Gilgit-Baltistan",
    image: packageSkardu,
    description:
      "Towering mountains, turquoise lakes, cold deserts and some of Pakistan's most dramatic landscapes.",
    season: "Best from April to October",
  },
  {
    name: "Hunza",
    region: "Gilgit-Baltistan",
    image: packageHunza,
    description:
      "A beautiful mountain valley known for its culture, forts, orchards and spectacular peaks.",
    season: "Best from April to November",
  },
  {
    name: "Neelam Valley",
    region: "Azad Kashmir",
    image: packageNeelam,
    description:
      "Green valleys, flowing rivers and peaceful mountain communities make Neelam a memorable escape.",
    season: "Best from March to October",
  },
  {
    name: "Swat & Malam Jabba",
    region: "Khyber Pakhtunkhwa",
    image: packageHeartMountains,
    description:
      "Mountain scenery, forests, rivers and winter adventures in one of Pakistan's most accessible northern regions.",
    season: "Year-round",
  },
];

export default function DestinationsPage() {
  return (
    <div className="bg-night pt-24">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Destinations
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          The mountains are waiting.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          Explore some of the most remarkable destinations across Northern
          Pakistan with a team that knows the roads, seasons and places.
        </p>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className={`grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="h-80 lg:h-[430px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {destination.region}
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold">
                  {destination.name}
                </h2>

                <p className="mt-5 leading-8 text-white/55">
                  {destination.description}
                </p>

                <div className="mt-6 border-l-2 border-gold/50 pl-4 text-sm text-white/65">
                  {destination.season}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit rounded-full bg-gold px-6 py-3 font-bold text-night transition hover:bg-gold-light"
                >
                  Plan This Trip
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}