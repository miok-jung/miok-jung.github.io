// src/stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    currentLocale: 'ko-KR' as string,
  }),
  actions: {
    updateLocale(newLocale: string) {
      this.currentLocale = newLocale;
    },
  },
  getters: {
    // userInfo(state) {
    //   return { username: state.username, email: state.email };
    // },
  },
});
