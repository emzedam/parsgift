<template>
  <main>
    <div class="w-full max-w-screen-xl mx-auto font-iransans">
      <!-- PARSIGIFT SLIDER -->
      <div class="sliders-banners lg:mt-8 mt-4 lg:gap-4">
        <section
          class="slider w-full h-60 lg:text-6xl text-3xl flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white shadow-lg shadow-blue-500/50"
        >
          <h2>همه محصولات {{ catData.title }}</h2>
        </section>
      </div>
      <!-- PARSIGIFT SLIDER -->
    </div>

    <section class="w-full mb-16 relative rounded-lg">
      <div class="w-full max-w-screen-xl mx-auto font-iransans">
        <div class="mt-8">
          <nav class="flex" aria-label="Breadcrumb">
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
                    :to="`/category/${catData.slug}-${catData.id}`"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >{{ catData.title }} 
                  </nuxt-link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div
          class="w-full bg-gray-100 my-6 rounded-lg flex items-center font-semibold justify-between"
        >
          <div class="flex p-4">
            <i class="fa fa-grid-2 text-2xl pl-2"></i>
            همه محصولات {{ catData.title }} 
          </div>
          <i
            class="bg-orange-500 w-10 h-10 text-2xl text-blue-500 rounded-r-lg p-4"
          ></i>
        </div>
        <div class="relative w-full grid gap-4 lg:grid-cols-4" v-if="items.length">
          <div class="rounded-lg h-full bg-white shadow-md"
          v-for="(product , index) in items" :key="product.id"
          >
            <nuxt-link
            :to="`/product/${catData.id}/${product.fa_title.replace(' ' , '-')}-${product.id}`"
            class="rounded-lg overflow-hidden relative">
              <figure class="rounded-lg h-[250px]">
                <img
                  class="rounded-t-lg h-full w-full object-cover"
                  :src="`${appBaseUrl}/storage/product/${product.index_image}`"
                  :alt="product.fa_title"
                />
              </figure>
              <header
                class="text-gray-700 text-center w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
              >
                <h2
                  class="text-lg truncate font-semibold w-full bg-white py-6 text-black flex items-center justify-center"
                >
                 {{ product.fa_title }}
                </h2>

                <button
                  type="button"
                  class="w-full text-white rounded-b-lg flex justify-center gap-4 items-center p-6"
                >
                  <i class="fa-solid fa-bag-shopping text-2xl"></i>
                  <span class="font-semibold text-xl"> خرید</span>
                </button>
              </header>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {appBaseUrl} = useRuntimeConfig().public

const props = defineProps({
  catData:{
    required: true,
    type: [Array , Object]
  },
  items: {
    required: true,
    type: [Array , Object]
  }
})

</script>