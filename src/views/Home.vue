<template>
  <div class="main-cage" :class="darkMode ? 'dark-bg' : 'light-bg'">
    <Header />
    <Input />
    <CardList />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Input from "../components/Input.vue";
import CardList from "../components/CardList.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export default {
  name: "App",
  components: { Header, Input, CardList },
  setup() {
    const store = useStore();

    const darkMode = computed(() => {
      return store.getters.getMode;
    });

    onMounted(() => {
      store.dispatch("getAllCountry");
    });

    return {
      darkMode,
    };
  },
};
</script>

<style lang="scss">
.main-cage {
  height: auto;
}
</style>
