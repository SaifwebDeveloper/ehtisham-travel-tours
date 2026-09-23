import { steps } from "../data/travelData";

export default function HowItWorks() {
  return (
    <section id="about" className="border-t border-white/5 bg-slate-900 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="section-kicker">How It Works</p>

          <h2 className="section-title">
            Four simple
            <br />
            <em>steps.</em>
          </h2>
        </div>

        <div className="border-t border-white/10">
          {steps.map((step) => (
            <article key={step.number} className="step-row">
              <b className="step-number">{step.number}</b>

              <div>
                <h3 className="step-title">{step.title}</h3>

                <p className="step-description">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}