import React from "react";
import { Button } from "./button";

export function SendMessageButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a href="#contact-form" className="block w-full sm:w-auto">
        <Button
          className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          ✉️ Send us a Message
        </Button>
      </a>
    </div>
  );
}
