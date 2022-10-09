import { BsFillCalendarDayFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaRupeeSign } from "react-icons/fa";
import { FiExternalLink, FiHelpCircle } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineWhatsApp, AiFillWechat } from "react-icons/ai";

const Register = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex space-x-2 items-center">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Register</div>
      </div>

      <section className="mt-8">
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
          <div className="col-span-2">
            St. Thomas Diocesan Pilgrim Center.
            <br /> St. Thomas Forane Church, Dharmaram
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <FaRupeeSign className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Registration Fee</p>
          </div>
          <div className="col-span-2">₹300 per person</div>
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
            For queries, Phone: <a href="tel:886-769-2881">886-769-2881</a>,
            <br />
            <a href="tel:725-990-9019">725-990-9019</a>,
            <br />
            <a href="tel:725-990-9019">741-194-6141</a>,
            <br />
            <a href="tel:725-990-9019">636-259-9652</a>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <AiFillWechat className="w-4 h-4 text-neutral-50" />
            <p className="text-base">Chat</p>
          </div>
          <div className="col-span-2">
            <a
              href="https://wa.me/+918867692881"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              WhatsApp Us{" "}
              <AiOutlineWhatsApp className="text-neutral-50 inline w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <div
          // href=""
          // target="_blank"
          // rel="noreferrer"
          className="text-neutral-500 bg-gray-300 py-3 px-8 rounded-lg"
        >
          REGISTRATION NOT OPEN
        </div>
      </div>
    </section>
  );
};

export default Register;
