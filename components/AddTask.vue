<script setup lang="ts">
const store = useTodoListStore()

const todo = ref('')

const addItemToList = () => {
  store.addTodo(todo.value)
  todo.value = ''
}
</script>
<template>
  <v-text-field
    v-model="todo"
    variant="solo"
    label="New Task"
    class="add-task__field"
    hide-details
    rounded
    flat
    outlined
  >
    <template v-slot:append-inner>
      <v-avatar
        color="blue"
        size="34"
        class="add-task__btn"
        @click="addItemToList"
      >
        <v-icon color="white">
          mdi-plus
        </v-icon>
      </v-avatar>
    </template>
  </v-text-field>
</template>