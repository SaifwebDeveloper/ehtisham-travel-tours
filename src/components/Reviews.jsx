import { reviews } from "../data/travelData";

export default function Reviews() {
  return (
    <section className="border-t border-white/5 bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="section-kicker">Reviews</p>

        <h2 className="section-title">
          Traveller <em>reviews.</em>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <blockquote key={index} className="review-card">
              <div className="text-gold">★★★★★</div>

              <p className="review-text">“{review.text}”</p>

              <footer>
                <strong className="review-name">{review.name}</strong>
                <span className="review-meta">{review.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}