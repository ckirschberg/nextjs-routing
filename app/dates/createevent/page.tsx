"use client";

import { Button, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { DateTimeRangePicker } from "../../../components/DateTimeRangePicker";

export default function CreateEventForm() {
  const [date, setDate] = useState<Date | null>(new Date());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date) return;

    const res = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify({
        starts_at: date.toString(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(await res.json());
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text size="xl" fw={700} mb="md">
        Hello Mantine + Next.js
      </Text>
      
      <DatePickerInput style={{ width: "180px" }}
        label="Event date"
        value={date ? date.toISOString() : null} // or your preferred format
        onChange={(value) => {
          setDate(value ? new Date(value) : null);
        }}
      />
      <Button className="mt-4" type="submit" variant="filled">Click me</Button>

      <DateTimeRangePicker />
    </form>
  );
}
