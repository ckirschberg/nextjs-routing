"use client";

import { useState } from "react";
import { Stack } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

export function DateTimeRangePicker() {
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);


  return (
    <Stack>
      <DateTimePicker
        label="From"
        value={from ? from.toISOString() : null} // or your preferred format
        onChange={(value) => {
          setFrom(value ? new Date(value) : null);
        }}
        // User cannot pick a date after the "to" date
        maxDate={to ?? undefined}
        placeholder="Pick start date and time"
        clearable
      />

      <DateTimePicker
        label="To"
        value={to ? to.toISOString() : null} // or your preferred format
        onChange={(value) => {
          setTo(value ? new Date(value) : null);
        }}
        // User cannot pick a date before the "from" date
        minDate={from ?? undefined}
        placeholder="Pick end date and time"
        clearable
      />
    </Stack>
  );
}
