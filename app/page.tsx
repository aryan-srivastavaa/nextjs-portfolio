import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatIDo from "@/components/WhatIDo";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <div className="bg-[#000] z-10">
      <Navbar/>
    <LandingPage/>
    <WhatIDo/>
    <MyProjects/>
    <WorkExperience/>
    <Footer/>
    <ScrollToTop/>
    </div>
  );
}
