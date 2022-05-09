<script setup>
import Card from "./Card.vue";

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
  <div class="container grid grid-cols-4 gap-8 mt-14">
    <Card v-for="product in products" :key="product.id" />
  </div>
</template>

<style>
.products {
  background: slate;
  margin-top: 4;
  padding-top: 8;
  height: 220px;
  width: 220px;
}
</style>
