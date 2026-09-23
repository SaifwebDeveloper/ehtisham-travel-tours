import packageSkardu from "../assets/package-skardu.jpg";
import packageHunza from "../assets/package-hunza.jpg";
import packageNeelam from "../assets/package-neelam.jpg";
import packageFamilyLake from "../assets/package-family-lake.jpg";
import packageHeartMountains from "../assets/package-heart-mountains.jpg";

import tripJeepFamily from "../assets/trip-jeep-family.jpg";
import tripLakeBanner from "../assets/trip-lake-banner.jpg";
import tripFamilyValley from "../assets/trip-family-valley.jpg";
import tripSnowTeam from "../assets/trip-snow-team.jpg";

import img0235 from "../assets/IMG-20260919-WA0235.jpg";
import img0231 from "../assets/IMG-20260919-WA0231.jpg";
import tripWinterStudents from "../assets/trip-winter-students.jpg";
import img0218 from "../assets/IMG-20260919-WA0218.jpg";
import img0168 from "../assets/IMG-20260919-WA0168.jpg";
import tripMalamJabba from "../assets/trip-malam-jabba.jpg";

/* =========================================================
   PACKAGES
========================================================= */

export const packages = [
  {
    id: 1,
    duration: "8 Days",
    price: "Rs 32,000",
    title: "Skardu Explorer",
    description: "Skardu Airport · Kachura Lakes · Deosai",
    image: packageSkardu,
    destination: "Skardu Explorer",
  },
  {
    id: 2,
    duration: "5 Days",
    price: "Rs 22,000",
    title: "Hunza & Khunjerab",
    description: "Attabad Lake · Passu Cones · China Border",
    image: packageHunza,
    destination: "Hunza & Khunjerab",
  },
  {
    id: 3,
    duration: "3 Days",
    price: "Rs 13,000",
    title: "Neelam Valley",
    description: "Keran · Sharda · Arang Kel",
    image: packageNeelam,
    destination: "Neelam Valley",
  },
  {
    id: 4,
    duration: "5 Days",
    price: "Custom",
    title: "Family Lake Tour",
    description:
      "Mountain lake · Private transport · Family-friendly plan",
    image: packageFamilyLake,
    destination: "Custom / Other",
  },
  {
    id: 5,
    duration: "5 Days",
    price: "Custom",
    title: "Student Skardu Tour",
    description:
      "Student-friendly trips · Group transport · Guided experiences",
    image: packageSkardu,
    destination: "Skardu",
  },
  {
    id: 6,
    duration: "8 Days",
    price: "PKR 32,000",
    title: "Heart of the Mountains",
    description: "Skardu · Kachura Lakes · Deosai Plains",
    image: packageHeartMountains,
    destination: "Skardu",
  },
];

/* =========================================================
   STORIES
========================================================= */

export const stories = [
  {
    number: "01",
    title: "The Road to Adventure",
    description: "Every great journey begins together.",
    image: tripJeepFamily,
    large: true,
  },
  {
    number: "02",
    title: "A Warm Skardu Welcome",
    description: "Hospitality at the heart of every tour.",
    image: tripLakeBanner,
  },
  {
    number: "03",
    title: "Touchdown in Skardu",
    description: "Guests arriving beneath the Karakoram sky.",
    image: tripFamilyValley,
  },
  {
    number: "04",
    title: "Hosted from the First Step",
    description: "Personal care from arrival to farewell.",
    image: tripSnowTeam,
  },
];

/* =========================================================
   TRIPS
========================================================= */

export const trips = [
  {
    number: "01",
    duration: "3–5 Days",
    title: "Valley Escape",
    description: "Neelam Valley · Keran · Sharda",
  },
  {
    number: "02",
    duration: "5 Days",
    title: "Karakoram Highway Classic",
    description: "Hunza · China Border",
  },
  {
    number: "03",
    duration: "6 Days",
    title: "Land of Giants",
    description: "Skardu · Deosai · Basho Valley",
  },
  {
    number: "04",
    duration: "8 Days",
    title: "Our Signature Journey",
    description: "Hunza + Skardu Grand Tour",
  },
];

