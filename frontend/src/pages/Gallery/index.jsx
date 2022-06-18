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
    </section>
  );
};

export default Gallery;
