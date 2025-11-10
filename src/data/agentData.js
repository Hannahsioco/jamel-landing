import headshotImg from "../assets/jamel.png"; // ← replace with Jamel’s headshot file name
import logoSBB from "../assets/logos/sbb.png";
import logoSGRWhite from "../assets/logos/scan-global-realty-whitebg.png";
import logoAccounting from "../assets/logos/scan-accounting.png";
import logoHoldingsDark from "../assets/logos/scan-holdings-dark.png";
import logoSGS from "../assets/logos/scan-global-solutions.png";

const agentData = {
  profile: {
    name: "Jamel Cooper",
    credentials: "",
    role: "Senior Property Consultant",
    headshot: headshotImg,
    intro:
      "Jamel Cooper is a dedicated Senior Property Consultant with Scan Global Realty, specializing in guiding New York–based investors toward profitable Dubai real estate opportunities.",
    aboutMe:
      "With years of experience helping clients navigate high-value investments, Jamel brings a results-driven, client-first approach to international property advising. His focus is on bridging opportunities between New York and Dubai — providing tailored guidance, transparent communication, and expert insights to help clients maximize their returns while investing with confidence. Jamel believes in creating meaningful, long-term relationships with every client and ensuring every transaction aligns with their goals for growth and global expansion.",
  },

  contact: {
    email: "Jamel@scanglobal-ny.com",
    website: "https://www.scanglobal-ny.com",
    locations: [
      {
        label: "New York",
        phoneDisplay: "+1 (646) 833-5488",
        phoneHref: "tel:+16468335488",
        address:
          "3 World Trade Center, 175 Greenwich Street, New York, NY 10007",
      },
      {
        label: "Canada",
        phoneDisplay: "+1 905-379-6197",
        phoneHref: "tel:+19053796197",
        address: "Office 418, 600 Dixon Rd, Toronto ON M9W 1J1",
      },
    ],
  },

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jamel-cooper-91b080234/",
      icon: "linkedin",
    },
  ],

  featuredCompany: {
    brand: "Scan Global Realty",
    logo: logoSGRWhite,
    links: [
      { label: "Canada", href: "https://www.scanglobalrealty.ca" },
      { label: "USA", href: "https://www.scanglobal-ny.com" },
    ],
    socials: [
      { href: "https://www.facebook.com/ScanGlobalRealty", icon: "facebook" },
      {
        href: "https://www.linkedin.com/company/scanglobalrealty/",
        icon: "linkedin",
      },
      { href: "https://www.instagram.com/scanglobalrealty/", icon: "instagram" },
      {
        href: "https://www.youtube.com/@SCANGLOBALREALTY/shorts",
        icon: "youtube",
      },
    ],
  },

  otherCompanies: [
    {
      brand: "Scan Global Holdings",
      logo: logoHoldingsDark,
      links: [
        { label: "Canada", href: "https://www.scanglobal.ca" },
        { label: "UAE", href: "https://scanglobal.me/" },
      ],
      socials: [
        { href: "https://www.facebook.com/ScanGlobalHoldings/", icon: "facebook" },
        {
          href: "https://www.instagram.com/scanglobalholdings/",
          icon: "instagram",
        },
        { href: "https://www.linkedin.com/company/scanglobal/", icon: "linkedin" },
      ],
    },
    {
      brand: "Scan Global Solutions",
      logo: logoSGS,
      links: [
        { label: "Canada", href: "https://www.scanglobalsolutions.ca/" },
        { label: "UAE", href: "https://scanglobal.me/solutions" },
      ],
      socials: [
        {
          href: "https://www.facebook.com/profile.php?id=61557089122979",
          icon: "facebook",
        },
        { href: "https://www.linkedin.com/company/sgscanada", icon: "linkedin" },
        {
          href: "https://www.instagram.com/scanglobalsolutions/",
          icon: "instagram",
        },
      ],
    },
    {
      brand: "Scan Accounting",
      logo: logoAccounting,
      links: [{ label: "Canada", href: "https://www.scanaccounting.ca" }],
      socials: [
        {
          href: "https://www.facebook.com/profile.php?id=100090193176649",
          icon: "facebook",
        },
        { href: "https://www.instagram.com/scanaccounting/", icon: "instagram" },
      ],
    },
    {
      brand: "Scan Business Brokerage",
      logo: logoSBB,
      links: [{ label: "Visit", href: "#" }],
      socials: [
        {
          href: "https://www.linkedin.com/company/scan-business-brokerage/",
          icon: "linkedin",
        },
      ],
    },
  ],
};

export default agentData;
