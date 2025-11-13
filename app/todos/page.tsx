"use client";
// Todos.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    // 1) supabase-js automatically sends the JWT (if logged in)
    const { data, error } = await supabase
      .from("todos")
      .select("id, title, done")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading todos", error);
      return;
    }

    setTodos(data ?? []);
  }

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // 2) Again, supabase-js adds the Authorization: Bearer <JWT> header automatically
    const { data, error } = await supabase
      .from("todos")
      .insert({ title: newTitle.trim() })
      .select("id, title, done")
      .single();

    if (error) {
      console.error("Error inserting todo", error);
      return;
    }

    setTodos((prev) => [data!, ...prev]);
    setNewTitle("");
  }

  return (
    <div>
      <h2>Your todos</h2>

      <form onSubmit={addTodo}>
        <input
          placeholder="New todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title} {t.done ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
