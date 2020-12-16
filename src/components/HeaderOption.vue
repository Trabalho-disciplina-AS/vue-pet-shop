<template>
  <!-- Header -->
  <header class="header shop">
    <!-- Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-12">
            <!--/ End Top Left -->
          </div>
          <div class="col-lg-8 col-md-12 col-12">
            <!-- Top Right -->
            <div class="right-content">
              <ul class="list-main">
                <li>
                  <i class="ti-arrow-circle-right"></i> <a href="#">Perfil</a>
                </li>
                <li>
                  <i class="ti-user"></i
                  ><router-link to="/userregistry">Cadastro</router-link>
                </li>
                <li>
                  <i class="ti-power-off"></i
                  ><router-link to="/login">Login</router-link>
                </li>
              </ul>
            </div>
            <!-- End Top Right -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderOption",
};
</script>

