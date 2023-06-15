<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
      consequatur eius ea voluptatem dolore quos, voluptatibus error quis
      cupiditate placeat ipsa repellendus culpa, maxime dolores harum a officia
      optio rerum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
      consequatur eius ea voluptatem dolore quos, voluptatibus error quis
      cupiditate placeat ipsa repellendus culpa, maxime dolores harum a officia
      optio rerum.
    </p>
  </div>
  <div>{{ data }}</div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
