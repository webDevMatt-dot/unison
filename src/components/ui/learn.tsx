import React from "react";
import { Button } from "./button";

export function LearnButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a
        href="#offerings"
        className="inline-block w-full sm:w-auto"
      >
        <Button variant="outline" className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base rounded-md shadow-md hover:shadow-lg transition duration-300">
          📘 Learn More
        </Button>
      </a>
    </div>
  );
}
