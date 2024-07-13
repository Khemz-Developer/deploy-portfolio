import React from "react";
import { motion } from "framer-motion";

import pub2 from "../../assets/images/publicationsImage/pub2.jpg";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col items-center gap-10 px-6 py-8 bg-gray-300 font-titleFont"
    >
      <h2 className="max-w-4xl mb-0 text-xl font-bold text-center text-gray-800">
        Publication 01 :A Novel Game Platform for Improvement of Hand Functions
        in Stroke Rehabilitation
      </h2>

      <div className="max-w-4xl leading-relaxed text-left text-justify text-gray-700">
        <p className="mb-4">
          Stroke is a leading cause of disability worldwide, leaving many
          individuals struggling to regain control of their lives. Traditional
          stroke rehabilitation, while effective, can be expensive,
          geographically limited, and repetitive, leading to decreased patient
          motivation.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Bringing Play Back into Therapy
        </h3>
        <p className="mb-4">
          This is where our innovative game platform steps in. We propose a
          solution that leverages the power of gamification to create a fun,
          engaging, and personalized rehabilitation experience for stroke
          patients struggling with hand function.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Merging Technology and Therapy
        </h3>
        <p className="mb-4">
          Our platform utilizes cutting-edge motion tracking technology with
          OpenCV and Python to capture and analyze a patient's hand movements.
          These movements are then translated into real-time control within a
          captivating virtual environment built using the Unity game engine.
          This allows patients to control an avatar that mimics their hand
          gestures, fostering a sense of accomplishment and agency.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Games for Every Stage of Recovery
        </h3>
        <ul className="pl-5 mb-4 list-disc">
          <li className="mb-2">
            <strong>Rock Picker:</strong> Patients use their palms to sweep
            virtual rocks across the screen, improving dexterity and wrist
            mobility. Difficulty ramps up as rocks become more closely spaced,
            challenging fine motor control.
          </li>
          <li className="mb-2">
            <strong>Running Man:</strong> This game focuses on finger and wrist
            coordination. Players select a specific finger to control the
            avatar's running speed, allowing for targeted rehabilitation of
            individual digits.
          </li>
          <li>
            <strong>Roll a Ball:</strong> Here, patients use their fist to
            virtually push a ball, collecting gold coins and avoiding obstacles
            by squeezing their hand. This game promotes grip strength and
            coordination, with increased difficulty levels featuring more
            complex mazes and moving obstacles.
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Unlocking Progress and Potential
        </h3>
        <p className="mb-4">
          The platform goes beyond just fun. A secure login system grants
          patients exclusive access to their therapy records, allowing them to
          track their progress and celebrate milestones. This personalized
          approach provides valuable data for therapists to monitor recovery and
          tailor future sessions.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Recognized Potential
        </h3>
        <p className="mb-4">
          Our work has garnered recognition within the medical community. We
          presented our research as a poster (ASNAC 2024 PP:32) at the
          prestigious 17th Annual Congress of the Association of Sri Lankan
          Neurologists.
        </p>
        <p className="mb-4">
          This innovative platform holds immense promise for the future of
          stroke rehabilitation. By combining the power of gamification with
          advanced technology, we can empower patients to regain control,
          rebuild their lives, and rediscover the joy of movement.
        </p>
        <div className="flex justify-center gap-4">
          {/* <img src={pub1} alt="Publication 1" className="w-1/2" /> */}
          <img src={pub2} alt="Publication 2" className="w-1/2" />
        </div>
      </div>

      <hr></hr>

      <h2 className="max-w-4xl mb-0 text-xl font-bold text-center text-gray-800">
        Publication 02 : Building a Robust Defense System for Federated Learning
      </h2>

      <div className="max-w-4xl leading-relaxed text-left text-justify text-gray-700">
        <p className="mb-4">
          In our final year of study, our research focused on improving the
          security of federated learning systems. Federated learning allows
          multiple devices to collaboratively train a model without sharing
          their raw data. This is especially useful for privacy-sensitive
          applications. However, it also introduces new security challenges,
          particularly with non-IID (non-Independent and Identically
          Distributed) data. This means the data across clients can be very
          different, which makes the system more vulnerable to certain types of
          attacks.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          The Problem: Targeted Model Poisoning Attacks
        </h3>
        <p className="mb-4">
          One significant threat in federated learning is a "targeted model
          poisoning attack." In this attack, malicious clients intentionally
          send incorrect updates to the model, aiming to degrade its performance
          or manipulate it in specific ways. Current defense mechanisms are not
          robust enough to detect and counter these sophisticated attacks,
          especially in non-IID settings.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Our Solution: A Robust Defense System
        </h3>
        <p className="mb-4">
          Our research aims to develop a more robust defense system for
          federated learning, specifically designed to handle non-IID data.
          Here’s a brief overview of our approach:
        </p>

        <ul className="pl-5 mb-4 list-disc">
          <li className="mb-2">
            <strong>Detection Mechanism:</strong> Patients use their palms to
            sweep virtual rocks across the screen, improving dexterity and wrist
            mobility. Difficulty ramps up as rocks become more closely spaced,
            challenging fine motor control.
          </li>
          <li className="mb-2">
            <strong>Response Strategy: </strong> Once a potential attack is
            detected, our system can isolate the malicious clients and mitigate
            the impact of their poisoned updates. This ensures that the overall
            model remains accurate and reliable.
          </li>
          <li>
            <strong>Validation and Testing:</strong> We tested our defense
            system using various datasets and attack scenarios. The results
            showed significant improvements in detecting and defending against
            model poisoning attacks compared to existing methods.
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Publication and Future Work
        </h3>
        <p className="mb-4">
          We are currently in the process of finalizing our research paper for
          publication. Our work not only addresses a critical gap in the
          security of federated learning systems but also paves the way for
          future research in this area. We hope our contributions will inspire
          further advancements and help make federated learning more secure and
          trustworthy.
        </p>

       
      </div>
    </motion.div>
  );
};

export default Achievement;

// import React from "react";
// import { motion } from "framer-motion";

// const Achievement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="flex justify-center gap-20 py-12 font-titleFont"
//     >
//      <h2 className="text-center">A Novel Game Platform for Improvement of Hand Functions in Stroke Rehabilitation </h2>
//     </motion.div>
//   );
// };

// export default Achievement;
