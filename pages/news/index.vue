<template>
  <News
    v-if="newsList.length != 0"
    :newsList="newsList"
    :links="newsLinks"
    @getNews="(page) => getNewsWithPaginate(page)"
  />
</template>


<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import News from "@/components/news/news.vue";
import {useRoute , useRouter} from 'vue-router'

const parsiStore = useParsgiftStore()
const {appBaseUrl} = useRuntimeConfig().public
const {globalLoading} = storeToRefs(parsiStore)
const newsList = ref([])
const newsLinks = ref([])

const getNewsList = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-news?page=1`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    newsList.value = dataJson.result
    // console.log(newsList.value)

    let divide = 5;
    for (let i = 1; newsList.value.length / divide >= 1; i++) {
      newsLinks.value = [...newsLinks.value , i]
      divide = divide + 5
      if(newsList.value.length < divide) {
        i = i + 1
        newsLinks.value = [...newsLinks.value , i]
      }
    }

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

getNewsList()

const getNewsWithPaginate = async (page) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-news?page=${page}`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    newsList.value = dataJson.result

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

</script>
