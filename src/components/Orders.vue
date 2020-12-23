<template>
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head">
        <div class="row">
          <div class="title">
            <h4>Cartões de Crédito</h4>
            <h3>A lista abaixo são os cartões cadastrados no CarePET</h3>
          </div>
          <div class="col-lg-8 col-12">
            <div class="form-main">
              <form class="form" v-for="card in creditCards" :key="card._id">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nome do titular</label>
                      <h6>{{ card.card_holder }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CPF do titular</label>
                      <h6>{{ card.cpf_holder }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Número do cartão</label>
                      <h6>{{ card.number }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CVV</label>
                      <h6>{{ card.cvv }}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>MM/AAAA</label>
                      <h6>{{ card.month }}/{{ card.year }}</h6>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group button">
                      <button type="submit" class="btn">
                        Realizar Pagamento
                      </button>
                      <button
                        type="submit"
                        @click.prevent="removeCard(card._id)"
                        class="btn"
                      >
                        Remover Cartão
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </form>

              <div class="col-12">
                <div class="form-group button">
                  <router-link class="btn" to="/creditcardregistry"
                    >Adicionar Cartão</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="single-head">
              <div class="single-info">
                <i class="fa fa-phone"></i>
                <h4 class="title">Ligue para nos:</h4>
                <ul>
                  <li>+123 456-789-1120</li>
                  <li>+522 672-452-1120</li>
                </ul>
              </div>
              <div class="single-info">
                <i class="fa fa-envelope-open"></i>
                <h4 class="title">Email:</h4>
                <ul>
                  <li>
                    <a href="#">suport@carepet.com</a>
                  </li>
                  <li>
                    <a href="#">info@carepet.com</a>
                  </li>
                </ul>
              </div>
              <div class="single-info">
                <i class="fa fa-location-arrow"></i>
                <h4 class="title">Endereço:</h4>
                <ul>
                  <li>
                    Av. Dr. Silas Munguba, 1700 - Itaperi, Fortaleza - CE,
                    60714-903
                  </li>
                </ul>
              </div>
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
      id_products: null,
      order_products: null,
    };
  },

  created: function () {
    axios
      .get("http://localhost:5006/order")
      .then((res) => {
        console.log(res.data);
        this.orders = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    for (var prop in this.orders.products) {
      this.products_id[prop] = this.orders.products[prop];
    }

    for (var prop in this.products_id) {
      axios
        .get("http://localhost:5000/products/" + this.products_id[prop])
        .then((res) => {
          console.log(res.data);
          this.orders = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
