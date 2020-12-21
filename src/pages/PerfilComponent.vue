<template>
  <div id="app">
    <HeaderBase />
    <Perfil />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
import FooterBase from "../components/FooterBase.vue";
import Perfil from "../components/Perfil.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    FooterBase,
    Perfil,
  },
};
</script>

