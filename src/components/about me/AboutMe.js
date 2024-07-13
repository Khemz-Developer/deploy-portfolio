import React from "react";
import aboutImg from "../../assets/images/mynew1.png";

const AboutMe = () => {

    // const info = [
    //     { text: "Years experience", count: "04" },
    //     { text: "Completed Projects", count: "24" },
    //     { text: "Companies Work", count: "06" },
    //   ];

      
  return (
    
   
    <section id="aboutme" className="py-10 text-white">
    <div className="mt-8 text-center">
      <h3 className="text-4xl font-semibold">
        About <span className="text-cyan-600">Me</span>
      </h3>
      <p className="my-3 text-lg text-gray-400">My introduction</p>
      <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
        <div className="p-2">
          <div className="my-3 text-gray-300">
            <p className="w-11/12 mx-auto leading-7 text-justify">
           
Hi! I'm Jalitha Kheminda, an engineering student at the University of Ruhuna, pursuing my B.Sc. (Honors) in Engineering. I have a deep passion for software development and have honed a diverse set of skills. As a professional coder, I'm proficient in multiple programming languages and frameworks. I excel as a full stack web developer, building fully functional web applications by managing both front-end and back-end development. I also develop mobile applications for both Android and iOS as a full stack mobile developer and design user-friendly and visually appealing interfaces. My interests extend to machine learning and deep learning, where I develop and implement models to solve complex problems and optimize architectures for advanced analytics and automation. Currently, I'm expanding my knowledge in DevOps to improve software development and deployment processes. I'm always eager to learn and stay updated in the ever-evolving field of software.
            </p>
            {/* <div className="flex items-center mt-10 gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="text-2xl font-semibold text-white md:text-4xl">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="text-xs md:text-base">{content.text}</span>
                </div>
              ))}
            </div> */}
            <br />
            <br />
          
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 mt-6 md:mt-0">
          <div className="relative w-11/12 h-full max-w-sm lg:w-96 sm:w-10/12 aboutImg ">
            <img
              src={aboutImg}
              alt=""
              className="object-cover w-full bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
