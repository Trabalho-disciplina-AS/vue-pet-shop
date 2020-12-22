<template>
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="form-main">
              <div class="title">
                <h4>Registre um novo produto no CarePet</h4>
                <h3>Preencha os campos listados abaixo</h3>
              </div>
              <form class="form" @submit="registryProduct" method="post">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Nome do produto<span>*</span></label>
                      <input
                        v-model="newProduct.name"
                        name="name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Preço do produto</label>
                      <input
                        v-model="newProduct.price"
                        name="cpf"
                        type="number"
                        step="0.01"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Categoria do Produto<span>*</span></label>
                      <input
                        v-model="newProduct.category"
                        name="category"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Valor do Desconto</label>
                      <input
                        v-model="newProduct.discount_price"
                        name="discount_price"
                        step="0.01"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <label>Foto do Produto</label>
                      <input
                        id="file"
                        ref="file"
                        type="file"
                        @change="onFileChange"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <div id="preview">
                        <img v-if="url" :src="url" />
                      </div>
                    </div>
                  </div>

                  <div id="morebottom" class="col-12">
                    <div class="form-group button">
                      <button type="submit" class="btn">
                        Cadastrar Novo Produto
                      </button>
                    </div>
                  </div>
                </div>
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
  name: "AddProduct",
  data() {
    return {
      newProduct: {
        name: null,
        price: null,
        category: null,
        discount: null,
        discount_price: null,
        image: null,
      },
      url: null,
    };
  },
  methods: {
    registryProduct(e) {
      axios
        .post("http://localhost:5000/products/admin", this.newProduct)
        .then((res) => {
          var product_id = res.data["_id"];

          var fd = new FormData();
          fd.append("image", this.$refs.file.files[0]);
          axios
            .post("http://localhost:5000/products/admin/" + product_id, fd, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then(function () {
              alert("Produto salvo com sucesso!");
            })
            .catch(function () {
              alert("Erro ao salvar o produto...");
            });
        })
        .catch(function (err) {
          console.log(err);
        });
      e.preventDefault();
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

#morebottom {
  margin-bottom: 15px;
}

#reposition {
  margin-left: 15px;
}
</style>>