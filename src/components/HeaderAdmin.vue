<template>
  <!-- Header -->
  <header class="header shop">
    <div class="middle-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-12">
            <!-- Logo -->
            <div class="logo">
              <a href=""><img src="static/images/logo.png" alt="logo" /></a>
            </div>
            <!--/ End Logo -->
            <div class="mobile-nav"></div>
          </div>
          <div class="col-lg-2 col-md-3 col-12">
            <div class="right-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="cat-nav-head">
          <div class="row">
            <div class="col-lg-9 col-12">
              <div class="menu-area">
                <!-- Main Menu -->
                <nav class="navbar navbar-expand-lg">
                  <div class="navbar-collapse">
                    <div class="nav-inner">
                      <ul class="nav main-menu menu navbar-nav">
                        <li>
                          <router-link to="/adminproducts">
                            Listar Produtos
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/adminaddproduct">
                            Adicionar Novo Produto
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!--/ End Main Menu -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
</template>

<script>
export default {
  name: "HeaderBase",
};
</script>

