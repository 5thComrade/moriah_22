import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import images from "../../assets/images/galleryImgs";

const Gallery = () => {
  const [imageSelectedIndex, setImageSelectedIndex] = useState(-1);

  return (
    <section className="container mx-auto p-4 relative">
      <div className="flex space-x-2 items-center">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Gallery</div>
      </div>

      {imageSelectedIndex > -1 && (
        <div className="fixed z-10 w-full left-0 top-36 xl:top-24">
          <div className="container mx-auto flex justify-end cursor-pointer">
            <AiOutlineClose
              className="w-8 h-8 text-neutral-50"
              onClick={() => setImageSelectedIndex(-1)}
            />
          </div>

          <img
            src={images[imageSelectedIndex].imgUrl}
            alt={images[imageSelectedIndex].description}
            loading="lazy"
            className="mx-auto"
          />
        </div>
      )}

      {imageSelectedIndex > -1 && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75"
          onClick={() => setImageSelectedIndex(-1)}
        ></div>
      )}

      <section className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        {images.map((item, index) => {
          return (
            <img
              key={item.id}
              src={item.imgUrl}
              alt={item.description}
              loading="lazy"
              onClick={() => setImageSelectedIndex(index)}
              className="w-full h-full object-fill"
            />
          );
        })}
      </section>
    </section>
  );
};

export default Gallery;
