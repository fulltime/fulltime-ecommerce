"use client";
import { Builder } from "@builder.io/react";
import { Heading } from "./components/heading";

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
