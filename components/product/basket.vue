<template>
  <div class="basket my-6">
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
                  <a
                    href="javascript:void(0)"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >سبد خرید</a>
                </div>
              </li>
            </ol>
          </nav>
    <div class="grid lg:grid-cols-3 gap-x-4" v-if="basketList.length != 0">
      <div class="right lg:col-span-2 col-span-3 lg:mb-0 mb-4">
        <ul class="space-y-4">
          <li class="flex" v-for="(basket , index) in basketList" :key="index">
            <div class="flex-shrink-0 p-4 border rounded-lg">
              <img
                v-if="basket.attribute_id != 0"
                :src="`${appBaseUrl}/storage/product/properties/${basket.product_attribute.image}`"
                class="h-24 w-24 object-cover object-center sm:h-32 sm:w-32 rounded-lg"
              />
              <img
                v-else
                :src="`${appBaseUrl}/storage/product/${basket.product.index_image}`"
                class="h-24 w-24 object-cover object-center sm:h-32 sm:w-32 rounded-lg"
              />
            </div>

            <div
              class="mr-4 flex flex-1 flex-col sm:mr-6 px-4 border rounded-lg relative overflow-hidden"
            >
              <div>
                <div class="block ">
                  <h4 class="text-sm">
                    <a
                      href="javascript:void(0)"
                      class="font-medium text-gray-700 hover:text-gray-800"
                    >
                      <div class="flex justify-between items-center py-4"><span>نام محصول:</span>
                        <strong>
                          {{ basket.attribute_id != 0 ? basket.product_attribute.title : basket.product.fa_title }}
                        </strong>
                      </div>
                    </a>
                  </h4>
                  <p class="ml-4 text-sm font-medium text-gray-900">
                    <div class="flex justify-between items-center py-1"><span>قیمت:</span>
                      <strong>
                        {{ basket.attribute_id != 0 ? basket.product_attribute.price : basket.product.price }} ریال
                      </strong>
                    </div>
                  </p>
                  <p class="ml-4 text-sm font-medium text-gray-900 py-1" v-if="basket.account != null">
                    <div class="flex justify-between items-center"><span>اکانت:</span>
                      <strong>
                        {{ basket.account.account.name }}
                      </strong>
                    </div>
                  </p>
                </div>
            
              </div>

              <div class="absolute bottom-0 left-0">
            
                  <button
                    @click="removeFromBasket(basket , index)"
                    type="button"
                    class="text-sm font-medium text-red-600 hover:text-red-500 bg-gray-100 lg:px-4 lg:py-2 p-1 rounded-tr-lg"
                  >
                  <i class="fa fa-trash-can"></i>
                    <span class="pr-2 hidden ">حذف</span>
                  </button>
               
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="left lg:col-span-1 col-span-3">
        <div class="mb-4 border rounded-lg">
          <ul class="divide-y">
            <li class="flex justify-between items-center p-4">
              <span>تعداد محصولات </span><strong>{{ basketList.length }}</strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span>قیمت</span><strong>{{ totalPrice.toLocaleString('en') }} ریال</strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span>قیمت</span><strong>{{ totalPrice.toLocaleString('en') }} ریال</strong>
            </li>
            <li class="flex justify-between items-center p-4 hidden">
              <span class="text-red-500"> تخفیف</span><strong>0</strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span> مبلغ قابل پرداخت</span
              ><strong class="text-red-500">{{ totalPrice.toLocaleString('en') }} ریال</strong>
            </li>
          </ul>
        </div>
        <div>
          <div class="relative mt-1 rounded-lg hidden">
            <div
              class="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3 bg-green-500 rounded-l text-white"
            >
              <span class="text-white sm:text-sm px-4 flex items-center"
                ><strong>اعمال</strong> <i class="fa fa-chevron-left pr-2"></i
              ></span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              class="block w-full rounded-lg border-green-300 py-4 focus:border-green-500 focus:ring-green-500 sm:text-sm bg-green-50"
              placeholder="کد تخفیف را وارد کنید"
              aria-describedby="price-currency"
            />
          </div>
        </div>
        <button v-if="loading == false" @click="connectToBank()" type="button" class="flex justify-between items-center bg-green-500 w-full mt-4 p-4 text-white text-2xl font-semibold rounded-lg"><span>پرداخت</span><i class="fa fa-chevron-left"></i></button>
        <button v-if="loading == true" type="button" class="flex justify-center items-center bg-green-500 w-full mt-4 p-4 text-white text-2xl font-semibold rounded-lg">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </button>
      </div>
    </div>
    <div v-else class="w-full bg-gray-50 border border-1 border-gray-100 rounded-lg p-20 text-center">
      سبد خرید شما خالی میباشد
    </div>
  </div>
</template>

<script setup>
  import { useParsgiftStore } from '~/store/parsiStore';

  const { $swal } = useNuxtApp()
  const parsiStore = useParsgiftStore()
  const {appBaseUrl} = useRuntimeConfig().public
  const props = defineProps({
    basketList: {
      required: true,
      type: [Object , Array]
    },
    totalPrice: {
      required: true,
      type: Number
    }
  })
  const loading = ref(false)

  const emit = defineEmits(["spliceBasket" , "removeBasket"])

  const removeFromBasket = async (basket , index) => {
    $swal.fire({
        title: "هشدار",
        text: "آیا از حدف این محصول از سبد خرید مطمعنید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9d2c48",
        cancelButtonColor: "#555",
        cancelButtonText: "خیر",
        confirmButtonText: "بله",
    }).then(async (result) => {
        if (result.isConfirmed) {

          const result = await parsiStore.removeProductFromBasket({
            product_id: basket.product_id,
            attribute_id: basket.attribute_id 
          })
        
          if(result != false && result.status == 200) {
            parsiStore.$patch({
              basketCount: result.basket_count
            })
          }

          emit("spliceBasket" , index)
        }
    });
  }

  const connectToBank = async () => {
    loading.value = true
    const data = {
      totalPrice: props.totalPrice,
      basketList: []
    }
    
    props.basketList.forEach((val , index) => {
      data.basketList.push({
        product_id:   val.product_id,
        attribute_id: val.attribute_id,
        account_id:   val.account_id,
        price:        val.attribute_id != 0 ? val.product_attribute.price : val.product.price
      })
    })

    const result = await parsiStore.save_order(data)
    if(result.status == 200) {
      loading.value = false
      window.location.href=`${result.location}${result.authority}`
    }else {
      loading.value = false
      alert("خطا در اتصال به بانک ...")
    }
  }
</script>

<style scoped>
  .lds-ring {
    /* change color here */
    color: #1c4c5b
  }
  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
  }
  .lds-ring div {
    box-sizing: border-box;
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border: 3px solid currentColor;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>