<template>
  <div class="container">
    <div class="country-app-card-list">
      <Card
        v-for="country in foundCountryList"
        :key="country.id"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();

    const foundCountryList = computed(() => {
      return store.getters.getFoundCountryList;
    });

    const darkMode = computed(() => {
      return store.getters.getMode;
    });

    return {
      foundCountryList,
      darkMode,
    };
  },
};
</script>

<style lang="scss">
.country-app-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>