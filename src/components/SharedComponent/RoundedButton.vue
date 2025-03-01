<template>

<button class=" text-white cursor-pointer mt-4 p-3 rounded-2xl bg-blue-700 opacity-90 hover:opacity-100  " @click="$emit('click')">
  <slot name="text"></slot>
  <component :is="icon"></component>
</button>


</template>
<script setup>
import {  computed} from 'vue';
import { Pencil , Trash2 } from 'lucide-vue-next';
const props = defineProps({
  type : String
})
defineEmits(['click'])
const icon = computed(()=> {
  if (props.type === "Edit") return Pencil;
  else if (props.type === "Delete") return Trash2;
  else return null;
})


</script>
