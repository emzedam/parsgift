<template>
    <section>
        <nav class="flex my-6" aria-label="Breadcrumb">
            <ol
              class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
            >
              <li class="inline-flex items-center">
                <nuxt-link
                  to="/"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                    />
                  </svg>
                  خانه
                </nuxt-link>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <nuxt-link
                    to="/news"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >مجله پارسی گیفت</nuxt-link
                  >
                </div>
              </li>
              <li v-if="newsData != null">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <p
                    class="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >{{ newsData.title }}</p
                  >
                </div>
              </li>
            </ol>
          </nav>

          <div v-if="newsData != null" v-html="newsData.content" class="border rounded border-gray-100 p-8"></div>
          <div v-else class="border rounded border-gray-100 p-8 flex text-center items-center justify-center">
            محتوا یافت نشد !  
          </div>
        </section>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import {useRoute , useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const parsiStore = useParsgiftStore()
const {appBaseUrl} = useRuntimeConfig().public
const {globalLoading} = storeToRefs(parsiStore)
const newsData = ref(null)

const getNewsData = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-news-detail?id=${id}`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    newsData.value = dataJson.result

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}


const slug = route.params.slug
const splitSlug = slug.split('-')
if(splitSlug[splitSlug.length - 1] > 0) {
   getNewsData(splitSlug[splitSlug.length - 1])
}else {
  router.push("/")
}

</script>