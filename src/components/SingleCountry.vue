<template>
  <div class="main-cage">
    <Header />
    <div class="container-lg container-md container-sm">
      <div class="back-button" @click="this.$router.go(-1)">
        <a href="#"
          ><ion-icon class="arrow-icon" name="arrow-back-outline"></ion-icon>
          Back</a
        >
      </div>
      <div class="single-country">
        <div class="single-country-infos">
          <div class="single-country-infos-flag">
            <img :src="countryInfos.flag" />
          </div>
          <div class="single-country-infos-content">
            <h1 class="single-country-infos-content-title">
              {{ countryInfos.name }}
            </h1>
            <div class="single-country-infos-content-subtitle">
              <div class="single-country-infos-content-subtitle-left">
                <h4>
                  <strong>Native Name:</strong> {{ countryInfos.nativeName }}
                </h4>
                <h4>
                  <strong>Population:</strong> {{ countryInfos.population }}
                </h4>
                <h4><strong>Region:</strong> {{ countryInfos.region }}</h4>
                <h4>
                  <strong>Sub Region:</strong> {{ countryInfos.subregion }}
                </h4>
                <h4><strong>Capital:</strong> {{ countryInfos.capital }}</h4>
              </div>
              <div class="single-country-infos-content-subtitle-right">
                <h4>
                  <strong>Top Level Domain: </strong>
                  <span
                    v-for="domain in countryInfos.topLevelDomain"
                    :key="domain"
                    >{{ domain }}</span
                  >
                </h4>
                <h4>
                  <strong>Currencies: </strong>
                  <span
                    v-for="currency in countryInfos.currencies"
                    :key="currency"
                    >{{ currency.name }}</span
                  >
                </h4>
                <h4>
                  <strong>Languages: </strong>
                  <span
                    v-for="language in countryInfos.languages"
                    :key="language"
                    >{{ language.name }}</span
                  >
                </h4>
              </div>
            </div>
            <div class="single-country-infos-content-countries">
              <h4><strong>Border Countries: </strong></h4>
              <span v-for="border in countryInfos.borders" :key="border">
                <a>{{ border }}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { Header },
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      let countryName = route.params.id;
      store.dispatch("getByCountryName", countryName);
    });

    const countryInfos = computed(() => {
      return store.getters.getFoundCountryList[0];
    });

    return {
      countryInfos,
    };
  },
};
</script>


<style lang="scss">
@import "@/assets/style/_single-country.scss";
</style>


