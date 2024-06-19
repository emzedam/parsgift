<template>
    <main>
        <div class="w-full max-w-screen-xl mx-auto font-iransans">
          <!-- PARSIGIFT SLIDER -->
          <div class="sliders-banners lg:mt-8 mt-4 lg:gap-4">
            <section
              class="slider w-full h-60 lg:text-6xl text-3xl flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white shadow-lg shadow-blue-500/50"
            >
              <h2>سوالات متداول</h2>
            </section>
          </div>
          <!-- PARSIGIFT SLIDER -->
        </div>
    
        <section class="w-full mt-8 mb-16 relative rounded-lg">

            <div class="content bg-white border text-justify p-4 rounded-lg font-iransans">
                <section
                class="relative bg-white/70 backdrop-blur-sm mt-4 rounded-t-3xl"
              >
                <div class="w-full max-w-screen-xl mx-auto rounded-lg">
                  <ul class="space-y-2" v-if="faqsList.length != 0">
                    <li v-for="(faqs , index) in faqsList" :key="faqs.id">
                      <h2 id="accordion-arrow-icon-heading-3">
                        <button
                          @click="openSubMenu(faqs.id)"
                          :class="submenuIndex == faqs.id ? 'rounded-t-lg' : 'rounded-lg'"
                          type="button"
                          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
                        >
                          <span>{{ faqs.question }}</span>
                          <i
                            class="fa w-3 h-3 rotate-180 shrink-0 text-gray-500"
                            :class="submenuIndex == faqs.id ? 'fa-chevron-down' : 'fa-chevron-up'"
                          ></i>
                        </button>
                      </h2>
                      <div class="question">
                        <collapse-transition>
                          <div
                            v-if="submenuIndex == faqs.id"
                            class="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg"
                          >
                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                              {{ faqs.response }}
                            </p>
                          </div>
                        </collapse-transition>
                      </div>
                    </li>
                  </ul>
                  <div class="p-3 text-center" v-else>خالی میباشد !</div>
                </div>
              </section>
            </div>

        </section>
    </main>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import CollapseTransition from "/Module/CollapseTransition.vue";
import { storeToRefs } from "pinia";
import News from "@/components/news/news.vue";
import {useRoute , useRouter} from 'vue-router'

const parsiStore = useParsgiftStore()
const {appBaseUrl} = useRuntimeConfig().public
const {globalLoading} = storeToRefs(parsiStore)
const faqsList = ref([])
const submenuIndex = ref(null)

const getFaqsList = async (id) => {
  globalLoading.value = true
  const {data} = await useFetch(`${appBaseUrl}/api/parsgift/get-faqs`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    faqsList.value = dataJson.result
    console.log(faqsList.value)

    setTimeout(() => {
      globalLoading.value = false
    }, 500);
  }
}

getFaqsList()


const openSubMenu = (index) => {
    if (submenuIndex.value == index) {
    submenuIndex.value = null;
    } else {
    submenuIndex.value = index;
    }
}



</script>