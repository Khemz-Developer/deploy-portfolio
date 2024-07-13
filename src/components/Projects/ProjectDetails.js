
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ml1 from "../../assets/images/IndividualProjetcs/Machine_Learning/1.png"
import ml2 from "../../assets/images/IndividualProjetcs/Machine_Learning/2.png"
import ml3 from "../../assets/images/IndividualProjetcs/Machine_Learning/3.png"

import jp1 from "../../assets/images/IndividualProjetcs/Job_Portal/1.png"
import jp2 from "../../assets/images/IndividualProjetcs/Job_Portal/2.png"
import jp3 from "../../assets/images/IndividualProjetcs/Job_Portal/3.png"
import jp4 from "../../assets/images/IndividualProjetcs/Job_Portal/4.png"
import jp5 from "../../assets/images/IndividualProjetcs/Job_Portal/5.png"
import jp6 from "../../assets/images/IndividualProjetcs/Job_Portal/6.png"
import jp7 from "../../assets/images/IndividualProjetcs/Job_Portal/7.png"
import jp8 from "../../assets/images/IndividualProjetcs/Job_Portal/8.png"
import jp9 from "../../assets/images/IndividualProjetcs/Job_Portal/9.png"
import jp10 from "../../assets/images/IndividualProjetcs/Job_Portal/10.png"
import jp11 from "../../assets/images/IndividualProjetcs/Job_Portal/11.png"
import jp13 from "../../assets/images/IndividualProjetcs/Job_Portal/13.png"
import jp15 from "../../assets/images/IndividualProjetcs/Job_Portal/15.png"
import jp16 from "../../assets/images/IndividualProjetcs/Job_Portal/16.png"

import fd1 from "../../assets/images/IndividualProjetcs/Food_Delivery/1.png"
import fd2 from "../../assets/images/IndividualProjetcs/Food_Delivery/2.png"
import fd3 from "../../assets/images/IndividualProjetcs/Food_Delivery/3.png"
import fd4 from "../../assets/images/IndividualProjetcs/Food_Delivery/4.png"
import fd5 from "../../assets/images/IndividualProjetcs/Food_Delivery/5.png"
import fd6 from "../../assets/images/IndividualProjetcs/Food_Delivery/6.png"
import fd7 from "../../assets/images/IndividualProjetcs/Food_Delivery/7.png"
import fd8 from "../../assets/images/IndividualProjetcs/Food_Delivery/8.png"
import fd9 from "../../assets/images/IndividualProjetcs/Food_Delivery/9.png"
import fd10 from "../../assets/images/IndividualProjetcs/Food_Delivery/10.png"
import fd11 from "../../assets/images/IndividualProjetcs/Food_Delivery/11.png"
import fd12 from "../../assets/images/IndividualProjetcs/Food_Delivery/12.png"
import fd13 from "../../assets/images/IndividualProjetcs/Food_Delivery/13.png"
import fd14 from "../../assets/images/IndividualProjetcs/Food_Delivery/14.png"
import fd15 from "../../assets/images/IndividualProjetcs/Food_Delivery/15.png"
import fd16 from "../../assets/images/IndividualProjetcs/Food_Delivery/16.png"
import fd17 from "../../assets/images/IndividualProjetcs/Food_Delivery/17.png"
import fd18 from "../../assets/images/IndividualProjetcs/Food_Delivery/18.png"
import fd19 from "../../assets/images/IndividualProjetcs/Food_Delivery/19.png"
import fd20 from "../../assets/images/IndividualProjetcs/Food_Delivery/20.png"

import gfs1 from "../../assets/images/IndividualProjetcs/Games/1.png"
import gfs2 from "../../assets/images/IndividualProjetcs/Games/2.png"
import gfs22 from "../../assets/images/IndividualProjetcs/Games/2.jpg"  
import gfs3 from "../../assets/images/IndividualProjetcs/Games/3.jpg"
import gfs4 from "../../assets/images/IndividualProjetcs/Games/4.png"
import gfs5 from "../../assets/images/IndividualProjetcs/Games/5.png"
import gfs6 from "../../assets/images/IndividualProjetcs/Games/6.png"
import gfs7 from "../../assets/images/IndividualProjetcs/Games/7.png"
import gfs8 from "../../assets/images/IndividualProjetcs/Games/8.png"
import gfs9 from "../../assets/images/IndividualProjetcs/Games/9.png"
import gfs10 from "../../assets/images/IndividualProjetcs/Games/10.png"

