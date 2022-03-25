<template>
  <div class="font-serif text-gray-700 bg-zinc-800">
    <div class="container flex items-center justify-between py-4 mx-auto">
      <h1 class="text-3xl font-light tracking-tight text-gray-400">
        Final<span class="font-semibold">Project</span>
      </h1>
      <nav>
        <ul class="flex">
          <router-link to="/"
            ><li
              class="px-5 py-4 bg-gray-300 rounded-l-2xl hover:cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              Home
            </li></router-link
          >
          <router-link to="/about"
            ><li
              class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              About
            </li></router-link
          >
          <router-link to="/products"
            ><li
              class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              Products
            </li></router-link
          >
          <router-link to="/checkout"
            ><li
              class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              Checkout
            </li></router-link
          >
          <router-link to="/login"
            ><li
              class="px-5 py-4 bg-gray-300 rounded-r-2xl hover:cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              Login
            </li></router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>
