import React from "react";
import Title from "../layouts/Title";
import {
  
  projectTwo,
  book,
  game,
  job,
  food,
  ml,
  foodmobile,
  business,
  
} from "../../assets/index";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="WATCH MY LATEST PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
      
        <ProjectsCard
          title="JOB PORTAL SYSTEM"
          des=" React | MongoDB | Express | NodeJS "
          src={job}
          githubLink="https://github.com/Khemz-Developer/Job-Portal-System-SLTMobitel"
        />
        <ProjectsCard
          title="FOOD DELIVERY APP"
          des=" Vite | MongoDB | Express | NodeJS "
          src={food}
          githubLink="https://github.com/Khemz-Developer/Food_Ordering_System"
        />
        <ProjectsCard
          title="GAMES FOR STROKE REHABILITATION"
          des=" Unity | C# | Open CV"
          src={game}
          githubLink="https://github.com/Khemz-Developer/Games-for-stroke-Rehabilitations"
        />
        <ProjectsCard
          title="MULTIPLE DISEASE PREDICTION SYSTEM"
          des=" Machine Learning | Python | Streamlit"
          src={ml}
          githubLink="https://github.com/Khemz-Developer/multiple_diseases_prediction_web_app-"
        />
        <ProjectsCard
          title="BOOKS MANAGEMENT SYSTEM"
          des=" Angular | MongoDB | Express | NodeJS"
          src={book}
          githubLink="https://github.com/Khemz-Developer/Angular-16-Auth-Series-Project"
        />
        <ProjectsCard
          title="Business Directory App"
          des=" React Native | Firebase "
          src={business}
          githubLink="https://github.com/Khemz-Developer/Business_Directory_App"
          
        />
        <ProjectsCard
          title="Food Delivery Mobile App"
          des=" React Native | Superbase "
          src={foodmobile}
          githubLink="https://github.com/Khemz-Developer/Food_Delivery_Mobile_App"
        />
        <ProjectsCard
          title="Implementation of a FL Poisoning & Defense System in an Health Care Sector"
          des="Machine Learning | Deep Learning | Fedarated Learning | Python | TensorFlow | Flask "
          src={projectTwo}
          githubLink="https://github.com/SanojBhanuka/Implementation-of-a-FL-poisoning-and-defense-system-in-an-IoT-based-health-prediction-network"
          
        />
      </div>
    </section>
  );
};

export default Projects;
