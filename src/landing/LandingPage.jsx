import LandingNavbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Features />

       <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      
       <Contact />
      <Footer />
      
      
      
    </>
  );
}
