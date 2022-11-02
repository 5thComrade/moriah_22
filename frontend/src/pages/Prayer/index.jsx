import { BsDownload } from "react-icons/bs";

const Prayer = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <div className="bg-neutral-50 w-8 h-1"></div>
          <div className="text-2xl 3xl:text-4xl">Intercession</div>
        </div>
        <div>
          <a
            href="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/moriah_prayer.pdf"
            download="pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-white py-2 px-4 flex items-center text-black text-lg tracking-wide rounded md:py-4 md:px-8"
          >
            Download <BsDownload className="w-5 h-5 ml-2 text-black" />
          </a>
        </div>
      </div>

      <img
        src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/moriah_prayer_english.jpeg"
        alt="Moriah Meet Prayer - English"
        className="w-full h-3/4 mt-8 md:w-3/4 md:h-1/2 md:mx-auto"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/moriah_prayer_malayalam.jpeg"
        alt="Moriah Meet Prayer - Malayalam"
        className="w-full h-3/4 mt-8 md:w-3/4 md:h-1/2 md:mx-auto"
      />
    </section>
  );
};

export default Prayer;
