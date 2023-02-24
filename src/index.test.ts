import { describe, it, expect } from "vitest";
import { MessageEmitter } from ".";

describe("message emitter", () => {
  it("register and emit", () => {
    let message: string = "";
    const messageEmitter = new MessageEmitter();
    messageEmitter.on("send", (msg) => {
      message = msg;
    });
    messageEmitter.emit("send", "Hello World!");
    expect(message).toBe("Hello World!");
  });
});
