<template>
  <div>
    <Main 
      v-if="initData != null"
      :initData="initData" 
    />
  </div>
</template>

<script setup>
import Main from "@/components/main/main.vue";
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";




const parsiStore = useParsgiftStore()

const { initData } = storeToRefs(parsiStore)

</script>

