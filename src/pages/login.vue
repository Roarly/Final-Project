<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
import useError from "../composables/useError";

const { isAuthenticated, login } = useAuth();
const username = ref("");
const password = ref("");
const router = useRouter();
const logginIn = () => {
  login(username.value, password.value);
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const { error, setError } = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(3000, { controls: true });
</script>

<template>
  <div class="flex flex-col items-center justify-center my-80">
    <!---Logged in : {{ isAuthenticated }}--->
    <div
      class="flex items-center justify-center overflow-hidden rounded-lg shadow-2xl bg-zinc-400"
    >
      <img class="h-64" src="../assets/loginbg.png" alt="Hello BG" />
      <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
        <input
          type="text"
          class="p-2 border-2 rounded-lg"
          placeholder="Username"
          v-model="username"
        />
        <input
          type="password"
          class="p-2 border-2 rounded-lg"
          placeholder="Password"
          v-model="password"
        />
        <button
          @submit.prevent="logginIn"
          type="submit"
          class="py-2 text-white rounded-lg bg-zinc-800 hover:bg-zinc-500"
        >
          Login
        </button>
        <button
          @click="google"
          class="flex justify-center py-2 bg-white rounded-lg hover:bg-gray-500"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </button>
      </form>
    </div>
    <div
      v-if="!ready && error"
      class="w-1/3 p-3 text-center text-red-800 bg-red-300 rounded-lg my-70"
    >
      {{ error }}
    </div>
  </div>
</template>
