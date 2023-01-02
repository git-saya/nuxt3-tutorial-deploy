<template>
    <div>
      <h3>{{ error.statusCode }}</h3>
      <p>{{ error.message }}</p>
      <button @click="handleClick">back to home</button>
    </div>
  </template>


<script setup>
defineProps(['error'])

const handleClick = () => clearError({redirect: '/'})
</script>