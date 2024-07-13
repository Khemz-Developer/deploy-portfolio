import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full gap-10 lg:flex-row lg:gap-20"
        >
          {/* Programming Skills and Frontend Development */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 py-12 font-titleFont">
              <h2 className="text-3xl font-bold md:text-3xl">
                Programming Skills
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">JavaScript</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">TypeScript</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">70%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Java</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">70%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Python</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">60%</span>
              </motion.span>
            </span> */}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 py-12 font-titleFont">
              <h2 className="text-3xl font-bold md:text-3xl">
                Frontend Development
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">React</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Angular</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">60%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Vite</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">HTML</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">75%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">CSS</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Tailwind CSS</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span> */}
              </div>
            </div>
          </div>
        </motion.div>
        <br></br>
        <br></br>
        <hr></hr>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full gap-10 lg:flex-row lg:gap-20"
        >
        

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 py-12 font-titleFont">
              <h2 className="text-xl font-bold md:text-3xl">
                Machine Learning and Deep Learning
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">
                  Machine Learning 
                </p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Deep Learning</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">95%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">OpenCV</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">TensorFlow</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">75%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Federated Learning</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">75%</span>
              </motion.span>
            </span> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 py-12 font-titleFont">
              <h2 className="text-3xl font-bold md:text-3xl">
                Backend Development
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Node.js</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Express Js</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Restfull Api</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">60%</span>
              </motion.span>
            </span> */}
              </div>
            </div>
          </div>
        </motion.div>
        <br></br>
        <br></br>
        <hr></hr>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full gap-10 lg:flex-row lg:gap-20"
        ></motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full gap-10 lg:flex-row lg:gap-20"
          >
            {/* Mobile App Developement and AI/ML Developer */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4 py-12 font-titleFont">
                <h2 className="text-3xl font-bold md:text-3xl">
                  Mobile App Developement
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <div className="overflow-x-hidden">
                  <p className="text-sm font-medium uppercase">React Native</p>
                  {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span> */}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4 py-12 font-titleFont">
                <h2 className="text-3xl font-bold md:text-3xl">Databases</h2>
              </div>
              <div className="flex flex-col gap-6">
                <div className="overflow-x-hidden">
                  <p className="text-sm font-medium uppercase">MongoDB</p>
                  {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span> */}
                </div>
                <div className="overflow-x-hidden">
                  <p className="text-sm font-medium uppercase">MySql</p>
                  {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">95%</span>
              </motion.span>
            </span> */}
                </div>
                <div className="overflow-x-hidden">
                  <p className="text-sm font-medium uppercase">Firebase</p>
                  {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full gap-10 lg:flex-row lg:gap-20"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 py-12 font-titleFont">
              <h2 className="text-3xl font-bold md:text-3xl">
                Cloud Computing
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">AWS</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span> */}
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm font-medium uppercase">Azure</p>
                {/* <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 -top-7">60%</span>
              </motion.span>
            </span> */}
              </div>
            </div>
          </div>
        </motion.div>
        <br></br>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
};

export default Skills;
