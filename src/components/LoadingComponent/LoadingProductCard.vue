<template>
  <section class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4">
    <div
      class="bg-white border flex flex-col justify-between w-90 space-y-5 border-gray-200 rounded-4xl shadow-lg shadow-grey-400 p-4 hover:border-blue-300 animate-pulse"
    >
      <!-- pic -->
      <div class="border-0 rounded-3xl">
        <div class="h-48 bg-gray-100 rounded-2xl"></div>
      </div>

      <!-- name -->
      <div>
        <div class="w-12 h-5 bg-gray-100 rounded-2xl"></div>
      </div>
      <div class="border-gray-100 flex justify-between">
        <div class="bg-gray-100 h-16 w-42 rounded-2xl"></div>
        <div class="bg-gray-100 h-16 w-20 rounded-2xl"></div>
      </div>

      <!-- description -->
      <div>
        <div class="w-20 h-5 bg-gray-100 mb-5 rounded-2xl"></div>
        <div class="bg-gray-100 h-35 w-80 rounded-2xl"></div>
      </div>
      <!-- count -->
      <div class="flex justify-between font-medium text-xl">
        <div class="w-16 h-8 bg-gray-100 rounded-2xl"></div>
      </div>
      <section class="flex justify-between">
        <div class="space-x-2">
          <button disabled class="bg-gray-100 p-5 rounded-2xl"></button>
          <button disabled class="bg-gray-100 p-5 rounded-2xl"></button>
        </div>
        <div>
          <button disabled class="bg-gray-100 py-5 px-12 rounded-2xl"></button>
        </div>
      </section>
    </div>
  </section>
</template>
