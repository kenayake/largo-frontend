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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    data = {...data, image: data.image[0].name }
    if (data.type==="ebike") {
      for (const image of data.additionalImages) {
        formData.append("additionalImages", image.value[0]);
      }
      data = {...data, additionalImages: data.additionalImages.map((val)=>val.value[0].name) }
      data = {
        ...data,
        specification: data.specification.map((val) => val.value),
        colorOptions: data.colorOptions.map((val) => val.value),
      };
    }
    formData.append("data", JSON.stringify(data));
    const response = await fetch(
      `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/add-product`,
      { method: "POST", body: formData }
    );
  };
  console.log(errors);

  return (
    <div className="my-[10%] mx-[10%] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-10 border-2 rounded-lg"
      >
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
          labelText={"Product Image"}
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
                    errors.productName?.type === "required" && (
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
                    errors.productName?.type === "required" && (
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

        <button type="submit" className="border rounded-lg px-2 py-1 mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}
