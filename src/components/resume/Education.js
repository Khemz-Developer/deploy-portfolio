import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* part one */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-4 py-6 lgl:py-12 font-titleFont">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl font-bold text-center ml-80 md:text-4xl">
            Education Qualifications
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-100% h-[500px]  flex flex-col gap-10 ml-20 pl-10">
          <ResumeCard
            title=" BACHELOR OF THE SCIENCE  OF ENGINEERING"
            subTitle=" Faculty of Engineering ,University of Ruhuna"
            // result="Apr 2019 - Present"
            des="Apr 2019 - Present"
          />
          <ResumeCard
            title="GCE A/L EXAMINATION"
            subTitle=" MO/ Wellassa National School , Bibile"
            //result="4.75/5"
            des=" Jun 2016 - 2018"
          />
          <ResumeCard
            title="GCE O/L EXAMINATION"
            subTitle="MO/ Medagama National School ,Bibile"
            //result="5.00/5"
            des=" Jan 2009 - 2014"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl font-bold md:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;