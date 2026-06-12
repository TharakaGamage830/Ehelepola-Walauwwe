const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#131313] rounded-2xl overflow-hidden w-full h-[450px] flex flex-col border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer group">

      {/* Image */}
      <div className="w-full h-[200px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-5 pb-6 flex flex-col flex-1 overflow-hidden">
        <h3 className="font-poppins font-semibold text-primary text-[16px] leading-snug mb-3">
          {title}
        </h3>
        <p className="font-poppins font-light text-primary/70 text-[14px] md:text-start text-justify leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default NewsCard;