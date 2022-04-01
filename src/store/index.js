import Vue from "vue";
import Vuex from "vuex";
//
import jsCookie from "js-cookie";
import jsCrypt from "crypto-js";
import createPersistedState from "vuex-persistedstate";
//
const auth = { accessToken: "apiServiceWithAjax" };

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      getItem: (key) => jsCookie.get(key),
      setItem: (key, value) =>
        jsCookie.set(key, value, { expires: 3, secure: true }),
      removeItem: (key) => jsCookie.remove(key),
    }),
  ],
  state: {
    drawer: false,
    drawerMini: true,
    auth: null,
    user: null,
    authenticated: false,
    cookie: false,
    profile: {},
    customerProfile: {},
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    SET_DRAWER_MINI(state, payload) {
      state.drawerMini = payload;
    },
    SET_AUTH(state, payload) {
      state.auth = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.authenticated = payload;
    },
    SET_COOKIE(state, payload) {
      state.cookie = payload;
    },
    SET_PROFILE(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    axnDrawer({ commit }, payload) {
      commit("SET_DRAWER", payload);
    },
    axnDrawerMini({ commit }, payload) {
      commit("SET_DRAWER_MINI", payload);
    },
    axnAuth({ commit }, payload) {
      commit("SET_AUTH", payload);
    },
    axnUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    axnAuthenticated({ commit }, payload) {
      if (payload) {
        let ciphertext = jsCrypt.AES.encrypt(
          JSON.stringify(auth),
          "1234"
        ).toString();
        localStorage.setItem("logged_in", ciphertext);
        jsCookie.set("logged_in", ciphertext);
        // let bytes = jsCrypt.AES.decrypt(ciphertext, "1234")
        // let decryptedData = JSON.parse(bytes.toString(jsCrypt.enc.Utf8))
        // console.log('parcel@: decryptedData '+JSON.stringify(decryptedData));
        commit("SET_AUTHENTICATED", payload);
      }
    },
    axnCookie({ commit }, payload) {
      commit("SET_COOKIE", payload);
    },
    axnProfile({ commit }, payload) {
      commit("SET_PROFILE", payload);
    },
  },
  getters: {
    getDrawer(state) {
      return state.drawer;
    },
    getAuth(state) {
      return state.auth;
    },
    getUser(state) {
      return state.user;
    },
    getAuthenticate(state) {
      return state.authenticated;
    },
    getCookie(state) {
      return state.cookie;
    },
    getProfile(state) {
      return state.profile;
    },
  },
  modules: {},
});
