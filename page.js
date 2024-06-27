"use client";


import Navbar from "./componente/Navbar/Navbar";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/game.jpg",
    thumbnail: "/images/game.jpg",
  },
  {
    original: "/images/xbox.jpg",
    thumbnail: "/images/xbox.jpg",
  },
  {
    original: "/images/overwatch.jpg",
    thumbnail: "/images/overwatch.jpg",
  },
];


export default function Home() {
  return (
    <>
    <ImageGallery items={images}/>
    <Navbar/>
   <h1>mi pagina</h1>
   </>
  );
}
