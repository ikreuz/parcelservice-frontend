import axios from "axios";
// import { srvAxios } from "../services/srv_axios";

const jsonCompany = "/api/base/company.json";
const jsonRoles = "/api/base/roles.json";
const jsonEmployees = "/api/base/employees.json";
const jsonCustomers = "/api/base/customers.json";

export default {
  state: {
    apiCompany: [],
    apiRoles: [],
    apiEmployees: [],
    apiCustomers: [],
  },
  getters: {
    getEpApiCompany(state) {
      return state.apiCompany;
    },
    getEpApiRoles(state) {
      return state.apiRoles;
    },
    getEpApiEmployees(state) {
      return state.apiEmployees;
    },
    getEpApiCustomers(state) {
      return state.apiCustomers;
    },
  },
  mutations: {
    SET_API_COMPANY(state, payload) {
      state.apiCompany = payload;
    },
    SET_API_ROLES(state, payload) {
      state.apiRoles = payload;
    },
    SET_API_EMPLOYEES(state, payload) {
      state.apiEmployees = payload;
    },
    SET_API_CUSTOMERS(state, payload) {
      state.apiCustomers = payload;
    },
  },
  actions: {
    async axnLoadJson({ dispatch }) {
      try {
        await axios
          .all([
            axios.get(jsonCompany),
            axios.get(jsonRoles),
            axios.get(jsonEmployees),
            axios.get(jsonCustomers),
          ])
          .then(
            axios.spread(function (part1, part2, part3, part4) {
              dispatch("axnCompany", part1.data);
              dispatch("axnRoles", part2.data);
              dispatch("axnEmployees", part3.data);
              dispatch("axnCustomers", part4.data);
            })
          );
      } catch (error) {
        console.log(error);
      }
    },
    async axnCompany({ commit }, payload) {
      commit("SET_API_COMPANY", payload);
    },
    async axnRoles({ commit }, payload) {
      commit("SET_API_ROLES", payload);
    },
    async axnEmployees({ commit }, payload) {
      commit("SET_API_EMPLOYEES", payload);
    },
    async axnCustomers({ commit }, payload) {
      commit("SET_API_CUSTOMERS", payload);
    },
  },
};
