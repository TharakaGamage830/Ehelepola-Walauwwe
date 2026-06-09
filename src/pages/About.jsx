import { useNavigate } from 'react-router-dom';
import { useAboutData } from '../hooks/useAboutData';
import ExploreCard from '../components/common/ExploreCard';

const About = () => {
  const navigate = useNavigate();
  const { hero, history, features, premiumPlaces, loading } = useAboutData();

  if (loading) return null;

  return (
    <main className="w-full bg-surface overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 px-6">
        {/* Background */}
        <img
          src={hero.backgroundImage}
          alt="about hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center gap-6 max-w-4xl">
          <h1
            className="text-primary"
            style={{
              fontFamily: 'Milchella, serif',
              fontWeight: 400,
              fontSize: 'clamp(48px, 10vw, 100px)',
              lineHeight: '100%',
            }}
          >
            {hero.title}
          </h1>

          <p
            className="text-primary/90 max-w-3xl font-poppins"
            style={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '28px',
            }}
          >
            {hero.description}
          </p>

          {/* Opening Hours */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <p
              className="text-primary font-poppins"
              style={{ fontWeight: 600, fontSize: '16px', lineHeight: '25px' }}
            >
              {hero.openTime}
            </p>
            <p
              className="text-primary/70 font-poppins"
              style={{ fontWeight: 400, fontSize: '14px', lineHeight: '25px' }}
            >
              {hero.openDays}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          RESTORATION & THE WAX MUSEUM
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${history.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-surface/80 z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto">

          {/* Left — Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full rounded-[20px] overflow-hidden" style={{ aspectRatio: '666/472' }}>
              <img
                src={history.mainImage}
                alt="restoration main"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {history.thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className="rounded-[20px] overflow-hidden"
                  style={{ aspectRatio: '220/133' }}
                >
                  <img
                    src={thumb}
                    alt={`thumbnail-${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
            <h2
              className="text-primary"
              style={{
                fontFamily: 'Milchella, serif',
                fontWeight: 400,
                fontSize: 'clamp(32px, 5vw, 50px)',
                lineHeight: '100%',
              }}
            >
              {history.title}
            </h2>

            <p
              className="text-primary/80 font-poppins text-justify"
              style={{ fontWeight: 400, fontSize: '16px', lineHeight: '25px' }}
            >
              {history.paragraph1}
            </p>

            <p
              className="text-primary/80 font-poppins text-justify"
              style={{ fontWeight: 400, fontSize: '16px', lineHeight: '25px' }}
            >
              {history.paragraph2}
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURE HIGHLIGHTS
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full px-6 md:px-16 py-16 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${features.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">
            {features.cards.map((card) => (
              <div
                key={card.id}
                className="relative w-full max-w-[410px] overflow-hidden flex flex-col items-center justify-center text-center px-8 py-10 gap-4"
                style={{
                  height: '238px',
                  borderRadius: card.id === 1 ? '50px' : '20px',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.3))',
                  border: '1px solid rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                {/* Crown Icon */}
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
                  >
                    <path
                      d="M8 48h48V24L44 36 32 16 20 36 8 24v24z"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="8" cy="22" r="3" fill="rgba(255,255,255,0.7)" />
                    <circle cx="32" cy="12" r="3" fill="rgba(255,255,255,0.7)" />
                    <circle cx="56" cy="22" r="3" fill="rgba(255,255,255,0.7)" />
                  </svg>
                </div>

                <p
                  className="text-primary/90 font-poppins max-w-[320px]"
                  style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PREMIUM PLACES
      ══════════════════════════════════════════════ */}
      <section className="w-full flex flex-col items-center gap-10 px-6 md:px-16 py-16 md:py-20">
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <h2
            className="text-primary"
            style={{
              fontFamily: 'Milchella, serif',
              fontWeight: 400,
              fontSize: 'clamp(36px, 6vw, 50px)',
              lineHeight: '100%',
            }}
          >
            {premiumPlaces.title}
          </h2>
          <p
            className="text-primary/80 font-inter"
            style={{ fontWeight: 500, fontSize: '16px', lineHeight: '25px' }}
          >
            {premiumPlaces.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [&>*]:w-full">
          {premiumPlaces.cards.map((card) => (
            <ExploreCard
              key={card.id}
              logo={card.logo}
              description={card.description}
              backgroundImage={card.backgroundImage}
              onExplore={() => navigate(card.link)}
            />
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;
