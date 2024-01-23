"use client";
import firebaseInstance from "@/lib/firebase/firebase";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../components/forms/textinput";
import PasswordInput from "../components/forms/passwordinput";
import SubmitButton from "../components/forms/button";

const auth = getAuth(firebaseInstance);

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get("redirect");

  const router = useRouter();

  useEffect(()=>console.log(errors),[errors])

  async function submitAction(data) {
    await signInWithEmailAndPassword(auth, data.email, data.password).catch(
      (error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setError("email" ,{type: "invalidEmail"})
            break;

          case "auth/invalid-login-credentials":
            setError("password" ,{type: "invalidPassword"})
            break;

          default:
            console.log(errorCode, error.message);
            break;
        }
      }
    );
    if (auth.currentUser) router.replace(redirectUrl??'/admin');
  }

  return (
    auth && (
      <div className="w-screen h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(submitAction)} className="w-1/3 space-y-4 border-2 border-gray-600 p-10 rounded-lg">
          <h1 className="text-3xl text-center">ADMIN LOGIN</h1>
          <TextInput
            name={"email"}
            register={register("email", { required: true, maxLength: 80 })}
            handleError={
              <>
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-xs text-red-400">
                    Email is required
                  </p>
                )}
                {errors.email?.type === "invalidEmail" && (
                  <p role="alert" className="text-xs text-red-400">
                    Invalid Email
                  </p>
                )}
              </>
            }
          />
          <PasswordInput
            name={"password"}
            register={register("password", { required: true, maxLength: 80 })}
            handleError={
              <>
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-xs text-red-400">
                    Password is required
                  </p>
                )}{" "}
                {errors.password?.type === "invalidPassword" && (
                  <p role="alert" className="text-xs text-red-400">
                    Invalid Password
                  </p>
                )}
              </>
            }
          />
          <div className="w-fit h-fit mx-auto">
            <SubmitButton />
          </div>
        </form>
      </div>
    )
  );
}
