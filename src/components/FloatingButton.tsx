import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      <Button 
        variant="accent" 
        size="lg" 
        className="rounded-full shadow-2xl"
      >
        <Sparkles className="mr-2" />
        Register Now
      </Button>
    </div>
  );
};

export default FloatingButton;
