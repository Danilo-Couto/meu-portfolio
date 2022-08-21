import axios from "axios";
import { useState } from "react";
import { URL } from "../../utils/url";
import { Sorting } from "../Sorting/index";
import TaskItem from "./TaskItem";

export function TaskList({taskList}: any) { 

  const [sort, setSort] = useState('createdAt');

  const editTask = async (id: any, editedTask: any) => {
    try {
      await axios.put(`${URL}/${id}`, editedTask)
      } catch (error) {
      console.log(error);
      }
  };

  const deleteTask = async (id: any) => await axios.delete(`${URL}/${id}`);

  const todosList = taskList
   && [...taskList]
  .sort((a: any, b: any) => a[sort] > b[sort] ? 1 : -1)
   .map((task: any, i: number)=> (
    <TaskItem
      key={i}
      editTask={editTask}
      deleteTask={deleteTask}
      id={task.id}
      title={task.name}
      content={task.content}
      createdAt={task.created_at}
      owner={task.User.name}
      status={task.status}
      taskList={taskList}
    />
  ));

  return (
    <>
      {todosList && <Sorting {...{sort, setSort}}/>}
      <ul>{todosList && todosList}</ul>
    </>
  );
}
