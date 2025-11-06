import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, Calendar, MapPin, Users, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";

const PastEvents = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary brick-pattern py-20 px-6 overflow-hidden">
        {/* LEGO blocks */}
        <img 
          src={redLego} 
          alt="LEGO brick" 
          className="absolute top-5 right-0 w-64 h-64 lego-shadow rotate-12 hidden lg:block opacity-30" 
        />
        <img 
          src={greenLego} 
          alt="LEGO brick" 
          className="absolute bottom-5 left-0 w-56 h-56 lego-shadow -rotate-45 hidden xl:block opacity-25" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/">
            <Button variant="outline" className="mb-6 bg-background">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            TYNET <span className="text-accent">2.0</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Celebrating the success of our past women-only hackathons
          </p>
        </div>
      </section>

      {/* Tynet 1.0 Section */}
      <section className="py-16 px-6 bg-background relative overflow-hidden">
        {/* LEGO blocks */}
        <img 
          src={brownLego} 
          alt="LEGO brick" 
          className="absolute top-10 left-0 w-60 h-60 lego-shadow rotate-45 hidden lg:block opacity-15" 
        />
        <img 
          src={whiteLego} 
          alt="LEGO brick" 
          className="absolute bottom-20 right-0 w-64 h-64 lego-shadow -rotate-12 hidden xl:block opacity-20" 
        />
        <img 
          src={redLego} 
          alt="LEGO brick" 
          className="absolute top-1/2 right-5 w-52 h-52 lego-shadow rotate-12 hidden lg:block opacity-15" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">TYNET 1.0</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">March 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">150+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">₹50,000 Prize Pool</span>
              </div>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="text-accent" />
                  Event Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 36-hour hackathon</li>
                  <li>• 40+ teams competed</li>
                  <li>• 20+ mentors & judges</li>
                  <li>• Multiple tech workshops</li>
                  <li>• Networking sessions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-accent" />
                  Winners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">🥇 First Place - ₹25,000</p>
                    <p className="text-sm text-muted-foreground">Team CodeQueens</p>
                  </div>
                  <div>
                    <p className="font-semibold">🥈 Second Place - ₹15,000</p>
                    <p className="text-sm text-muted-foreground">Team TechSisters</p>
                  </div>
                  <div>
                    <p className="font-semibold">🥉 Third Place - ₹10,000</p>
                    <p className="text-sm text-muted-foreground">Team BugBusters</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle>Sponsors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tech Company A</li>
                  <li>• Startup Hub B</li>
                  <li>• Platform C</li>
                  <li>• Cloud Provider D</li>
                  <li>• Developer Tools E</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Event Gallery</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center lego-shadow"
                >
                  <span className="text-muted-foreground">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tynet 2.0 Section */}
      <section className="py-16 px-6 bg-muted/30 relative overflow-hidden">
        {/* LEGO blocks */}
        <img 
          src={greenLego} 
          alt="LEGO brick" 
          className="absolute top-10 left-0 w-56 h-56 lego-shadow rotate-12 hidden lg:block opacity-20" 
        />
        <img 
          src={brownLego} 
          alt="LEGO brick" 
          className="absolute bottom-20 right-0 w-60 h-60 lego-shadow -rotate-45 hidden xl:block opacity-15" 
        />
        <img 
          src={whiteLego} 
          alt="LEGO brick" 
          className="absolute top-1/3 right-10 w-52 h-52 lego-shadow rotate-45 hidden lg:block opacity-20" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">TYNET 2.0</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">March 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">200+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="text-accent h-5 w-5" />
                <span className="text-muted-foreground">₹75,000 Prize Pool</span>
              </div>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="text-accent" />
                  Event Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 48-hour hackathon</li>
                  <li>• 50+ teams competed</li>
                  <li>• 30+ industry mentors</li>
                  <li>• Tech talks & workshops</li>
                  <li>• Sponsor networking</li>
                  <li>• AI/ML focus track</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-accent" />
                  Winners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">🥇 First Place - ₹35,000</p>
                    <p className="text-sm text-muted-foreground">Team InnovatHers</p>
                  </div>
                  <div>
                    <p className="font-semibold">🥈 Second Place - ₹25,000</p>
                    <p className="text-sm text-muted-foreground">Team ByteBelles</p>
                  </div>
                  <div>
                    <p className="font-semibold">🥉 Third Place - ₹15,000</p>
                    <p className="text-sm text-muted-foreground">Team SheCodes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lego-shadow">
              <CardHeader>
                <CardTitle>Sponsors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Major Tech Corp</li>
                  <li>• AI Startup Hub</li>
                  <li>• Cloud Platform</li>
                  <li>• Developer Tools</li>
                  <li>• Design Platform</li>
                  <li>• Blockchain Network</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Event Gallery</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center lego-shadow"
                >
                  <span className="text-muted-foreground">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="lego-shadow">
                <CardHeader>
                  <CardTitle>Project Impact</CardTitle>
                  <CardDescription>Real-world implementations</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Several projects from TYNET 2.0 went on to become successful startups
                    and received funding. The winning team's healthcare solution is now
                    being used in 3 hospitals.
                  </p>
                </CardContent>
              </Card>
              <Card className="lego-shadow">
                <CardHeader>
                  <CardTitle>Community Growth</CardTitle>
                  <CardDescription>Building a strong network</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    TYNET 2.0 helped create a community of 200+ women developers who
                    continue to collaborate, mentor each other, and organize monthly
                    meetups.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary brick-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Join Us for TYNET 3.0!
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Be part of the biggest women-only hackathon yet
          </p>
          <Link to="/">
            <Button variant="accent" size="lg" className="text-lg">
              Register for TYNET 3.0
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PastEvents;
