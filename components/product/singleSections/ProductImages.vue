<template>
    <section class="w-full my-16 relative">
        <div class="product__header">
          <div class="product__header-logo">
            <i class="fa fa-images text-xl text-red-500"></i>
          </div>
          <h2 class="product__header-title !text-sm">تصاویر</h2>
        </div>
    
        <swiper
          class="relative w-full"
          :modules="modules"
          :slides-per-view="3"
          :space-between="6"
          :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
        >
          <swiper-slide class="rounded-lg h-[150px]">
            <article class="rounded-lg group">
              <figure class="rounded-lg relative overflow-hidden">
                <img
                  class="rounded-t-lg h-[150px] w-full object-cover border"
                  src="@/assets/images/play.webp"
                  alt="خرید گیفت کارت آیتونز"
                />
              </figure>
              <button
                type="button"
                class="absolute inset-0 text-2xl text-white bg-black/20 rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-300"
              >
                <i class="fa-duotone fa-magnifying-glass-plus"></i>
              </button>
            </article>
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


const onSwiper = (swiper) => {
  console.log(swiper);
}

const onSlideChange = () => {
  console.log("slide change");
}

const modules = [Navigation, A11y]

</script>