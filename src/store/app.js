// Utilities
import { defineStore } from "pinia";
import axios from "axios";
export const useNewsApi = defineStore("news", {
  state: () => ({
    items: [],
  }),
});
