import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t-4 border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg lego-shadow-sm flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">T3</span>
              </div>
              <span className="text-xl font-bold">TYNET 3.0</span>
            </div>
            <p className="text-muted-foreground">
              Building the future of tech, one woman at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#details" className="text-muted-foreground hover:text-primary transition-colors">Event Details</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
              <li><a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">Prizes</a></li>
              <li><Link to="/past-events" className="text-muted-foreground hover:text-primary transition-colors">Past Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: tynet@acmwomen.org
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ACM Women. All rights reserved. | Made with ❤️ by the TYNET Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
