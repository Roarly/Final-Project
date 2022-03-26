<template>
  <footer
    class="fixed bottom-0 items-center justify-center w-screen mx-auto text-white bg-zinc-800"
  >
    <div class="items-center justify-center px-5">
      <div class="flex justify-center mb-6"></div>

      <div>
        <form action="">
          <div
            class="flex grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-3"
          >
            <div class="items-center justify-center md:ml-auto md:mb-6">
              <p class="font-semibold">Sign up for our newsletter</p>
            </div>

            <div class="items-center justify-center md:mb-6">
              <input
                type="text"
                class="block w-full px-3 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="idgoeshere"
                placeholder="Email address"
              />
            </div>

            <div class="items-center justify-center mb-5 md:mr-auto">
              <button
                type="submit"
                class="inline-block p-2 px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded hover:bg-black hover:bg-opacity-5"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="items-center justify-center mb-2 text-center">
        We promise not to send unecessary spam. Only important news and deals!
      </div>
    </div>

    <div class="items-center justify-center p-1 text-center bg-zinc-900">
      © 2021 Copyright:
      <a class="text-white" href="">(company name)</a>
    </div>
  </footer>
</template>
