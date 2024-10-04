<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import api from "@/axios/index"
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";



useHead({
  title: "سورین گیفت",
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})

const { appBaseUrl } = useRuntimeConfig().public

const parsiStore = useParsgiftStore()
const {globalLoading} = storeToRefs(parsiStore)




async function fetchInitData() {
  globalLoading.value = true
  const {data} = await api.get(`${appBaseUrl}/api/parsgift/get-init`)
  
  if(data.status == 200) {
    parsiStore.$patch({
      initData: data.result
    })

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

fetchInitData()
</script>