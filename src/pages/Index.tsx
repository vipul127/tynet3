import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import Team from "@/components/Team";
import Prizes from "@/components/Prizes";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Laptop } from "@/components/laptop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Laptop />
      
      {/* Past Events Teaser Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Legacy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two successful editions of empowering women in tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="lego-shadow hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-3xl">TYNET 1.0</CardTitle>
                <CardDescription className="text-base">
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    March 2023
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Our inaugural event brought together 150+ women developers
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Trophy className="h-5 w-5" />
                    ₹50,000 Prize Pool
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lego-shadow hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-3xl">TYNET 2.0</CardTitle>
                <CardDescription className="text-base">
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    March 2024
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Bigger and better with 200+ participants
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Trophy className="h-5 w-5" />
                    ₹75,000 Prize Pool
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/past-events">
              <Button variant="default" size="lg" className="text-lg">
                View Past Events Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TYNET 3.0 Sections */}
      <EventDetails />
      <Team />
      <Prizes />
      
      <Footer />
      <FloatingButton />
    </main>
  );
};

export default Index;
