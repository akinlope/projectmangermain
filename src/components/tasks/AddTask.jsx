import React, { useRef, useState, useEffect } from "react";
import Modal from "../Modal";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  addTaskToProject,
  deleteTask,
  listenForTaskChanges,
  updateTaskStatus,
} from "../../helpers";

export const AddTask = ({ projectId }) => {
  const dialog = useRef();
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = listenForTaskChanges(projectId, setTasks);
    return () => unsubscribe();
  }, [projectId]);

  const handleAddTask = async () => {
    if (text.trim() === "") return dialog.current.open();
    const data = { projectId, text };
    await addTaskToProject(data);
    setText("");
  };

  const handleCompletedTask = async ({ id, done }) => {
    await updateTaskStatus({ id, done });
  };


  return (
    <>
      <Modal ref={dialog} />
      <div className="flex justify-between">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="bg-sky-100 px-2 py-1 w-4/5 rounded-sm border-sky-300 border-b-2 focus:border-sky-500 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="px-1 bg-sky-500 text-sky-50 hover:bg-sky-700 hover:text-sky-200 rounded-sm"
        >
          Add Task
        </button>
      </div>

      {/* Render the list of tasks */}
      <ul>
        {tasks.length != 0 ? (
          tasks.map((task) => (
            <ul
              className="my-4 text-stone-900 font-semibold flex justify-between mx-10 bg-sky-100 p-2 rounded"
              key={task.id}
            >
              <span
                className={`${task.done ? " line-through text-gray-300" : ""}`}
              >
                {task.text}
              </span>
              <div className="">
                <button
                  onClick={() => {
                    handleCompletedTask({ id: task.id, done: !task.done });
                  }}
                  className={`mr-2 hover:text-green-500 ${task.done ? " text-green-500" : ""} `}
                >
                  <IoMdCheckmarkCircle />
                </button>
                <button
                  onClick={() => {
                    let txt;
                    if (
                      confirm(`Are you sure you want to delete ${task.text}`)
                    ) {
                      deleteTask(task.id);
                    }
                    alert();
                  }}
                  className="hover:text-red-500 ml-2"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </ul>
          ))
        ) : (
          <div className=" flex flex-col "></div>
        )}
      </ul>
    </>
  );
};

// import React, { useRef, useState } from "react";
// import Modal from "../Modal";
// import { addTaskToProject } from "../../helpers";
// import { set } from "mongoose";

// export const AddTask = ({projectId }) => {
//   const dialog = useRef();
//   const [text, setText] = useState("");

//   const handleAddTask = async() => {
//     if(text.trim() === "") return  dialog.current.open();
//     const data = {projectId, text}
//     const val = await addTaskToProject(data)
//     console.log(val)

//     setText("");
//   };

//   return (
//     <>
//       <Modal ref={dialog} />
//       <div className=" flex justify-between">
//         <input
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//           type="text"
//           className=" bg-sky-100 px-2  py-1 w-4/5 rounded-sm border-sky-300 border-b-2 focus:border-sky-500 focus:outline-none"
//         />
//         <button
//           onClick={handleAddTask}
//           className=" px-1 bg-sky-500 text-sky-50 hover:bg-sky-700 hover:text-sky-200 rounded-sm"
//         >
//           Add Task
//         </button>
//       </div>
//     </>
//   );
// };
