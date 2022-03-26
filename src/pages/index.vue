<script setup>
//import useAuth from '../composables/useAuth';
//const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav"
  >
    <h2
      v-if="!isAuthenticated"
      class="text-6xl tracking-tighter pt-14 font-extralight"
    >
      Welcome to our merch store!
    </h2>
    <h2 v-else class="text-6xl tracking-tighter pt-14 font-extralight">
      Welcome {{ user }}, lets get you some merch!
    </h2>
    <img src="../assets/Homeart.png" />
  </div>
  <div
    v-if="!isAuthenticated"
    class="pt-14 motion-safe:animate-pulse hover:animate-none"
  >
    <router-link to="/login"
      ><h3
        class="px-5 py-3 font-semibold text-center bg-gray-300 rounded-2xl hover:cursor-pointer hover:bg-slate-500 hover:text-white"
      >
        New or returning user? Click here to login or create an account to
        purchase some of our cool new merch!
      </h3></router-link
    >
  </div>
</template>
