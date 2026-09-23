import { services } from "../data/travelData";

export default function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-night py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="section-kicker">Why Ehtisham Travel</p>

            <h2 className="section-title">
              Travel with
              <br />
              <em>local confidence.</em>
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            We coordinate the practical details so your group can spend its
            time experiencing the destination.
          </p>
        </div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <span className="service-number">{service.number}</span>

              <h3 className="service-title">{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}