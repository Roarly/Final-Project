<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

import useAuth from "../composables/useAuth";
import useError from "../composables/useError";

const { isAuthenticated, login, signup, googleLogin } = useAuth();
// const username = ref("");
// const password = ref("");
const router = useRouter();

const logginIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome;
};

const goToHome = () => {
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
          name="username"
          type="text"
          class="p-2 border-2 rounded-lg"
          placeholder="Email"
          v-model="username"
        />

        <input
          name="password"
          type="password"
          class="p-2 border-2 rounded-lg"
          placeholder="Password"
          v-model="password"
        />

        <div class="flex space-x-2">
          <button
            @submit.prevent="logginIn"
            type="submit"
            class="w-1/2 py-2 text-white rounded-lg bg-zinc-800 hover:bg-zinc-500"
          >
            Login
          </button>
          <button
            @click="signingUp"
            class="w-1/2 py-2 text-white bg-blue-400 rounded-lg hover:bg-zinc-500"
          >
            Sign Up
          </button>
        </div>

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
    <div class="flex flex-row">
      <div
        v-if="!ready && error"
        class="w-1/3 mx-1 text-center text-red-800 bg-red-300 rounded-lg my-70"
      >
        {{ error }}
      </div>
      <div
        v-if="emailError"
        class="w-1/3 p-3 mx-1 text-center text-red-800 bg-red-300 rounded-lg my-70"
      >
        {{ emailError }}
      </div>
      <div
        v-if="passwordError"
        class="w-1/3 p-3 mx-1 text-center text-red-800 bg-red-300 rounded-lg my-70"
      >
        {{ passwordError }}
      </div>
    </div>
  </div>
</template>
