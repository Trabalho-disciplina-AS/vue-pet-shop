<template>
  <!-- Start Checkout -->
  <section class="shop checkout section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="checkout-form">
            <h2>Cadastre-se</h2>
            <p>
              Faça parte da família CarePET, tenha atenção ao preencher o
              formulário!
            </p>
            <!-- Form -->
            <!-- Inserir para validacao @submit="checkForm" -->
            <form @submit="register" method="post" class="form">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Nome<span>*</span></label>
                    <input
                      v-model="user.name"
                      type="text"
                      name="name"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Sobrenome<span>*</span></label>
                    <input
                      v-model="user.lastname"
                      type="text"
                      name="lastname"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Email<span>*</span></label>
                    <input
                      v-model="user.email"
                      type="email"
                      name="email"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>CPF<span>*</span></label>
                    <input
                      v-model="user.cpf"
                      type="cpf"
                      name="cpf"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Telefone<span>*</span></label>
                    <input
                      v-model="user.celphone"
                      type="text"
                      name="celphone"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Endereço<span>*</span></label>
                    <input
                      v-model="user.address"
                      type="text"
                      name="address"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Numeração<span>*</span></label>
                    <input
                      v-model="user.number"
                      type="number"
                      name="number"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Cidade<span>*</span></label>
                    <input
                      v-model="user.city"
                      type="text"
                      name="city"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Estado<span>*</span></label>
                    <input
                      v-model="user.state"
                      type="text"
                      name="state"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <label>Senha<span>*</span></label>
                    <input
                      v-model="user.password"
                      type="password"
                      name="password"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group button">
                    <button type="submit" class="btn">Cadastrar</button>
                  </div>
                </div>
              </div>

            </form>
            <!--/ End Form -->
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
  name: "UserRegistry",
  data() {
    return {
      errors: [],
      user: {
        name: null,
        celphone: null,
        lastname: null,
        email: null,
        password: null,
        address: null,
        number: null,
        city: null,
        state: null,
      },
    };
  },
  methods: {
    register(e) {
      this.user.number = parseInt(this.user.number);
      this.user = JSON.stringify(this.user);

      var config = {
        method: "post",
        url: "http://localhost:8000/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: this.user,
      };
      console.log(this.user);
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          // Nome:${this.user.name} Email:${this.user.email}
          alert(`Usuário Cadastrado com sucesso!`);
        })
        .catch(function (error) {
          console.log(error);
          alert(`Algo de errado durante o seu cadastro...`);
        });
      e.preventDefault();
    },
  },
};
</script>

