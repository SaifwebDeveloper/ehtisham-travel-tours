import { packages } from "../data/travelData";

export default function Packages({ onBook }) {
  return (
    <section id="packages" className="border-t border-white/5 bg-night py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="section-kicker">Tour Packages</p>

            <h2 className="section-title">
              Journeys ready
              <br />
              <em>to book.</em>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Every package includes transport, hotels, meals, guide, tolls and
            fuel. Choose a route or ask us to build a custom plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.id} className="package-card">
              <div
                className="package-img"
                style={{ backgroundImage: `url("${pkg.image}")` }}
              >
                <span className="package-badge">{pkg.duration}</span>
              </div>

              <div className="p-6">
                <small className="package-price">{pkg.price}</small>

                <h3 className="package-title">{pkg.title}</h3>

                <p className="package-description">{pkg.description}</p>

                <button
                  type="button"
                  onClick={() => onBook(pkg.destination)}
                  className="text-sm font-bold text-gold transition hover:text-emerald-400"
                >
                  Book this journey →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}