<template>
    <section class="w-full my-16 relative">
        <div class="product__header">
          <div class="product__header-logo">
            <i class="fa fa-gift text-xl text-red-500"></i>
          </div>
          <h2 class="product__header-title !text-sm">محصولات مرتبط</h2>
        </div>
    
        <swiper
          v-if="relatedProducts.length != 0"
          class="relative w-full"
          :modules="modules"
          :slides-per-view="3"
          :space-between="6"
          :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
        >
          <swiper-slide class="rounded-lg h-full border"
          v-for="(product , index) in relatedProducts" :key="product.id"
          >
            <nuxt-link 
            :to="`/product/${product.categories.ids[0]}/${product.fa_title.replace(' ' , '-')}-${product.id}`" class="rounded-lg h-full">
              <figure class="rounded-lg h-full">
                <img
                  class="rounded-t-lg h-full"
                  :src="`${appBaseUrl}/storage/product/${product.index_image}`" :alt="product.fa_title"
                />
              </figure>
              <header class="p-3 text-gray-700 text-center w-full">
                <h2
                  class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
                >
                  {{ product.fa_title }}
                </h2>
                <span class="text-lg font-semibold mb-8 w-full">{{ product.en_title }}</span>
              </header>
            </nuxt-link>
          </swiper-slide>
        </swiper>
      </section>
</template>

<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const { appBaseUrl } = useRuntimeConfig().public
const onSwiper = (swiper) => {
  
}

const onSlideChange = () => {
  // console.log("slide change");
}

const modules = [Navigation, A11y]

const props = defineProps({
  relatedProducts: {
    requiired: true,
    type: [Array , Object]
  }
})

</script>