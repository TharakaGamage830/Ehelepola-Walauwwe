const sliderImages = Object.values(
    import.meta.glob('../assets/img/highlights/slider/*', { eager: true, import: 'default' })
);

const galleryImages = Object.values(
    import.meta.glob('../assets/img/highlights/gallery/*', { eager: true, import: 'default' })
);

export const highlightsMock = {
    title: 'Highlights',
    description:
        'Experience authentic Kandyan culture through architecture, wax figures, and heritage.',
    sliderImages,
    galleryImages,
};