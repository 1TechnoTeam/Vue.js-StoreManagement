<template>
  <Notivue v-slot="item">
    <Notification :item="item" :theme="pastelTheme">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
  <main class="container space-y-8 mx-auto px-4">
    <h1 class="text-3xl text-white rounded-b-2xl font-medium text-center py-4 bg-blue-500">
      Product Mangement
    </h1>

    <div class="fixed bottom-0 left-4 z-50">
  <a href="#add-product"
     class="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition">
    +
  </a>
</div>
    <ProductList  />
    <AddProductForm />
  </main>
</template>

<script setup>
import { Notivue, Notification, pastelTheme, NotificationProgress } from 'notivue'
import ProductList from '@/components/ProductComponent/ProductList.vue'
import AddProductForm from '@/components/AddProductComponent/AddProduct.vue'

</script>
