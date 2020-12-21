<template>
  <div>
    <!-- Modal -->
    <div v-for="food in foods" :key="food.id">
      <div class="modal fade" :id="food.id_html" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="ti-close" aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <!-- Product Slider -->
                  <div class="product-gallery">
                    <div class="single-slider">
                      <img :src="baseUrl + food.id_html" alt="#" />
                    </div>
                  </div>
                  <!-- End Product slider -->
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="quickview-content">
                    <h2>{{ food.name }}</h2>

                    <div class="quickview-stock green">
                      <span
                        ><i class="fa fa-check-circle-o quickview-stock"></i>
                        Stock: {{ food.qtd_stock }}
                      </span>
                    </div>

                    <h3>R${{ food.price }}</h3>
                    <div class="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam.
                      </p>
                    </div>
                    <br />
                    <div class="quantity">
                      <!-- Input Order -->
                      <!-- <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                            @click.prevent="lessQtd(food)"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          class="input-number"
                          data-min="1"
                          data-max="1000"
                          :value="food.qtd"
                        />
                        <div class="button plus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                            @click.prevent="addQtd(food)"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div> -->
                      <!--/ End Input Order -->
                    </div>
                    <button
                      @click.prevent="addItem(food)"
                      class="btn"
                      type="button"
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal end -->

    <!-- Modal -->
    <div v-for="accessory in accessories" :key="accessory.id">
      <div
        class="modal fade"
        :id="accessory.id_html"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="ti-close" aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <!-- Product Slider -->
                  <div class="product-gallery">
                    <div class="single-slider">
                      <img :src="baseUrl + accessory.id_html" alt="#" />
                    </div>
                  </div>
                  <!-- End Product slider -->
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="quickview-content">
                    <h2>{{ accessory.name }}</h2>

                    <div class="quickview-stock green">
                      <span
                        ><i class="fa fa-check-circle-o quickview-stock"></i>
                        Stock: {{ accessory.qtd_stock }}
                      </span>
                    </div>

                    <h3>R${{ accessory.price }}</h3>
                    <div class="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam.
                      </p>
                    </div>
                    <br />
                    <div class="quantity">
                      <!-- Input Order -->
                      <!-- <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                            @click.prevent="lessQtd(accessory)"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          class="input-number"
                          data-min="1"
                          data-max="1000"
                          :value="accessory.qtd"
                        />
                        <div class="button plus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                            @click.prevent="addQtd(accessory)"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div> -->
                      <!--/ End Input Order -->
                    </div>
                    <button
                      @click.prevent="addItem(accessory)"
                      class="btn"
                      type="button"
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal end -->

    <!-- Modal -->
    <div v-for="cleaning in cleanings" :key="cleaning.id">
      <div
        class="modal fade"
        :id="cleaning.id_html"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="ti-close" aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <!-- Product Slider -->
                  <div class="product-gallery">
                    <div class="single-slider">
                      <img :src="baseUrl + cleaning.id_html" alt="#" />
                    </div>
                  </div>
                  <!-- End Product slider -->
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="quickview-content">
                    <h2>{{ cleaning.name }}</h2>

                    <div class="quickview-stock green">
                      <span
                        ><i class="fa fa-check-circle-o quickview-stock"></i>
                        Stock: {{ cleaning.qtd_stock }}
                      </span>
                    </div>

                    <h3>R${{ cleaning.price }}</h3>
                    <div class="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam.
                      </p>
                    </div>
                    <br />
                    <div class="quantity">
                      <!-- Input Order -->
                      <!-- <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                            @click.prevent="lessQtd(cleaning)"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          class="input-number"
                          data-min="1"
                          data-max="1000"
                          :value="cleaning.qtd"
                        />
                        <div class="button plus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                            @click.prevent="addQtd(cleaning)"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div> -->
                      <!--/ End Input Order -->
                    </div>
                    <button
                      @click.prevent="addItem(cleaning)"
                      class="btn"
                      type="button"
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal end -->

    <!-- Modal -->
    <div v-for="medicine in medicines" :key="medicine.id">
      <div
        class="modal fade"
        :id="medicine.id_html"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="ti-close" aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <!-- Product Slider -->
                  <div class="product-gallery">
                    <div class="single-slider">
                      <img :src="baseUrl + medicine.id_html" alt="#" />
                    </div>
                  </div>
                  <!-- End Product slider -->
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="quickview-content">
                    <h2>{{ medicine.name }}</h2>

                    <div class="quickview-stock green">
                      <span
                        ><i class="fa fa-check-circle-o quickview-stock"></i>
                        Stock: {{ medicine.qtd_stock }}
                      </span>
                    </div>

                    <h3>R${{ medicine.price }}</h3>
                    <div class="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam.
                      </p>
                    </div>
                    <br />
                    <div class="quantity">
                      <!-- Input Order -->
                      <!-- <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                            @click.prevent="lessQtd(medicine)"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          class="input-number"
                          data-min="1"
                          data-max="1000"
                          :value="medicine.qtd"
                        />
                        <div class="button plus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                            @click.prevent="addQtd(medicine)"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div> -->
                      <!--/ End Input Order -->
                    </div>
                    <div class="add-to-cart">
                      <button
                        @click.prevent="addItem(medicine)"
                        class="btn"
                        type="button"
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal end -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalBuy",
  data() {
    return {
      qtd: 1,
      foods: [],
      accessories: [],
      cleanings: [],
      medicines: [],
      baseUrl: "http://localhost:5005/product_image/",
    };
  },

  methods: {
    addItem(product) {
      var config = {
        method: "post",
        url: "http://localhost:5002/purchase_item",
        headers: {
          "Content-Type": "application/json",
        },
        data: product,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  created: function () {
    axios
      .get("http://localhost:5005/products_varied?qtd=4&category=alimentos")
      .then((res) => {
        this.foods = res.data;
        for (var prop in this.foods) {
          this.foods[prop]["qtd"] = this.qtd;
          this.foods[prop]["id_html"] = this.foods[prop]["_id"];
          this.foods[prop]["image_url"] =
            this.baseUrl + this.foods[prop]["_id"];
        }

        // axios
        //   .get("http://localhost:5010/stock/" + this.foods[prop]["_id"])
        //   .then((resStock) => {
        //     this.foods[prop]["qtd_stock"] = resStock.data["quantity"];
        //   });
      });

    axios
      .get("http://localhost:5005/products_varied?qtd=4&category=acessorios")
      .then((res) => {
        this.accessories = res.data;
        for (var prop in this.accessories) {
          this.accessories[prop]["qtd"] = this.qtd;
          this.accessories[prop]["id_html"] = this.accessories[prop]["_id"];
          this.accessories[prop]["image_url"] =
            this.baseUrl + this.accessories[prop]["_id"];
        }
        console.log("HERE DENIS");
        console.log(this.accessories);

        // axios
        //   .get("http://localhost:5010/stock/" + this.accessories[prop]["_id"])
        //   .then((resStock) => {
        //     this.accessories[prop]["qtd_stock"] = resStock.data["quantity"];
        //   });
      });

    axios
      .get("http://localhost:5005/products_varied?qtd=4&&category=limpeza")
      .then((res) => {
        this.cleanings = res.data;
        for (var prop in this.cleanings) {
          this.cleanings[prop]["qtd"] = this.qtd;
          this.cleanings[prop]["id_html"] = this.cleanings[prop]["_id"];
          this.cleanings[prop]["image_url"] =
            this.baseUrl + this.cleanings[prop]["_id"];
        }

        // axios
        //   .get("http://localhost:5010/stock/" + this.cleanings[prop]["_id"])
        //   .then((resStock) => {
        //     this.cleanings[prop]["qtd_stock"] = resStock.data["quantity"];
        //   });
      });

    axios
      .get("http://localhost:5005/products_varied?qtd=4&&category=remedios")
      .then((res) => {
        this.medicines = res.data;
        for (var prop in this.medicines) {
          this.medicines[prop]["qtd"] = this.qtd;
          this.medicines[prop]["id_html"] = this.medicines[prop]["_id"];
          this.medicines[prop]["image_url"] =
            this.baseUrl + this.medicines[prop]["_id"];
        }

        // axios
        //   .get("http://localhost:5010/stock/" + this.medicines[prop]["_id"])
        //   .then((resStock) => {
        //     this.medicines[prop]["qtd_stock"] = resStock.data["quantity"];
        //   });
      });
  },
};
</script>
