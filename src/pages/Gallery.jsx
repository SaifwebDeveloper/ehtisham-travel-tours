
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

  /* =========================
     CLOSE LIGHTBOX WITH ESC
  ========================== */

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

  /* =========================
     PREVENT BODY SCROLL
  ========================== */

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-night pt-24 text-white">

      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Gallery
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Stories from the road.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          A glimpse into the places, people and moments that make every
          journey special.
        </p>
      </section>

      {/* =========================
          GALLERY SECTION
      ========================== */}

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* =========================
              FILTER BUTTONS
          ========================== */}

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-gold text-night shadow-lg shadow-gold/10"
                      : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* =========================
              MASONRY GALLERY
          ========================== */}

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredGallery.map((item) => (
              <button
                key={`${item.title}-${item.image}`}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group mb-5 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left shadow-lg shadow-black/10"
              >
                <div className="relative overflow-hidden">

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    loading="lazy"
                    className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Information */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold sm:text-xs">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Click to view
                    </p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* =========================
              EMPTY STATE
          ========================== */}

          {filteredGallery.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-5 py-20 text-center">
              <p className="text-sm text-white/50">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================
          GALLERY CTA
      ========================== */}

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Your Journey
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Your next adventure could be here.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          Explore Northern Pakistan with a journey planned around your
          destination, schedule and travel preferences.
        </p>

        <a
          href="https://wa.me/923450885842"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-night transition-all duration-300 hover:bg-yellow-300 hover:shadow-xl hover:shadow-gold/10"
        >
          Plan Your Journey
        </a>
      </section>

      {/* =========================
          PHOTO CREDIT
      ========================== */}

      <section className="border-b border-white/10 bg-black/20 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-5xl text-center text-[9px] leading-5 text-slate-300 sm:text-[10px]">
  Destination photography: Fassifarooq, Mobeen Saeed, Zuhaira Farooq, Zeeshan Ali Qadri, Zaeem Siddiq and Farhan Rehman via Wikimedia Commons (CC BY-SA).
</p>
      </section>

      {/* =========================
          LIGHTBOX
      ========================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:right-6 sm:top-6"
          >
            ×
          </button>

          {/* Image Container */}
          <div className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl">

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold sm:text-xs">
                {selectedImage.category}
              </p>

              <h2 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
