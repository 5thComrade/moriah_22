import images from "../../assets/images/galleryImgs";

const Gallery = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex space-x-2 items-center">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Gallery</div>
      </div>
      <div className="text-xs text-zinc-600 3xl:text-base">
        "Scroll and you shall see."
      </div>

      <section className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        {images.map((item) => {
          return (
            <img
              key={item.id}
              src={item.imgUrl}
              alt={item.description}
              loading="lazy"
            />
          );
        })}
      </section>
    </section>
  );
};

export default Gallery;
