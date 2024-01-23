import { startCase } from "lodash";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function ArrayFields({
  control,
  name,
  displayName = "",
  errors,
  render,
  handleError,
  className,
  required = false,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
    rules: {
      required: required,
    },
  });

  return (
    <div key={name} className={`space-y-5 ${className}`}>
      <p className="w-full flex justify-between text-lg">
        {displayName || startCase(name) + " "}
        <button type="button" onClick={() => append({ value: "" })} className="text-base">
          Add
        </button>
      </p>
      {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-5">
            <div className="w-full">
              {render(name, index, control)}
              {handleError(errors[name]?.[index]?.value?.type)}
            </div>
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
      ))}
      {errors[name]?.length === 0 && (
        <p role="alert" className="text-xs text-red-400">
          At least one {displayName || startCase(name)} is required
        </p>
      )}
    </div>
  );
}
