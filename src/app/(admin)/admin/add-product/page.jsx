"use client";
import React from "react";
import {
  useForm,
  useFieldArray,
  useController,
  Controller,
} from "react-hook-form";
import { SketchPicker } from "react-color";
import ColorPicker from "./components/colorpicker";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const {
    fields: specFields,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control,
    name: "specification",
    rules: {
      required: true,
    },
  });
  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "colorOptions",
    rules: {
      required: true,
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="my-48 mx-20">
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

        <select {...register("Type", { required: true })}>
          <option value="ebike">E-bike</option>
          <option value="car">Car</option>
        </select>

        <div>
          <input type="file" id="" {...register("image", { required: true })} />
          {errors.image?.type === "required" && (
            <p role="alert">Image is required</p>
          )}
        </div>

        <div>
          <p>
            Specification{" "}
            <button type="button" onClick={() => appendSpec({ value: "" })}>
              Add
            </button>
          </p>
          {specFields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`specification.${index}.value`, {
                  required: true,
                })}
              />
              <button type="button" onClick={() => removeSpec(index)}>
                Delete
              </button>
              {errors.specification?.[index]?.value?.type === "required" && (
                <p role="alert">Value required</p>
              )}
            </div>
          ))}
          {errors.specification?.length === 0 && (
            <p>At least one specification is required</p>
          )}
        </div>

        <div>
          <p>
            Color Options{" "}
            <button type="button" onClick={() => appendColor({ color: "" })}>
              Add
            </button>
          </p>
          {colorFields.map((field, index) => (
            <div key={field.id}>
              <Controller
                control={control}
                name={`colorOptions.${index}.color`}
                rules={{required:true}}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <ColorPicker value={value} onChange={onChange} />
                )}
              />
              <button type="button" onClick={() => removeColor(index)}>
                Delete
              </button>
              {errors.colorOptions?.[index]?.value?.type === "required" && (
                <p role="alert">Color required</p>
              )}
            </div>
          ))}
          {errors.colorOptions?.length === 0 && (
            <p>At least one color is required</p>
          )}
        </div>
        <button type="submit" className="border rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
