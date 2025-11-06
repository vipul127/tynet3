import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "DATE",
      value: "March 15-16, 2025",
      subtitle: "Mark your calendars!",
    },
    {
      icon: Clock,
      title: "DURATION",
      value: "24 Hours",
      subtitle: "Non-stop innovation",
    },
    {
      icon: MapPin,
      title: "VENUE",
      value: "Campus Innovation Hub",
      subtitle: "On-site experience",
    },
    {
      icon: Users,
      title: "ELIGIBILITY",
      value: "Women Only",
      subtitle: "All skill levels welcome",
    },
  ];

  const expectations = [
    "Workshops & Mentorship Sessions",
    "Free Meals & Refreshments",
    "Industry Expert Judges",
    "Networking Opportunities",
    "Swag & Goodies",
    "Exciting Prize Pool",
  ];

  return (
    <section id="details" className="py-32 bg-primary brick-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            TYNET 3.0 EVENT DETAILS
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto"></div>
        </div>

        {/* Key Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-3xl p-10 lego-shadow hover:translate-y-[-4px] transition-transform"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center lego-shadow-sm flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-1">
                      {detail.value}
                    </p>
                    <p className="text-muted-foreground">{detail.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What to Expect */}
        <div className="bg-background rounded-3xl p-12 lego-shadow max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            WHAT TO EXPECT
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {expectations.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
