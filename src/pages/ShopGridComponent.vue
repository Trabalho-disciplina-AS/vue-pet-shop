<template>
  <div id="app">
    <HeaderBase />
    <ShopGrid />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import ShopGrid from "../components/ShopGrid.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    ShopGrid,
  },
};
</script>

