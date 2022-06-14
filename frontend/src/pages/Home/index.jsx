import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const eventDate = new Date("Oct 8, 2022 09:00:00").getTime();
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
    </div>
  );
};

export default Home;
