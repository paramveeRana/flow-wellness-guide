
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { CalendarDays } from "lucide-react";

const Index = () => {
  const { isProfileComplete } = useUser();
  const navigate = useNavigate();

  const startJourney = () => {
    if (isProfileComplete) {
      navigate("/tracker");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-purple-50 to-white p-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <CalendarDays className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-primary">Flow</h1>
          <h2 className="text-2xl font-medium mb-6 text-gray-700">Menstrual Cycle Tracker</h2>
          
          <p className="mb-8 text-muted-foreground">
            Track your menstrual cycle, get predictions for your next period, 
            and understand your body better with Flow.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={startJourney} 
              size="lg" 
              className="w-full"
            >
              {isProfileComplete ? "View Your Tracker" : "Get Started"}
            </Button>
            
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate("/profile")}
              >
                My Profile
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate("/tracker")}
                disabled={!isProfileComplete}
              >
                Cycle Tracker
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground">
        Flow - Menstrual Cycle Tracker © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
