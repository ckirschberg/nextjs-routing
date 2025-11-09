// En todo sådan som den ligger i databasen
export type Todo = {
  id: string;
  title: string;
  is_done: boolean;
  created_at: string; // ISO string fra Supabase
};

// Det vi sender ind, når vi opretter en ny todo
export type NewTodo = {
  title: string;
  is_done: boolean;
};
