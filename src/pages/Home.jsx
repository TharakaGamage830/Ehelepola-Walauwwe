import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHomeData } from "../hooks/useHomeData";
import ExploreCard from "../components/common/ExploreCard";
import Highlights from "../components/section/Highlights";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();
  const { hero, specialAlert, explore, recentNews, loading } = useHomeData();

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
        // Tablet devices
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        // Mobile devices
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <main className="w-full bg-surface overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <img
          src={hero.backgroundImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 gap-6 md:gap-6 mt-16 md:mt-0">
          <h1
            className="text-primary hidden md:block"
            style={{
              fontFamily: "Milchella, serif",
              fontWeight: 400,
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: "100%",
            }}
          >
            {hero.title}
          </h1>
          {/* Mobile Title - explicit two lines */}
          <h1
            className="text-primary md:hidden"
            style={{
              fontFamily: "Milchella, serif",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "90%",
            }}
          >
            Ehelepola
            <br />
            Walauwwe
          </h1>
          <p className="font-poppins font-medium text-primary text-[14px] md:text-[18px] max-w-3xl leading-relaxed"></p>

          {/* Mobile Hero Buttons */}
          <div className="flex w-full flex-col gap-4 mt-4 md:hidden">
            <button className="w-full bg-white text-surface py-3 rounded-xl font-poppins font-semibold text-sm">
              More Details
            </button>
            <button className="w-full border border-white/40 text-white py-3 rounded-xl font-poppins font-semibold text-sm">
              Contact Us
            </button>
          </div>
        </div>

        {/* Watermark bottom */}
        {hero.watermark && (
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 brightness-0 z-20 w-full max-w-4xl px-4">
            <img
              src={hero.watermark}
              alt="watermark"
              className="w-full object-contain opacity-60"
            />
          </div>
        )}

        {/* ── Special Alert Banner ── */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[0%] translate-y-1/2 z-30 w-[calc(100%-2rem)] max-w-[1063px] min-h-[110px] bg-[#FFFFFF1A] backdrop-blur-md rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 md:px-[41px] md:py-0 shadow-2xl">
          {/* Gradient Border for Main Container */}
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
          ></div>

          <div className="relative z-10 flex flex-col gap-[8px] text-center md:text-left text-white w-full">
            <h3
              style={{
                fontFamily: "'Wasted Vindey', serif",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "100%",
                margin: 0,
              }}
            >
              {specialAlert.title}
            </h3>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "100%",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
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
            ></div>

            <span
              className="relative z-10"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "100%",
                color: "#FFFFFF",
              }}
            >
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
        className="relative w-full flex flex-col lg:flex-row gap-10 px-6 lg:px-16 pt-36 lg:pt-28 pb-16 bg-cover bg-center z-20"
        style={{ backgroundImage: `url(${explore.backgroundImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-surface/70 z-0 pointer-events-none" />

        {/* Left — Explore Cards Grid */}
        <div className="relative z-10 w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 mt-4 lg:mt-0">
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
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center gap-6 mt-8 lg:mt-0">
          <h2
            className="text-primary"
            style={{
              fontFamily: "Milchella, serif",
              fontWeight: 400,
              fontSize: "clamp(40px, 10vw, 56px)",
              lineHeight: "110%",
            }}
          >
            {explore.title}
          </h2>
          <p className="font-poppins font-light text-primary/80 text-[13px] lg:text-[15px] leading-2 lg:leading-7 text-justify">
            {explore.description1}
          </p>
          <p className="font-poppins font-light text-primary/80 text-[13px] lg:text-[15px] leading-2 lg:leading-7 text-justify">
            {explore.description2}
          </p>
          <div className="flex flex-row w-full gap-4 mt-2 justify-end">
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 flex-1 lg:flex-none border border-white/40 bg-black/90 rounded-xl text-white font-poppins font-semibold text-sm hover:bg-white/80 hover:text-black  transition-all duration-300"
            >
              Explore More
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 flex-1 lg:flex-none border border-white/80 rounded-xl text-primary font-poppins font-semibold text-sm hover:bg-white/60 hover:text-surface transition-all duration-300"
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
          <h2
            className="text-primary"
            style={{
              fontFamily: "Milchella",
              fontWeight: 400,
              fontSize: "50px",
              lineHeight: "100%",
            }}
          >
            {recentNews.title}
          </h2>
          <p
            className="text-primary/80 max-w-3xl font-poppins font-medium text-[16px]"
            style={{ lineHeight: "25px" }}
          >
            {recentNews.description}
          </p>
        </div>

        {/* Cards Slider */}
        <div className="w-full max-w-[1400px] px-10 pb-12 [&_.slick-track]:!flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
          <Slider {...settings}>
            {(recentNews.news.length <= 3
              ? [
                  ...recentNews.news,
                  ...recentNews.news.map((n) => ({ ...n, id: n.id + "_copy" })),
                ]
              : recentNews.news
            ).map((item) => (
              <div key={item.id} className="px-4 py-8 outline-none h-full">
                <div className="h-full">
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-xl h-full flex flex-col">
                    <div className="m-2 rounded-xl overflow-hidden h-[220px] shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-3 flex-grow">
                      <h3 className="font-poppins font-bold text-primary text-[18px] leading-[26px]">
                        {item.title}
                      </h3>
                      <p className="font-poppins font-normal text-primary/70 text-[14px] leading-[22px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section>
        <Highlights />
      </section>
    </main>
  );
};

export default Home;
