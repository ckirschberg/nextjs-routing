"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/app/types/todo";
import { getTodos, createTodo } from "@/app/lib/todoRepository";

export default function TodoPage() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load todos");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setError(null);

      const created = await createTodo({
        title: title.trim(),
        is_done: false,
      });

      // Sæt den nye todo ind i toppen af listen
      setTodos((prev) => [created, ...prev]);
      setTitle("");
    } catch (err) {
      console.error(err);
      setError("Failed to create todo");
    }
  }

  return (
    <main
      style={{
        maxWidth: 480,
        margin: "2rem auto",
        fontFamily: "system-ui",
        padding: "0 1rem",
      }}
    >
      <h1>Todos med TypeScript + Supabase</h1>

      <form onSubmit={handleCreate} style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Ny todo
        </label>
        <input
          type="text"
          placeholder="Skriv en titel..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "0.5rem",
          }}
        />
        <button type="submit">Opret todo</button>
      </form>

      {loading && <p>Henter todos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "0.5rem 0",
              borderBottom: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>{todo.is_done ? "✅" : "⬜"}</span>
            <span>{todo.title}</span>
          </li>
        ))}

        {!loading && todos.length === 0 && (
          <li>Ingen todos endnu. Opret den første ovenfor 👆</li>
        )}
      </ul>
    </main>
  );
}
