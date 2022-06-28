import { BsFillCalendarDayFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaRupeeSign } from "react-icons/fa";
import { FiExternalLink, FiHelpCircle } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";

const Register = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex space-x-2 items-center">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Register</div>
      </div>

      <section>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <BsFillCalendarDayFill className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Date</p>
          </div>
          <div className="col-span-2">Nov 26 - Nov 27, 2022</div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <BiTimeFive className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Time</p>
          </div>
          <div className="col-span-2">9:00AM - 8:00PM on both the days.</div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <ImLocation className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Location</p>
          </div>
          <div className="col-span-2">St. Thomas Forane Church, Dharmaram</div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <FaRupeeSign className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Registration Fee</p>
          </div>
          <div className="col-span-2">₹200 per person</div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <FiExternalLink className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Registration Form</p>
          </div>
          <div className="col-span-2">
            You will be re-directed to an external form to complete the
            registration.
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <FiHelpCircle className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Help</p>
          </div>
          <div className="col-span-2">
            For queries, Phone: <a href="tel:886-769-2881">886-769-2881</a>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-neutral-900 bg-neutral-50 py-3 px-8 rounded-lg"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
};

export default Register;
