"use client";
import React, { useState } from "react";
import firebaseInstance from "@/lib/firebase/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(firebaseInstance);

export default function AdminNavBar() {
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (user) => setUser(user));
  return (
    <div className="fixed w-full mt-20 h-20 bg-gray-800 text-center text-white top-0">
      {user?.email} 
      <button onClick={()=>signOut(auth)}>sign out</button>
    </div>
  );
}
