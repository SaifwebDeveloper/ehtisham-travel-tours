import { gallery } from "../data/travelData";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-white/5 bg-night py-28">
      <div className="mx-auto max-w-7xl px-5">
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

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.title}
              className={`gallery-tile ${item.className}`}
              style={{ backgroundImage: `url("${item.image}")` }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}