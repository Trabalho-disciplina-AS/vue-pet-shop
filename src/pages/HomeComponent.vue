<template>
  <div id="app">
    <HeaderOption />
    <HeaderBase />
    <HomeBanner />
    <ShowCase />
    <MediumBanner />
    <PopularBanner />
    <MegaBanner />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderOption from "../components/HeaderOption.vue";
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import ShowCase from "../components/ShowCase.vue";

import HomeBanner from "../components/HomeBanner.vue";
import MediumBanner from "../components/MediumBanner.vue";
import PopularBanner from "../components/PopularBanner.vue";
import MegaBanner from "../components/MegaBanner.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    HeaderOption,
    InformationsBase,
    FooterBase,
    ShowCase,
    HomeBanner,
    MediumBanner,
    PopularBanner,
    MegaBanner,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
