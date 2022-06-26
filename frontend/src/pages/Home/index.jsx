import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Home = () => {
  const eventDate = new Date("Nov 26, 2022 09:00:00").getTime();
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
      <div className="text-5xl text-center">MORIAH '22</div>
      <div className="text-2xl text-center mt-4">11th Annual Youth Retreat</div>
      <div className="flex flex-row justify-center mt-20 space-x-9">
        <div className="flex flex-col items-center">
          <div className="text-4xl">{days}</div>
          <div className="text-base">DAYS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">{hours}</div>
          <div className="text-base">HRS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">{minutes}</div>
          <div className="text-base">MINS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">{seconds}</div>
          <div className="text-base">SECS</div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/register"
          className="text-neutral-900 bg-neutral-50 py-3 px-8 rounded-lg"
        >
          REGISTER
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
