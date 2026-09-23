
import { useEffect, useState } from "react";

import tripJeepFamily from "../assets/trip-jeep-family.jpg";
import tripLakeBanner from "../assets/trip-lake-banner.jpg";
import tripFamilyValley from "../assets/trip-family-valley.jpg";
import tripSnowTeam from "../assets/trip-snow-team.jpg";
import tripWinterStudents from "../assets/trip-winter-students.jpg";
import tripMalamJabba from "../assets/trip-malam-jabba.jpg";
import img0235 from "../assets/IMG-20260919-WA0235.jpg";
import img0231 from "../assets/IMG-20260919-WA0231.jpg";
import img0218 from "../assets/IMG-20260919-WA0218.jpg";
import img0168 from "../assets/IMG-20260919-WA0168.jpg";

const gallery = [
  {
    image: tripJeepFamily,
    title: "Family Adventure",
    category: "Family",
  },
  {
    image: tripLakeBanner,
    title: "Mountain Lakes",
    category: "Skardu",
  },
  {
    image: tripFamilyValley,
    title: "Valley Journey",
    category: "Family",
  },
  {
    image: tripSnowTeam,
    title: "Winter Group",
    category: "Winter",
  },
  {
    image: tripWinterStudents,
    title: "Student Adventure",
    category: "Students",
  },
  {
    image: tripMalamJabba,
    title: "Malam Jabba",
    category: "Winter",
  },
  {
    image: img0235,
    title: "Northern Journey",
    category: "Group Tour",
  },
  {
    image: img0231,
    title: "Shared Memories",
    category: "Family",
  },
  {
    image: img0218,
    title: "Mountain Escape",
    category: "Skardu",
  },
  {
    image: img0168,
    title: "Travel Together",
    category: "Group Tour",
  },
];

const filters = [
  "All",
  "Family",
  "Students",
  "Winter",
  "Skardu",
  "Group Tour",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery =
    activeFilter === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="bg-night pt-24">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Gallery
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Stories from the road.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
          A glimpse into the places, people and moments that make every
          journey special.
        </p>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-gold text-night"
                    : "border border-white/10 bg-white/[0.03] text-white/60 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredGallery.map((item) => (
              <button
                key={item.title + item.image}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group mb-5 block w-full overflow-hidden rounded-2xl text-left"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-display text-xl font-bold">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white"
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}