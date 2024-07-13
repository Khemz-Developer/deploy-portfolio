import React from "react";
// import { useTypewriter} from "react-simple-typewriter";

import pdf from "../../assets/cv/CV_Jalitha_Kheminda.pdf";
const Banner = () => {
  // const [text] = useTypewriter({
  //   words: [
  //     "Professional Coder.",
  //     "Full Stack Web Developer.",
  //     "Full Stack Mobile Developer.",
  //     "UI Designer.",
  //     "Machine Learning Engineer",
  //     "Deep Learning Engineer"
  //   ],
  //   loop: true,
  //   typeSpeed: 20,
  //   deleteSpeed: 10,
  //   delaySpeed: 2000,
  // });
  return (
    <div>
      <section
        id="home"
        className="w-full  py-20 flex items-center border-b-[1px] border-b-black font-titleFont"
      >
        <div>
          <div className="gap-5 text-center">
            <h4 className="pb-6 text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className="pb-6 text-5xl font-bold text-white">
              Hi, I'm{" "}
              <span className="capitalize text-cyan-600">
                Jalitha Kheminda
              </span>
            </h1>
            {/* <h2 className="text-4xl font-bold text-white pb-7">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2> */}
            <p className="pb-5 text-base leading-6 tracking-wide font-bodyFont">
            "Driven by Bill Gates' advice, I focus on efficient software solutions. His words remind me to prioritize quality over quantity in coding. I aim to master tools like an artist’s brush, crafting clean, effective code. Gates' insight that 'Success is a lousy teacher' inspires me to keep learning and innovating."
            </p>
          </div>

          <div className="flex items-center ">
            <div className="w-full">
              <div className="justify-between gap-6 xl:flex-row lgl:gap-0 ">
                <div>
                  <h2 className="mt-5 mb-4 text-center uppercase font-titleFont">
                    Download My CV
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <a href={pdf} download="CV_Jalitha_Kheminda.pdf">
                      <button className="px-4 py-2 font-bold text-white rounded-full bg-cyan-600 hover:bg-cyen-700">
                        Download CV
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
