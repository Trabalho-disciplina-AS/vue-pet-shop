<template>
  <!-- Shopping Cart -->
  <div class="shopping-cart section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Shopping Summery -->
          <table class="table shopping-summery">
            <thead>
              <tr class="main-hading">
                <th>PRODUTO</th>
                <th>NOME</th>
                <th class="text-center">PREÇO</th>
                <th class="text-center">ATUALIZAR</th>
                <th class="text-center">DELETAR</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td class="image" data-title="No">
                  <img :src="imageUrl + product.id" alt="#" />
                </td>
                <td class="product-des" data-title="Description">
                  <p class="product-name">
                    <a href="#">{{ product.name }}</a>
                  </p>
                  <p class="product-des">
                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                  </p>
                </td>
                <td class="price" data-title="Price">
                  <span>${{ product.price }} </span>
                </td>
                <td class="action" data-title="Remove">
                  <!-- @click.prevent="removeproduct(product.id)" -->
                  <a href="#"><i class="ti-trash remove-icon"></i></a>
                </td>
                <td class="action" data-title="Remove">
                  <!-- @click.prevent="removeproduct(product.id)" -->
                  <a @click.prevent="removeProduct(product.id)"><i class="ti-trash remove-icon"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <!--/ End Shopping Summery -->
        </div>
      </div>
    </div>
  </div>
  <!--/ End Shopping Cart -->
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsConfig",
  data() {
    return {
      products: [],
      imageUrl: "http://localhost:5000/product_image/",
    };
  },
  methods: {
    removeProduct(id) {
       axios.delete("http://localhost:5000/products/admin/" + id)
      .then((res) => {
        alert("Deletado com sucesso!");
        console.log(res.data);
      })
      .catch(function (err) {
        alert("Erro ao deletar...");
        console.log(err);
      });
    }
  },
  created: function () {
    axios.get("http://localhost:5000/products?clean_id=true").then((res) => {
      console.log(res.data);
      this.products = res.data;
    });
  },
};
</script>

