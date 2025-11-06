import { Trophy, Award, Medal, Gift } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      place: "1st Place",
      icon: Trophy,
      amount: "$5,000",
      color: "bg-accent",
      benefits: ["Cash Prize", "Mentorship Program", "Job Interview Fast-track", "LEGO Prize Pack"]
    },
    {
      place: "2nd Place",
      icon: Award,
      amount: "$3,000",
      color: "bg-primary",
      benefits: ["Cash Prize", "Tech Swag Bundle", "Online Course Access", "LinkedIn Feature"]
    },
    {
      place: "3rd Place",
      icon: Medal,
      amount: "$2,000",
      color: "bg-foreground",
      benefits: ["Cash Prize", "Tech Gadgets", "Workshop Access", "Certificate of Achievement"]
    },
  ];

  const specialPrizes = [
    { title: "Best UI/UX Design", prize: "$500" },
    { title: "Most Innovative Idea", prize: "$500" },
    { title: "Best Social Impact", prize: "$500" },
    { title: "People's Choice", prize: "$500" },
  ];

  return (
    <section id="prizes" className="py-20 bg-primary brick-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            TYNET 3.0 Prize <span className="text-accent">Pool</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Over $10,000 in prizes and opportunities for this year's winners
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-3xl p-8 lego-shadow hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className={`w-20 h-20 ${prize.color} rounded-2xl flex items-center justify-center mx-auto mb-6 lego-shadow-sm`}>
                  <Icon className={`w-10 h-10 ${prize.color === 'bg-foreground' ? 'text-background' : 'text-background'}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-2">{prize.place}</h3>
                <div className="text-4xl font-bold text-center text-primary mb-6">{prize.amount}</div>
                
                <div className="space-y-3">
                  {prize.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Category Prizes */}
        <div className="bg-background rounded-3xl p-8 lego-shadow">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Gift className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Special Category Prizes</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <div 
                key={index}
                className="bg-muted rounded-xl p-6 text-center hover:bg-primary/20 transition-colors"
              >
                <div className="text-2xl font-bold text-accent mb-2">{special.prize}</div>
                <div className="text-sm font-semibold text-foreground">{special.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All Participants Benefits */}
        <div className="mt-12 bg-accent/10 border-4 border-accent/30 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">All Participants Receive</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-background px-6 py-3 rounded-xl font-semibold lego-shadow-sm">Certificate of Participation</span>
            <span className="bg-background px-6 py-3 rounded-xl font-semibold lego-shadow-sm">Exclusive TYNET Swag</span>
            <span className="bg-background px-6 py-3 rounded-xl font-semibold lego-shadow-sm">Networking Opportunities</span>
            <span className="bg-background px-6 py-3 rounded-xl font-semibold lego-shadow-sm">Workshop Access</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-accent rounded-xl lego-shadow rotate-12 animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-background rounded-xl lego-shadow -rotate-12 animate-pulse hidden lg:block" />
    </section>
  );
};

export default Prizes;
