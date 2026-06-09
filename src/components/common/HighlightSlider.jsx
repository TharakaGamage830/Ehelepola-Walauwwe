import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighlightSlider = ({ images = [] }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "22%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "60px", arrows: false },
      },
    ],
  };

  return (
    <div className="w-full pb-12 overflow-hidden">
      <Slider {...settings}>
        {(images.length <= 3
          ? [...images, ...images.map((img, idx) => img + `?copy=${idx}`)]
          : images
        ).map((img, i) => (
          <div key={i} className="px-2 flex justify-center py-8 outline-none mb-10">
            <div
              className="mx-auto transition-all w-full duration-700 transform scale-75 opacity-50 
                                      [.slick-center_&]:scale-[1.15] [.slick-center_&]:opacity-100 [.slick-center_&]:z-20 rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[3/2] shadow-2xl relative max-w-[540px]"
            >
              <img
                src={img.split("?copy=")[0]}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HighlightSlider;
