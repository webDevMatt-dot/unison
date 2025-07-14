import React from "react";
import { Button } from "./button";

export function ExploreButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a href="#services" className="inline-block w-full md:w-auto">
        <Button
          className="w-full md:w-auto px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          🔍 Explore Our Services
        </Button>
      </a>
    </div>
  );
}
