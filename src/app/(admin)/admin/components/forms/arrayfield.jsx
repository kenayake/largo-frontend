import { startCase } from "lodash";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function ArrayFields({
  control,
  name,
  displayName = "",
  errors,
  render,
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
    <div key={name}>
      <p>
        {displayName || startCase(name) + " "}
        <button type="button" onClick={() => append({ value: "" })}>
          Add
        </button>
      </p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="inline">
          </div>
            {render(name, index, control)}
          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
            {errors[name]?.[index]?.value?.type === "required" && (
              <p role="alert">Value required</p>
            )}
        </div>
      ))}
      {errors[name]?.length === 0 && (
        <p>At least one {displayName || startCase(name)} is required</p>
      )}
    </div>
  );
}
