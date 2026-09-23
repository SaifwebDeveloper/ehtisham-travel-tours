import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function MainLayout({
  bookingOpen,
  selectedDestination,
  onBook,
  onCloseBooking,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-white">
      {/* Navigation */}
      <Navbar onBook={() => onBook()} />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Booking Modal */}
      <BookingModal
        open={bookingOpen}
        selectedDestination={selectedDestination}
        onClose={onCloseBooking}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}