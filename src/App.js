import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Feature from "./components/features/Feature";
import Projects from "./components/Projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/about me/AboutMe";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/Projects/ProjectDetails";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Feature />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText ">
      <div className="max-w-screen-xl px-16 mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here if needed */}
            <Route path="/project-details" element={<ProjectDetails />} />
            
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import Banner from "./components/banner/Banner";
// import Feature from "./components/features/Feature";
// import Projects from "./components/Projects/Projects";
// import Resume from "./components/resume/Resume";
// import Contact from "./components/contact/Contact";
// import AboutMe from "./components/about me/AboutMe";
// import Footer from "./components/footer/Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="w-full h-auto bg-bodyColor text-lightText ">
//       <div className="max-w-screen-xl px-16 mx-auto">

//         <Navbar />
//         <Banner />
//         <AboutMe/>
//         <Feature/>
//         <Projects/>
//         <Resume/>
//         <Contact/>
//         <Footer/>

//       </div>
//     </div>
//   );
// }

// export default App;
