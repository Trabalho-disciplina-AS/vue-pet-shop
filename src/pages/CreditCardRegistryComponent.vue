<template>
  <div id="app">
    <HeaderBase />
    <CreditCardRegistry />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import CreditCardRegistry from "../components/CreditCardRegistry.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    CreditCardRegistry,
  },
};
</script>

