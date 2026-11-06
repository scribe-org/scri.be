// SPDX-License-Identifier: AGPL-3.0-or-later

import { mount } from "@vue/test-utils";
import { it, expect, describe } from "vitest";

import App from "../app/app.vue";

describe("App.vue", () => {
  it("renders NuxtLayout and Nuxtpage", () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          NuxtLayout: {
            template: "<div data-testid='nuxt-layout'><slot /></div>",
          },
          NuxtPage: {
            template: "<div data-testid='nuxt-page'></div>",
          },
        },
      },
    });

    const layout = wrapper.find('[data-testid="nuxt-layout"]');

    expect(layout.exists()).toBe(true);

    expect(layout.find('[data-testid="nuxt-page"]').exists()).toBe(true);
  });
});
