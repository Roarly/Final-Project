<script>
/* import { Vue } from "vue";

new Vue({
  el: "#prod",
  data: {
    users: [
      { name: "tshirt", price: "" },
      { name: "sweater", price: "" },
    ],
  },
}); */

//having issues with vue being imported....
</script>

<template>
  <div class="products">
    <img
      class="rounded-lg"
      src="https://via.placeholder.com/220x180

C/O https://placeholder.com/"
    />
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
