import React from "react";

import CertificateCard from "./CertificateCard";

import {
  
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
} from "../../assets/index";

const Experience = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 "
  >
    <div className="flex items-center justify-center text-center">
    
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
      
    <CertificateCard
        title="AWS Cloud Technical Essentials"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={eighth}
      />
      <CertificateCard
        title="AI / ML Engineer - Stage 01"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={first}
      />
      <CertificateCard 
        title="AI / ML Engineer - Stage 02"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={second}
      />
      <CertificateCard
        title="Supervised Machine Learning"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={third}
      />
      <CertificateCard
        title=" Phython for Beginners"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={fourth }
      />
      <CertificateCard
        title="Web Design for Beginners"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={fifth}
      />
      <CertificateCard
        title="Front End Web Development"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={sixth}
      />
      <CertificateCard
        title="ASNAC 2024"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={seventh}
      />
    </div>
  </section>
  );
};

export default Experience;