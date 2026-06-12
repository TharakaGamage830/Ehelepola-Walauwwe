import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHomeData } from "../hooks/useHomeData";
import ExploreCard from "../components/common/ExploreCard";
import Highlights from "../components/section/Highlights";
import NewsCard from "../components/common/NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();
  const { hero, specialAlert, explore, recentNews, loading } = useHomeData();
  const [videoReady, setVideoReady] = useState(false);

  if (loading) return null;

    const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 820,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <main className="w-full bg-surface overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background Image — shows while video loads */}
        <img
          src={hero.backgroundImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%] z-0"
        />

        {/* Background Video — fades in when ready */}
        <video
          src={hero.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-[center_60%] z-[1] transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Inverted Vignette overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, rgba(0,0,0,0.80) 10%, rgba(0,0,0,0.60) 100%)`
          }}
        />

        {/* Content — centered, with top padding to clear fixed navbar */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 gap-6 md:gap-6 md:-mt-8">
          {/* Desktop Title */}
          <h1 className="text-primary hidden md:block font-milchella font-normal text-[clamp(48px,8vw,80px)] leading-[100%]">
            {hero.title}
          </h1>
          {/* Mobile Title */}
          <h1 className="text-primary md:hidden font-milchella font-normal text-[64px] leading-[120%]">
            Ehelepola
            <br />
            Walauwwe
          </h1>

          <p className="font-poppins font-normal text-primary text-[13px] md:text-[16px] max-w-4xl leading-7 md:mt-2">
            {hero.description}
          </p>

          {/* Watermark — inline in content flow on mobile, hidden on desktop */}
          {hero.watermark && (
            <img
              src={hero.watermark}
              alt="watermark"
              className="md:hidden w-full max-w-[300px] object-contain opacity-100 filter brightness-125 contrast-125"
            />
          )}
        </div>

        {/* Watermark — desktop only, absolute at bottom */}
        {hero.watermark && (
          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-[824px] px-4">
            <img
              src={hero.watermark}
              alt="watermark"
              className="w-full object-contain opacity-100 filter brightness-125 contrast-125"
            />
          </div>
        )}

        {/* Mobile Hero Buttons — anchored to bottom of hero */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex w-[75%] flex-col gap-4 md:hidden z-20">
          <button className="w-full bg-white text-surface py-3 rounded-xl font-poppins font-semibold text-sm">
            More Details
          </button>
          <button className="w-full border border-white/40 text-white py-3 rounded-xl font-poppins font-semibold text-sm">
            Contact Us
          </button>
        </div>

        {/* ── Student reservation Alert Banner ── */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 translate-y-1/2 z-30 w-[calc(100%-2rem)] max-w-[1000px] min-h-[110px] bg-[#FFFFFF1A] backdrop-blur-md rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 md:px-[41px] md:py-0 shadow-2xl">
          {/* Gradient Border */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[20px]"
            style={{
              padding: "2px",
              background:
                "linear-gradient(135.72deg, rgba(255, 255, 255, 0.27) 8.53%, rgba(255, 255, 255, 0) 60.59%, rgba(255, 255, 255, 0.33) 93.17%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <div className="relative z-10 flex flex-col gap-[8px] text-center md:text-left text-white w-full">
            <h3 className="font-wasted font-normal text-[24px] leading-[100%] m-0">
              {specialAlert.title}
            </h3>
            <p className="font-poppins font-normal text-[16px] text-white m-0 tracking-[-0.5px]">
              {specialAlert.description}
            </p>
          </div>

          <button
            onClick={() => navigate(specialAlert.buttonLink)}
            className="relative flex-shrink-0 flex items-center justify-center gap-3 w-full md:max-w-[256px] h-[65px] rounded-[20px] transition-all duration-300 hover:bg-white/10 group z-10 overflow-hidden px-4"
          >
            {/* Button Gradient Border */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[20px]"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(94.33deg, rgba(255, 255, 255, 0.33) 5.48%, rgba(255, 255, 255, 0.1) 51.89%, rgba(255, 255, 255, 0.33) 98.3%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <span className="relative z-10 font-poppins text-[16px] leading-[160%] text-start ml-3 text-white">
              {specialAlert.buttonLabel}
            </span>
            <svg
              className="relative z-10 flex-shrink-0 group-hover:translate-x-1 transition-transform"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Explore Section ── */}
      <section
        className="relative w-full flex flex-col lg:flex-row gap-10 px-6 lg:px-16 pt-[200px] lg:pt-28 pb-16 bg-cover bg-center z-20"
        style={{ backgroundImage: `url(${explore.backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-surface/40 z-0 pointer-events-none" />

        {/* Left — Explore Cards Grid */}
        <div className="relative z-10 w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 px-10 md:px-0">
          {explore.cards.map((card) => (
            <ExploreCard
              key={card.id}
              logo={card.logo}
              description={card.description}
              backgroundImage={card.backgroundImage}
              onExplore={() => navigate(card.link)}
            />
          ))}
        </div>

        {/* Right — Title + Description + Buttons */}
        <div className="relative z-10 w-full lg:w-[calc(50%-120px)] flex flex-col justify-center gap-6">
          <h2 className="text-primary font-milchella font-normal text-[clamp(32px,8vw,46px)]">
            {explore.title}
          </h2>
          <p className="font-poppins font-light text-primary/80 text-[13px] lg:text-[15px] leading-7 lg:leading-6 tracking-wide text-justify">
            {explore.description1}
          </p>
          <p className="font-poppins font-light text-primary/80 text-[13px] lg:text-[15px] leading-7 lg:leading-6 tracking-wide text-justify">
            {explore.description2}
          </p>
          <div className="flex flex-row w-full gap-3 justify-end px-6">
            <button
              onClick={() => navigate("/about")}
              className="px-3 py-3 flex-1 lg:flex-none border border-white/40 bg-black/90 rounded-[10px] text-white font-poppins font-normal text-[14px] hover:bg-white/80 hover:text-black transition-all duration-300"
            >
              Explore More
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-3 py-3 flex-1 lg:flex-none border border-white/80 rounded-[10px] text-primary font-poppins font-normal text-[14px] hover:bg-white/60 hover:text-surface transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ── Recent News Section ── */}
      <section className="w-full flex flex-col items-center gap-10 py-16 overflow-hidden">
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <h2 className="text-primary font-milchella font-normal text-[50px] leading-[100%]">
            {recentNews.title}
          </h2>
          <p
            className="text-primary/80 max-w-3xl font-poppins font-medium text-[14px]"
            style={{ lineHeight: "25px" }}
          >
            {recentNews.description}
          </p>
        </div>

        {/* Cards Slider */}
        <div className="w-full max-w-[1400px] px-10 pb-12 [&_.slick-track]:!flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-list]:overflow-hidden">
          <Slider {...settings}>
            {(recentNews.news.length < 4
              ? [...recentNews.news, ...recentNews.news]
              : recentNews.news
            ).map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="px-4 py-8 outline-none h-full">
                <div className="h-full">
                  <NewsCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section>
        {/* <Highlights /> */}
      </section>
    </main>
  );
};

export default Home;
