"use client";
import { builder, Builder } from "@builder.io/react";
import ContactModalComponent from "./components/contact";
import { Heading } from "./components/heading";
import { Navigation } from "./components/Navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

Builder.registerComponent(ContactModalComponent, {
  name: "ContactModalComponent",
});

Builder.registerComponent(
  Navigation, {
    name: 'Navigation',
  }
)