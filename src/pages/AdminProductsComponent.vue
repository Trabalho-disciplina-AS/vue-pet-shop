<template>
  <div id="app">
    <HeaderAdmin />
    <ProductsConfig />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import ProductsConfig from "../components/ProductsConfig.vue";

export default {
  name: "App",
  components: {
    HeaderAdmin,
    InformationsBase,
    FooterBase,
    ProductsConfig,
  },
};
</script>

