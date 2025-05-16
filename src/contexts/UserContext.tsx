
import React, { createContext, useState, useContext, useEffect } from "react";

export interface UserProfile {
  name: string;
  height: number;
  weight: number;
  profileComplete: boolean;
}

interface UserContextType {
  user: UserProfile;
  updateUser: (userData: Partial<UserProfile>) => void;
  isProfileComplete: boolean;
}

const defaultUser: UserProfile = {
  name: "",
  height: 0,
  weight: 0,
  profileComplete: false,
};

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  updateUser: () => {},
  isProfileComplete: false,
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(() => {
    const savedUser = localStorage.getItem("user-profile");
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });

  const isProfileComplete = user.profileComplete;

  useEffect(() => {
    localStorage.setItem("user-profile", JSON.stringify(user));
  }, [user]);

  const updateUser = (userData: Partial<UserProfile>) => {
    setUser((prev) => {
      const updated = { ...prev, ...userData };
      // Mark profile as complete if name, height, and weight are set
      if (updated.name && updated.height && updated.weight) {
        updated.profileComplete = true;
      }
      return updated;
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, isProfileComplete }}>
      {children}
    </UserContext.Provider>
  );
};
