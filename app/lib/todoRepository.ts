import { supabase } from "./supabaseClient";
import type { Todo, NewTodo } from "@/app/types/todo";

// Opretter en ny todo
export async function createTodo(input: NewTodo): Promise<Todo> {
  const { data, error } = await supabase
    .from("todos")
    .insert([input])
    .select("*");

  if (error) {
    throw error;
  }

  // data er Todo[] – vi forventer én række tilbage
  return (data as Todo[])[0];
}

// Henter alle todos som et array af Todo
export async function getTodos(): Promise<Todo[]> {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as Todo[];
}
