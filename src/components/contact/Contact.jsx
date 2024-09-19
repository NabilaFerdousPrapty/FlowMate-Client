import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className=" bg-gray-100 my-20 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white  rounded-lg shadow-lg">
        {/* Left Section: Contact Form */}
        <div className="md:w-2/3 w-full md:pr-8  md:py-12 md:px-16 py-7 px-4">
          <h2 className="text-2xl font-semibold pt-1 mb-6">
            Send us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Send <span className="ml-2">✈️</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="md:w-1/3 w-full bg-blue-900 text-white p-6 rounded-lg md:mt-0 mt-8 ">
          <h3 className="text-xl font-semibold mt-10 mb-4">
            Contact Information
          </h3>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center">
                <span className="mr-2">
                  <FaLocationDot />
                </span>
                <span className="material-icons">location_on</span>
              </div>
              <p>123 Main Street, Anytown, USA</p>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mr-2">
                  <FaPhoneAlt />
                </span>
                <span className="material-icons">phone</span>
              </div>
              <p>+1 555-555-5555</p>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mr-2">
                  <IoMdMail />
                </span>
                <span className="material-icons">email</span>
              </div>
              <p>info@example.com</p>
            </li>
          </ul>

          {/* Social Media Icons (Optional) */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-blue-300">
              📘 Facebook
            </a>
            <a href="#" className="hover:text-blue-300">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
