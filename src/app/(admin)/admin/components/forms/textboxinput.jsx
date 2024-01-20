import { startCase } from "lodash";
import React, { useRef } from "react";

export default function TextBoxInput({ name, register, handleError }) {

  const descriptionInput = useRef()

  return (
    <div className="relative z-0 w-full">
      <textarea
        type="text"
        id={name}
        ref={descriptionInput}
        placeholder=""
        className="block focus:h-40 py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer resize-none [&:not(:placeholder-shown)]:h-40"
        rows={1}
        {...register}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute duration-300 text-gray-400 transform -translate-y-6 scale-75 top-0 py-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {startCase(name)}
      </label>
      {handleError}
    </div>
  );
}
