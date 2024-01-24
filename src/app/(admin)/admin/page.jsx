"use client";
import React from "react";
import { Avatar, Button, Sidebar } from "flowbite-react";
import { useAuthContext } from "./components/context/authcontext";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const user = useAuthContext();
  const auth = getAuth();
  const router = useRouter();
  return (
    <div className="h-screen w-full">
      <Sidebar className="fixed"
      >
        <Sidebar.Items className="mt-10">
          <Sidebar.ItemGroup className="flex flex-col items-center">
            {user && (
              <>
                <Avatar
                  img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  size="lg"
                />
                <div>{user.email}</div>
                <Button color="light" onClick={() => signOut(auth)}>
                  Logout
                </Button>
              </>
            )}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item onClick={()=>console.log("gayy")}>News</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="sm:ml-64 h-full w-full"></div>
    </div>
  );
}
