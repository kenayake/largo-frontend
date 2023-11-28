import React from "react";

export default function FileInput({ labelText, name, register, handleError }) {
  return (
    <div>
        <div className="border-b-2 pb-2 pt-2.5 border-gray-600 relative">
          <label className="text-[75%] text-gray-400 absolute -top-3" htmlFor={name}>
            {labelText}
          </label>
          <input
            type="file"
            id={name}
            className="file:rounded file:border-0 file:bg-gray-400 file:mr-2"
            {...register}
          />
        </div>
          {handleError}
    </div>
  );
}
