<script setup lang="ts">
const store = useTodoListStore()

const { todoList } = storeToRefs(store)
const prevLength = ref(todoList.value.length);

const scrollToBottom = () => {
  const element = document.getElementById('messagesContainer')
  if (element) {
    element.scrollTop = element.offsetHeight + element.scrollHeight
  }
}

watch(
  () => todoList.value,
  (newTodoList) => {
    if (newTodoList.length > prevLength.value) {
      scrollToBottom();
    }
    prevLength.value = newTodoList.length;
  },
  { deep: true }
);
</script>
<template>
  <v-row>
    <v-col class="body" id="messagesContainer">
      <slot />
    </v-col>
  </v-row>
</template>