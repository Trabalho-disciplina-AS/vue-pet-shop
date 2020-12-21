<template>
  <div id="app">
    <HeaderBase />
    <CreditCard />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import CreditCard from "../components/CreditCard.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    CreditCard,
  },
};
</script>