import bd1 from "../../assets/images/IndividualProjetcs/business/1.jpg"
import bd2 from "../../assets/images/IndividualProjetcs/business/2.jpg"
import bd3 from "../../assets/images/IndividualProjetcs/business/3.jpg"
import bd4 from "../../assets/images/IndividualProjetcs/business/4.jpg"
import bd5 from "../../assets/images/IndividualProjetcs/business/5.jpg"
import bd6 from "../../assets/images/IndividualProjetcs/business/6.jpg"
import bd7 from "../../assets/images/IndividualProjetcs/business/7.jpg"
import bd8 from "../../assets/images/IndividualProjetcs/business/8.jpg"

import fdm1 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/1.png"
import fdm2 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/2.png"
import fdm3 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/3.png"
import fdm4 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/4.png"
import fdm5 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/5.png"
import fdm6 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/6.png"
import fdm7 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/7.png"
import fdm8 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/8.png"
import fdm9 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/9.png"
import fdm10 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/10.png"
import fdm11 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/11.png"
import fdm12 from "../../assets/images/IndividualProjetcs/Food_Delivery_Mobile/12.png"

import ang1 from "../../assets/images/IndividualProjetcs/angular/1.png"
import ang2 from "../../assets/images/IndividualProjetcs/angular/2.png"
import ang3 from "../../assets/images/IndividualProjetcs/angular/3.png"
import ang4 from "../../assets/images/IndividualProjetcs/angular/4.png"
import ang5 from "../../assets/images/IndividualProjetcs/angular/5.png"


