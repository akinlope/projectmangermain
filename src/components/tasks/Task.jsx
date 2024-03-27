import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AddTask } from "./AddTask";
import { getExactTast, updateTask } from "../../helpers";

export const Task = ({ projectId, onAddTask, onDeleteTask }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState();

  const handleCompletedTask = async(data) => {
    const {id, done} = data;
    try {
      await updateTask({id, done});
    } catch (error) {
      console.log("Error handling completed task:", error.message)
    }
  };
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
