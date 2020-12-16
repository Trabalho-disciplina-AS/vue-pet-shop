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
                  <li>SubTotal<span>$330.00</span></li>
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
                <div class="checkbox">
                  <label class="checkbox-inline" for="1"
                    ><input name="updates" id="1" type="checkbox" /> Check
                    Payments</label
                  >
                  <label class="checkbox-inline" for="2"
                    ><input name="news" id="2" type="checkbox" /> Cash On
                    Delivery</label
                  >
                  <label class="checkbox-inline" for="3"
                    ><input name="news" id="3" type="checkbox" /> PayPal</label
                  >
                </div>
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
                  <a href="#" class="btn">proceed to checkout</a>
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
export default {
  name: "Checkout",
};
</script>

