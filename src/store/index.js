import { createStore } from 'vuex'
import axios from "../axios"

export default createStore({
  state: {
    foundCountryList: [],
    darkMode: false,
    loadingStatus: false
  },
  getters:{
    getFoundCountryList(state){
        return state.foundCountryList;
    },
    getMode(state){
        return state.darkMode;
    },
    loadingStatus(state){
        return state.loadingStatus;
    }
  },
  mutations: {
    SET_COUNTRY_LIST(state, payload){
        state.foundCountryList = payload;
    },
    SET_MODE(state){
        state.darkMode = !state.darkMode;
    },
    loadingStatus(state, newLoadingStatus){
        state.loadingStatus = newLoadingStatus;
    }
  },
  actions: {
      getAllCountry({ commit }){
        commit('loadingStatus', true);
        axios.get("/all")
            .then((res) => {
                commit("SET_COUNTRY_LIST", res.data)
                commit('loadingStatus', false)
            })
            .catch(err => console.log(err))
      },
      //by country
      getByCountryName({ commit, dispatch}, countryName){
        commit('loadingStatus', true);
        if (countryName == "") {
            dispatch("getAllCountry")
        }
        axios.get(`name/${countryName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
            commit('loadingStatus', false)
        });
      },
      //by region
      getByRegionName({ commit }, regionName){
        commit('loadingStatus', true)
        axios.get(`region/${regionName}`).then((res) => {
            commit("SET_COUNTRY_LIST", res.data)
            commit('loadingStatus', false)
          });
      },
  },
  modules: {
  }
})
