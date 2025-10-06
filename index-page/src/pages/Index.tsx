import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SupportedOS from "@/components/SupportedOS";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SupportedOS />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
