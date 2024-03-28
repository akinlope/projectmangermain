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
          className=" lg:w-40 md:w-40 sm:w-20 lg:h-40 md:h-40 sm:h-20 text-center"
        />
      </div>
      <h1 className=" font-bold text-sky-600 lg:text-3xl md:text-3xl sm:text-xl text-center my-10">
        No Project Selected
      </h1>
      <p className=" font-semibold text-center lg:text-2xl md:text-2xl sm:text-lg text-sky-400 mb-10">
        Select a project or get started with a new project.
      </p>
      <div className=" flex justify-center">
        <Button onClick={openAddProject}>Create New Project</Button>
      </div>
    </div>
  );
};
