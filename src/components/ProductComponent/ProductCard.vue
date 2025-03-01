<!-- <template>
  <div
    class="bg-white border flex flex-col justify-between  space-y-5 border-gray-200 rounded-4xl shadow-lg shadow-grey-400 p-4 hover:border-blue-300 "
  >
    <LoaderCircle
      :size="45"
      v-if="pending == true"
      class="animate-spin text-blue-300 absolute right-40 top-48 blur-none"
    />

    <section :class="{' blur-xs': pending == true}" >


    <div class="w-full aspect-[16/9] overflow-hidden rounded-4x1">
      <img class="w-full h-48 object-cover" :src="image || '/default.jpg'" alt="" />
    </div>

    <div>
      <p class="title font-medium text-gray-500">Code</p>
    </div>
    <div class="border-gray-100 flex justify-between">
      <h2 class="font-bold text-3xl line-clamp-1">{{ name }}</h2>
      <h2 class="font-bold text-3xl">${{ price }}</h2>
    </div>
    <div>
      <p class="title font-medium text-gray-500">Description</p>
      <p class="title font-medium text-xl py-4 line-clamp-3">{{ description }}</p>
    </div>
    <div class="flex justify-between font-medium text-xl">
      <h3>Count:</h3>
      <h3>{{ count }}</h3>
    </div>
    <section class="flex justify-between">
      <div class="space-x-2">
        <RoundedButton type="Edit"></RoundedButton>
        <RoundedButton type="Delete"></RoundedButton>
      </div>
      <div>
        <RoundedButton>
          <template #text>
            <p>Go To Details</p>
          </template>
        </RoundedButton>
      </div>
    </section>
  </section>
  </div>
</template> -->
<template>
  <div class="relative bg-white border flex flex-col justify-between  border-gray-200 rounded-4xl shadow-lg shadow-grey-400 p-4 hover:border-blue-300 overflow-hidden">


    <div v-if="pending" class="absolute inset-0 backdrop-blur-xs flex justify-center items-center z-10" style="pointer-events: none;">
      <LoaderCircle :size="45" class="animate-spin text-blue-300" />
    </div>

    <section class="relative z-0 space-y-5">
      <div class="w-full aspect-[16/9] overflow-hidden rounded-4x1">
        <img class="w-full h-48 object-cover" :src="image || '/default.jpg'" alt="" />
      </div>

      <div>
        <p class="title font-medium text-gray-500">Code</p>
      </div>
      <div class="border-gray-100 flex justify-between">
        <h2 class="font-bold text-3xl line-clamp-1">{{ name }}</h2>
        <h2 class="font-bold text-3xl">${{ price }}</h2>
      </div>
      <div>
        <p class="title font-medium text-gray-500">Description</p>
        <p class="title font-medium text-xl py-4 line-clamp-3">{{ description }}</p>
      </div>
      <div class="flex justify-between font-medium text-xl">
        <h3>Count:</h3>
        <h3>{{ count }}</h3>
      </div>
      <section class="flex justify-between">
        <div class="space-x-2">
          <RoundedButton type="Edit" @click="$emit('edit')" ></RoundedButton>
          <RoundedButton type="Delete" @click="$emit('remove')" ></RoundedButton>
        </div>
        <div>
          <RoundedButton>
            <template #text>
              <p>Go To Details</p>
            </template>
          </RoundedButton>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import RoundedButton from '@/components/SharedComponent/RoundedButton.vue'

import { LoaderCircle } from 'lucide-vue-next'
defineProps({
  name: String,
  price: String,
  description: String,
  count: Number,
  image: String,
  pending: Boolean,
})

defineEmits(['edit','remove'])

</script>
<style scoped>
.title {
  font-size: 0.85rem;
}
</style>
