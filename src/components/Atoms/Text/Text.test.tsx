import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Text from "./index";
describe("Atoms/Text", () => {
  beforeEach(() => {
    render(<Text>hello world</Text>);
  });

  test("Should show text", () => {
    expect(screen.getByText("hello world")).toBeDefined();
  });
});
