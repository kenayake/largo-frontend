"use client";
import React, { useState } from "react";
import { Avatar, Button, Sidebar } from "flowbite-react";
import { useAuthContext } from "./components/context/authcontext";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import ProductList from "./admin_dashboard/product_list";
import NewsList from "./admin_dashboard/news_list";

export default function AdminPage() {
  const user = useAuthContext();
  const auth = getAuth();
  const router = useRouter();

  const pages = [<NewsList />, <ProductList />];

  const [currPage, setCurrPage] = useState(0);

  return (
    <div className="h-screen w-full">
      <Sidebar className="fixed">
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
            <Sidebar.Item onClick={() => setCurrPage(0)}>News</Sidebar.Item>
            <Sidebar.Item onClick={() => setCurrPage(1)}>Products</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="sm:ml-64 h-full">{pages[currPage]}</div>
    </div>
  );
}
