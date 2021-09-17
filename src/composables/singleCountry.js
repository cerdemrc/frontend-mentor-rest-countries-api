import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function(){
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      let countryName = route.params.id;
      store.dispatch("getByCountryName", countryName);
    });

    const countryInfos = computed(() => {
      return store.getters.getFoundCountryList[0];
    });

    const darkMode = computed(() => {
      return store.getters.getMode;
    });

    return {
      countryInfos,
      darkMode
    };
}