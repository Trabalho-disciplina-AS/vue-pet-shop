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
            <form class="form" method="post" action="#">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
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
            <div id="blank-space"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ End Checkout -->
</template>

<script>
export default {
  name: "UserRegistry",
};
</script>

<style scoped>
#blank-space {
  padding: 80px;
}
</style>
