<template>
    <div v-if="categoryData != null"> 
        <CategoryItems 
            v-if="categoryData.products.length != 0" 
            :catData="categoryData"
            :items="categoryData.products"
        />

        <Category 
            v-else-if="categoryData.childs.length != 0" 
            :catData="categoryData"
            :items="categoryData.childs"
        />

        <div v-else class="p-6 bg-gray-50 rounded-lg py-20 flex items-center justify-center">
            <p>هیچ آیتمی برای این دسته اضافه نشده !</p>
        </div>
    </div>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import CategoryItems from "@/components/product/category/category-items.vue";
import Category from "@/components/product/category/category.vue";
import {useRoute , useRouter} from 'vue-router'

onMounted(() => {

})

const route = useRoute()
const router = useRouter()
const parsiStore = useParsgiftStore()
const {appBaseUrl} = useRuntimeConfig().public
const {globalLoading} = storeToRefs(parsiStore)
const categoryData = ref(null)

const getCategoryData = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-category?id=${id}`)
  const dataJson = data.value
  if(dataJson.status == 200) {
    categoryData.value = dataJson.result

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

const slug = route.params.slug
const splitSlug = slug.split('-')
if(splitSlug[splitSlug.length - 1] > 0) {
    getCategoryData(splitSlug[splitSlug.length - 1])
}else {
  router.push("/")
}
</script>