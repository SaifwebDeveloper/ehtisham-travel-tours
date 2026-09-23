import { useEffect, useState } from "react";

import logo from "../assets/ehtisham-logo.jpg";

import { WHATSAPP_NUMBER } from "../data/contactInfo";

export default function BookingModal({
  open,
  onClose,
  selectedDestination = "",
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    type: "Family",
    group: "",
    dates: "",
    city: "",
    budget: "",
    notes: "",
  });

  useEffect(() => {
    if (selectedDestination) {
      setForm((current) => ({
        ...current,
        destination: selectedDestination,
      }));
    }
  }, [selectedDestination]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello Ehtisham Travel & Tours,

I would like to inquire about a tour.

Name: ${form.name}
Phone / WhatsApp: ${form.phone}
Destination: ${form.destination}
Trip Type: ${form.type}
Group Size: ${form.group || "Not specified"}
Preferred Dates: ${form.dates || "Not specified"}
Departure City: ${form.city || "Not specified"}
Budget: ${form.budget || "Not specified"}
Additional Notes: ${form.notes || "None"}

Please share availability, itinerary and pricing.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    onClose();
  };

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-panel relative my-8 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20"
        >
          ×
        </button>

        <div className="mb-6 flex items-center gap-3 pr-10">
          <img
            src={logo}
            alt="Ehtisham Travel & Tours"
            className="h-10 w-10 rounded-full border border-gold/70 object-cover"
          />

          <div>
            <h3
              id="booking-title"
              className="font-display text-2xl font-bold text-white"
            >
              Book Your Journey
            </h3>

            <p className="text-xs text-emerald-400">
              Ehtisham Travel & Tours · PTDC Guide 1010
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="booking-field">
              Your name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
              />
            </label>

            <label className="booking-field">
              Phone / WhatsApp
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+92 3XX XXXXXXX"
              />
            </label>

            <label className="booking-field">
              Destination
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select a destination</option>
                <option value="Skardu Explorer">
                  Skardu Explorer
                </option>
                <option value="Hunza & Khunjerab">
                  Hunza & Khunjerab
                </option>
                <option value="Neelam Valley">
                  Neelam Valley
                </option>
                <option value="Skardu">Skardu Custom</option>
                <option value="Malam Jabba">Malam Jabba</option>
                <option value="Custom / Other">
                  Custom / Other
                </option>
              </select>
            </label>

            <label className="booking-field">
              Trip type
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>Family</option>
                <option>Honeymoon</option>
                <option>Student</option>
                <option>Corporate</option>
                <option>International Guest</option>
                <option>Winter Tour</option>
              </select>
            </label>

            <label className="booking-field">
              Group size
              <input
                name="group"
                type="number"
                min="1"
                value={form.group}
                onChange={handleChange}
                placeholder="Number of travellers"
              />
            </label>

            <label className="booking-field">
              Preferred date
              <input
                type="date"
                name="dates"
                value={form.dates}
                onChange={handleChange}
              />
            </label>

            <label className="booking-field">
              Departure city
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Islamabad, Lahore..."
              />
            </label>

            <label className="booking-field">
              Approximate budget
              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Per person or total"
              />
            </label>
          </div>

          <label className="booking-field mt-4">
            Anything we should know?
            <textarea
              name="notes"
              rows="3"
              value={form.notes}
              onChange={handleChange}
              placeholder="Hotel preference, children, accessibility, or places on your wish list"
            />
          </label>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-emerald-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-500"
          >
            Send Enquiry on WhatsApp ↗
          </button>

          <p className="mt-3 text-center text-[11px] text-slate-400">
            Direct booking request · No upfront payment needed
          </p>
        </form>
      </div>
    </div>
  );
}