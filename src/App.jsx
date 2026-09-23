
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import PackagesPage from "./pages/Packages";
import DestinationsPage from "./pages/Destinations";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

  const openBooking = (destination = "") => {
    setSelectedDestination(destination);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setSelectedDestination("");
  };

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            bookingOpen={bookingOpen}
            selectedDestination={selectedDestination}
            onBook={openBooking}
            onCloseBooking={closeBooking}
          />
        }
      >
        <Route
          path="/"
          element={<Home onBook={openBooking} />}
        />

        <Route
          path="/packages"
          element={<PackagesPage onBook={openBooking} />}
        />

        <Route
          path="/destinations"
          element={<DestinationsPage onBook={openBooking} />}
        />

        <Route
          path="/services"
          element={<ServicesPage onBook={openBooking} />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage onBook={openBooking} />}
        />
      </Route>
    </Routes>
  );
}