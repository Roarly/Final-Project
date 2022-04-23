<script setup>
import { onUnmounted, ref } from "vue";
import useChat from "../composables/useChat";
import useAuth from "../composables/useAuth";

const { messages, unsubscribe, sendMessage } = useChat();
const { user } = useAuth();

const newMessage = ref("");

const send = () => {
  sendMessage(newMessage.value);
  newMessage.value = "";
};

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <h1 class="mt-8 text-6xl font-semibold tracking-tighter text-center">FAQ</h1>
  <div
    class="flex flex-col justify-between float-right w-7/12 mt-8 mr-2 overflow-y-auto rounded-lg shadow-2xl h-96"
  >
    <span class="text-xl font-semibold text-center bg-red-500 rounded-t-lg"
      ><h1>Customer Support Live Chat</h1></span
    >
    <ul class="p-4 space-y-4">
      <li v-for="message in messages" :key="message.id">
        <div
          class="flex justify-between px-4 py-2 bg-gray-200 rounded-lg"
          :class="user === message.author ? 'bg-blue-400' : 'bg-gray-200'"
        >
          <span>{{ message.text }}</span>
          <span>by {{ message.author }}</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        class="w-full p-3 rounded-lg focus:outline-none focus:bg-green-300"
        type="text"
        placeholder="Type a message..."
        v-model="newMessage"
        @change="send"
      />
    </div>
  </div>
  <div class="container w-5/12 pt-8 pl-6 text-lg">
    <details open>
      <summary class="font-semibold cursor-pointer">
        How long will it take to get my order?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>Orders typically ship within 3 business days.</p>
      </div>
    </details>

    <details open>
      <summary class="mt-3 font-semibold cursor-pointer">
        How do I return an item?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>
          Items can be returned for a full refund if they are not opened or
          instore credit if they have been opened.
        </p>
      </div>
    </details>

    <details open>
      <summary class="mt-3 font-semibold cursor-pointer">
        I think my order was lost in the mail?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>
          Please give us your shiping details in the live chat and we will help
          locate your order.
        </p>
      </div>
    </details>

    <details open>
      <summary class="mt-3 font-semibold cursor-pointer">
        When does new merchandise get put up?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>The merchstore is typically updated on Wednesday afternoons.</p>
      </div>
    </details>

    <details open>
      <summary class="mt-3 font-semibold cursor-pointer">
        Why are some items discounted and others not?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>
          Discounted items are cureated via analytics based on sale performance.
        </p>
      </div>
    </details>

    <details open>
      <summary class="mt-3 font-semibold cursor-pointer">
        Where can I get coupons?
      </summary>
      <div class="mt-3 text-base leading-6 text-slate-800">
        <p>Coupons are typically sent via email when you sign up for offers.</p>
      </div>
    </details>
  </div>
</template>
