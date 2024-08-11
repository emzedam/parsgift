<template>
    <section class="w-full my-16 relative">
        <div class="product__header">
          <div class="product__header-logo">
            <i class="fa fa-images text-xl text-red-500"></i>
          </div>
          <h2 class="product__header-title !text-sm">تصاویر</h2>
        </div>
    
        <swiper
          v-if="galleries != null && galleries.length != 0"
          class="relative w-full"
          :modules="modules"
          :slides-per-view="3"
          :space-between="6"
          :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
        >
          <swiper-slide
          v-for="(gallery , index) in galleries" :key="gallery"
          class="rounded-lg h-[150px]">
            <article class="rounded-lg group">
              <a :href="`${appBaseUrl}/storage/product/gallery/${gallery}`" target="_blank" class="rounded-lg relative overflow-hidden">
                <img
                  class="rounded-t-lg h-[150px] w-full object-cover border"
                  :src="`${appBaseUrl}/storage/product/gallery/${gallery}`"
                />
              </a>
              <a :href="`${appBaseUrl}/storage/product/gallery/${gallery}`" target="_blank"
                class="absolute inset-0 text-2xl text-white bg-black/20 rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-300 flex items-center justify-center"
              >
                <i class="fa-duotone fa-magnifying-glass-plus"></i>
              </a>
            </article>
          </swiper-slide>
        </swiper>
        <div v-else>تصویر اضافه نشده !</div>
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

const props = defineProps({
  galleries: {
    required: true,
    type: [Array , Object]
  }
})

const onSwiper = (swiper) => {

}

const onSlideChange = () => {

}

const modules = [Navigation, A11y]

</script>