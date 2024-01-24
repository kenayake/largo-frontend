import React from "react";
import AdminNavBar from "./components/layout/adminnav";
import "@/app/globals.css";
import { Oswald } from "next/font/google";
import { AuthContextProvider } from "./components/context/authcontext";
import { DarkThemeToggle, Flowbite, ThemeModeScript } from "flowbite-react";

const inter = Oswald({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <ThemeModeScript /> */}
      </head>
      <body
        className={`${inter.className} text-[#DFD3BB] bg-[#031723] w-screen overflow-x-hidden`}
      >
        <Flowbite>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </Flowbite>
      </body>
    </html>
  );
}
