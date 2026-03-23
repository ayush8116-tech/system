import { main } from "../src/app.js"
import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "@std/assert";

describe("Simple test suite", () => {
  it("A simple test", () => {
    assertEquals(main(), 1);
  });
});
