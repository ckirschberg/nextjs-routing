import { ClientTime } from "./ClientTime";

// app/time/page.tsx
export default function Page() {
  const serverNow = new Date(); // runs on server in UTC-ish env

  // This component will later hydrate on client with *client* time
  return (
    <div>
      <p>Server rendered at: {serverNow.toString()}</p>
      <ClientTime />
    </div>
  );
}

