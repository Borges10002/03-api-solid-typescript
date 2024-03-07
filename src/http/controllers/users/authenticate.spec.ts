import { app } from "@/app";
import request from "supertest";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

describe("Authenticate (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it("should be able to authenticate", async () => {
    await request(app.server).post("/users").send({
      name: "Diego da Silva Borges",
      email: "borges10002@gmail.com",
      password: "123456",
    });

    const response = await request(app.server).post("/sessions").send({
      name: "Diego da Silva Borges",
      email: "borges10002@gmail.com",
      password: "123456",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      token: expect.any(String),
    });
  });
});
