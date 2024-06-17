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
              :to="`/category/${productData.currentCat.slug}-${productData.currentCat.id}`"
              class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >{{ productData.currentCat.title }}</nuxt-link
            >
          </div>
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
            <p
              class="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >{{ productData.fa_title }}</p
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="lg:col-span-1 border p-4 rounded-lg overflow-hidden relative">
        <img
          class="rounded-lg"
          :src="`${appBaseUrl}/storage/product/${productData.index_image}`"
        />
      </div>
      <div class="lg:col-span-2 border p-4 rounded-lg font-iransans py-8">
        <div class="header">
          <h1 class="text-3xl font-extrabold w-full">
          {{ productData.fa_title }}
          </h1>
        </div>

        <div class="pop-up my-8 lg:flex gap-4 w-full">
          <button
            @click="propertyModalState = true"
            v-if="productData.has_property == 1"
            type="button"
            class="border p-4 rounded-lg flex items-center lg:w-2/4 w-full justify-between"
          >
            <span class="font-semibold" v-if="selected_attribute != null">
              {{ productData.has_property == 1 ? selected_attribute.title : '' }}
            </span>
            <i class="fa fa-chevron-down pr-2"></i>
          </button>

          <button
           v-if="productData.accounts.length != 0"
            type="button"
            class="border p-4 rounded-lg flex items-center lg:w-2/4 w-full justify-between"
          >
            <span class="font-semibold"> انتخاب اکانت </span>
            <i class="fa fa-chevron-down pr-2"></i>
          </button>
        </div>

        <div
          class="left flex flex-col justify-start text-right w-full space-y-5"
        >
          <div class="flex items-center" v-if="productData.accounts.length != 0">
            <i class="fa fa-check-circle pl-2 text-green-500"></i>
            <span>حساب های مجاز :</span>
            <span class="mr-2" v-for="(account , index) in productData.accounts" :key="account.id">
              {{ account.name }}
              <span v-if="index != productData.accounts.length -1">,</span>
            </span>
          </div>

          <div class="flex items-center">
            <i class="fa fa-phone pl-2 text-green-500"></i>
            <span>پشتیبانی : ۰۲۱۰۰۰۳۳</span>
          </div>
        </div>

        <div class="flex items-center justify-between my-16 gap-4">
          <div class="flex items-center bg-gray-100 p-4 rounded-lg">
            <span>جمع کل مبلغ : </span>
            <span v-if="productData.has_property == 0">{{ productData.price }}<small>ریال</small></span>
            <span
            v-if="productData.has_property != 0 && selected_attribute != null"
            >
              {{ selected_attribute.price }}
              <small>ریال</small>
            </span>
            <span class="hidden bg-red-50 px-2 text-red-500 mr-2 rounded-lg">
              <strong class="font-fa">%10</strong> <small>تخفیف</small>
            </span>
          </div>

          <div class="flex items-center">
            <!-- <button
              type="button"
              class="bg-red-500 px-4 py-4 rounded-lg text-white"
            >
              <i class="fa fa-user pl-2"></i>
              <span> برای خرید وارد شوید</span>
            </button> -->

            <button
              type="button"
              class="bg-blue-500 px-4 py-4 rounded-lg text-white"
            >
              <i class="fa-solid fa-bag-shopping pl-2"></i>
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>

        <div v-if="productData.summary_description != null || productData.summary_description != 'null'" class="relative overflow-hidden">
          <div
            class="bg-red-500 flex items-center w-full max-w-xs text-white p-4 rounded-t-lg"
          >
            <i class="fa-solid fa-lightbulb-exclamation pl-2"></i>
            نکات و توضیحات مختصر
          </div>
          <ul v-html="productData.summary_description" class="flex flex-col space-y-4 bg-gray-100 p-4 rounded-b-lg">
          </ul>
        
        </div>
      </div>
    </div>
  </section>

  <section>
    <ul class="Tabs bg-gray-100 my-4 rounded-md flex gap-4 font-iransans">
      <li 
        @click="activeTab = 0" 
        :class="activeTab == 0 ? 'bg-gray-200' : ''"
        class="p-4 cursor-pointer">توضیحات</li>
      <li 
        @click="activeTab = 1" 
        :class="activeTab == 1 ? 'bg-gray-200' : ''"
        class="p-4 cursor-pointer">سوالات متداول</li>
      <li 
        @click="activeTab = 2" 
        :class="activeTab == 2 ? 'bg-gray-200' : ''"
        class="p-4 cursor-pointer">نظرات کاربران</li>
    </ul>
    
    <Description 
      v-if="activeTab == 0" 
      :content="productData.content"
    />

    <Faqs 
      :faqsList="productData.questions"
      v-if="activeTab == 1" 
    />

    <Comments 
      v-if="activeTab == 2" 
      :productId="productData.id"
      :comments="productData.comments"
      @updateComment="(data) => productData.comments = data"
    />

  </section>

  

  <ProductImages
    :galleries="productData.gallery"
  />

  <RelatedProducts />

  
  <!-- انتخاب ویزگی مدال -->
  <PropertyModal
    :propertyModalState="propertyModalState"
    v-if="productData.has_property == 1"
    :attributes="productData.attributes"
    :selected_attr="selected_attribute"
    @closeModal="propertyModalState = false"
    @selectAttr="(data) => selected_attribute = data"
  />
  <!-- انتخاب ویزگی مدال -->

  <!-- انتخاب اکانت مدال -->
  <AccountModal />
  <!-- انتخاب اکانت مدال -->
</template>

<script setup>
import Comments from './singleSections/Comments.vue'
import Description from './singleSections/Description.vue'
import Faqs from './singleSections/Faqs.vue'

import RelatedProducts from './singleSections/RelatedProducts.vue'
import ProductImages from './singleSections/ProductImages.vue'
import AccountModal from './modals/AccountModal.vue'
import PropertyModal from './modals/PropertyModal.vue'


const activeTab = ref(0)
const propertyModalState = ref(false)
const { appBaseUrl } = useRuntimeConfig().public

const props = defineProps({
  productData: {
    required: true,
    type: [Array , Object]
  }
})

const selected_attribute = ref(null)

onMounted(() => {
  selected_attribute.value = props.productData.attributes[0]
})


</script>
