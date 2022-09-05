import React, { createContext, useState } from "react";

//CREATING APP-STATE CONTEXT               INITIAL APP-STATE
export const ProfileContext = createContext([[], () => []]);

//CREATING APP-STATE PROVIDER
export default function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState("test");
  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {children}
    </ProfileContext.Provider>
  );
}
