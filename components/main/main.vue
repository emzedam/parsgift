<template>
    <main>
    
    
        <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2 font-iransans">
            <!-- PARSIGIFT SLIDER -->
            <div class="sliders-banners lg:grid lg:grid-cols-12 lg:mt-8 mt-4 lg:gap-4">
                <section v-if="initData.slider.right != null" class="right col-span-3 hidden lg:block">
                    <nuxt-link
                        v-if="initData.slider.right.type != 'externalLink'"
                        :to="initData.slider.right.linkTo"
                    >
                        <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${initData.slider.right.file_name}`">
                    </nuxt-link>
                    <a 
                        v-else
                        target="_blank"
                        :href="initData.slider.right.linkTo"
                    >
                        <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${initData.slider.right.file_name}`">
                    </a>
                </section>
    
                <section class="slider lg:col-span-6  w-full">
    
                    <swiper v-if="initData.slider.center.length != 0" class="rounded-lg p-0 m-0 bottom-0 block h-full" :modules="modules" :slides-per-view="1" navigation @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide 
                        v-for="(centerSlide , index) in initData.slider.center" :key="centerSlide.id"
                        class="rounded-lg h-full">
    
                            <nuxt-link v-if="centerSlide.type != 'externalLink'" :to="centerSlide.linkTo" class="rounded-lg h-full">
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${centerSlide.file_name}`" alt="تحویل سریع با پشتیبانی آنلاین">
                                </figure>
                            </nuxt-link>
                            <a :href="centerSlide.linkTo" target="_blank" v-else>
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${centerSlide.file_name}`" alt="تحویل سریع با پشتیبانی آنلاین">
                                </figure>
                            </a>
                            
                        </swiper-slide>
                    </swiper>
                </section>

                <section v-if="initData.slider.left != null" class="left col-span-3 hidden lg:block">
                    <nuxt-link
                        v-if="initData.slider.left.type != 'externalLink'"
                        :to="initData.slider.left.linkTo"
                    >
                        <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${initData.slider.left.file_name}`">
                    </nuxt-link>
                    <a 
                        v-else
                        target="_blank"
                        :href="initData.slider.left.linkTo"
                    >
                        <img class="rounded-lg h-full" :src="`${appBaseUrl}/storage/theme/${initData.slider.left.file_name}`">
                    </a>
                </section>
            </div>
            <!-- PARSIGIFT SLIDER -->
    
    
    
            <!-- PARSIGIFT SERVICES -->
    
            <section class="w-full mt-6 relative   flex gap-2 items-center">
    
                <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full  items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold hidden lg:flex">
                    خدمات پارسی گیفت
                </div>
    
                <div class="slider overflow-hidden">
                    <swiper v-if="initData.categories.length != 0" class="relative  w-full" :modules="modules" :slides-per-view="2"  :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4, }, }">
                        <swiper-slide v-for="(category , index) in initData.categories" :key="category.id" class="bg-blue-50 relative text-blue-500 rounded-full flex items-center justify-center px-4 py-9  whitespace-nowrap text-center font-semibold">
                            <nuxt-link class="w-full h-full absolute top-0 right-0 flex items-center justify-center py-6" :to="`/category/${category.slug}-${category.id}`">
                                <i class="fa-regular fa-bag-shopping ml-2"></i>
                                <span> {{category.title}} </span>
                            </nuxt-link>
                        </swiper-slide>
                    </swiper>
                </div>
    
            </section>
            <!-- PARSIGIFT SLIDER -->
    
            <section v-if="initData.adsBanners.length != 0" class="w-full mt-6 relative grid grid-rows-1 grid-cols-12 gap-4">
                    <div 
                    class="lg:col-span-4 col-span-6" 
                    v-for="(banner , index) in initData.adsBanners" 
                    :key="banner.id"
                    >
                        <nuxt-link 
                            v-if="banner.type != 'externalLink'"
                            :to="banner.linkTo">
                            <img :src="`${appBaseUrl}/storage/theme/${banner.file_name}`">
                        </nuxt-link>
                        <a
                            v-else
                            target="_blank"
                            :href="banner.linkTo"
                        >
                            <img :src="`${appBaseUrl}/storage/theme/${banner.file_name}`">
                        </a>
                    </div>
            </section>
    
    
    
    
            

        </div>

        <!-- vitrin -->
        <div>
            <vitrinSlider
            bgColor="bg-white">
                <template #header>
                    <div class="product__header">
                        <div class="product__header-logo">
                            <i class="fa fa-list-alt text-xl text-red-500"></i>
                        </div>
                        <h2 class="product__header-title !text-sm">
                           جدیدترین محصولات
                        </h2>
                    </div>
                </template>
                <!-- products -->
                <template #content v-if="initData.leatestProducts.length != 0">
                    <swiper class="relative  w-full" :modules="modules" :slides-per-view="2" :space-between="20" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                        <swiper-slide v-for="(product , index) in initData.leatestProducts" :key="product.id" class="rounded-lg h-full border bg-white">
        
                            <nuxt-link 
                            :to="`/product/${product.categories['ids'][0]}/${product.fa_title.replace(' ' , '-')}-${product.id}`"
                            class="rounded-lg h-full overflow-hidden relative">
                                <figure class="rounded-lg h-[150px]">
                                    <img class="rounded-t-lg h-[150px] object-cover w-full" :src="`${appBaseUrl}/storage/product/${product.index_image}`" alt="خرید گیفت کارت آیتونز">
                                </figure>
                                <header class="p-3 text-gray-700 text-center w-full">
                                    <h2 class="text-md font-semibold mb-2 w-full border-b pb-2 border-red-500 truncate">{{ product.fa_title }}</h2>
                                    <h2 class="text-md font-semibold mb-8  w-full truncate">{{ product.en_title }}</h2>
                                    <span class="bg-red-500 my-2 rounded-full text-white text-xs py-1 hidden">20  درصد تخفیف</span>
                                    <span class="text-md font-semibold mb-8  w-full hidden">3000 <small class="text-xs">تومان</small></span>
                                    <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-[-20px] left-0 hidden">خرید</button>
                                </header>
                            </nuxt-link>
                        </swiper-slide>
        
                    </swiper>
                </template>
                <template #content v-else></template>
            </vitrinSlider>
        </div>
        <!-- vitrin -->

        <!-- vitrin -->
        <div v-if="initData.vitrinCategories.length != 0">
            <vitrinSlider
            v-for="(vitrin , index) in initData.vitrinCategories" :key="vitrin.id"
            bgColor="bg-white" :isProducts="vitrin.products.length">
                <template #header >
                    <div class="product__header">
                        <div class="product__header-logo">
                            <i class="fa fa-list-alt text-xl text-red-500"></i>
                        </div>
                        <h2 class="product__header-title !text-sm">
                           {{ vitrin.title }}
                        </h2>
        
        
                        <nuxt-link :to="`/category/${vitrin.slug}-${vitrin.id}`" :title="vitrin.title" class="product__header-more !font-semibold">
                            مشاهده آرشیو
                            <i class="fa fa-chevron-left"></i>
                        </nuxt-link>
                    </div>
                </template>
                <!-- products -->
                <template #content v-if="vitrin.products.length != 0">
                    <swiper class="relative  w-full" :modules="modules" :slides-per-view="2" :space-between="20" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                        <swiper-slide v-for="(product , index) in vitrin.products" :key="product.id" class="rounded-lg h-full border bg-white">
        
                            <nuxt-link 
                            :to="`/product/${vitrin.id}/${product.fa_title.replace(' ' , '-')}-${product.id}`"
                            class="rounded-lg h-full overflow-hidden relative">
                                <figure class="rounded-lg h-[150px]">
                                    <img class="rounded-t-lg h-[150px] w-full object-cover" :src="`${appBaseUrl}/storage/product/${product.index_image}`" :alt="product.fa_title">
                                </figure>
                                <header class="p-3 text-gray-700 text-center w-full">
                                    <h2 class="text-md font-semibold mb-2 w-full border-b pb-2 border-red-500 truncate">{{ product.fa_title }}</h2>
                                    <span class="text-md font-semibold mb-8  w-full truncate">{{ product.en_title }}</span>
                                    <span class="bg-red-500 my-2 rounded-full text-white text-xs py-1 hidden">20  درصد تخفیف</span>
                                    <span class="text-lg font-semibold mb-8  w-full hidden">3000 <small class="text-xs">تومان</small></span>
                                    <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-[-20px] left-0 hidden">خرید</button>
                                </header>
                            </nuxt-link>
                        </swiper-slide>
                    </swiper>
                </template>
                <!-- categories -->
                <template #content v-else-if="vitrin.childs.length != 0">
                    <swiper class="relative  w-full" :modules="modules" :slides-per-view="2" :space-between="20" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                        <swiper-slide v-for="(category , index) in vitrin.childs" :key="category.id" class="rounded-lg h-full border bg-white">
                            <nuxt-link 
                            :to="`/category/${category.slug}-${category.id}`"
                            class="rounded-lg h-full overflow-hidden relative">
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-t-lg h-full" :src="`${appBaseUrl}/storage/product/category_images/${category.cat_image}`" :alt="category.title">
                                </figure>
                                <header class="p-3 text-gray-700 text-center w-full">
                                    <h2 class="text-lg font-semibold mb-2 w-full  pb-2 truncate">{{ category.title }}</h2>
                                    <!-- <span class="text-lg font-semibold mb-8  w-full">{{ product.en_title }}</span> -->
                                    <span class="bg-red-500 my-2 rounded-full text-white text-xs py-1 hidden">20  درصد تخفیف</span>
                                    <span class="text-lg font-semibold mb-8  w-full hidden">3000 <small class="text-xs">تومان</small></span>
                                    <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-[-20px] left-0 hidden">خرید</button>
                                </header>
                            </nuxt-link>
                        </swiper-slide>
        
                    </swiper>
                </template>
                <!-- null -->
                <template #content v-else></template>
            </vitrinSlider>
        </div>
        <!-- vitrin -->



        <section v-if="initData.quickAvailables.length != 0" class="w-full my-16 relative  p-8 bg-indigo-500">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
                <h2 class="text-white text-2xl py-6 font-semibold">دسترسی سریع به خدمات پارسی گیفت</h2>
                <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-6 font-iransans">
                    <a :href="link.url" target="_blank" v-for="(link , index) in initData.quickAvailables" :key="link.id" class="bg-white p-6 flex items-center justify-center w-full  col-span-1 rounded-lg">
                        <span class="text-2xl font-semibold"> {{ link.title }}
                        </span>
                    </a>
                </div>
            </div>
        </section>
    
    
    
        <section class="w-full my-16 relative" v-if="initData.newsList.length != 0">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
                <div class="product__header">
                    <div class="product__header-logo">
                        <i class="fa fa-blog text-xl text-red-500"></i>
    
                    </div>
                    <h2 class="product__header-title !text-sm">
                        مجله پارسی گیفت
                    </h2>
    
    
                    <nuxt-link to="/news" title=" خریدبازیهای-موبایلی" class="product__header-more !font-semibold">
                            مشاهده آرشیو
                            <i class="fa fa-chevron-left"></i>
                        </nuxt-link>
                </div>
    
                <swiper class="relative  w-full" :modules="modules" :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 },400: { slidesPerView: 1 }, 900: { slidesPerView: 3, }, }">
                    <swiper-slide v-for="(news , index) in initData.newsList" :key="news.id" class="rounded-lg h-full border">
    
                        <nuxt-link
                        :to="`/news/${news.slug}-${news.id}`"
                        :title="news.title"
                        class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-[280px] w-full object-cover" :src="`${appBaseUrl}/storage/news/${news.image}`" :title="news.title" :alt="news.title">
                            </figure>
                            <header class="p-3 text-gray-700  w-full">
                                <h5 class="font-semibold text-xl text-right py-3 truncate"> {{ news.title }} </h5>
                                <div class="journal__item-desc text-justify">
                                    <div v-html="news.summary_description"></div>
                                </div>
                                <div class="journal__item-footer flex justify-between items-center border-t pt-4 mt-2">
                                    <span class="name">{{ news.date }}</span>
                                    <a href="" title="" class="link bg-cyan-500 px-2 rounded-md text-white">
                                                            مطالعه بیشتر...
                                                        </a>
                                </div>
                            </header>
    
                        </nuxt-link>
                    </swiper-slide>
    
                </swiper>
    
            </div>
    
    
    
        </section>
    
    
    
    
    </main>
</template>

<script setup>
import vitrinSlider from './vitrinSlider.vue'
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const { appBaseUrl } = useRuntimeConfig().public

const props = defineProps({
    initData: {
        required: true,
        type: [Array , Object]
    }
})

const modules = ref([Navigation , A11y])

const onSwiper = () => {
    // console.log("test")
}

const onSlideChange = () => {
    
}

onMounted(() => {
    
})

</script>