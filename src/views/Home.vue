<template>
  <div class="main-cage">
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
import { onMounted } from "vue";

export default {
  name: "App",
  components: { Header, Input, CardList },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getAllCountry");
    });
  },
};
</script>

<style lang="scss">
.main-cage {
  background: $light-bg;
  height: 100vh;
}
</style>
