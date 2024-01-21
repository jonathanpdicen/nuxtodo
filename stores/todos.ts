import { useStorage } from '@vueuse/core'
import type { ITodo } from '@/interfaces'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: useStorage('todos', [] as ITodo[]),
    id: 0,
    error: null as string | null,
  }),
  getters: {
    countTotalTodos(): number {
      return this.todoList.length
    },
    countDoneTodos(): number {
      return this.todoList.filter(todo => todo.done).length
    }
  },
  actions: {
    incrementId() {
      return this.id++;
    },
    setError(error: string | null) {
      this.error = error;
    },
    addTodo(title: string) {
      if (!title) {
        this.setError("Title is required.");
        return;
      }

      const todo = {
        title,
        id: this.incrementId(),
        done: false,
      };

      this.todoList.push(todo);
      this.setError(null);
    },
    toggleDone(id: number) {
      const todo = this.todoList.find((todo) => todo.id === id)

      if (todo) {
        todo.done = true;
      }
    },
    removeTodo(id: number) {
      const todoFoundId = this.todoList.findIndex((todo) => todo.id === id)

      if (todoFoundId != -1) {
        this.todoList.splice(todoFoundId, 1);
      } 
    },
    removeAllTodos() {
      this.todoList.splice(0, this.todoList.length);
    },
    removeDoneTodos() {
      const todosToRemove: number[] = this.todoList.reduce((acc: number[], todo, index) => {
        if (todo.done) {
          acc.push(index);
        }
        return acc;
      }, []);
    
      todosToRemove.reverse().forEach((index) => {
        this.todoList.splice(index, 1);
      });
    },
  },
});