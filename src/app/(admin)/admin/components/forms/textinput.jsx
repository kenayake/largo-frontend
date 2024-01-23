import { startCase } from "lodash";
import React from "react";

export default function TextInput({ name, register, handleError }) {
  return (
    <div className="relative z-0 w-full">
      <input
        type="text"
        id={name}
        placeholder=""
        className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        {...register}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute duration-300 text-gray-400 transform -translate-y-6 scale-75 top-0 py-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {startCase(name)}
      </label>
      {handleError}
    </div>
  );
}
