
import React from "react";
import CycleTracker from "@/components/CycleTracker";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
        <h1 className="text-3xl font-bold">Cycle Tracker</h1>
        
        {user.name && (
          <p className="text-muted-foreground mt-2">
            Welcome, {user.name}! Track your menstrual cycle below.
          </p>
        )}
      </div>
      
      <CycleTracker />
    </div>
  );
};

export default Tracker;
