
import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfileForm from "@/components/UserProfileForm";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, updateUser, isProfileComplete } = useUser();
  const navigate = useNavigate();

  const handleSave = (data: { name: string; height: number; weight: number }) => {
    updateUser(data);
    navigate("/tracker");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Your Profile</h1>
        <p className="text-center text-muted-foreground mt-2">
          Please complete your profile to get started
        </p>
      </div>
      
      <UserProfileForm 
        onSave={handleSave}
        initialData={isProfileComplete ? user : undefined}
      />

      {isProfileComplete && (
        <div className="mt-6 flex justify-center">
          <Button 
            variant="outline" 
            onClick={() => navigate("/tracker")}
          >
            Continue to Tracker
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
