
import React from "react";
import { useNavigate } from "react-router-dom";
import CycleTracker from "@/components/CycleTracker";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Tracker = () => {
  const { user, isProfileComplete } = useUser();
  const navigate = useNavigate();

  // Redirect to profile if not complete
  React.useEffect(() => {
    if (!isProfileComplete) {
      navigate("/profile");
    }
  }, [isProfileComplete, navigate]);

  if (!isProfileComplete) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Cycle Tracker</h1>
          <Button variant="outline" size="sm" onClick={() => navigate("/profile")}>
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </div>
        
        {user.name && (
          <p className="text-muted-foreground">
            Welcome, {user.name}! Track your menstrual cycle below.
          </p>
        )}
      </div>
      
      <CycleTracker />
    </div>
  );
};

export default Tracker;
