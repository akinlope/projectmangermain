import React, { useState } from "react";
import { SideBar } from "./components/SideBar";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { AddProject } from "./components/AddProject";
import { ViewSingleProject } from "./components/ViewSingleProject";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export const MyApp = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projectState, setProjectState] = useState({
  
    projectCurrentState: null,
    projects: [],
    tasks: [],
  });

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  onAuthStateChanged(auth, (user) => {
    if (!user) return navigate("/");
  });



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
    <div className=" flex h-screen gap-2 ">
      <SideBar
        openToAddProject={openAddProject}
        singleProject={singleProject}
      />      
      {outlet}
    </div>
  );
};
