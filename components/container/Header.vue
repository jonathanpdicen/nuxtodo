<script setup lang="ts">
const store = useTodoListStore()

const {
  countTotalTodos,
  countDoneTodos,
} = storeToRefs(store)

const {
  removeDoneTodos,
  removeAllTodos,
} = store
</script>
<template>
  <v-row>
    <v-col class="header">
      <div class="d-flex align-center justify-end">
        <div>
          <TaskBadge
            color="white"
            :content="countTotalTodos"
            label="Task"
          />
        </div>
        <div>
          <TaskBadge
            color="white"
            :content="countDoneTodos"
            label="Tasks Done"
          />
        </div>
        <div v-if="countDoneTodos > 0">
          <div
            class="task__remover"
            @click="removeDoneTodos"
          >
            <v-icon icon="mdi-delete" />
            Tasks Done
          </div>
        </div>
        <div>
          <div
            class="task__remover"
            @click="removeAllTodos"
          >
            <v-icon icon="mdi-delete" />
            Tasks
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>