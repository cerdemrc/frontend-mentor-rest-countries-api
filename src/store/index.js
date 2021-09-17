import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    foundCountryList: [],
    API_URL: "https://restcountries.eu/rest/v2/"
  },
  getters:{
    getFoundCountryList(state){
        return state.foundCountryList;
    }
  },
  mutations: {
    SET_COUNTRY_LIST(state, payload){
        state.foundCountryList = payload;
    }
  },
  actions: {
      getAllCountry({ state, commit }){
        axios.get(`${state.API_URL}all`)
            .then((res) => {
                commit("SET_COUNTRY_LIST", res.data)
            });
      },
      //by country
      getByCountryName({ state, commit, dispatch}, countryName){
        if (countryName == "") {
            dispatch("getAllCountry")
        }
        axios.get(`${state.API_URL}name/${countryName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
        });
      },
      //by region
      getByRegionName({ state, commit }, regionName){
        axios.get(`${state.API_URL}region/${regionName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
          });
      },
  },
  modules: {
  }
})
