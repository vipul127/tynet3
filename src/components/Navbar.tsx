import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg lego-shadow-sm flex items-center justify-center">
            <span className="text-2xl font-bold text-accent-foreground">T3</span>
          </div>
          <span className="text-2xl font-bold text-foreground">TYNET 3.0</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground font-semibold hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("details")}
            className="text-foreground font-semibold hover:text-primary transition-colors"
          >
            Details
          </button>
          <button 
            onClick={() => scrollToSection("team")}
            className="text-foreground font-semibold hover:text-primary transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection("prizes")}
            className="text-foreground font-semibold hover:text-primary transition-colors"
          >
            Prizes
          </button>
        </div>

        <Button variant="accent" size="lg" className="hidden md:flex">
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
