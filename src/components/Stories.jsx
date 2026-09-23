import { stories } from "../data/travelData";

export default function Stories() {
  return (
    <section className="grid gap-2 bg-night p-2 md:grid-cols-4">
      {stories.map((story) => (
        <article
          key={story.number}
          className={`story-card min-h-[280px] ${
            story.large
              ? "md:col-span-2 md:row-span-2 md:min-h-[420px]"
              : ""
          }`}
          style={{
            backgroundImage: `url(${story.image})`,
          }}
        >
          <div className="story-overlay" />

          <div className="story-content">
            <span>{story.number}</span>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}