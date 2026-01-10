import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Team from "@/components/sections/Team";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <About />
        <SelectedWork />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
