import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    isSidebarShow: false, // Boolean 생성자 대신 false 값 직접 할당
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    toggleSidebar() {
      this.isSidebarShow = !this.isSidebarShow;
    },
  },
});
