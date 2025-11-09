"use client";
// pages/test-date.tsx (or app/test-date/page.tsx)
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const d = new Date("2025-11-02"); // user picked “2 Nov 2025”
    console.log("raw", d.toString());
    console.log("toISOString", d.toISOString());
  }, []);

  return <div>Open console</div>;
}