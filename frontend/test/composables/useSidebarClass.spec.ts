// SPDX-License-Identifier: AGPL-3.0-or-later
import { beforeEach, describe, expect, it, vi } from "vitest";
import { reactive, ref } from "vue";

import { useSidebarClass } from "../../app/composables/useSidebarClass";

describe("composables/useSidebarClass", () => {
  let sidebar: {
    collapsed: boolean;
    collapsedSwitch: boolean;
    toggleCollapsed: () => void;
    toggleCollapsedSwitch: () => void;
  };

  beforeEach(() => {
    sidebar = reactive({
      collapsed: false,
      collapsedSwitch: false,
      toggleCollapsed: vi.fn(),
      toggleCollapsedSwitch: vi.fn(),
    });
    globalThis.useSidebarMock.mockReturnValue(sidebar);
  });

  describe("getSidebarContentDynamicClass", () => {
    it("returns expanded padding classes when expanded and not scrollable", () => {
      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarContentDynamicClass(false, sidebarHover).value;

      expect(classes["md:pl-16 xl:pl-56"]).toBe(true);
      expect(classes["md:pl-16 xl:pl-16"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-60"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-20"]).toBe(false);
      expect(classes["blur-sm xl:blur-none"]).toBe(false);
    });

    it("returns expanded scrollable classes when expanded and scrollable", () => {
      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarContentDynamicClass(true, sidebarHover).value;

      expect(classes["md:pl-16 xl:pl-56"]).toBe(true);
      expect(classes["md:pl-16 xl:pl-16"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-60"]).toBe(true);
      expect(classes["md:pl-20 xl:pl-20"]).toBe(false);
    });

    it("returns collapsed padding classes when collapsed and not scrollable", () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarContentDynamicClass(false, sidebarHover).value;

      expect(classes["md:pl-16 xl:pl-16"]).toBe(true);
      expect(classes["md:pl-16 xl:pl-56"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-20"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-60"]).toBe(false);
    });

    it("returns collapsed scrollable classes when collapsed and scrollable", () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarContentDynamicClass(true, sidebarHover).value;

      expect(classes["md:pl-16 xl:pl-16"]).toBe(true);
      expect(classes["md:pl-16 xl:pl-56"]).toBe(false);
      expect(classes["md:pl-20 xl:pl-20"]).toBe(true);
      expect(classes["md:pl-20 xl:pl-60"]).toBe(false);
    });

    it("applies blur effect when collapsedSwitch is true, collapsed is false, and hovering", () => {
      sidebar.collapsed = false;
      sidebar.collapsedSwitch = true;

      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(true);

      const classes = getSidebarContentDynamicClass(false, sidebarHover).value;

      expect(classes["blur-sm xl:blur-none"]).toBe(true);
    });

    it("does not apply blur effect when not hovering", () => {
      sidebar.collapsed = false;
      sidebar.collapsedSwitch = true;

      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarContentDynamicClass(false, sidebarHover).value;

      expect(classes["blur-sm xl:blur-none"]).toBe(false);
    });

    it("reactively updates classes when sidebar state or hover changes", () => {
      const { getSidebarContentDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const dynamicClasses = getSidebarContentDynamicClass(false, sidebarHover);

      expect(dynamicClasses.value["md:pl-16 xl:pl-56"]).toBe(true);
      expect(dynamicClasses.value["md:pl-16 xl:pl-16"]).toBe(false);

      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      expect(dynamicClasses.value["md:pl-16 xl:pl-56"]).toBe(false);
      expect(dynamicClasses.value["md:pl-16 xl:pl-16"]).toBe(true);

      sidebar.collapsed = false;
      sidebarHover.value = true;

      expect(dynamicClasses.value["blur-sm xl:blur-none"]).toBe(true);
    });
  });

  describe("getSidebarFooterDynamicClass", () => {
    it("returns expanded footer classes when expanded", () => {
      const { getSidebarFooterDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarFooterDynamicClass(sidebarHover).value;

      expect(classes["md:pl-24 xl:pl-64"]).toBe(true);
      expect(classes["md:pl-24 xl:pl-24"]).toBe(false);
      expect(classes["blur-sm xl:blur-none"]).toBe(false);
    });

    it("returns collapsed footer classes when collapsed", () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      const { getSidebarFooterDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const classes = getSidebarFooterDynamicClass(sidebarHover).value;

      expect(classes["md:pl-24 xl:pl-24"]).toBe(true);
      expect(classes["md:pl-24 xl:pl-64"]).toBe(false);
    });

    it("applies blur effect to footer when hovering in switched mode", () => {
      sidebar.collapsed = false;
      sidebar.collapsedSwitch = true;

      const { getSidebarFooterDynamicClass } = useSidebarClass();
      const sidebarHover = ref(true);

      const classes = getSidebarFooterDynamicClass(sidebarHover).value;

      expect(classes["blur-sm xl:blur-none"]).toBe(true);
    });

    it("reactively updates footer classes when hover state changes", () => {
      sidebar.collapsed = false;
      sidebar.collapsedSwitch = true;

      const { getSidebarFooterDynamicClass } = useSidebarClass();
      const sidebarHover = ref(false);

      const dynamicClasses = getSidebarFooterDynamicClass(sidebarHover);

      expect(dynamicClasses.value["blur-sm xl:blur-none"]).toBe(false);

      sidebarHover.value = true;
      expect(dynamicClasses.value["blur-sm xl:blur-none"]).toBe(true);
    });
  });
});
