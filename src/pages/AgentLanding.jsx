import React, { useEffect } from "react";
import "./AgentLanding.scss";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

import agentData from "../data/agentData";

const iconMap = {
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
};

export default function AgentLanding() {
  const { profile, contact, socials, featuredCompany, otherCompanies } = agentData;

  useEffect(() => {
    document.title = "Marilyn Miller";
  }, []);

  return (
    <main className="wahaj">
      <section className="wahaj__shell">
        {/* === PROFILE CARD === */}
        <div className="wahaj__card">
          <div className="wahaj__media">
            <img
              src={profile.headshot}
              alt={`Portrait of ${profile.name}`}
              loading="eager"
            />
          </div>

          <header className="wahaj__header">
            <h1 className="wahaj__name">{profile.name}</h1>
            {profile.credentials && <p className="wahaj__cred">{profile.credentials}</p>}
            <p className="wahaj__role">{profile.role}</p>
          </header>

          {profile.intro && <p className="wahaj__intro">{profile.intro}</p>}

          {/* === CONTACT INFO === */}
          <section className="wahaj__contact" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="contact-title">
              Contact Info
            </h3>

            <div className="contact-top">
              <a href={`mailto:${contact.email}`} className="contact-item">
                <FaEnvelope /> <span>{contact.email}</span>
              </a>
              {contact.website && (
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <FaGlobe /> <span>{contact.website.replace("https://", "")}</span>
                </a>
              )}
            </div>

            <div className="contact-countries">
              {contact.locations.map((loc, idx) => (
                <div className="country-card" key={idx}>
                  <h4 className="country-title">{loc.label}</h4>
                  {loc.phoneDisplay && (
                    <a href={loc.phoneHref} className="contact-item">
                      <FaPhone /> <span>{loc.phoneDisplay}</span>
                    </a>
                  )}
                  {loc.address && (
                    <div className="contact-item">
                      <FaMapMarkerAlt /> <span>{loc.address}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* === ABOUT ME === */}
          {profile.aboutMe && (
            <section className="wahaj__aboutme">
              <h3 className="aboutme-title">About Me</h3>
              <p className="aboutme-text">{profile.aboutMe}</p>
            </section>
          )}
        </div>

        {/* === PERSONAL SOCIALS === */}
        {socials && socials.length > 0 && (
          <nav className="wahaj__links">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                className="wahaj__link wahaj__link--primary-dark"
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">{iconMap[soc.icon]}</span>
                <span>{soc.label || "Connect"}</span>
              </a>
            ))}
          </nav>
        )}

        {/* === FEATURED COMPANY (SGR) — SINGLE "Visit" BUTTON === */}
        <section className="wahaj__featured">
          <div className="brand brand--featured" key={featuredCompany.brand}>
            <div className="brand__border" />
            <div className="brand__logo">
              <img src={featuredCompany.logo} alt={`${featuredCompany.brand} logo`} />
            </div>
            <div className="brand__label">{featuredCompany.brand}</div>

            <div className="brand__links">
              {featuredCompany.links?.length > 0 && (
                <a
                  href={featuredCompany.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand__btn"
                >
                  Visit
                </a>
              )}
            </div>

            <div className="brand__socials">
              {featuredCompany.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand__social"
                >
                  {iconMap[soc.icon]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* === SGH NETWORK — SINGLE "Visit" BUTTONS === */}
        <section className="wahaj__brands">
          <h2 className="wahaj__brands-title">Network Firms of SGH</h2>

          <div className="wahaj__brands-grid">
            {otherCompanies.map((co, idx) => (
              <div className="brand" key={idx}>
                <div className="brand__border" />
                <div className="brand__logo">
                  <img src={co.logo} alt={`${co.brand} logo`} />
                </div>
                <div className="brand__label">{co.brand}</div>

                <div className="brand__links">
                  {co.links?.length > 0 && (
                    <a
                      href={co.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand__btn"
                    >
                      Visit
                    </a>
                  )}
                </div>

                {co.socials && co.socials.length > 0 && (
                  <div className="brand__socials">
                    {co.socials.map((soc, i) => (
                      <a
                        key={i}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand__social"
                      >
                        {iconMap[soc.icon]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer className="wahaj__footer">
          <small>© {new Date().getFullYear()} Scan — All rights reserved.</small>
        </footer>
      </section>
    </main>
  );
}
