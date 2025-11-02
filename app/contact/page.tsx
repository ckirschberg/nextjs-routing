// app/contact/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // ... pretend to send
    router.push("/thank-you");
  }

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
