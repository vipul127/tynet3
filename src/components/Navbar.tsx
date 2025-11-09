import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import tynetLogo from "@/assets/tynetlogo.png";

type MobileLink =
  | { label: string; type: "section"; id: string }
  | { label: string; type: "route"; to: string };

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass =
    "text-slate-900 font-semibold px-6 py-3 rounded-2xl bg-slate-100/80 hover:bg-slate-500/10 transition-colors shadow-sm";

  const mobileLinks: MobileLink[] = isHomePage
    ? [
        { label: "About", type: "section", id: "about" },
        { label: "Details", type: "section", id: "details" },
        { label: "Team", type: "section", id: "team" },
        { label: "Prizes", type: "section", id: "prizes" },
        { label: "Past Events", type: "route", to: "/past-events" },
      ]
    : [{ label: "Back to Home", type: "route", to: "/" }];

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={tynetLogo} alt="TYNET 3.0 Logo" className="w-32 h-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection("about")} className={navLinkClass}>
                About
              </button>
              <button onClick={() => scrollToSection("details")} className={navLinkClass}>
                Details
              </button>
              <button onClick={() => scrollToSection("team")} className={navLinkClass}>
                Team
              </button>
              <button onClick={() => scrollToSection("prizes")} className={navLinkClass}>
                Prizes
              </button>
              <Link to="/past-events" className={navLinkClass}>
                Past Events
              </Link>
            </>
          ) : (
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="lg"
            className="hidden md:flex bg-slate-900/90 text-white font-bold px-6 py-2 rounded-2xl hover:bg-slate-800 hover:text-white shadow-lg"
          >
            Register Now
          </Button>

          <button
            aria-label="Open navigation menu"
            className="md:hidden flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-900/90 text-white shadow-lg"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-current rounded-full" />
            <span className="block w-6 h-0.5 bg-current rounded-full" />
            <span className="block w-6 h-0.5 bg-current rounded-full" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/95 text-white px-6 py-8 flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <img src={tynetLogo} alt="TYNET 3.0 Logo" className="w-32 h-auto" />
            <button
              aria-label="Close navigation menu"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute w-6 h-0.5 bg-white rotate-45" />
              <span className="absolute w-6 h-0.5 bg-white -rotate-45" />
            </button>
          </div>

          <div
            className="flex-1 flex flex-col gap-5 text-4xl font-black"
            style={{ fontFamily: "Fredoka, Arial, sans-serif" }}
          >
            {mobileLinks.map((item) =>
              item.type === "section" ? (
                <button
                  key={item.id}
                  className="text-left hover:text-accent transition-colors"
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
