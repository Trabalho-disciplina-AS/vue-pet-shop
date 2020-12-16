<template>
  <!-- Start Contact -->
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="form-main">
              <div class="title">
                <h4>Entre em contato</h4>
                <h3>Nos envie uma mensagen</h3>
              </div>
              <form class="form" method="post" action="static/mail/mail.php">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nome<span>*</span></label>
                      <input name="name" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Sobrenome<span>*</span></label>
                      <input name="subject" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Email<span>*</span></label>
                      <input name="email" type="email" placeholder="" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Telefone<span>*</span></label>
                      <input name="company_name" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group message">
                      <label>Escreva uma mensagen<span>*</span></label>
                      <textarea name="message" placeholder=""></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group button">
                      <button type="submit" class="btn">Enviar</button>
                    </div>
                  </div>
                </div>
              </form>
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
  <!--/ End Contact -->
</template>

<script>
export default {
  name: "Contact",
};
</script>
