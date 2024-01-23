"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseInstance from "@/lib/firebase/firebase";

const auth = getAuth(firebaseInstance);

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const path = usePathname();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push(`/admin/login?redirect=${encodeURI(path)}`);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
