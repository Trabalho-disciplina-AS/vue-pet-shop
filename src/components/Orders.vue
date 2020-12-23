<template>
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head">
        <div class="row">
          <div class="title">
            <h4>Lista de Pedidos</h4>
            <h3>Veja todos os seus pedido aqui no CarePET</h3>
          </div>
          <div class="col-lg-8 col-12">
            <div class="form-main">
              <form class="form" v-for="order in orders" :key="order['_id']['$oid']">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Forma de pagamento</label>
                      <h6>{{ order.payment_method }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nfe</label>
                      <h6>{{ order.nfe_id }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Valor Pago</label>
                      <h6>{{ order.amount }}</h6>
                    </div>
                  </div>
                </div>
                <!-- <br />
                <hr/>

                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nome do titular</label>
                      <h6>{{ order.order_holder }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CPF do titular</label>
                      <h6>{{ order.cpf_holder }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Número do cartão</label>
                      <h6>{{ order.number }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CVV</label>
                      <h6>{{ order.cvv }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>MM/AAAA</label>
                      <h6>{{ order.month }}/{{ order.year }}</h6>
                    </div>
                  </div>
                </div> -->
                <br />
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Orders",
  data() {
    return {
      orders: null,
    };
  },

  created: function () {
    // fazer request pra pegar user data pra 5006/profile
    // passar user_id 5002/order/<user_id>
    axios
      .get("http://localhost:5002/order")
      .then((res) => {
        console.log(res.data);
        this.orders = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    // for (var prop in this.orders.products) {
    //   this.products_id[prop] = this.orders.products[prop];
    // }

    // for (var order in this.orders) {
    //   for (var product_id in order.products) {       

    //     axios
    //       .get("http://localhost:5000/products/" + product_id)
    //       .then((res) => {
    //         console.log(res.data);
    //         this.orders.products[prop]["products"][prop] = res.data;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // }
  },
};
</script>
