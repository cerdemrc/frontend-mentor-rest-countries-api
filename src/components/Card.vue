<template>
  <router-link
    :to="country.name"
    tag="a"
    class="country-app-card"
    v-if="country"
  >
    <div class="country-app-card-image">
      <img :src="country.flag" />
    </div>
    <div class="country-app-card-infos">
      <h1>{{ country.name }}</h1>
      <h4><strong>Population:</strong> {{ country.population }}</h4>
      <h4><strong>Region:</strong> {{ country.region }}</h4>
      <h4><strong>Capital:</strong> {{ country.capital }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: {
      Object,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_card.scss";
</style>