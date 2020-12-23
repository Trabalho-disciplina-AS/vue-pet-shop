<template>
  <div id="app">
    <HeaderBase />
    <Orders />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import Orders from "../components/Orders.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    Orders,
  },
};
</script>

