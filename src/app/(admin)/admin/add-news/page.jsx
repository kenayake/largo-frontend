"use client";

import React, { useEffect, useState } from "react";
import { useAuthContext } from "../components/context/authcontext";
import TextBoxInput from "../components/forms/textboxinput";
import TextInput from "../components/forms/textinput";
import FileInput from "../components/forms/fileinput";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, Controller } from "react-hook-form";
import SubmitButton from "../components/forms/button";
import { addNews } from "@/lib/firebase/add_document";

function DescriptionEditor({ control }) {
  return (
    <>
      <Controller
        control={control}
        name="description"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Editor
            apiKey="sm5rsseqpc9qk7va8ju8o18lbugy6yd2d87g4bej58mehw0o"
            init={{
              plugins: "lists link",
              menubar: "",
              toolbar:
                "undo redo | blocks fontsize | bold italic underline strikethrough link | align lineheight blockquote | numlist bullist indent outdent | removeformat",
              toolbar_mode: "wrap",
              mobile: {
                toolbar_mode: "scrolling",
              },
              skin: "oxide-dark",
              statusbar: false,
              content_css: "dark",
            }}
            value={value}
            onEditorChange={onChange}
            onBlur={onBlur}
            initialValue="Description"
          />
        )}
      />

      {/* <div
        className="no-tailwindcss-base [&_a]:text-[#4099ff] [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div> */}
    </>
  );
}

export default function AddNewsPage() {
  const user = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    await addNews(data)
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        className="space-y-4 p-10 border-2 w-full rounded-lg xl:m-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl w-full text-center">ADD NEWS</h1>
        <TextInput
          name="Title"
          register={register("title", { required: true })}
          handleError={
            errors.title?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">
                Title is required
              </p>
            )
          }
        />

        <TextInput name="Author" register={register("author")} />
        <FileInput
          name="Image"
          register={register("image", { required: true })}
          accept={"image/*"}
          handleError={
            errors.image?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">
                Image is required
              </p>
            )
          }
        />
        <TextInput name="Image Caption" register={register("imageCaption")} />
        {errors.description?.type === "required" && (
          <p role="alert" className="text-xs text-red-400">
            Description is required
          </p>
        )}
        <DescriptionEditor control={control} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
