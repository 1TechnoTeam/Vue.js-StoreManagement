<template>
  <section class="bg-white border border-gray-200 rounded-4xl shadow-lg shadow-grey-400 p-8">
    <form  @submit.prevent="isUpdating == true? updateProduct(newProduct.id):addProduct()">
      <div
        class="flex flex-col justify-center md:flex-col md:items-center lg:flex-col lg:items-center xl:flex-row xl:justify-evenly space-y-5"
      >
        <div class="flex flex-col space-y-2 w-full max-w-lg">
          <h2 class="text-2xl text-center mb-5">Product Details</h2>
          <label>Product Name: </label>
          <input
            type="text"
            class="outline-2 outline-gray-300 focus:outline-sky-500 rounded pl-2 w-full"
            v-model="newProduct.name"
          />
          <label>Price : </label>
          <input
            type="text"
            class="outline-2 outline-gray-300 focus:outline-sky-500 rounded pl-2 w-full"
            v-model="newProduct.price"
          />
          <label>description : </label>
          <textarea
            class="outline-2 outline-gray-300 focus:outline-sky-500 rounded pl-2 w-full"
            v-model="newProduct.description"
          ></textarea>
          <label>Count : </label>
          <input
            type="number"
            class="outline-2 outline-gray-300 focus:outline-sky-500 rounded pl-2 w-full"
            min="1"
            v-model="newProduct.count"
          />
        </div>
          <div class="flex flex-col space-y-2 w-full max-w-lg">
            <h1 class="text-center text-2xl">Product Image</h1>
            <label> Image Url :</label>
            <input
              type="text"
              class="w-full outline-2 outline-gray-300 focus:outline-sky-500 rounded pl-2 mb-4"
              v-model="newProduct.image"
            />
            <div class="w-full self-center aspect-[16/9] overflow-hidden rounded-4xl">
              <img class="w-full h-full object-cover" :src="newProduct.image" v-if="newProduct.image" alt="" />
              <div class="flex flex-col justify-center bg-sky-50 w-full h-full">
                <p class="text-gray-500 text-center">Preview Image</p>
              </div>
            </div>
          </div>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-green-500 opacity-90 hover:opacity-100 p-2 rounded-2xl mt-10 cursor-pointer"
        >
          Add Product
        </button>
      </div>
    </form>
  </section>
</template>
<script setup>
import useProducts from '@/components/ProductComponent/composable/setProducts'

const { addProduct, newProduct , isUpdating , updateProduct } = useProducts()
</script>
