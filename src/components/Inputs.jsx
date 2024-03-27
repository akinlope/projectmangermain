import React, { forwardRef } from "react";

const Inputs =forwardRef(function Inputs ({ label, textarea, ...props }, ref){
    
    const classes = " p-2 bg-sky-100 p-1 w-full rounded-sm border-sky-300 border-b-2 focus:border-sky-500 focus:outline-none"
  
    return (
    <p className=" flex flex-col my-4 gap-1" >
      <label className=" font-semibold text-sky-600 uppercase">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props}></input>
      )}
    </p>
  );
})

export default Inputs
