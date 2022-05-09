<script setup></script>
<template>
  <div class="pt-32">
    <div class="col-span-1 lg:col-span-6">
      <h4 class="mb-5 text-3xl text-gray-700">Payment information</h4>
      <div class="p-10 bg-white rounded-md shadow-md">
        <div class="mb-6">
          <label class="block mb-3 text-gray-600">Name on card</label>
          <input
            type="text"
            class="inline-block w-full px-3 py-2 tracking-wider text-gray-600 border border-gray-500 rounded-md"
          />
        </div>
        <div class="mb-6">
          <label class="block mb-3 text-gray-600">Card number</label>
          <input
            type="tel"
            class="inline-block w-full px-3 py-2 tracking-widest text-gray-600 border border-gray-500 rounded-md"
          />
        </div>
        <div class="flex flex-wrap mb-6 -mx-3w-full">
          <div class="w-2/3 px-3">
            <label class="block mb-3 text-gray-600">Expiraion date</label>
            <div class="flex">
              <select
                class="inline-block w-full px-3 py-2 mr-6 tracking-widest text-gray-600 border border-gray-500 rounded-md"
              >
                <option>Month</option>
              </select>
              <select
                class="inline-block w-full px-3 py-2 tracking-widest text-gray-600 border border-gray-500 rounded-md"
              >
                <option>Year</option>
              </select>
            </div>
          </div>
          <div class="w-1/3 px-3">
            <label class="block mb-3 text-gray-600">CVC</label>
            <input
              type="tel"
              class="inline-block w-full px-3 py-2 tracking-widest text-gray-600 border border-gray-500 rounded-md"
            />
          </div>
        </div>
        <div class="mb-6 text-right">
          <span class="font-bold text-right">USD</span>
        </div>
        <div>
          <button
            @click="finishPayment"
            class="w-full px-4 py-3 font-semibold text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-sky-700"
          >
            Pay now
          </button>
        </div>
      </div>
    </div>

    <div class="order-first col-span-1 pt-10 lg:col-span-4 lg:order-last">
      <h4 class="mb-5 text-3xl text-gray-700">Order Summary</h4>
      <div class="p-10 bg-white rounded-md shadow-md"></div>
    </div>
  </div>
</template>
