// src/mocks/about.mock.js

// ── About Page Images ──
import heroBg from "../assets/img/about/HeroBackground.png";
import historyBg from "../assets/img/about/HistoryBackground.png";
import featureBg from "../assets/img/about/FeatureBackground.png";

// ── Previewer Images ──
import previewer1 from "../assets/img/about/previewer/image1.png";
import previewer2 from "../assets/img/about/previewer/image2.png";
import previewer3 from "../assets/img/about/previewer/image3.png";
import previewer4 from "../assets/img/about/previewer/image4.png";

// ── Explore Card Logos ──
import prisonArcadeLogo from "../assets/img/explore/prison-arcade-logo.png";
import courtyardLogo from "../assets/img/explore/court-yard-logo.png";
import waxMuseumLogo from "../assets/img/explore/wax-mesuem-logo.png";
import kingsCourtLogo from "../assets/img/explore/king-court-logo.png";

// ── Explore Card BG ──
import exploreBg from "../assets/img/explore/explore-bg.png";

export const aboutMock = {
  // Hero
  hero: {
    backgroundImage: heroBg,
    title: "About Us",
    description:
      "Welcome to Ehelepola Walauwwe, a treasure of Sri Lanka's rich heritage in the heart of Kandy. Once the grand residence of a legendary nobleman, this historic mansion now invites you to step back in time and experience the glory and tragedy of the Kandyan Kingdom. Ehelepola Walauwwe offers an unforgettable journey for history lovers, families, and travelers. Come witness where the past meets the present right in the heart of Kandy.",
    openTime: "Open 8.00 AM to 8:00 PM",
    openDays: "Open Daily (Monday - Sunday)",
  },

  // Restoration & the Wax Museum
  history: {
    backgroundImage: historyBg,
    title: "Restoration & the Wax Museum",
    paragraph1:
      "Built in 1800, Ehelepola Walauwwe was the official home of Ehelepola Adhikaram, the powerful deputy to the last king of Kandy, Sri Wickrama Rajasinghe. Gifted by the king himself, this majestic mansion housed Ehelepola's family for over a decade. Its walls witnessed both the splendor of Kandyan aristocracy and the dark days of betrayal and rebellion, including the tragic fate of Ehelepola's family.After the fall of the kingdom in 1815, the British transformed the Walauwwe into Ceylon's first prison, where rebels like Keppetipola Disawe were held. For nearly two centuries, it served as part of Bogambara Prison before being restored to its former grandeur.",
    paragraph2:
      "In 2022, Ehelepola Walauwwe was entrusted to the Sacred Temple of the Tooth Relic (Sri Dalada Maligawa). Under the guidance of the Diyawadana Nilame Pradeep Nilanga Dela, it was meticulously restored and reborn as Sri Lanka's first and only historic wax museum in Sri Lanka.",
    mainImage: previewer1,
    thumbnails: [previewer2, previewer3, previewer4],
  },

  // Feature Cards
  features: {
    backgroundImage: featureBg,
    cards: [
      {
        id: 1,
        text: "Lifelike wax statues of all nine kings of the Kandyan Kingdom (1594 - 1815) and key figures like Ehelepola Adhikaram and British colonial administrators.",
      },
      {
        id: 2,
        text: "AI-enhanced exhibits with vivid details, from royal costumes to dramatic historical scenes, immersive, interactive, lifelike, educational, captivating.",
      },
      {
        id: 3,
        text: "The Prison Arcade, where British-era prison cells now showcase traditional Sri Lankan crafts perfect for unique souvenirs.",
      },
    ],
  },

  // Premium Places
  premiumPlaces: {
    title: "Premium Places",
    description:
      "From lifelike wax figures to shopping delights, thrilling entertainment, and a majestic ceremonial court our spaces are designed to inspire, engage, and elevate your experience.",
    cards: [
      {
        id: 1,
        logo: prisonArcadeLogo,
        description:
          "Prison Arcade's 40 chambers showcase handlooms, woodwork, and crafts.",
        backgroundImage: exploreBg,
        link: "/shopping",
      },
      {
        id: 2,
        logo: courtyardLogo,
        description: "A traditional Sinhala courtyard for gatherings.",
        backgroundImage: exploreBg,
        link: "/courtyard",
      },
      {
        id: 3,
        logo: waxMuseumLogo,
        description:
          "Explore 12 rooms telling tales of royalty, rebellion, and resilience.",
        backgroundImage: exploreBg,
        link: "/wax-museum",
      },
      {
        id: 4,
        logo: kingsCourtLogo,
        description:
          "Savor rich, traditional Kandyan-era flavors at the on-site restaurant.",
        backgroundImage: exploreBg,
        link: "/kings-court",
      },
    ],
  },
};