/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    number: "01",
    title: "PTDC Licence 1010",
    description:
      "Certified tour guide service with a locally managed travel experience.",
  },
  {
    number: "02",
    title: "Locally Guided",
    description:
      "Guides who know these roads, seasons and mountain routes from experience.",
  },
  {
    number: "03",
    title: "Safety First",
    description:
      "Verified drivers, maintained 4x4s and route checks for high-altitude travel.",
  },
  {
    number: "04",
    title: "Small Groups",
    description:
      "Balanced group sizes with practical attention throughout your journey.",
  },
  {
    number: "05",
    title: "Open 24 Hours",
    description:
      "Call or WhatsApp before, during and after your trip for direct support.",
  },
  {
    number: "06",
    title: "Fully Hosted",
    description:
      "Transport, stays, meals, permits and route planning handled in one place.",
  },
];

/* =========================================================
   BOOKING STEPS
========================================================= */

export const steps = [
  {
    number: "01",
    title: "Tell us your dates",
    description: "Share group size, budget and travel window.",
  },
  {
    number: "02",
    title: "Get a custom plan",
    description: "Route, hotels and costing within a few hours.",
  },
  {
    number: "03",
    title: "Confirm your seat",
    description: "Simple advance booking with transparent pricing.",
  },
  {
    number: "04",
    title: "Just travel",
    description: "We handle transport, stays, meals and permits.",
  },
];

/* =========================================================
   GALLERY
========================================================= */

export const gallery = [
  {
    title: "4x4 Family Expedition",
    image: img0235,
    className: "col-span-2 row-span-2",
  },
  {
    title: "Group Tour",
    image: img0231,
    className: "",
  },
  {
    title: "Winter Student Trip",
    image: tripWinterStudents,
    className: "",
  },
  {
    title: "Mountain Family Tour",
    image: img0218,
    className: "col-span-2",
  },
  {
    title: "Scenic Resort Escape",
    image: img0168,
    className: "",
  },
  {
    title: "Winter 4x4 Expedition",
    image: tripMalamJabba,
    className: "",
  },
];

/* =========================================================
   REVIEWS
========================================================= */

export const reviews = [
  {
    text: "We had an amazing experience on our 7-day trip to Skardu. Everything was well organized and smoothly managed by Ehtisham. From transportation and accommodation to the overall itinerary, everything was handled professionally.",
    name: "Ahmad Khattak",
    meta: "Skardu · 7 Days",
  },
  {
    text: "Had an amazing Skardu trip with Ehtisham Travel. Everything was well organized, the team was cooperative, and the whole journey was smooth and memorable.",
    name: "Ismail Mahmood",
    meta: "Skardu",
  },
  {
    text: "The staff was cooperative, responsive, and made sure we had a comfortable and memorable trip. Thank you for making our journey so special, Ehtisham bhai.",
    name: "Ahmad Khattak",
    meta: "Skardu · 7 Days",
  },
];

/* =========================================================
   FAQS
========================================================= */

export const faqs = [
  {
    question: "What is included in the package price?",
    answer:
      "Our standard hosted packages include transport, hotels, meals, guide, tolls and fuel. Exact inclusions depend on the selected itinerary.",
  },
  {
    question: "Can you customise a tour for our group?",
    answer:
      "Yes. Share your dates, group size, preferred destinations and budget. We can build a custom route around your requirements.",
  },
  {
    question: "How do I book a seat?",
    answer:
      "Send an enquiry through WhatsApp. We will confirm availability, share the plan and explain the simple advance booking process.",
  },
  {
    question: "Where do tours depart from?",
    answer:
      "Departure points vary by package and group. Islamabad, Lahore and other cities can be arranged for selected tours.",
  },
];