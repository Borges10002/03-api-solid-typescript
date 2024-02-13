import { Environment } from "vitest";

export default <Environment>{
  name: "prisma",
  transformMode: "web",
  async setup() {
    console.log("Setup");

    return {
      async teardown() {
        console.log("Teardown");
      },
    };
  },
};
