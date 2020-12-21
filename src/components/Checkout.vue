<template>
  <!-- Start Checkout -->
  <section class="shop checkout section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12">
          <div class="checkout-form">
            <h2>Realizar Pagamento</h2>
            <p>
              Verifique se todas as informações estão corretas de sua compra
            </p>
          </div>
        </div>
        <div class="col-lg-12 col-12">
          <div class="order-details">
            <!-- Order Widget -->
            <div class="single-widget">
              <h2>CARRINHO DE COMPRAS</h2>
              <div class="content">
                <ul>
                  <li>
                    SubTotal<span>${{ items.subtotal }}</span>
                  </li>
                  <li>FRETE<span>$10.00</span></li>
                  <li class="last">Total<span>$340.00</span></li>
                </ul>
              </div>
            </div>
            <!--/ End Order Widget -->
            <!-- Order Widget -->
            <div class="single-widget">
              <h2>Formas de Pagamento</h2>
              <div class="content">
                <ul>
                  <li><router-link to="/cart">Boleto</router-link></li>
                  <li>
                    <router-link to="/cart">Cartão de Crédito</router-link>
                  </li>
                </ul>
                <!-- <div class="checkbox">
                  <label class="checkbox-inline" for="1"
                    ><input name="updates" id="1" type="checkbox" /> Boleto</label
                  >
                  <label class="checkbox-inline" for="2"
                    ><input name="news" id="2" type="checkbox" /> Cartão de Crédito</label
                  >
                </div> -->
              </div>
            </div>
            <!--/ End Order Widget -->
            <!-- Payment Method Widget -->
            <div class="single-widget payement">
              <div class="content">
                <img src="static/images/payment-method.png" alt="#" />
              </div>
            </div>
            <!--/ End Payment Method Widget -->
            <!-- Button Widget -->
            <div class="single-widget get-button">
              <div class="content">
                <div class="button">
                  <a href="#" class="btn">Finalizar Compra</a>
                </div>
              </div>
            </div>
            <!--/ End Button Widget -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ End Checkout -->
</template>

<script>
import axios from "axios";

export default {
  name: "Checkout",
  data() {
    return {
      items: {},
    };
  },
  created: function () {
    // var config = {
    //   method: "get",
    //   url: "http://localhost:5002/purchase_item",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // axios(config)
    //   .then(function (res) {
    //     // this.items = res.data[0];
    //     var data = res.data[0];
    //     this.items = data;
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios.get("http://localhost:5002/purchase_item").then((res) => {
      this.items = res.data[0];
    });
  },
};
</script>

