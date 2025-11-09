// app/time/ClientTime.tsx
"use client";

import { useEffect, useState } from "react";

export function ClientTime() {
  const [clientNow, setClientNow] = useState<string>("");

  useEffect(() => {
    setClientNow(new Date().toString());
  }, []);

  return <p>Client time is: {clientNow}</p>;
}
