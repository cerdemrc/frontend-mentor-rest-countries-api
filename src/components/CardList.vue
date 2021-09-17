<template>
  <div class="container-lg container-md container-sm">
    <div class="country-app-card-list col-lg col-md col-sm">
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

    return {
      foundCountryList,
    };
  },
};
</script>

<style lang="scss">
.country-app-card-list {
  display: grid;
  margin-top: 5rem;
}
</style>