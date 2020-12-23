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
                      <h6>{{card.card_holder}}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CPF do titular</label>
                      <h6>{{card.cpf_holder}}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Número do cartão</label>
                      <h6>{{card.number}}</h6>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>CVV</label>
                    <h6>{{card.cvv}}</h6>
                    </div>
                  </div>
                <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>MM/AAAA</label>
                 <h6>{{card.month}}/{{card.year}}</h6>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group button">
                      <button @click.prevent="generateOrder()" class="btn">Realizar Pagamento</button>
                      <button @click.prevent="removeCard(card._id)" class="btn">Remover Cartão</button>
                    </div>
                  </div>
                </div>
                <br>
                <br>
                <br>
              </form>

                  <div class="col-12">
                    <div class="form-group button">
                      <router-link class="btn" to="/creditcardregistry">Adicionar Cartão</router-link>
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
  name: "CreditCard",
  data() {
    return {
        creditCards: [],
        products: null,
        user: null,
        products_id: [],
        items: null,
    }
  },
  methods: {
    removeCard(id) {
      axios.delete("http://localhost:5010/card?card_id=" + id)
      .then((res) => {
        console.log(res.data);
        alert("Removido com sucesso... :)");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro durante a remoção...");
      });
    },

    generateOrder() {
      for (var prop in this.items.itens) {
        this.products_id[prop] = this.items.itens[prop]["id"];
      }
      console.log(this.items);
      console.log(this.products_id);
      var method = "cartão de crédito";
      var newOrder = {products: this.products_id, user_id: this.user["_id"]["$oid"], payment_method: method}

      axios.post("http://localhost:5002/order", newOrder)
      .then((res) => {
        console.log(res.data);
        alert("Seu pedido foi gerado com sucesso! :D");
      })
      .catch((err) => {
        alert("Erro ao gerar o seu pedido...");
        console.log(err);
      });

      // esvaziar carrinho
      axios.delete("http://localhost:5001/purchase_item")
      .then((res) => {
        console.log(res.data);
        this.$router.push('/orders') 
      })
  
    },

  },

  created: function () {
    axios.get("http://localhost:5010/card")
    .then((res) => {
        console.log(res.data);
        this.creditCards = res.data;
    })
    .catch((err) => {
        console.log(err);
    });

    axios.get("http://localhost:5006/profile")
    .then((res) => {
      this.user = res.data[0]["_id"]["$oid"];
    })
    .catch((err) => {
      console.log(err);
    });

  },
};
</script>
