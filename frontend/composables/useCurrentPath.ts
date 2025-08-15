// SPDX-License-Identifier: AGPL-3.0-or-later
import { useRoute } from "vue-router";

export function useCurrentPath() {
  const route = useRoute();

  const isCurrentPath = (path: string): boolean => {
    return route.path === path;
  };

  return {
    isCurrentPath,
  };
}
