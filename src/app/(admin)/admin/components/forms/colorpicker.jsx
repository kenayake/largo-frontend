import React, { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker({ labelText, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <label className="block mb-2 text-[75%] text-gray-400" htmlFor={name}>
        {labelText}
      </label>
      <button className="p-1 bg-slate-100 rounded-sm">
        <div
          className="w-4 h-4 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: value||"#000000" }}
        ></div>
      </button>
      {isOpen && (
        <>
          <div
            className="absolute inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <SketchPicker
            className="absolute z-50"
            color={value}
            onChange={(color) => onChange(color.hex)}
          />
        </>
      )}
    </>
  );
}
