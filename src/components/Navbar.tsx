import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import tynetLogo from "@/assets/tynetlogo.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={tynetLogo}
            alt="TYNET 3.0 Logo"
            className="w-32 h-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
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
              <Link 
                to="/past-events"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                Past Events
              </Link>
            </>
          ) : (
            <Link 
              to="/"
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              Home
            </Link>
          )}
        </div>

        <Button variant="accent" size="lg" className="hidden md:flex">
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
