import CallToAction from "../components/homePageComponents/CTA/CallToAction";
import Footer from "../components/homePageComponents/footer/Footer";
import HeroSection from "../components/homePageComponents/heroSection/HeroSection";
import HowItWorks from "../components/homePageComponents/howItWorks/HowItWorks";
import Navbar from "../components/homePageComponents/navbar/Navbar";
import ServicesSection from "../components/homePageComponents/servicesSection/ServicesSection";
import StatsSection from "../components/homePageComponents/statsSection/StatsSection";

export default function HomePage() {
  return (
    // <div className="bg-teal-50 home-wrapper pt-36 px-4">
      <div className="">

      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* <HowItWorks /> */}
      <StatsSection />
      <Footer />

    </div>
  );
}
