<template>
  <div id="app">
    <HeaderOption />
    <HeaderBase />
    <Cart />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderOption from "../components/HeaderOption.vue";
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "App",
  components: {
    HeaderOption,
    HeaderBase,
    InformationsBase,
    FooterBase,
    Cart,
  },
};
</script>

