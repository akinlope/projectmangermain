import React from "react";
import image from "../assets/no-projects.png";
import { Button } from "./Button";

export const NoProjectSelected = ({openAddProject}) => {
  return (
    <div className=" flex-grow mt-20">
      <div className="flex justify-center ">
        <img
          src={image}
          alt="No image logo"
          className=" w-40 h-40 text-center"
        />
      </div>
      <h1 className=" font-bold text-sky-600 text-3xl text-center my-10">
        No Project Selected
      </h1>
      <p className=" font-semibold text-center text-2xl text-sky-400 mb-10">
        Select a project or get started with a new project.
      </p>
      <div className=" flex justify-center">
        <Button onClick={openAddProject}>Create New Project</Button>
      </div>
    </div>
  );
};
