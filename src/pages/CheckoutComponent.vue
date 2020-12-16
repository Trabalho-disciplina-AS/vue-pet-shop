<template>
  <div id="app">
    <HeaderBase />
    <Checkout />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import Checkout from "../components/Checkout.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    Checkout,
  },
};
</script>

