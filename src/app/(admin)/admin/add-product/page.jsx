"use client";
import React, { useEffect, useState } from "react";
import {
  useForm,
  useFieldArray,
  useController,
  Controller,
  useWatch,
} from "react-hook-form";
import { SketchPicker } from "react-color";
import ColorPicker from "../components/forms/colorpicker";
import ArrayFields from "../components/forms/arrayfield";
import TextInput from "../components/forms/textinput";
import Select from "../components/forms/select";
import FileInput from "../components/forms/fileinput";
import { addEbike } from "@/lib/firebase/add_document";
import SubmitButton from "../components/forms/button";
import { useAuthContext } from "../components/context/authcontext";

export default function AddProductForm() {
  const user = useAuthContext()

  useEffect(() => console.log(user), [user]);

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const type = useWatch({
    control,
    name: "type",
  });

  const onSubmit = async (data) => {
    switch (data.type) {
      case "ebike":
        await addEbike(data);

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isSubmitting) console.log("Submitting...");
    else console.log("done Submitting");
  }, [isSubmitting]);

  useEffect(() => {
    if (type !== "ebike")
      unregister(
        [
          "specification",
          "additionalFeatures",
          "additionalImages",
          "colorOptions",
        ],
        { keepValues: true }
      );
  }, [type]);

  return (
    <div className="my-[10%] mx-[10%] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-10 border-2 rounded-lg border-gray-600"
      >
      <h1 className="text-3xl w-full text-center">ADD PRODUCT</h1>
        <TextInput
          name={"productName"}
          register={register("name", { required: true, maxLength: 80 })}
          handleError={
            errors.productName?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">
                Product Name is required
              </p>
            )
          }
        />

        <FileInput
          name={"image"}
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

        <Select
          name="type"
          register={register("type", { required: true })}
          options={
            <>
              <option value="" disabled hidden></option>
              <option value="ebike">E-bike</option>
              <option value="car">Car</option>
            </>
          }
          handleError={
            errors.type?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">
                Select a product type
              </p>
            )
          }
        />

        {type === "ebike" && (
          <>
            <div className="grid md:grid-cols-4 gap-5">
              <div className="md:col-span-3 space-y-5">
                <TextInput
                  name={"chargingTime"}
                  register={register("additionalFeatures.chargingTime", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.additionalFeatures?.chargingTime?.type ===
                      "required" && (
                      <p role="alert" className="text-xs text-red-400">
                        Charging Time is required
                      </p>
                    )
                  }
                />
                <TextInput
                  name={"maxSpeed"}
                  register={register("additionalFeatures.maxSpeed", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.additionalFeatures?.maxSpeed?.type ===
                      "required" && (
                      <p role="alert" className="text-xs text-red-400">
                        Max Speed is required
                      </p>
                    )
                  }
                />
                <TextInput
                  name={"mileage"}
                  register={register("additionalFeatures.mileage", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.additionalFeatures?.mileage?.type === "required" && (
                      <p role="alert" className="text-xs text-red-400">
                        Mileage is required
                      </p>
                    )
                  }
                />
              </div>
              <ArrayFields
                control={control}
                name={"colorOptions"}
                errors={errors}
                required
                render={(name, index, control) => (
                  <Controller
                    control={control}
                    name={`${name}.${index}.value`}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <ColorPicker
                        labelText={`Color Option ${index + 1}`}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                )}
                handleError={(errorType) =>
                  errorType === "required" && (
                    <p role="alert" className="text-xs text-red-400">
                      Please pick a color
                    </p>
                  )
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <ArrayFields
                control={control}
                name={"specification"}
                errors={errors}
                required
                render={(name, index) => (
                  <TextInput
                    name={`specification ${index + 1}`}
                    register={register(`${name}.${index}.value`, {
                      required: true,
                    })}
                  />
                )}
                handleError={(errorType) =>
                  errorType === "required" && (
                    <p role="alert" className="text-xs text-red-400">
                      Please fill this field
                    </p>
                  )
                }
              />
              <ArrayFields
                control={control}
                name={"additionalImages"}
                errors={errors}
                render={(name, index) => (
                  <FileInput
                    name={`Additional Image ${index + 1}`}
                    accept={"image/*"}
                    register={register(`${name}.${index}.value`, {
                      required: true,
                    })}
                  />
                )}
                handleError={(errorType) =>
                  errorType === "required" && (
                    <p role="alert" className="text-xs text-red-400">
                      Please choose an image
                    </p>
                  )
                }
              />
            </div>
          </>
        )}

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