const ProjectDetails = () => {
  const projects = [
    {
      title: "Job Portal System",
      description: "This project was completed during my internship at SLT Mobitel. The system allows the company to add and manage job vacancies. Job seekers can easily find and apply for jobs and check the status of their applications.Below are some screenshots of the job portal system attached.",
      main_functionalities: [
        "Role Based Authentication",
        "Password Hashing",
        "File Hosting",
        "Email Integration",
        "Charts",
        "JWT token access",
        "Job Search and Filtering" ,       
        {
          "Job Seeker Features": [
            "Search for jobs",
            "Apply for jobs",
            "View job applications",
            "Check status of own applications",
            "Profile Creation and Management"
          ]
        },
        {
          "Admin Features": [
            "View job applications",
            "Manage job postings",
            "Manage users",
            "Manage roles",
            "Manage User Applications"
          ]
        }
      ],
      images: [
        jp1, jp2, jp3, jp4, jp5, jp6, jp7, jp8, jp9, jp10, jp11, jp13, jp15, jp16
      ]
    },
    {
      title: "Food Delivery App",
      description: "A fully functional food ordering website for restaurants, showcasing an extensive menu with detailed descriptions and images. Customers can easily browse, choose, and order food online. Restaurants can manage their menu, process payments securely, and handle orders efficiently through an admin panel. Features like Firebase authentication, JWT token access, and role-based access control ensure security. This system streamlines the online food ordering process, connecting restaurants with their customers from selection to delivery.",
      main_functionalities: [
        "Frontend-Backend Integration",
        "Firebase Authentication",
        "JWT token access",
        "Admin Panel",
        "Payment Processing",
        "Image Hosting",
        "Online food ordering",
        "Check Status of Order",
        "Role-based access control"
      ],
      images: [
        fd1, fd2, fd3, fd4, fd5, fd6, fd7, fd8, fd9, fd10, fd11, fd12, fd13, fd14 , fd15, fd16, fd17, fd18, fd19, fd20
      ]
    },
    {
      title: "GAMES FOR STROKE REHABILITATION",
      description: "This project was completed in university for a software module. The purpose of the project is to create interactive games for stroke patients using the Unity platform. The games are designed with levels ranging from easy to hard to help stroke patients regain their motor skills. The engaging and fun design motivates patients to play regularly, allowing them to do their exercises from home without needing to visit the hospital.",
      main_functionalities: [
        "Unity Game Development",
        "Stroke Rehabilitation",
        "Interactive Games",
        "Engaging Design",
        "Progressive Levels",
        "Score Tracking",
      ],
      images: [
        gfs1,gfs22,  gfs3, gfs4, gfs5,gfs2, gfs6, gfs7, gfs8, gfs9, gfs10
      ]
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Developed a Multiple Disease Prediction System for a machine learning module in the university. Two models, Random Forest and SVM, were created for each case and then saved and imported. This website allows users to check predictions for diabetes, breast cancer, and Parkinson's disease using these models to provide accurate predictions. The system was built and is hosted on Streamlit.",
      main_functionalities: [
        
      ],
      images: [
        ml1, ml2, ml3
      ]
    },
    
    {
      title: "BOOKS MANAGEMENT SYSTEM",
      description: "This project was developed using the MEAN stack. The main purpose of this project is to gain an understanding of Angular.",
      main_functionalities: [
        
      ],
      images: [
        ang1, ang2, ang3, ang4, ang5
      ]
    },
    
    {
      title: "BUSINESS DIRECTORY APP",
      description: "This is a Full Stack React Native mobile app allows users to post and manage their businesses. Anyone looking for services can easily find and contact the relevant business owners. The app provides a simple way for businesses to reach potential customers and for users to find the services they need.",
      main_functionalities: [
        "User Registration and Login", "Business Posting","Business Management" , "Business Search", "Contact Business Owners",  "Reviews and Ratings"
      ],
      images: [
        bd1, bd2, bd3, bd4, bd5, bd6, bd7, bd8
      ]
      
    },
    {
      title: "FOOD DELIVERY MOBILE APP",
      description: "This is a Full Stack React Native food ordering mobile app for restaurants, showcasing an extensive menu with detailed descriptions and images. Customers can easily browse, choose, and order food online. Restaurants can manage their menu, process payments securely, and handle orders efficiently through an admin panel. Features like authentication and role-based access control ensure security. Customers can also track the status of their orders. This system streamlines the online food ordering process, connecting restaurants with their customers from selection to delivery.",
      main_functionalities: [
        "User Authentication",
        "Frontend-Backend Integration",
        "Role-based Authentication",
        "Admin Panel",
        "Payment Processing",
        "Online food ordering",
        "Order Tracking",
        
      ],
      images: [
        fdm1, fdm2, fdm3, fdm4, fdm5, fdm6, fdm7, fdm8, fdm9, fdm10, fdm11, fdm12
      ]
    },
    {
      title: "IMPLEMENTATION OF A FL POISONING AND DEFENSE SYSTEM IN AN HEALTH CARE SECTOR (Ongoing)",
      description: "This research aims to improve privacy and collaboration in healthcare by developing a Federated Learning (FL) defense system for an IoT-based health prediction network. The main goals are to create strong defense algorithms against poisoning attacks in non-IID data scenarios and to thoroughly evaluate their effectiveness. The project will end with a web application demonstration showing how the FL system works, highlighting potential poisoning risks, and proving the effectiveness of our defense strategies. We use Python for programming, Deep Learning for model development, Federated Learning for collaborative training across devices, and Flask for backend support. This comprehensive approach emphasizes our commitment to advancing privacy-preserving machine learning in healthcare. ",
      main_functionalities: []
    },
    
    {
      title: "Smart Garbage Monitoring System",
      description: "Developed and implemented a Smart Garbage Monitoring System utilizing microcontrollers, Ultrasonic sensors, and a GSM modem. This system enables real-time monitoring of garbage levels, ensuring efficient waste management practices. Using Atmel microcontrollers and Ultrasonic sensors, the system accurately measures garbage levels in bins. When garbage levels reach predefined thresholds, the GSM modem sends SMS alerts to designated recipients, facilitating timely waste collection and management. This project demonstrates my proficiency in hardware integration, sensor technology, and telecommunications, contributing to sustainable urban environments through smart technology solutions.",
      main_functionalities: []
    },
   
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="pt-10 pb-10 mb-5">
      {projects.map((project, index) => (
        <div key={index} className="mb-10">
          <h1 className="pt-5 mb-4 text-2xl font-bold text-center text-cyan-500">
            {index + 1} : {project.title}
          </h1>
          <p className="mb-4 text-lg text-justify">{project.description}</p>
          {project.main_functionalities.length > 0 && (
            <>
              <h2 className="mb-2 text-2xl font-semibold">Main Functionalities:</h2>
              <div className="text-base">
                <div className="flex flex-wrap">
                  {project.main_functionalities.map((func, idx) => (
                    <div key={idx} className="w-full p-2 md:w-1/3">
                      <ul className="list-disc list-inside">
                        {typeof func === "string" ? (
                          <li>{func}</li>
                        ) : (
                          Object.entries(func).map(([key, value], i) => (
                            <li key={i}>
                              {key}:
                              <ul className="ml-4 list-disc list-inside">
                                {value.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* Image Slider */}
          {project.images && project.images.length > 0 && (
            <div className="mt-4">
              <Slider {...sliderSettings}>
                {project.images.map((image, idx) => (
                  <div key={idx}>
                    <image src={image} alt={`Project ${index + 1} Image ${idx + 1}`} className="mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
