const ExploreCard = ({
  logo,
  description,
  backgroundImage = null,
  onExplore,
  gradientColor = '#1a1410',
}) => {
  const hasBg = !!backgroundImage;

  return (
    <div className="relative mx-auto w-full h-[400px] lg:h-[360px] pb-6 flex flex-col">
      {/* Card body — arch shape, fills height */}
      <div
        className={`relative rounded-t-full rounded-b-2xl overflow-hidden border-2 flex-grow flex flex-col ${hasBg ? 'border-white/70' : 'border-primary/40'
          }`}
        style={
          hasBg
            ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { backgroundColor: 'transparent' }
        }
      >
        {/* Dark overlay specifically for background image variant */}
        {hasBg && <div className="absolute inset-0 bg-black/20 z-[5] pointer-events-none" />}

        {/* Top Gradient */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{
            height: '45%',
            background: `linear-gradient(to bottom, ${gradientColor} 0%, ${gradientColor} 30%, transparent 100%)`
          }}
        />

        {/* Bottom Gradient */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: '45%',
            background: `linear-gradient(to top, ${gradientColor} 0%, ${gradientColor} 30%, transparent 100%)`
          }}
        />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 pt-10 pb-6 gap-4 h-full justify-between">
          {/* Logo */}
          <div className="w-[160px] h-[90px] flex items-center justify-center mt-2 shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Divider */}
          {!hasBg && <div className="w-10 h-[1px] bg-primary/40" />}

          {/* Description */}
          <p className={`font-poppins mb-12 font-light text-[14px] px-4 ${hasBg ? 'text-white/90' : 'text-primary/90'}`}>
            {description}
          </p>
        </div>
      </div>

      {/* Button — perfectly aligned underneath */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={onExplore}
          className={`px-8 py-3 rounded-xl border font-poppins font-semibold text-[14px] transition-all duration-300 whitespace-nowrap bg-[#000000] border-white/30 text-white hover:bg-white hover:text-black`}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
