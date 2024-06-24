<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";

useHead({
  title: "پارسی گیفت",
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})

const {appBaseUrl} = useRuntimeConfig().public

const parsiStore = useParsgiftStore()
const {globalLoading} = storeToRefs(parsiStore)




async function fetchInitData() {
  const token = useCookie('_uToken')
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-init`, {
    lazy: true,
    headers: {
      Authorization:`Bearer ${token.value}`
    }
  })
  const userJson = data.value
  if(userJson.status == 200) {
    parsiStore.$patch({
      initData: userJson.result,
      basketCount: userJson.result.basket_count
    })
    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

fetchInitData()
</script>