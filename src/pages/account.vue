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
  <h1 class="mt-8 text-6xl font-thin tracking-tighter text-center">
    Customer Service
  </h1>
  <div
    class="min-h-[500px] w-full mt-8 rounded-lg shadow-2xl flex flex-col justify-between"
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
</template>
