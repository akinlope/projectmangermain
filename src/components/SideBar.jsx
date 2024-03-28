import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { getSingleProject, handleSignOut, viewProjectTitle } from "../helpers";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ openToAddProject, singleProject, open }) => {
  const [projectTitle, setProjectTitle] = useState([]);
  // const [reload, setReload] = useState(false)
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
    <div className={`sm:block ${open && "sm:hidden"} flex flex-col lg:w-1/5 md:w-1/4 sm:w-1/4 lg:mt-10 md:mt-10 bg-sky-800 rounded-tr-xl `}>
      <div className="flex flex-col flex-grow">
        <p className="lg:mx-5 md:mx-5 sm:mx-1  mt-4 font-bold text-white lg:text-2xl md:text-lg mb-10 ">Welcome: <br/> {email}</p>

        <h1 className="lg:ml-5 md:ml-5 sm:ml-2  mt-10 font-bold text-white lg:text-3xl md:text-2xl sm:text-sm mb-10">Your Projects</h1>
        <div className=" lg:ml-5 md:ml-5 sm:ml-2 -mt-5">
          <Button onClick={openToAddProject}>+Project</Button>
        </div>
        {projectTitle.length > 0 && (
          <ul className="mt-10">
            {projectTitle.map((item) => (
              <li
                onClick={() => {
                  getSingleProject(item.id);
                  singleProject(item.id);
                }}
                className="my-3 p-1 bg-sky-500 rounded lg:mx-4 md:mx-4 sm:mx-1 break-words text-sky-100 font-base text-start hover:bg-sky-600 hover:text-sky-200 cursor-pointer"
                key={item.id}
              >
                <span className="lg:pl-4 md:pl-4 sm:pl-1 uppercase">{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sign-out button */}
      <div className=" lg:ml-5 md:ml-5 sm:ml-1 mb-5 fixed bottom-0">
        <button  onClick={()=>{handleSignOut; return navigate("/")}} className=" bg-red-600 hover:bg-red-900 lg:p-2 md:p-2 sm:p-1 rounded-md lg:px-4 md:px-4 text-white">SignOut</button>
      </div>
    </div>
  );
};
