
"use client"
import todoService from "@/service/todoService";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const[todos,setTodos]=useState([])
  const[error,setError]=useState()

  useEffect(()=>{
    loadTodos()
  },[])
  const loadTodos=async()=>{
    try {
      const data=await todoService.getAllTodos();
      setTodos(data)
    } catch (error) {
      
    }
  }
  return (
   <div style={{ padding: "2rem" }}>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
