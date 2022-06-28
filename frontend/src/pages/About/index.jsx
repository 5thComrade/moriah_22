const About = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex space-x-2 items-center mt-10">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">About</div>
      </div>
      <div className="text-base mt-4 text-neutral-50 3xl:text-xl">
        "Go to the land of Moriah, and offer him there." - Genesis 22:2
        <br />
        <br />
        In Abraham's journey to Moriah we don't just see the epitome of faith
        and obedience, but we also see God. A Gd who would not stop at anything
        for our salvation, a God who would sacrifice his only begotten son for
        our sake.
        <br />
        So in the middle of the hustle and bustle of our lives, let's pause and
        retreat to Moriah.
        <br />
        <br />
        Moriah Meet 2022, is an annual youth retreat organized by SMYM St.
        Thomas Youth(STY).
        <br />
        <br />
        Retreat will be blessed by Mar Sebastian Adayanthrath (Bishop, Diocese
        of Mandya)
      </div>
      <img
        src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/bishop_3.jfif"
        alt="Mar Sebastian Adayanthrath (Bishop, Diocese of
        Mandya)"
        className="w-80 h-80 mt-4 mx-auto 3xl:mx-0"
      />
      <p className="text-xs text-center text-gray-400 mt-2 3xl:text-start">
        Mar Sebastian Adayanthrath (Bishop, Diocese of Mandya)
      </p>

      <div className="flex space-x-2 items-center mt-10">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Led By</div>
      </div>
      <div className="text-base mt-4 text-neutral-50 3xl:text-xl">
        This year's retreat is led by Fr. Jinu Pallipatt. Fr Jinu is a spiritual
        leader who reaches out to the laity through his thought provoking
        speeches.
        <br />
        <br />
        He uses social media platforms like{" "}
        <a
          href="https://www.youtube.com/c/FrJinuPallipatt"
          target="_blank"
          rel="noreferrer"
          className="border-b"
        >
          Youtube
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100057148282537"
          target="_blank"
          rel="noreferrer"
          className="border-b"
        >
          Facebook
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/fr_jinu_pallipatt/"
          target="_blank"
          rel="noreferrer"
          className="border-b"
        >
          Instagram
        </a>{" "}
        to spread the Word of God.
      </div>
      <img
        src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/priest_2.jpg"
        alt="Fr. Jinu Pallipatt"
        className="w-80 h-80 mt-4 mx-auto 3xl:mx-0"
      />
      <p className="text-xs text-center text-gray-400 mt-2 3xl:text-start">
        Fr. Jinu Pallipatt
      </p>

      <div className="flex space-x-2 items-center mt-10">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Organized By</div>
      </div>
      <div className="text-base mt-4 text-neutral-50 3xl:text-xl">
        SMYM St. Thomas Youth(STY)
      </div>
      <div className="flex space-x-4 justify-center mt-4 3xl:justify-start">
        <img
          src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/sty_logo.jpg"
          alt="STY"
          className="w-40 h-40 object-cover 3xl:w-80 3xl:h-80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/smym_logo.jpg"
          alt="SMYM"
          className="w-40 h-40 3xl:w-80 3xl:h-80"
        />
      </div>
    </section>
  );
};

export default About;
