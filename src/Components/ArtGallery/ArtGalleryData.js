export const gallery_images = [...Array(50).keys()]
  .map((i) => ({
    id: i + 1,
    image: `/assets/img/artgallery/gallery(${(i % 16) + 1}).svg`,
    imageHome: `/assets/img/artgallery/galleryHome.svg`,
    name: `Nike Art Gallery${i}`,
    location: "Lekki, Lagos",
    fullAddress: "No. 2 Oba Yekini Elegushi Rd, Lekki Phase I, Lekki, Lagos",
    upcomingExhibitions: [
      {
        name: "La Creme de Font 2020",
        date: "24th Dec, 2020 4:00pm GMT",
        image: "/assets/img/cart/cart_image.png",
        video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        videoThumbnail: "/assets/img/artgallery/galleryVideo.svg",
        details:
          "The 2020 edition of the La Creme de Font will take on the 24th Dec 2020. It is going feature state of the art exhibitions from artists all over the world.",
      },
    ],
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
    featuredArtists: [
      {
        artist: "artistgod",
        image: "/assets/img/cart/cart_image.png",
      },
      {
        artist: "Rey",
        image: "/assets/img/cart/cart_image.png",
      },
      {
        artist: "Webgod",
        image: "/assets/img/cart/cart_image.png",
      },
    ],
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
