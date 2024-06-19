<template>
  <div
    class="w-full max-w-screen-xl mx-auto lg:px-6 px-2 my-8 grid grid-cols-12 gap-4"
  >
    <div class="form col-span-12 lg:border rounded-lg bg-white">
      <h2 class="font-semibold text-2xl py-8 px-6 text-blue-500 rounded-t-lg">
        <i class="fa fa-blog"></i>
        مجله پارسی گیفت
      </h2>
      <div class="p-4 space-y-4">
        <nuxt-link
        :to="`/news/${news.slug}-${news.id}`"
        :title="news.slug"
        v-for="(news , index) in newsList" :key="news.id">
          <div
            class="bg-white relative overflow-hidden lg:flex grid lg:grid-cols-2 grid-cols-1 gap-4 border p-4 rounded-lg"
          >
            <figure>
              <img
                :src="`${appBaseUrl}/storage/news/${news.image}`"
                :alt="news.title"
                :title="news.title"
                class="rounded-lg lg:max-w-56 w-[200px] object-cover mx-auto h-[200px]"
              />
            </figure>

            <div class="title bottom-0 font-medium z-10 text-black px-4">
              <h3 class="text-2xl font-fas text-blue-500 mb-4">
                {{ news.title }}
              </h3>
              <div class="meta">
                <ul class="flex items-center">
                  <li class="bg-gray-100 px-4 py-1 font-fas text-sm rounded-lg">
                    {{ news.date }}
                  </li>
                </ul>
              </div>
              <div v-html="news.summary_description" class="text-gray-600 mt-2 font-fas text-sm">
              </div>
            </div>
          </div>
        </nuxt-link>

        <div
          class="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0"
        >
          <div class=" md:-mt-px md:flex">
            <span
              v-for="(link , index) in links" :key="link.label"
              @click="getPaginateNews(link)"
              :class="activePaginate == link ? 'border-t-2 border-blue-500' : ''"
              class="inline-flex cursor-pointer items-center  px-4 pt-4 text-sm font-medium text-blue-600"
              aria-current="page"
              >{{link}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {appBaseUrl} = useRuntimeConfig().public
const props = defineProps({
  newsList: {
    required: true,
    type: [Array , Object]
  },
  links: {
    required: true,
    type: [Array , Object]
  }
})

const emit = defineEmits(["getNews"])

const activePaginate = ref(1)


const getPaginateNews = (page) => {
  activePaginate.value = page
  emit("getNews" , page)
}

</script>
