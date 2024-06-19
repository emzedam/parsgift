<template>
    <div> 
        <Category 
            v-if="categoryList.length != 0"
            :items="categoryList"
        />
        <div v-else class="p-6 bg-gray-50 rounded-lg py-20 flex items-center justify-center">
            <p>هیچ دسته بندی اضافه نشده !</p>
        </div>
    </div>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import Category from "@/components/product/category/all-category.vue";
import {useRoute , useRouter} from 'vue-router'



const route = useRoute()
const router = useRouter()
const parsiStore = useParsgiftStore()
const {appBaseUrl} = useRuntimeConfig().public
const {globalLoading} = storeToRefs(parsiStore)
const categoryList = ref([])

const getCategoryList = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-categories`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    categoryList.value = dataJson.result

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

getCategoryList()

</script>