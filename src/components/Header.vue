<template>
  <div
    class="country-app-wrapper"
    :class="darkMode ? 'dark-element' : 'light-element'"
  >
    <div class="container">
      <div
        class="country-app-header"
        :class="darkMode ? 'dark-text' : 'light-text'"
      >
        <h1>Where in the world?</h1>
        <a
          href="#"
          @click="changeMode"
          :class="darkMode ? 'dark-text' : 'light-text'"
        >
          <span v-if="!darkMode">
            <ion-icon class="mode-icon" name="moon-outline"></ion-icon>
            Dark Mode
          </span>
          <span v-else>
            <ion-icon class="mode-icon" name="moon"></ion-icon>
            Light Mode
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Header",
  setup() {
    const store = useStore();

    const darkMode = computed(() => {
      return store.getters.getMode;
    });

    const changeMode = () => {
      store.commit("SET_MODE");
    };

    return {
      darkMode,
      changeMode,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_header.scss";
</style>
