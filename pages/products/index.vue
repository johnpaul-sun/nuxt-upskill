<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const uri = "https://fakestoreapi.com/products";

const { data: products } = await useFetch(uri);
</script>

<style scoped></style>
