import React from "react";
import AdminNavBar from "./components/layout/adminnav";
import "@/app/globals.css";
import { Oswald } from "next/font/google";
import { AuthContextProvider } from "./components/context/authcontext";

const inter = Oswald({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-[#DFD3BB] bg-[#031723] w-screen overflow-x-hidden`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
