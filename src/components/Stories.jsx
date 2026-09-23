import { stories } from "../data/travelData";

export default function Stories() {
  return (
    <section className="grid grid-cols-1 gap-3 bg-night p-3 sm:grid-cols-2">
      {stories.map((story) => (
        <article
          key={story.number}
          className="group relative h-[320px] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat sm:h-[380px] md:h-[420px]"
          style={{
            backgroundImage: `url(${story.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white md:p-6">
            <span className="mb-2 block text-sm tracking-widest text-white/70">
              {story.number}
            </span>

            <h3 className="text-xl font-semibold md:text-2xl">
              {story.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
              {story.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}