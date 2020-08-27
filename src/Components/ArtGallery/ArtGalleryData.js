export const gallery_images = [...Array(50).keys()]
  .map((i) => ({
    id: i + 1,
    image: `/assets/img/artgallery/gallery (${(i % 16) + 1}).svg`,
    name: "Nike Art Gallery",
    location: "Lekki, Lagos",
    fullAddress: "No. 2 Oba Yekini Elegushi Rd, Lekki Phase I, Lekki, Lagos",
    upcomingExhibitions: [],
    featuredCollections: [
      {
        name: "Twice As Tall",
        artist: "Reynolds",
        image: "/assets/img/cart/cart_image.png",
        price: 550,
      },
      {
        name: "Sculpture of Two",
        artist: "artistgod",
        image: "/assets/img/cart/cart_image.png",
        price: 150,
      },
      {
        name: "Sculpture",
        artist: "Summy",
        image: "/assets/img/cart/cart_image.png",
        price: 560,
      },
    ],
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
