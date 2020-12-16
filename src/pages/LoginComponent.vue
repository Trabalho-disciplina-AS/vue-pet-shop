<template>
  <div id="app">
    <HeaderBase />
    <Login />
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "../components/HeaderBase.vue";
// import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import Login from "../components/Login.vue";

export default {
  name: "App",
  components: {
    HeaderBase,
    // InformationsBase,
    FooterBase,
    Login,
  },
};
</script>

