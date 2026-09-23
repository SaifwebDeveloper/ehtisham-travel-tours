export default function BookingCTA({ onBook }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-emerald-950/60 py-28">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 text-center">
        <p className="section-kicker">Start Your Journey</p>

        <h2 className="section-title mx-auto max-w-2xl">
          Let's plan your trip
          <br />
          <em>around you.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
          Tell us where you want to go, who is travelling and when. Click
          below to fill your trip details and receive a direct plan on
          WhatsApp.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => onBook()}
            className="rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white transition hover:bg-emerald-500"
          >
            📋 Open Booking Enquiry Form
          </button>
        </div>
      </div>
    </section>
  );
}