export default function Intro() {
  return (
    <section className="border-y border-white/10 bg-slate-900/60 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-end">
        <div>
          <p className="section-kicker">Journey Moments</p>

          <h2 className="section-title">
            Stories from
            <br />
            <em>the road.</em>
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Real arrivals, warm welcomes and memorable moments from our hosted
          tours. From the first airport pickup to the final farewell, our team
          stays with you throughout the journey.
        </p>
      </div>
    </section>
  );
}