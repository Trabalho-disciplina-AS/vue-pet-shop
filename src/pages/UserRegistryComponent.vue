<template>
  <div id="app">
    <HeaderBase />
    <UserRegistry />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import UserRegistry from "../components/UserRegistry.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    InformationsBase,
    FooterBase,
    UserRegistry,
  },
};
</script>

