<template>
  <div v-if="showSpinner" class="loading"></div>
</template>

<script>
export default {
  computed: {
    showSpinner() {
      return this.$store.getters.loadingStatus;
    },
  },
};
</script>

<style lang="scss">
.loading:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  z-index: 99;
  height: 50px;
  margin-top: -25px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid $light-input;
  border-top-color: $light-text;
  animation: spinner 0.6s linear infinite;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>