<template>
  <h2 class="text-2xl font-medium text-center">All Products</h2>
  <section class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4">
    <template v-if="loading">
      <LoadingProductCard v-for="i in 4" :key="i" />
    </template>
    <template v-else>
      <ProductCard
        v-for="product in Products"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :count="product.count"
        :image="product.image"
        :pending="product.pending"
        @remove="removeProduct(product.id)"
        @edit="(updateClicking(product.id))"
      />
    </template>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductComponent/ProductCard.vue'
import setProducts from '@/components/ProductComponent/composable/setProducts'
import { onMounted } from 'vue'
import LoadingProductCard from '@/components/LoadingComponent/LoadingProductCard.vue'

const { Products, fetchData, loading, removeProduct, updateClicking } = setProducts()
console.log(Products.value)

onMounted(() => fetchData())
</script>
