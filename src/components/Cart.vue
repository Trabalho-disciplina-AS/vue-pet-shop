<template>
  <!-- Shopping Cart -->
  <div class="shopping-cart section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Shopping Summery -->
          <table class="table shopping-summery">
            <thead>
              <tr class="main-hading">
                <th>PRODUTO</th>
                <th>NOME</th>
                <th class="text-center">PREÇO</th>
                <th class="text-center">QUANTIDADE</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center">
                  <i class="ti-trash remove-icon"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in itensPurchase.itens" :key="item.id">
                <td class="image" data-title="No">
                  <img :src="imageUrl + item.id" alt="#" />
                </td>
                <td class="product-des" data-title="Description">
                  <p class="product-name">
                    <a href="#">{{ item.name }}</a>
                  </p>
                  <p class="product-des">
                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                  </p>
                </td>
                <td class="price" data-title="Price">
                  <span>${{ item.price }} </span>
                </td>
                <td class="qty" data-title="Qty">
                  <!-- Input Order -->
                  <div class="input-group">
                    <div class="button minus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        data-type="minus"
                        @click.prevent="lessQtd(item)"
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
                      :value="item.qtd"
                    />
                    <div class="button plus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        data-type="plus"
                        @click.prevent="addQtd(item)"
                      >
                        <i class="ti-plus"></i>
                      </button>
                    </div>
                  </div>
                  <!--/ End Input Order -->
                </td>
                <td class="total-amount" data-title="Total">
                  <span
                    >${{ Math.round(item.price * item.qtd * 100) / 100 }}</span
                  >
                </td>
                <td class="action" data-title="Remove">
                  <a @click.prevent="removeItem(item.id)" href="#"
                    ><i class="ti-trash remove-icon"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
          <!--/ End Shopping Summery -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- Total Amount -->
          <div class="total-amount">
            <div class="row">
              <div class="col-lg-8 col-md-5 col-12">
                <div class="left">
                  <div class="coupon">
                    <form action="#" target="_blank">
                      <input name="Coupon" placeholder="Digite seu CEP" />
                      <button class="btn">CONSULTAR</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-7 col-12">
                <div class="right">
                  <ul>
                    <li>
                      Subtotal<span>${{ subtotal }}</span>
                    </li>
                    <li>Frete<span>Free</span></li>
                    <li class="last">Valor Total<span>$310.00</span></li>
                  </ul>
                  <div class="button5">
                    <div @click="redirectCheckout()" class="btn">Comprar</div>
                    <router-link to="/shopgrid/alimentos" class="btn"
                      >Escolher mais produtos</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ End Total Amount -->
        </div>
      </div>
    </div>
  </div>
  <!--/ End Shopping Cart -->
</template>

<script>
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      itensPurchase: [],
      imageUrl: "http://localhost:5000/product_image/",
      subtotal: 0,
    };
  },
  methods: {
    calculateSubtotal() {
      this.subtotal = 0;
      for (var prop in this.itensPurchase.itens) {
        this.subtotal +=
          this.itensPurchase.itens[prop].price *
          this.itensPurchase.itens[prop].qtd;
      }
    },
    lessQtd: function (obj) {
      if (obj.qtd == 1) {
        obj.qtd == 1;
      } else {
        obj.qtd -= 1;
      }
      this.calculateSubtotal();
    },
    addQtd: function (obj) {
      obj.qtd += 1;
      this.calculateSubtotal();
    },
    redirectCheckout: function () {
      this.calculateSubtotal();

      var config = {
        method: "put",
        url: "http://localhost:5001/purchase_item",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ subtotal: this.subtotal }),
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$router.push("/checkout");
    },
    removeItem: function (item_id) {
      axios
        .delete("http://localhost:5001/purchase_item/item/" + item_id)
        .then((res) => {
          console.log(res.data);
          this.calculateSubtotal();
        });
    },
  },
  created: function () {
    axios.get("http://localhost:5001/purchase_item").then((res) => {
      console.log(res.data);
      this.itensPurchase = res.data[0];
      console.log(this.itensPurchase.itens);
      this.calculateSubtotal();
    });
  },
};
</script>

