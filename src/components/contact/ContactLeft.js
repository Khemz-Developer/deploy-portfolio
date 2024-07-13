import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FaGithub } from "react-icons/fa6";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jalitha Kheminda</h3>
        <p className="text-lg font-normal text-gray-400">Software Developer</p>

        <p className="flex items-center gap-2 text-base text-gray-400">
          Phone:{" "}
          <span className="text-lightText">+9476 6121718 | +9470 3088200</span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email:{" "}
          <span className="text-lightText">jalithakheminda@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-3">
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/jalitha.kheminda"
            target="_blank"
            rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          </a>
          <a href="https://github.com/Khemz-Developer"
            target="_blank"
            rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaGithub />
          </span>
          </a>
        
          <a
            href="https://www.linkedin.com/in/jalitha-kheminda-5a01b81b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
