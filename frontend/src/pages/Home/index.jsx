import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Home = () => {
  const eventDate = new Date("Nov 26, 2022 14:00:00").getTime();
  let now = new Date().getTime();
  let distance = eventDate - now;

  const [days, setDays] = useState(
    Math.floor(distance / (1000 * 60 * 60 * 24))
  );
  const [hours, setHours] = useState(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [minutes, setMinutes] = useState(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((distance % (1000 * 60)) / 1000)
  );

  setInterval(function () {
    now = new Date().getTime();
    distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    // if (distance < 0) {
    //   console.log("Expired!")
    // }
  }, 1000);

  return (
    <div className="container h-full mx-auto p-4">
      <div className="text-5xl text-center 3xl:text-6xl">MORIAH MEET '22</div>
      <div className="text-2xl text-center mt-4 3xl:text-3xl">
        11th Annual Youth Retreat
      </div>
      <div className="flex flex-row justify-center mt-20 space-x-9">
        {distance > 0 ? (
          <>
            <div className="flex flex-col items-center">
              <div className="text-4xl 3xl:text-5xl">{days}</div>
              <div className="text-base 3xl:text-xl">DAYS</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl 3xl:text-5xl">{hours}</div>
              <div className="text-base 3xl:text-xl">HRS</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl 3xl:text-5xl">{minutes}</div>
              <div className="text-base 3xl:text-xl">MINS</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl 3xl:text-5xl">{seconds}</div>
              <div className="text-base 3xl:text-xl">SECS</div>
            </div>
          </>
        ) : (
          <div className="text-4xl 3xl:text-5xl">Event is now live!</div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/register"
          className="text-neutral-900 bg-neutral-50 py-3 px-8 rounded-lg 3xl:py-5 3xl:px-12"
        >
          REGISTER
        </NavLink>
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/contribute"
          className="text-neutral-50 border border-neutral-50 rounded-lg py-2 px-6 tracking-wide"
        >
          Contribute
        </NavLink>
      </div>

      <div className="absolute bottom-6 right-12 flex space-x-4 items-center">
        <div className="bg-neutral-50 w-24 h-1"></div>
        <a
          href="https://www.instagram.com/smym.sty/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="w-8 h-8 text-neutral-50" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCviuqYeUs8nJ2eawohayCMw"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineYoutube className="w-8 h-8 text-neutral-50" />
        </a>
        <a
          href="https://www.facebook.com/smym.sty/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook className="w-8 h-8 text-neutral-50" />
        </a>
        <div className="bg-neutral-50 w-8 h-1"></div>
      </div>
    </div>
  );
};

export default Home;
