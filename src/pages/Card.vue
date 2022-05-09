<script setup>
import { onUnmounted, ref } from "vue";
import useProducts from "../composables/useProducts";
import useAuth from "../composables/useAuth";

const { products, unsubscribe } = useProducts();
const { user } = useAuth();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div class="products">
    <img
      class="rounded-lg"
      src="https://via.placeholder.com/220x180

C/O https://placeholder.com/"
    />
    <span
      >$ {{ products.Price }} - {{ products.Name }} - In Stock
      {{ products.Stock }}</span
    >
    <button
      type="submit"
      class="w-1/2 py-1 text-white bg-blue-500 rounded-lg hover:bg-zinc-500"
    >
      Add to Cart
    </button>
    <button
      type="submit"
      class="w-1/2 py-1 text-white bg-yellow-400 rounded-lg hover:bg-zinc-500"
    >
      Save for Later
    </button>
  </div>
</template>
