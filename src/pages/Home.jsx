import InternationalPreview from "../components/InternationalPreview";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Stories from "../components/Stories";
import Packages from "../components/Packages";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import BookingCTA from "../components/BookingCTA";
import FAQ from "../components/FAQ";

export default function Home({ onBook }) {
  return (
    <>
      <Hero onBook={() => onBook()} />

      <Intro />

      <Packages onBook={onBook} />
      <Stories />

      

      <InternationalPreview onBook={onBook} />

      <Destinations />

      <Services />

      <HowItWorks />

      <Gallery />

      <Reviews />

      <BookingCTA onBook={() => onBook()} />

      <FAQ />
    </>
  );
}
