<template>
  <footer
    class="fixed bottom-0 items-center justify-center w-screen mx-auto text-white bg-zinc-800"
  >
    <div class="items-center justify-center px-5 pt-2">
      <div class="flex justify-center mb-6"></div>

      <div>
        <form action="">
          <div
            class="flex grid items-center justify-center gap-4 md:grid-cols-3 gird-cols-1"
          >
            <div class="items-center justify-center md:ml-auto md:mb-6">
              <p class="">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div class="items-center justify-center md:mb-6">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="idgoeshere"
                placeholder="Email address"
              />
            </div>

            <div class="items-center justify-center mb-6 md:mr-auto">
              <button
                type="submit"
                class="inline-block px-6 py-2 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="items-center justify-center mb-6 text-center">
        <p>
          We promise not to send unecessary spam. Only important news and deals!
        </p>
      </div>
    </div>

    <div class="items-center justify-center p-4 text-center bg-zinc-900">
      © 2021 Copyright:
      <a class="text-white" href="">(company name)</a>
    </div>
  </footer>
</template>
