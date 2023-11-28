"use client";
import React, { useEffect } from "react";
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

export default function AddProductForm() {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ shouldUnregister: true });
  const type = useWatch({
    control,
    name: "type",
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="my-[10%] mx-[10%] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-10 border-2 rounded-lg"
      >
        <TextInput
          name={"productName"}
          register={register("productName", { required: true, maxLength: 80 })}
          handleError={
            errors.productName?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">
                Product Name is required
              </p>
            )
          }
        />

        <FileInput
          labelText={"Product Image"}
          name={"image"}
          register={register("image", { required: true })}
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
                  register={register("chargingTime", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.productName?.type === "required" && (
                      <p role="alert" className="text-xs text-red-400">
                        Charging Time is required
                      </p>
                    )
                  }
                />
                <TextInput
                  name={"maxSpeed"}
                  register={register("maxSpeed", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.productName?.type === "required" && (
                      <p role="alert" className="text-xs text-red-400">
                        Max Speed is required
                      </p>
                    )
                  }
                />
                <TextInput
                  name={"mileage"}
                  register={register("mileage", {
                    required: true,
                    maxLength: 80,
                  })}
                  handleError={
                    errors.productName?.type === "required" && (
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
                    labelText={`Additional Image ${index + 1}`}
                    name={name}
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

        <button type="submit" className="border rounded-lg px-2 py-1 mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}
