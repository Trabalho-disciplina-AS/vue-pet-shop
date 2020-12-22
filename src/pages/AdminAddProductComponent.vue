<template>
  <div id="app">
    <HeaderAdmin />
    <AddProduct />
    <InformationsBase />
    <FooterBase />
  </div>
</template>

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import InformationsBase from "../components/InformationsBase.vue";
import FooterBase from "../components/FooterBase.vue";
import AddProduct from "../components/AddProduct.vue";

export default {
  name: "App",
  components: {
    HeaderAdmin,
    InformationsBase,
    FooterBase,
    AddProduct,
  },
};
</script>

