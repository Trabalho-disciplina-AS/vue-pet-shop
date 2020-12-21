<template>
  <div>
    <ModalBuy />
    <!-- Product Style -->
    <section class="product-area shop-sidebar shop section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class="shop-sidebar">
              <!-- Single Widget -->
              <div class="single-widget category">
                <h3 class="title">Categorias</h3>
                <!-- <ul class="categor-list">
                  <li>
                    <route-link to="/shopgrid/alimentos">Alimentos</route-link>
                  </li>
                  <li>
                    <route-link to="/shopgrid/acessorios"
                      >Acessórios</route-link
                    >
                  </li>
                  <li>
                    <route-link to="/shopgrid/limpeza">Limpeza</route-link>
                  </li>
                  <li>
                    <route-link to="/shopgrid/remedios">Remédios</route-link>
                  </li>
                </ul> -->
              </div>

              <!--/ End Single Widget -->
              <!-- Shop By Price -->
              <!-- <div class="single-widget range">
              <h3 class="title">Shop by Price</h3>
              <div class="price-filter">
                <div class="price-filter-inner">
                  <div id="slider-range"></div>
                  <div class="price_slider_amount">
                    <div class="label-input">
                      <span>Range:</span
                      ><input
                        type="text"
                        id="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul class="check-box-list">
                <li>
                  <label class="checkbox-inline" for="1"
                    ><input name="news" id="1" type="checkbox" />$20 - $50<span
                      class="count"
                      >(3)</span
                    ></label
                  >
                </li>
                <li>
                  <label class="checkbox-inline" for="2"
                    ><input name="news" id="2" type="checkbox" />$50 - $100<span
                      class="count"
                      >(5)</span
                    ></label
                  >
                </li>
                <li>
                  <label class="checkbox-inline" for="3"
                    ><input name="news" id="3" type="checkbox" />$100 -
                    $250<span class="count">(8)</span></label
                  >
                </li>
              </ul>
            </div> -->
              <!--/ End Shop By Price -->
              <!-- Single Widget -->
              <div class="single-widget recent-post">
                <h3 class="title">Novos Produtos</h3>
                <!-- Single Post -->
                <div
                  v-for="newProduct in newProducts"
                  :key="newProduct.id"
                  class="single-post first"
                >
                  <div class="image">
                    <img :src="newProduct.image_url" alt="#" />
                  </div>
                  <div class="content">
                    <h5>
                      <a
                        data-toggle="modal"
                        :data-target="newProduct.id_html"
                        href="#"
                        >{{ newProduct.name }}</a
                      >
                    </h5>
                    <p class="price">${{ newProduct.price }}</p>
                  </div>
                </div>
                <!-- End Single Post -->
              </div>
              <!--/ End Single Widget -->
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="row">
              <div
                v-for="product in products"
                :key="product.id"
                class="col-lg-4 col-md-6 col-12"
              >
                <div class="single-product">
                  <div class="product-img">
                    <a
                      data-toggle="modal"
                      :data-target="product.id_html"
                      href="#"
                    >
                      <img
                        class="default-img"
                        :src="product.image_url"
                        alt="#"
                      />
                      <img class="hover-img" :src="product.image_url" alt="#" />
                      <!-- <span class="new">New</span> -->
                    </a>
                    <div class="button-head">
                      <div class="product-action">
                        <a
                          data-toggle="modal"
                          :data-target="product.id_html"
                          title="Quick View"
                          href="#"
                          ><i class="ti-eye"></i><span>Quick Shop</span></a
                        >
                      </div>
                      <div class="product-action-2">
                        <a
                          data-toggle="modal"
                          :data-target="product.id_html"
                          title="Add to cart"
                          href="#"
                          >Adicionar ao Carrinho</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3>
                      <a
                        data-toggle="modal"
                        :data-target="product.id_html"
                        href="#"
                        >{{ product.name }}</a
                      >
                    </h3>
                    <div class="product-price">
                      <span>${{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ End Product Style 1  -->
  </div>
</template>

<script>
import axios from "axios";
import ModalBuy from "./ModalBuy";

export default {
  name: "ShopGrid",
  components: {
    ModalBuy,
  },
  data() {
    return {
      render: true,
      categoryPage: this.$route.params.category,
      products: {},
      newProducts: {},
      baseUrl: "http://localhost:5000/product_image/",
    };
  },
  methods: {
    reload() {
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    },
  },
  created: function () {
    axios
      .get(
        "http://localhost:5000/products_varied?qtd=6&category=" +
          this.categoryPage
      )
      .then((res) => {
        this.products = res.data;
        for (var prop in this.products) {
          this.products[prop]["id_html"] = "#" + this.products[prop]["_id"];
          this.products[prop]["id"] = this.products[prop]["_id"];
          this.products[prop]["image_url"] =
            this.baseUrl + this.products[prop]["_id"];
        }
      });

    axios
      .get(
        "http://localhost:5000/products_varied?qtd=3&category=" +
          this.categoryPage
      )
      .then((res) => {
        this.newProducts = res.data;
        for (var prop in this.newProducts) {
          this.newProducts[prop]["id_html"] =
            "#" + this.newProducts[prop]["_id"];
          this.newProducts[prop]["id"] = this.newProducts[prop]["_id"];
          this.newProducts[prop]["image_url"] =
            this.baseUrl + this.newProducts[prop]["_id"];
        }
      });
  },
};
</script>

