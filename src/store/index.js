import { createStore } from 'vuex'
import axios from "../axios"

export default createStore({
  state: {
    foundCountryList: [],
    darkMode: false
  },
  getters:{
    getFoundCountryList(state){
        return state.foundCountryList;
    },
    getMode(state){
        return state.darkMode;
    }
  },
  mutations: {
    SET_COUNTRY_LIST(state, payload){
        state.foundCountryList = payload;
    },
    SET_MODE(state){
        state.darkMode = !state.darkMode;
    },
  },
  actions: {
      getAllCountry({ commit }){
        axios.get("/all")
            .then((res) => {
                commit("SET_COUNTRY_LIST", res.data)
            });
      },
      //by country
      getByCountryName({ commit, dispatch}, countryName){
        if (countryName == "") {
            dispatch("getAllCountry")
        }
        axios.get(`name/${countryName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
        });
      },
      //by region
      getByRegionName({ commit }, regionName){
        axios.get(`region/${regionName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
          });
      },
  },
  modules: {
  }
})
