import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { getSingleProject, handleSignOut, viewProjectTitle } from "../helpers";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ openToAddProject, singleProject }) => {
  const [projectTitle, setProjectTitle] = useState([]);
  const navigate = useNavigate()
  let email = localStorage.getItem("email");

  useEffect(() => {
    const fetchDocsTitle = async () => {
      const res = await viewProjectTitle();
      setProjectTitle(res);
    };
    fetchDocsTitle();
  }, [projectTitle]);

  return (
    <div className="flex flex-col lg:w-1/5 md:w-1/4 sm:w-1/4 mt-10 bg-sky-800 rounded-tr-xl">
      <div className="flex flex-col flex-grow">
        <p className="lg:ml-5 md:ml-5 sm:ml-2  mt-4 font-bold text-white lg:text-lg md:text-lg sm:text-base mb-10 pr-2">Welcome: {email}</p>

        <h1 className="lg:ml-5 md:ml-5 sm:ml-2  mt-10 font-bold text-white lg:text-3xl md:text-2xl mb-10">Your Projects</h1>
        <div className=" lg:ml-5 md:ml-5 sm:ml-2 -mt-5">
          <Button onClick={openToAddProject}>+ Add Project</Button>
        </div>
        {projectTitle.length > 0 && (
          <ul className="mt-10">
            {projectTitle.map((item) => (
              <li
                onClick={() => {
                  getSingleProject(item.id);
                  singleProject(item.id);
                }}
                className="my-3 p-1 bg-sky-500 rounded mx-4 text-sky-100 font-base text-start hover:bg-sky-600 hover:text-sky-200 cursor-pointer"
                key={item.id}
              >
                <span className="pl-4 uppercase">{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sign-out button */}
      <div className=" ml-5 mb-5">
        <button  onClick={()=>{handleSignOut; return navigate("/")}} className=" bg-red-600 hover:bg-red-900 p-2 rounded-md px-4 text-white">SignOut</button>
      </div>
    </div>
  );
};
