import React from "react";
import { Button } from "./button";

export function ScheduleButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto"
      >
        <Button className="w-full md:w-auto px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300">
          📅 Schedule a Consultation
        </Button>
      </a>
    </div>
  );
}
