<template>
  <!-- Start Checkout -->

  <div>
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





          <table class="table shopping-summery">
            <thead>
              <tr class="main-hading">
                <th>PRODUTO</th>
                <th>NOME</th>
                <th class="text-center">PREÇO</th>
                <th class="text-center">QUANTIDADE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.itens" :key="item.id">
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
                <td class="total-amount" data-title="Total">
                  <span
                    >{{ item.qtd }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>


            <br>
            <!-- Order Widget -->
            <div class="single-widget">
              <h2>CARRINHO DE COMPRAS</h2>
              <div class="content">
                <ul>
                  <li>
                    SubTotal<span>${{ items.subtotal }}</span>
                  </li>
                  <li>FRETE<span>R$ {{ items.delivery_fee }}</span></li>
                  <li class="last">Total<span>R$ {{ items.total }}</span></li>
                </ul>
              </div>
            </div>
            <!--/ End Order Widget -->
            <!-- Order Widget -->

            <br>

            <div class="single-widget">
              <h2>Formas de Pagamento</h2>
              <div class="content">
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" :href="linkPayment">Boleto</a></li>
                  <li>
                    <router-link to="/cart">Cartão de Crédito</router-link>
                  </li>
                </ul>

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

  </div>

  
</template>

<script>
import axios from "axios";

export default {
  name: "Checkout",
  data() {
    return {
      items: {},
      linkPayment: "",
      linkCreditCard: "",
      imageUrl: "http://localhost:5000/product_image/",
    };
  },
  created: function () {
    axios.get("http://localhost:5001/purchase_item").then((res) => {
      this.items = res.data[0];      
    });

    console.log("working...");
    console.log(this.items.subtotal);

    axios.get("http://localhost:8000/profile").then((res) => {
      this.items = res.data[0];    
        
    });

    this.linkPayment = `http://localhost:4001/payment?value=${this.items.subtotal}&name=denis&cpf=064865933&address=rua`
  },
};
</script>

