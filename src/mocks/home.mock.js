// src/mocks/home.mock.js

// ── Explore Cards ──
import prisonArcadeLogo from '../assets/img/explore/prison-arcade-logo.png';
import courtyardLogo from '../assets/img/explore/court-yard-logo.png';
import waxMuseumLogo from '../assets/img/explore/wax-mesuem-logo.png';
import kingsCourtLogo from '../assets/img/explore/king-court-logo.png';

// ── Hero ──
import heroBg from '../assets/img/home/HeroBackground.webp';
import heroBgVideo from '../assets/img/home/HeroBackground.mp4';
import heroWatermark from '../assets/img/home/HeroWatermark.png';

// ── Explore ──
import exploreBg from '../assets/img/home/ExploreBackground.webp';

// ── Recent News ──
import president from '../assets/img/home/news/president.webp';
import tourists from '../assets/img/home/news/tourists.webp';
import pirith from '../assets/img/home/news/pirith.webp';



export const homeMock = {

  // Hero
  hero: {
    backgroundImage: heroBg,
    backgroundVideo: heroBgVideo,
    watermark: heroWatermark,
    title: 'Ehelepola Walauwwe',
    description:
      "Step into the legendary Ehelepola Walauwwe, where Sri Lanka's regal heritage comes alive through four extraordinary experiences: shopping at the Prison Arcade, exploring exhibitions at the Wax Museum, enjoying the serenity of the Courtyard, and dining at the Kings Court",
  },

  // Special Alert / Reservation Banner
  specialAlert: {
    title: 'School Student Reservation',
    description:
      "Don't miss out on this exclusive opportunity. Slots fill up fast reserve your visit today!",
    buttonLabel: 'Click here to book reservation',
    buttonLink: 'https://www.ehelepolawalawwa.lk/reservation',
  },

  // Explore Section
  explore: {
    backgroundImage: exploreBg,
    title: 'The Noble Heart of Kandy',
    description1:
      "Nestled in the ancient kingdom's heart, Ehelepola Walauwa stands as Kandy's crown jewel, where colonial architecture Sri Lanka meets traditional craftsmanship. This heritage walauwa Sri Lanka has witnessed centuries of royal intrigue, serving the noble Ehelepola Nilame family. Today, cultural tourism Sri Lanka finds its perfect destination in this meticulously restored mansion, showcasing authentic Kandyan heritage sites.",
    description2:
      "The ancestral home of the legendary Ehelepola Disawe transforms history into living experiences. This historic mansion in Sri Lanka, once echoing with political conversations and family gatherings, now houses four distinct projects that celebrate our rich past. Traditional Sri Lankan architecture merges seamlessly with modern attractions, creating an immersive journey through time where visitors experience authentic walauwa in Sri Lanka.",
    cards: [
      {
        id: 1,
        logo: prisonArcadeLogo,
        description:
          'Where history meets retail therapy, forty shopping cells house luxury brands like Maliban, PG Martin, and Silani in a uniquely transformed heritage space.',
        link: '/shopping',
      },
      {
        id: 2,
        logo: courtyardLogo,
        description:
          'A tranquil sanctuary where ancient stone walls whisper tales of yesteryear, offering visitors peaceful moments amidst beautifully landscaped heritage gardens.',
        link: 'https://www.ehelepolawalawwa.lk/courtyard',
      },
      {
        id: 3,
        logo: waxMuseumLogo,
        description:
          "Thirty-five lifelike figures bring Sri Lanka's greatest heroes to life, surrounded by exhibits showcasing Kandyan architecture, royal customs, and traditional crafts.",
        link: 'https://waxmuseum.ehelepolawalawwa.lk/',
      },
      {
        id: 4,
        logo: kingsCourtLogo,
        description:
          'Authentic royal dining experience recreating ancient culinary traditions, where traditional flavors meet regal ambiance in a restaurant fit for royalty.',
        link: 'https://www.ehelepolawalawwa.lk/kingscourt',
      },
    ],
  },

  // Recent News
  recentNews: {
    title: 'Recents News',
    description:
      'Stay updated with the latest announcements, stories, and happenings from Ehelepola Walawwe where heritage meets today. Explore event highlights, restoration updates, and cultural moments that honor its historic legacy.',
    news: [
      {
        id: 1,
        image: president,
        title: 'Presidential Inauguration Ceremony',
        description:
          "President Anura Kumara Dissanayake officially opened the Wax Museum at historic Ehelepola Walawwa the first ever wax museum in Sri Lanka on the 17th of July 2025, marking a significant milestone in Sri Lanka's cultural tourism development and heritage preservation efforts in the ancient capital.",
      },
      {
        id: 2,
        image: tourists,
        title: 'Heritage Tourism Milestone Achieved',
        description:
          'The transformation of this 400-year-old heritage walauwa Sri Lanka into a premier cultural destination represents a groundbreaking achievement in preserving historic mansions in Sri Lanka for future generations.',
      },
      {
        id: 3,
        image: pirith,
        title: 'Sacred Restoration Complete',
        description:
          "Under Temple of the Sacred Tooth Relic Stewardship, Enelepola Walauwa's restoration was blessed through Pifith cnanting ceremonies on June 30 and July 01, honoring ancestral traditions while embracing modernity.",
      },
    ],
  },
};