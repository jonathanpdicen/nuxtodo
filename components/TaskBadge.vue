<template>
  <v-badge
    :color="color"
    :content="content"
    class="task__badge"
    inline
  >
    <h3>{{ label }}</h3>
  </v-badge>
</template>
<script setup lang="ts">
defineProps<{
  color: string,
  content: string | number,
  label: string
}>()
</script>