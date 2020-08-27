export const data = [
  {
    id: 1,
    image: "/assets/img/cart/cart_image.png",
    title_art: "THE STORY OF THE EYES",
    artist: "Jackson Pallock",
    description: "Glossed art print, 70 × 45 cm",
    quantity: "1",
    unit_cost: "150",
  },
  {
    id: 2,
    image: "/assets/img/cart/cart_image.png",
    title_art: "THE STORY OF THE EYES",
    artist: "Reynolds Pallock",
    description: "Glossed art print, 70 × 45 cm",
    quantity: "3",
    unit_cost: "350",
  },
];

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
