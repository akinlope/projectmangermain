import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AddTask } from "./AddTask";
import { getExactTast, updateTask } from "../../helpers";

export const Task = ({ projectId, onAddTask }) => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTask = async () => {
      const val = await getExactTast(projectId);
      setTasks(val);
    };
    fetchTask();
  }, [projectId]);

  return (
    <div>
      <AddTask projectId={projectId} onAddTask={onAddTask} />
    </div>
  );
};
