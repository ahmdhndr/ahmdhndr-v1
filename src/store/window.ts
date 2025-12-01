import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";

type WindowConfig = typeof WINDOW_CONFIG;
type WindowKey = keyof WindowConfig;

export const useWindowStore = create(
  immer<{
    windows: WindowConfig;
    nextZIndex: number;
    openWindow: (_key: WindowKey, _data?: unknown) => void;
    closeWindow: (_key: WindowKey) => void;
    focusWindow: (_key: WindowKey) => void;
  }>((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (key, data = null) =>
      set((state) => {
        const win = state.windows[key];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (key) =>
      set((state) => {
        const win = state.windows[key];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (key) =>
      set((state) => {
        const win = state.windows[key];
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);
