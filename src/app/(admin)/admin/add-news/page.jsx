"use client";

import React from "react";
import { useAuthContext } from "../components/context/authcontext";
import TextBoxInput from "../components/forms/textboxinput";
import TextInput from "../components/forms/textinput";
import FileInput from "../components/forms/fileinput";

export default function AddNewsPage() {
  const user = useAuthContext();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="space-y-4 p-10 border-2 rounded-lg border-gray-600 w-2/3">
        <h1 className="text-3xl w-full text-center">ADD NEWS</h1>
        <TextInput name="Title" />
        <TextInput name="Author" />
        <FileInput name="Image" />
        <TextInput name="Image Caption" />
        <TextBoxInput name="Description" />
      </form>
    </div>
  );
}
