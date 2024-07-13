import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc8ad820-02bd-4c47-ab20-b661b296e7a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <div>
              <form
                onSubmit={onSubmit}
                className="flex flex-col w-full gap-4 py-2 lgl:gap-6 lgl:py-5"
              >
                <div className="flex flex-col w-full gap-10 lgl:flex-row">
                  <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                    <p className="text-sm tracking-wide text-gray-400 uppercase">
                      Your name
                    </p>
                    <input
                      className="contactInput"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                    <p className="text-sm tracking-wide text-gray-400 uppercase">
                      Phone Number
                    </p>
                    <input
                      className="contactInput"
                      type="number"
                      name="number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Email
                  </p>
                  <input
                    className="contactInput"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Subject
                  </p>
                  <input
                    className="contactInput"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Message
                  </p>
                  <textarea
                    className="contactTextArea"
                    name="message"
                    cols="30"
                    rows="8"
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-cyan-500 border-transparent"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <span className="mt-10 text-base tracking-wide text-center text-cyan-500">
                {result}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
