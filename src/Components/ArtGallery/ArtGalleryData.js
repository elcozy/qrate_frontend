export const gallery_images = [...Array(50).keys()]
  .map((i) => ({
    id: i + 1,
    image: `/assets/img/artgallery/gallery (${(i % 16) + 1}).svg`,
    name: "Nike Art Gallery",
    location: "Lekki, Lagos",
    upcomingExhibitions: [],
    featuredCollerctions: [],
    featuredArtists: [],
    photos: [...Array(5).keys()].map((i) => ({
      id: i + 1,
      image: `/assets/img/artgallery/art_gallery photos (${i + 1}).svg`,
    })),
  }))
  .sort(() => Math.random() - 0.5);
export const art_gallery_images = [...Array(5).keys()]
  .map((i) => ({
    id: i + 1,
    image: `/assets/img/artgallery/art_gallery photos (${i + 1}).svg`,
  }))
  .sort(() => Math.random() - 0.5);
