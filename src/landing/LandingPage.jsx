import LandingNavbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Stats from "./Stats";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Features />
      <Hero />
<Features />
<Stats />
       <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
