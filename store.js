import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    category: "technology",
    apikey: "8ef92321cab1406386812e94a4a4c178",
    headlinesurl: `https://newsapi.org/v2/top-headlines`,
    everythingurl: `https://newsapi.org/v2/everything`,
    sourcesurl: `https://newsapi.org/v2/everything`
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getApiKey(state) {
      return state.apikey;
    },
    getHeadlinesUrl(state) {
      return state.headlinesurl;
    },
    getEverythingUrl(state) {
      return state.everythingurl;
    }
  },
  mutations: {
    mutateCategory(state, newcategory) {
      state.category = newcategory;
    }
  },
  actions: {
    dispatchNewCategory({ commit }, newcategory) {
      commit("mutateCategory", newcategory);
    }
  }
});

export default store;
