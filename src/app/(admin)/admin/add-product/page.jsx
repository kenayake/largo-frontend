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
import ColorPicker from "./components/colorpicker";
import EbikeArrayFields from "./components/arrayfield";

export default function Page() {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const type = useWatch({
    control,
    name: "type",
  });

  useEffect(() => {
    type !== "ebike" &&
      unregister(["productName", "colorOptions", "additionalImages"], {
        keepValue: true,
      });
  }, [type]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="my-48 mx-20 bg-slate-700">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            id="productName"
            placeholder="Product Name"
            {...register("productName", { required: true, maxLength: 80 })}
          />
          {errors.productName?.type === "required" && (
            <p role="alert">Product Name is required</p>
          )}
        </div>

        <div>
          <input type="file" id="" {...register("image", { required: true })} />
          {errors.image?.type === "required" && (
            <p role="alert">Image is required</p>
          )}
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select id="type" {...register("type", { required: true })}>
            <option value="" className="hidden"></option>
            <option value="ebike">E-bike</option>
            <option value="car">Car</option>
          </select>
          {errors.type?.type === "required" && (
            <p role="alert">Select a product type</p>
          )}
        </div>

        {type === "ebike" && (
          <>
            <EbikeArrayFields
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
            <EbikeArrayFields
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
            <EbikeArrayFields
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
            <div>
              <label htmlFor="chargingTime">Charging Time</label>
              <input type="text" id="chargingTime" {...register("chargingTime", { required: true, maxLength: 80 })} />
            </div>
            <div>
              <label htmlFor="maxSpeed">Max Speed</label>
              <input type="text" id="maxSpeed" {...register("maxSpeed", { required: true, maxLength: 80 })} />
            </div>
            <div>
              <label htmlFor="mileage">Charging Time</label>
              <input type="text" id="mileage" {...register("mileage", { required: true, maxLength: 80 })} />
            </div>
          </>
        )}

        <button type="submit" className="border rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
