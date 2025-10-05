// SPDX-License-Identifier: AGPL-3.0-or-later
export function useBase64Decoder() {
  function base64ToUTF8(base64String: string) {
    if (!base64String) {
      return "";
    }
    try {
      const bytes = Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0));
      return new TextDecoder("utf-8").decode(bytes);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to decode base64 string:", e);
      return "";
    }
  }

  return { base64ToUTF8 };
}
