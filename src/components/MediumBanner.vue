<template>
  <!-- Start Midium Banner  -->
  <section class="midium-banner">
    <div class="container">
      <div class="row special-products">
        <!-- Single Banner  -->
        <div class="col-lg-6 col-md-6 col-12">
          <div class="single-banner">
            <img :src="product1.image_url" alt="#" />
            <div class="content">
              <p>{{ product1.category }}</p>
              <h3>
                {{ product1.name }} <br />
                Oferta <span>R$ {{ product1.price }}</span>
              </h3>
              <a href="#" class="btn">Compre Agora!</a>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
        <!-- Single Banner  -->
        <div class="col-lg-6 col-md-6 col-12">
          <div class="single-banner">
            <img :src="product2.image_url" alt="#" />
            <div class="content">
              <p>{{ product2.category }}</p>
              <h3>
                {{ product2.name }} <br />
                Oferta <span>R$ {{ product2.price }}</span>
              </h3>
              <a href="#" class="btn">Compre Agora!</a>
            </div>
          </div>
        </div>
        <!-- /End Single Banner  -->
      </div>
    </div>
  </section>
  <!-- End Midium Banner -->
</template>

<script>
import axios from "axios";

export default {
  name: "MediumBanner",
  data() {
    return {
      product1: {},
      product2: {},
      baseUrl: "http://localhost:5005/product_image/",
    };
  },
  created: function () {
    axios.get("http://localhost:5005/products_varied?qtd=2").then((res) => {
      this.product1 = res.data[0];
      this.product1["image_url"] = this.baseUrl + this.product1["_id"];

      this.product2 = res.data[1];
      this.product2["image_url"] = this.baseUrl + this.product2["_id"];
    });
  },
};
</script>

