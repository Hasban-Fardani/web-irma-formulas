import { e as defineStore } from '../server.mjs';

const useTokenStore = defineStore("token", {
  state: () => ({ token: "" }),
  getters: {
    getToken: (state) => state.token
  },
  actions: {
    setToken(token) {
      this.token = token;
    }
  }
});

export { useTokenStore as u };
//# sourceMappingURL=token-24f45763.mjs.map
