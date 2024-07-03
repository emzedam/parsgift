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
                              type="text"
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
                              type="text"
                              class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
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
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-sm"
                >
                  <span
                    class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                  ></span
                  ><span
                    class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                  ></span
                  ><span
                    class="relative z-20 flex items-center justify-center w-full text-center"
                    ><i
                      class="pl-2 text-2xl text-white fa-duotone fa-user-edit"
                    ></i
                    ><span class="w-full">بروز رسانی اطلاعات</span></span
                  >
                </button>
              </div>
            </div>
          </div>
        </section>
</template>

<script setup>
definePageMeta({
      middleware: 'user-auth',
      layout: "user"
})
</script>