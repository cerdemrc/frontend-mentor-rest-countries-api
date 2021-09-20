<template>
  <div class="container">
    <div class="country-app-content">
      <div class="country-app-content-input">
        <input
          type="text"
          placeholder="Search for a country..."
          v-model="countryName"
          @keydown.enter="searchCountry"
        />
        <ion-icon class="search-icon" name="search"></ion-icon>
        <select v-model="region">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const countryName = ref("");
    const region = ref("");
    const store = useStore();

    const searchCountry = () => {
      store.dispatch("getByCountryName", countryName.value);
      countryName.value = "";
    };

    watchEffect(() => {
      if (region.value != "") {
        store.dispatch("getByRegionName", region.value);
      }
    });

    return {
      countryName,
      searchCountry,
      region,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_input.scss";
</style>