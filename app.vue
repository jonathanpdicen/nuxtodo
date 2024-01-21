<script setup lang="ts">
const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const {
  toggleDone,
  removeTodo,
} = store
</script>
<template>
  <div>
    <AppTitle />
    <v-container class="container"> 
      <ContainerHeader />
      <ContainerBody>
        <template v-if="todoList.length === 0">
          <v-card-text>
            <p class="text-center">
              Nothing to do yet.
            </p>
          </v-card-text>
        </template>
        <template v-else>
          <transition-group name="slide">
            <v-list-item
              v-for="todo in todoList"
              :key="todo.id"
              class="task__list"
              :class="{'done' : todo.done}"
            >
              <div class="overlay" />

              <template v-slot:prepend>
                <v-avatar
                  color="green"
                  size="28"
                  @click="toggleDone(todo.id)"
                >
                  <v-icon
                    color="white"
                    size="18"
                  >
                    mdi-check
                  </v-icon>
                </v-avatar>
              </template>

              <template v-slot:title>
                <h4>
                  {{ todo.title }}
                </h4>
              </template>

              <template
                v-if="!todo.done"
                v-slot:append
              >
                <v-icon
                  color="#dc3742"
                  size="24"
                  class="delete-btn"
                  @click="removeTodo(todo.id)"
                >
                  mdi-delete
                </v-icon>
              </template>
            </v-list-item>
          </transition-group>
        </template>
      </ContainerBody>
      <ContainerFooter />
    </v-container>
  </div>
</template>