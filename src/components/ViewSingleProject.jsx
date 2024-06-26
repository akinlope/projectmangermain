import React, { useEffect, useState } from "react";
import { Task } from "./tasks/Task";
import { deleteProject, getSingleProject, } from "../helpers";

export const ViewSingleProject = ({ onAddTask,  onDeleteProject, projectId}) => {
  const [doc, setDoc] = useState({})

    const formattedDate = new Date(doc.dueDate).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
useEffect(()=> {
  const getSingleDoc = async ()=> {
    const res = await getSingleProject(projectId)
    setDoc(res)
  };
  getSingleDoc();
}, [projectId]);

  return (
    <div className=" ml-5 mt-20 lg:p-4 md:p-4 sm:p-2 lg:w-[35rem] md:w-[35rem] sm:w-full p-2">
      <div className=" flex justify-between w-full items-center">
        <span className="  lg:text-3xl md:text-2xl sm:text-lg uppercase text-sky-500  font-bold ">
          {doc.title}
        </span>
        <span onClick={()=> {
          deleteProject(doc.id)
          onDeleteProject()
        }
          } className=" text-stone-500 hover:text-red-500 font-semibold cursor-pointer">Delete</span>
      </div>
      <div className=" text-stone-500 my-5 font-medium">Due date: {formattedDate}</div>
      <div className=" text-sky-950 font-medium whitespace-pre-wrap">{doc.description}</div>
      <div className=" border-b-2 border-sky-800 mt-5 mb-10"></div>
      <h1 className=" font-bold text-stone-500">ADD TASK</h1>
      <Task projectId={projectId} onAddTask={onAddTask} />
    </div>
  );
};
