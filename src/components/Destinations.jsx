import { trips } from "../data/travelData";

export default function Destinations() {
  return (
    <section id="destinations" className="border-t border-white/5 bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="section-kicker">Trip Lengths</p>

        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="section-title">
            Trips by <em>length.</em>
          </h2>

          <p className="text-sm leading-7 text-slate-400">
            From a quick weekend in the meadows to a full Karakoram expedition,
            every plan is fully hosted.
          </p>
        </div>

        <div className="grid border-y border-white/10 md:grid-cols-2">
          {trips.map((trip, index) => (
            <article
              key={trip.number}
              className={`trip-row ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : ""}`}
            >
              <b className="trip-number">{trip.number}</b>

              <div>
                <small className="trip-label">{trip.duration}</small>

                <h3 className="trip-title">{trip.title}</h3>

                <p className="trip-description">{trip.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}