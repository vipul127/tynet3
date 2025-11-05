import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import Team from "@/components/Team";
import Prizes from "@/components/Prizes";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EventDetails />
      <Team />
      <Prizes />
      <Footer />
      <FloatingButton />
    </main>
  );
};

export default Index;
