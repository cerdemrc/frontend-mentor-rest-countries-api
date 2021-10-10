<template>
  <router-link
    :to="country.name.common"
    tag="a"
    class="country-app-card"
    :class="darkMode ? 'dark-element' : 'light-element'"
    v-if="country"
  >
    <div class="country-app-card-image">
      <img :src="country.flags.svg" />
    </div>
    <div
      class="country-app-card-infos"
      :class="darkMode ? 'dark-text' : 'light-text'"
    >
      <h1>{{ country.name.common }}</h1>
      <h4><strong>Population:</strong> {{ country.population }}</h4>
      <h4><strong>Region:</strong> {{ country.region }}</h4>
      <h4>
        <strong>Capital: </strong>
        <span v-for="capital in country.capital" :key="capital">{{
          capital
        }}</span>
      </h4>
    </div>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    country: {
      Object,
    },
  },
  setup() {
    const store = useStore();

    const darkMode = computed(() => {
      return store.getters.getMode;
    });

    return {
      darkMode,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_card.scss";
</style>