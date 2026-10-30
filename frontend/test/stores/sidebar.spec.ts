// SPDX-License-Identifier: AGPL-3.0-or-later
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";

import { useSidebar } from "../../app/stores/sidebar";

vi.unmock("~/stores/sidebar");

describe("stores/sidebar", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  describe("initial state", () => {
    it("initializes with collapsed as false by default", () => {
      const store = useSidebar();
      expect(store.collapsed).toBe(false);
    });

    it("initializes with collapsedSwitch as false by default", () => {
      const store = useSidebar();
      expect(store.collapsedSwitch).toBe(false);
    });
  });

  describe("actions", () => {
    it("toggles collapsed from false to true and back to false", () => {
      const store = useSidebar();
      expect(store.collapsed).toBe(false);

      store.toggleCollapsed();
      expect(store.collapsed).toBe(true);

      store.toggleCollapsed();
      expect(store.collapsed).toBe(false);
    });

    it("toggles collapsedSwitch from false to true and back to false", () => {
      const store = useSidebar();
      expect(store.collapsedSwitch).toBe(false);

      store.toggleCollapsedSwitch();
      expect(store.collapsedSwitch).toBe(true);

      store.toggleCollapsedSwitch();
      expect(store.collapsedSwitch).toBe(false);
    });

    it("toggles collapsed and collapsedSwitch independently", () => {
      const store = useSidebar();

      store.toggleCollapsed();
      expect(store.collapsed).toBe(true);
      expect(store.collapsedSwitch).toBe(false);

      store.toggleCollapsedSwitch();
      expect(store.collapsed).toBe(true);
      expect(store.collapsedSwitch).toBe(true);

      store.toggleCollapsed();
      expect(store.collapsed).toBe(false);
      expect(store.collapsedSwitch).toBe(true);
    });
  });

  describe("state mutation", () => {
    it("allows setting collapsed directly", () => {
      const store = useSidebar();

      store.collapsed = true;
      expect(store.collapsed).toBe(true);

      store.collapsed = false;
      expect(store.collapsed).toBe(false);
    });

    it("allows setting collapsedSwitch directly", () => {
      const store = useSidebar();

      store.collapsedSwitch = true;
      expect(store.collapsedSwitch).toBe(true);

      store.collapsedSwitch = false;
      expect(store.collapsedSwitch).toBe(false);
    });

    it("supports patching state through $patch", () => {
      const store = useSidebar();

      store.$patch({
        collapsed: true,
        collapsedSwitch: true,
      });

      expect(store.collapsed).toBe(true);
      expect(store.collapsedSwitch).toBe(true);
    });
  });

  describe("localStorage persistence", () => {
    it("persists collapsed state changes to localStorage", async () => {
      const store = useSidebar();
      store.toggleCollapsed();
      await nextTick();

      expect(localStorage.getItem("collapsed")).toBe("true");
    });

    it("persists collapsedSwitch state changes to localStorage", async () => {
      const store = useSidebar();
      store.toggleCollapsedSwitch();
      await nextTick();

      expect(localStorage.getItem("collapsedSwitch")).toBe("true");
    });

    it("initializes with stored value from localStorage", () => {
      localStorage.setItem("collapsed", "true");
      localStorage.setItem("collapsedSwitch", "true");

      const store = useSidebar();
      expect(store.collapsed).toBe(true);
      expect(store.collapsedSwitch).toBe(true);
    });
  });
});
