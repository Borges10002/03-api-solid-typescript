import { app } from "@/app";
import request from "supertest";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

describe("Register (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it("should be able to register", async () => {
    const response = await request(app.server).post("/users").send({
      name: "Diego da Silva Borges",
      email: "borges10002@gmail.com",
      password: "123456",
    });

    expect(response.statusCode).toEqual(201);
  });
});
