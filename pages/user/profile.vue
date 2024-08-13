<template>
    <section class="profile">
          <div class="grid lg:grid-cols-12 gap-4">
            <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
              <div
                class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
              >
                <h6
                  class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa"
                >
                  <i
                    class="fa-duotone fa-user-edit text-[20px] !w-5 !h-5 text-hamian ml-2"
                  ></i>
                  شناسنامه
                </h6>
                <p
                  class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                >
                  از این بخش می توانید اطلاعات خود را ویرایش کنید
                </p>
              </div>
  
              <div class="flex flex-col tabs">
                <div class="p-4 tab-content sm:p-5">
                  <div class="space-y-5">
                    <div class="grid lg:grid-cols-2 gap-4">
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>نام و نام خانوادگی</span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              type="text"
                              v-model="userInfo.name"
                              class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                              placeholder="نام و نام خانوادگی "
                            />
                          </div>
                        </div>
                      </div>
  
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>نام کاربری </span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              type="text"
                              v-model="userInfo.username"
                              class="block w-full pl-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm ltr"
                              placeholder="bapu"
                            />
                          </div>
                        </div>
                      </div>
  
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>ایمیل </span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              v-model="userInfo.email"
                              type="email"
                              class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>
  
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>شماره موبایل </span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              type="number"
                              disabled
                              v-model="userInfo.mobile"
                              class="block w-full bg-gray-50 pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                              placeholder="09142766601"
                            />
                          </div>
                        </div>
                      </div>
  
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>کد ملی </span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              type="text"
                              v-model="userInfo.codemelli"
                              class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                              placeholder="کد ملی خود را وارد کنید"
                            />
                          </div>
                        </div>
                      </div>
  
                      <div class="relative mt-4">
                        <label
                          for="last-name"
                          class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        >
                          <span>رمز عبور</span>
                        </label>
                        <div class="mt-1 rounded-md">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <div
                              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                            >
                              <i
                                class="fa-duotone fa-duotone fa-eye text-hamian h-5 w-5 flex leading-[1px] pr-1"
                              ></i>
                            </div>
                            <input
                              type="password"
                              v-model="userInfo.password"
                              class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="relative w-full px-6 border-t">
                <button
                  type="button"
                  v-if="!loading"
                  @click="updateUserInfo()"
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-sm"
                >
                  <span class="w-full">بروز رسانی اطلاعات</span>
                </button>
                <button
                  type="button"
                  v-if="loading"
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-sm"
                >
                  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </button>
              </div>
            </div>
          </div>
        </section>
</template>

<script setup>
import { useParsgiftStore } from '~/store/parsiStore';
import { storeToRefs } from 'pinia';

const { $swal } = useNuxtApp()
const parsiStore = useParsgiftStore()
const {authUser} = storeToRefs(parsiStore)

const userInfo = reactive({
  name: null,
  username: null,
  email: null,
  mobile: null,
  codemelli: null,
  password: null
})

const loading = ref(false)

onMounted(() => {
  userInfo.name = authUser.value.name
  userInfo.username = authUser.value.username
  userInfo.email = authUser.value.email
  userInfo.mobile = authUser.value.mobile
  userInfo.codemelli = authUser.value.codemelli
})

definePageMeta({
      middleware: 'user-auth',
      layout: "user"
})

const updateUserInfo = async () => {
  if(userInfo.name == null || userInfo.name == "") {
    showSwal("خطایی رخ داد !" , "نام و نام خانوادگی الزامیست" , "error")
  } else if (userInfo.mobile == null || userInfo.mobile == "") {
    showSwal("خطایی رخ داد !" , "شماره موبایل الزامیست" , "error")
  }else {
    loading.value = true
    const result = await parsiStore.updateProfileInfo(userInfo)
    if(result.status == 200) {
      loading.value = false
      showSwal("پیغام موفقیت آمیز" , result.message , "success")
    }else {
      loading.value = false
      showSwal("خطایی رخ داد" , result.message , "error")
    }
  }
}


const showSwal = (title , text , icon) => {
    $swal.fire({
        title: title,
        text: text,
        icon: icon
    });
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