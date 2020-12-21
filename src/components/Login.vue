<template>
  <!-- Start Checkout -->
  <section class="shop checkout section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="checkout-form">
            <h2>Já sou cliente</h2>
            <br />
            <!-- Form -->
            <form @submit="loginSystem" method="post" class="form">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      v-model="email"
                      type="email"
                      name="email"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="form-group">
                    <label>Senha</label>
                    <input
                      v-model="password"
                      type="password"
                      name="name"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group button">
                  <button type="submit" class="btn">Acessar conta</button>
                </div>
              </div>
            </form>
            <!--/ End Form -->
            <p>{{ token }}</p>
            <div id="blank-space"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ End Checkout -->
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      token: "",
    }
  },
  methods: {
    loginSystem(e) {
      axios.post("http://localhost:8000/login", {email: this.email, password: this.password}).then((res) => {
        this.token = res.data["token"];
        this.updateItensPurchase(this.token);
      });
      e.preventDefault();
    },
    updateItensPurchase(token) {
        axios.put("http://localhost:5001/purchase_item", {user_id: token})
        .then((res) => {
          token = res.data;
          console.log(token);
        })
        .catch((err) => {
          token = err.data;
          console.log(token);
        });
    }
  },
};
</script>

<style scoped>
#blank-space {
  padding: 80px;
}
</style>
