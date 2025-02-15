
import HeroBillboard from "@/components/HeroBillboard/herobillboard";
import RailingProjects from "../RailingProject/railingproject";
import RailingSolutions from "@/components/TwoColumn/twocolumn" 
import Gallery from "@/components/EquisiteGallery/equisitegallery"
import Testimonials from "@/components/Reviews/reviews"
import HomePageContact from "@/components/HomePageContact/homepagecontact";
import OurServices from "@/components/OurServices/ourservices"
import AboutUs from "@/components/AboutUs/aboutus"
export default function Homepage() {
  return (
    <div>
      <HeroBillboard />
      <RailingSolutions/>
      <OurServices/>
      <AboutUs/>
      <Gallery/>
      <RailingProjects/>
      <Testimonials/>
      <HomePageContact/>
    </div>
  );
}
