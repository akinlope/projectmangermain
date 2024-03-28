import React, { useEffect, useState } from "react";
import { SideBar } from "./components/SideBar";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { AddProject } from "./components/AddProject";
import { ViewSingleProject } from "./components/ViewSingleProject";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const MyApp = () => {
  const navigate = useNavigate();
  const [openHamburger, setOpenHamburger] = useState(false);
  const [projectState, setProjectState] = useState({
    projectCurrentState: null,
    projects: [],
    tasks: [],
  });

  const toggleSidebar = () => {
    setOpenHamburger((prevState) => !prevState);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return navigate("/");
    });
    return () => unsubscribe;
  }, [navigate]);

  // PROJECTS
  const addProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: null,
      };
    });
  };
  const deleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: null,
      };
    });
  };
  const openAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: undefined,
      };
    });
  };
  const closeAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: null,
      };
    });
  };
  const singleProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: id,
      };
    });
  };

  let outlet = (
    <ViewSingleProject
      onDeleteProject={deleteProject}
      projectId={projectState.projectCurrentState}
    />
  );
  if (projectState.projectCurrentState === null) {
    outlet = <NoProjectSelected openAddProject={openAddProject} />;
  } else if (projectState.projectCurrentState === undefined) {
    outlet = (
      <AddProject addProject={addProject} closeAddProject={closeAddProject} />
    );
  }
  
  return (
    <>
    <div className=" h-screen">
      <div className=" lg:hidden md:hidden p-2 h-[5%]">
        <button onClick={toggleSidebar}>
          {openHamburger ? <GiHamburgerMenu /> : <IoClose />}
        </button>
      </div>
      <div className=" flex gap-2 sm:h-[95%] md:h-screen lg:h-screen ">
        <SideBar
          openToAddProject={openAddProject}
          singleProject={singleProject}
          open={openHamburger}
        />
        {outlet}
      </div>
      </div>
    </>
  );
};
