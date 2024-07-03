<template>
  <single 
  v-if="productData != null"
  :productData="productData" />
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import single from "@/components/product/single.vue";
import {useRoute , useRouter} from 'vue-router'
import api from '@/axios'
const route = useRoute()
const router = useRouter()

const {appBaseUrl} = useRuntimeConfig().public

const parsiStore = useParsgiftStore()
const {globalLoading} = storeToRefs(parsiStore)
const productData = ref(null)

const getProductData = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-product?id=${id}&catId=${route.params.category}`)

  const dataJson = data.value
  if(dataJson.status == 200) {
    productData.value = dataJson.result

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

const slug = route.params.slug
const splitSlug = slug.split('-')
if(splitSlug[splitSlug.length - 1] > 0) {
  getProductData(splitSlug[splitSlug.length - 1])
}else {
  router.push("/")
}
</script>
