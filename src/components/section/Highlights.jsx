import { useHighlightsData } from '../../hooks/useHighlightsData';
import HighlightSlider from '../common/HighlightSlider';
import GallerySet from '../common/GallerySet';

const Highlights = () => {
  const { data, loading } = useHighlightsData();

  if (loading || !data) return null;

  return (
    <section className="w-full flex flex-col items-center gap-10 py-16">

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center px-4 md:px-10">
        <h2
          className="text-primary font-milchella font-normal text-[50px] leading-[100%] tracking-0"
        >
          {data.title}
        </h2>
        <p
          className="text-primary max-w-2xl font-poppins font-normal text-[16px] leading-[25px] tracking-0 text-center"
        >
          {data.description}
        </p>
      </div>

      {/* Slider */}
      <div className="w-full">
        <HighlightSlider images={data.sliderImages} />
      </div>

      {/* Gallery */}
      <div className="w-full px-4 md:px-16">
        <GallerySet images={data.galleryImages} />
      </div>

    </section>
  );
};

export default Highlights;