import React, { useState } from "react";
import { SketchPicker } from "react-color";
export default function ColorPicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="p-1 bg-slate-100 rounded-sm">
        <div
          className="w-4 h-4 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
          style={{background: value}}
        ></div>
      </button>
      {isOpen && (
        <>
            <div className="absolute inset-0" onClick={()=>setIsOpen(false)}></div>
            <SketchPicker
              className="absolute"
              color={value}
              onChangeComplete={(color) => onChange(color.hex)}
            />
        </>
      )}
    </>
  );
}
