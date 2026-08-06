import LandingNavbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Features />
       <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
