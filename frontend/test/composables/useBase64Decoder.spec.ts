// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it, vi } from "vitest";

import { useBase64Decoder } from "../../app/composables/useBase64Decoder";

describe("useBase64Decoder", () => {
  it("returns empty string when input is empty", () => {
    const { base64ToUTF8 } = useBase64Decoder();
    expect(base64ToUTF8("")).toBe("");
  });

  it("decodes valid base64 ASCII string", () => {
    const { base64ToUTF8 } = useBase64Decoder();
    const encoded = btoa("Hello, world!");

    expect(base64ToUTF8(encoded)).toBe("Hello, world!");
  });

  it("decodes UTF-8 multi-byte characters correctly", () => {
    const { base64ToUTF8 } = useBase64Decoder();
    const utf8Text = "Hello, 世界! 🌍";
    const encoded = Buffer.from(utf8Text, "utf-8").toString("base64");

    expect(base64ToUTF8(encoded)).toBe(utf8Text);
  });

  it("handles malformed base64 string gracefully", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { base64ToUTF8 } = useBase64Decoder();
    expect(base64ToUTF8("invalid-base64!@#$")).toBe("");
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
