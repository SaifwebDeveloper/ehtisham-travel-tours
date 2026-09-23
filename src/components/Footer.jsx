import { Link } from "react-router-dom";

import logo from "../assets/ehtisham-logo.jpg";
import {
  FacebookIcon,
  InstagramIcon,
  MapsIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./ContactIcons";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  MAPS_URL,
  instagramLinks,
  facebookLinks,
} from "../data/contactInfo";

function FooterIconLink({ href, icon: Icon, iconClass, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link footer-link--with-icon"
    >
      <span className="footer-link__icon">
        <Icon className={iconClass} />
      </span>
      <span className="footer-link__label">{children}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-5 flex items-center gap-3">
            <img
              src={logo}
              alt="Ehtisham Travel & Tours"
              className="h-11 w-11 rounded-full border border-gold/70 object-cover"
            />

            <span>
              <strong className="block font-display text-lg text-white">
                Ehtisham
              </strong>

              <small className="text-[9px] uppercase tracking-[.2em] text-emerald-400">
                Travel & Tours
              </small>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            We Plan Your Adventures. Trusted, fully managed journeys across
            Northern Pakistan.
          </p>

          <span className="mt-5 inline-block rounded-md border border-white/10 px-3 py-2 text-[10px] text-slate-400">
            PTDC Certified Tour Guide · Licence ID 1010
          </span>
        </div>

        <div>
          <h4 className="footer-title">Explore</h4>

          <Link className="footer-link" to="/packages">
            Tour packages
          </Link>

          <Link className="footer-link" to="/destinations">
            Destinations
          </Link>

          <Link className="footer-link" to="/services">
            Our services
          </Link>

          <Link className="footer-link" to="/gallery">
            Trip gallery
          </Link>

          <Link className="footer-link" to="/about">
            About us
          </Link>

          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </div>

        <div>
          <h4 className="footer-title">Contact</h4>

          <a
            href={`tel:${PHONE_TEL}`}
            className="footer-link footer-link--with-icon"
          >
            <span className="footer-link__icon">
              <PhoneIcon className="text-gold" />
            </span>
            <span className="footer-link__label">{PHONE_DISPLAY}</span>
          </a>

          <FooterIconLink
            href={WHATSAPP_URL}
            icon={WhatsAppIcon}
            iconClass="text-emerald-400"
          >
            WhatsApp chat
          </FooterIconLink>

          <FooterIconLink
            href={MAPS_URL}
            icon={MapsIcon}
            iconClass="text-gold"
          >
            Find us on Google Maps
          </FooterIconLink>
        </div>

        <div>
          <h4 className="footer-title">Follow our journeys</h4>

          {instagramLinks.map((item) => (
            <FooterIconLink
              key={item.href}
              href={item.href}
              icon={InstagramIcon}
              iconClass="text-gold"
            >
              {item.label}
            </FooterIconLink>
          ))}

          {facebookLinks.map((item) => (
            <FooterIconLink
              key={item.href}
              href={item.href}
              icon={FacebookIcon}
              iconClass="text-[#1877F2]"
            >
              {item.label}
            </FooterIconLink>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1.5 px-5 py-5 text-center text-[11px] text-slate-500 sm:flex-row sm:flex-wrap sm:gap-2">
          <span>© 2026 Ehtisham Travel &amp; Tours. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span>Designed &amp; developed by Saif 💖</span>
          
        </div>
      </div>
    </footer>
  );
}