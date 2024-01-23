import { startCase } from "lodash";
import React from "react";

export default function Select({ name, register, options, handleError }) {
  return (
    <div className="relative z-0">
      <select
        name={name}
        placeholder=""
        {...register}
        className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer [&>option]:bg-black [&>option]:p-4"
        defaultValue=""
      >
        {options}
      </select>
      <label
        htmlFor={name}
        className="peer-focus:font-medium text-gray-400 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-[:not(:focus):has(option:first-child:checked)]:scale-100 peer-[:not(:focus):has(option:first-child:checked)]:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {startCase(name)}
      </label>
      {handleError}
    </div>
  );
}
