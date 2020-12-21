<template>
  <div class="product-area most-popular section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Produtos Populares</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="owl-carousel popular-slider products-promotions">
            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product1.image_url" alt="#" />
                  <img class="hover-img" :src="product1.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html">{{ product1.name }}</a>
                </h3>
                <div class="product-price">
                  <span>${{ product1.price }}</span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product2.image_url" alt="#" />
                  <img class="hover-img" :src="product2.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html">{{ product2.name }}</a>
                </h3>
                <div class="product-price">
                  <span>${{ product2.price }}</span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product3.image_url" alt="#" />
                  <img class="hover-img" :src="product3.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html">{{ product3.name }}</a>
                </h3>
                <div class="product-price">
                  <span>${{ product3.price }}</span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product4.image_url" alt="#" />
                  <img class="hover-img" :src="product4.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html"> {{ product4.name }} </a>
                </h3>
                <div class="product-price">
                  <span>${{ product4.price }} </span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product5.image_url" alt="#" />
                  <img class="hover-img" :src="product5.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html"> {{ product5.name }} </a>
                </h3>
                <div class="product-price">
                  <span>${{ product5.price }} </span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product6.image_url" alt="#" />
                  <img class="hover-img" :src="product6.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html"> {{ product6.name }} </a>
                </h3>
                <div class="product-price">
                  <span>${{ product6.price }} </span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product7.image_url" alt="#" />
                  <img class="hover-img" :src="product7.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html"> {{ product7.name }} </a>
                </h3>
                <div class="product-price">
                  <span>${{ product7.price }} </span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->

            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" :src="product8.image_url" alt="#" />
                  <img class="hover-img" :src="product8.image_url" alt="#" />
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                      ><i class="ti-eye"></i><span>Vizualizar</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3>
                  <a href="product-details.html"> {{ product8.name }} </a>
                </h3>
                <div class="product-price">
                  <span>${{ product8.price }} </span>
                </div>
              </div>
            </div>
            <!-- End Single Product -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularBanner",
  data() {
    return {
      product1: {},
      product2: {},
      product3: {},
      product4: {},
      product5: {},
      product6: {},
      product7: {},
      product8: {},
      baseUrl: "http://localhost:5005/product_image/",
    };
  },
  created: function () {
    axios.get("http://localhost:5005/products_varied?qtd=8").then((res) => {
      this.product1 = res.data[0];
      this.product1["image_url"] = this.baseUrl + this.product1["_id"];

      this.product2 = res.data[1];
      this.product2["image_url"] = this.baseUrl + this.product2["_id"];

      this.product3 = res.data[2];
      this.product3["image_url"] = this.baseUrl + this.product3["_id"];

      this.product4 = res.data[3];
      this.product4["image_url"] = this.baseUrl + this.product4["_id"];

      this.product5 = res.data[4];
      this.product5["image_url"] = this.baseUrl + this.product5["_id"];

      this.product6 = res.data[5];
      this.product6["image_url"] = this.baseUrl + this.product6["_id"];

      this.product7 = res.data[6];
      this.product7["image_url"] = this.baseUrl + this.product7["_id"];

      this.product8 = res.data[7];
      this.product8["image_url"] = this.baseUrl + this.product8["_id"];
    });
  },
};
</script>
