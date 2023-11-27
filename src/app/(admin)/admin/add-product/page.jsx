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
    <div className="my-48 mx-20 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* <div className="relative z-0">
          <input
            type="text"
            id="productName"
            placeholder=""
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
            {...register("productName", { required: true, maxLength: 80 })}
          />
          <label
            htmlFor="productName"
            className="peer-focus:font-medium absolute duration-300 text-gray-400 transform -translate-y-6 scale-75 top-0 py-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
          {errors.productName?.type === "required" && (
            <p role="alert" className="text-xs">
              Product Name is required
            </p>
          )}
        </div> */}
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

        <Select
          name="type"
          register={register("type", { required: true })}
          options={
            <>
              <option selected disabled hidden></option>
              <option value="ebike">E-bike</option>
              <option value="car">Car</option>
            </>
          }
          handleError={
            errors.type?.type === "required" && (
              <p role="alert" className="text-xs text-red-400">Select a product type</p>
            )
          }
        />

        <div className="border-b-2 py-3 border-gray-600">
          <label className="block mb-2 text-[75%] text-gray-400" htmlFor="image">
            Product image
          </label>
          <input
            type="file"
            id="image"
            className="file:rounded file:border-0 file:bg-gray-400 file:mr-2"
            {...register("image", { required: true })}
          />
        </div>
          {errors.image?.type === "required" && (
            <p role="alert" className="text-xs text-red-400">Image is required</p>
          )}

        {/* <div className="relative z-0">
          <select
            name="type"
            placeholder=""
            {...register("type", { required: true })}
            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          >
            <option selected disabled hidden></option>
            <option value="ebike">E-bike</option>
            <option value="car">Car</option>
          </select>
          <label
            htmlFor="type"
            className="peer-focus:font-medium text-gray-400 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-[:not(:focus):has(option:first-child:checked)]:scale-100 peer-[:not(:focus):has(option:first-child:checked)]:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Type
          </label>
          {errors.type?.type === "required" && (
            <p role="alert">Select a product type</p>
          )}
        </div> */}

        {type === "ebike" && (
          <>
            <ArrayFields
              control={control}
              name={"specification"}
              errors={errors}
              required
              render={(name, index) => (
                <input
                  {...register(`${name}.${index}.value`, {
                    required: true,
                  })}
                />
              )}
            />
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
                    <ColorPicker value={value} onChange={onChange} />
                  )}
                />
              )}
            />
            <ArrayFields
              control={control}
              name={"additionalImages"}
              errors={errors}
              render={(name, index) => (
                <input
                  type="file"
                  {...register(`${name}.${index}.value`, {
                    required: true,
                  })}
                />
              )}
            />
            {/* <div>
              <label htmlFor="chargingTime">Charging Time</label>
              <input
                type="text"
                id="chargingTime"
                {...register("additionalFeatures.chargingTime", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            <div>
              <label htmlFor="maxSpeed">Max Speed</label>
              <input
                type="text"
                id="maxSpeed"
                {...register("additionalFeatures.maxSpeed", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="mileage"
                className="block py-1 appearance-none peer"
                {...register("additionalFeatures.mileage", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <label
                htmlFor="mileage"
                className="absolute inset-y-0 origin-left text-left py-1 peer-focus:py-0 -translate-y-6 peer-focus:scale-75 duration-300"
              >
                Charging Time
              </label>
            </div> */}
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
          </>
        )}

        <button type="submit" className="border rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
