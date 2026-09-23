import { gallery } from "../data/travelData";

export default function Gallery() {
  // Duplicate the images so the animation can loop seamlessly
  const infiniteGallery = [...gallery, ...gallery];

  return (
    <section
      id="gallery"
      className="overflow-hidden border-t border-white/5 bg-night py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="section-kicker">Our Clients</p>

            <h2 className="section-title">
              Groups we
              <br />
              <em>hosted.</em>
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            Trusted by families, students and corporate teams travelling across
            Pakistan.
          </p>
        </div>
      </div>

      {/* Infinite Gallery */}
      <div className="gallery-marquee w-full overflow-hidden">
        <div className="gallery-track flex w-max gap-4">
          {infiniteGallery.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="gallery-tile group relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat sm:h-[320px] sm:w-[360px] md:h-[360px] md:w-[440px]"
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Title */}
              <span className="absolute bottom-5 left-5 z-10 text-lg font-medium text-white transition-transform duration-500 group-hover:-translate-y-1">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}