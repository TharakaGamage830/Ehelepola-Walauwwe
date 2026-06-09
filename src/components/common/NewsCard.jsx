const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#0f0f1a] rounded-2xl overflow-hidden w-[300px] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer group">

      {/* Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-5 pb-6">
        <h3 className="font-poppins font-extrabold text-primary text-[18px] leading-snug mb-3">
          {title}
        </h3>
        <div className="w-9 h-[2px] bg-[#c9a84c] rounded-full mb-3" />
        <p className="font-poppins font-light text-primary text-[18px] leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default NewsCard;