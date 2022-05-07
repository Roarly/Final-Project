<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="container grid grid-cols-4 gap-8 mt-14">
    <Card v-for="(n, index) in 16" :key="index" />
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
