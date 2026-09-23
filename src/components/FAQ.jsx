import { useState } from "react";
import { faqs } from "../data/travelData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="border-t border-white/5 bg-night py-28">
      <div className="mx-auto max-w-4xl px-5">
        <p className="section-kicker">FAQ</p>

        <h2 className="section-title">
          Before you <em>go.</em>
        </h2>

        <div className="mt-12 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="faq-btn"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span
                    className={`faq-icon ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`faq-answer ${
                    isOpen ? "open" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}