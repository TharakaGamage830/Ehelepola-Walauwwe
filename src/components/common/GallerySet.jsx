const ImageSet = ({ images }) => {
  return (
    <>
      {/* Mobile View — 3×2 grid, positions 1+3 merged on left */}
      <div
        className="grid grid-cols-2 gap-3 w-full md:hidden"
        style={{ gridTemplateRows: '1fr 1fr 1fr' }}
      >
        {/* images[0]: col 1, row 1–2 (tall merged) */}
        <div className="rounded-[16px] overflow-hidden relative row-span-2">
          <img
            src={images[0]}
            alt="gallery-m-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[1]: col 2, row 1 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[1]}
            alt="gallery-m-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[2]: col 2, row 2 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[2]}
            alt="gallery-m-3"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[3]: col 1, row 3 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[3]}
            alt="gallery-m-4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[4]: col 2, row 3 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[4]}
            alt="gallery-m-5"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-[27px] w-full" style={{ aspectRatio: '1245/568' }}>
        {/* Column 1: Variable heights */}
        <div className="flex flex-col gap-[27px] h-full overflow-hidden min-h-0">
          <div className="rounded-[20px] overflow-hidden min-h-0 relative" style={{ flexGrow: 391, flexBasis: 0 }}>
            <img
              src={images[0]}
              alt="gallery-1-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden min-h-0 relative" style={{ flexGrow: 159, flexBasis: 0 }}>
            <img
              src={images[1]}
              alt="gallery-1-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Column 2: Equal heights */}
        <div className="flex flex-col gap-[27px] h-full overflow-hidden min-h-0">
          <div className="flex-1 rounded-[20px] overflow-hidden min-h-0 relative">
            <img
              src={images[2]}
              alt="gallery-2-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-[20px] overflow-hidden min-h-0 relative">
            <img
              src={images[3]}
              alt="gallery-2-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Column 3: Full height */}
        <div className="h-full rounded-[20px] overflow-hidden min-h-0 relative">
          <img
            src={images[4]}
            alt="gallery-3"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

const ReverseImageSet = ({ images }) => {
  return (
    <>
      {/* Mobile View — 3×2 grid, positions 4+6 merged on right */}
      <div
        className="grid grid-cols-2 gap-3 w-full md:hidden"
        style={{ gridTemplateRows: '1fr 1fr 1fr' }}
      >
        {/* images[0]: col 1, row 1 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[0]}
            alt="gallery-m-r1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[1]: col 2, row 1 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[1]}
            alt="gallery-m-r2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[2]: col 1, row 2 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[2]}
            alt="gallery-m-r3"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[3]: col 2, row 2–3 (tall merged) */}
        <div className="rounded-[16px] overflow-hidden relative row-span-2">
          <img
            src={images[3]}
            alt="gallery-m-r4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* images[4]: col 1, row 3 */}
        <div className="rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={images[4]}
            alt="gallery-m-r5"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-[27px] w-full" style={{ aspectRatio: '1245/568' }}>
        {/* Column 1: Full height */}
        <div className="h-full rounded-[20px] overflow-hidden min-h-0 relative">
          <img
            src={images[0]}
            alt="gallery-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Equal heights */}
        <div className="flex flex-col gap-[27px] h-full overflow-hidden min-h-0">
          <div className="flex-1 rounded-[20px] overflow-hidden min-h-0 relative">
            <img
              src={images[1]}
              alt="gallery-2-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-[20px] overflow-hidden min-h-0 relative">
            <img
              src={images[2]}
              alt="gallery-2-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Column 3: Variable heights */}
        <div className="flex flex-col gap-[27px] h-full overflow-hidden min-h-0">
          <div className="rounded-[20px] overflow-hidden min-h-0 relative" style={{ flexGrow: 391, flexBasis: 0 }}>
            <img
              src={images[3]}
              alt="gallery-3-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden min-h-0 relative" style={{ flexGrow: 159, flexBasis: 0 }}>
            <img
              src={images[4]}
              alt="gallery-3-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const GallerySet = ({ images = [] }) => {
  // Split images into chunks of 5
  const chunks = [];
  for (let i = 0; i < images.length; i += 5) {
    chunks.push(images.slice(i, i + 5));
  }

  return (
    <div className="flex flex-col gap-[50px] w-full">
      {chunks.map((chunk, index) =>
        chunk.length === 5 ? (
          index % 2 === 0 ? (
            <ImageSet key={index} images={chunk} />
          ) : (
            <ReverseImageSet key={index} images={chunk} />
          )
        ) : null // skip incomplete chunks
      )}
    </div>
  );
};

export default GallerySet;
