import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        // Add other state properties as needed
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        // Add other mutations as needed
    },
    actions: {
        login({ commit }, userData) {
            // Make an API request to your Laravel backend for authentication
            // Upon successful login, commit the user to the state
            commit("setUser", userData);
        },
        // Add other actions as needed
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        // Add other getters as needed
    },
});

export default store;
