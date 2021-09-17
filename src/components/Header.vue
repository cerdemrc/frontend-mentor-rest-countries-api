<template>
  <div class="country-app-wrapper">
    <div class="container-lg container-md container-sm">
      <div class="country-app-header">
        <h1>Where in the world?</h1>
        <a href="#" @click="changeMode">
          <span v-if="!darkMode">
            <ion-icon class="mode-icon" name="moon-outline"> </ion-icon>
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
import Header from "../composables/Header";
export default {
  name: "Header",
  setup() {
    const { darkMode, changeMode } = Header();
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
