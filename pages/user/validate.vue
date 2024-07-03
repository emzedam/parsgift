<template>
    <section class="ehraz hoviat ">
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
                  احراز هویت
                </h6>
                <p
                  class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                >
                  جهت احراز هویت لطفا تصویر کارت ملی را آپلود کنید
                </p>
              </div>
  
              <div class="flex flex-col tabs">
                <div class="p-4 tab-content sm:p-5">
                  <div
                    class="space-y-5 border p-4 rounded-lg flex justify-between items-center"
                  >
                    <div class="relative lg:w-full justify-start flex">
                      <div
                        class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="space-y-1 text-center">
                          <div
                            class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                          ></div>
                          <div class="flex text-sm text-gray-600">
                            <label
                              for="page-file-upload"
                              class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                              ><span>تصویر کارت ملی</span
                              ><input
                                id="page-file-upload"
                                type="file"
                                class="sr-only" /></label
                            ><!---->
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="status flex w-full justify-end">
                      <span
                        class="border-2 bg-red-50 border-red-500 p-3 rounded-lg text-red-500 font-semibold"
                      >
                        <i class="fa fa-question-circle pl-2"></i>
                        <span>در انتظار بررسی</span>
                      </span>
  
                      <!-- <span
                        class="border-2 bg-green-50 border-green-500 p-3 rounded-lg text-green-500 font-semibold"
                      >
                        <i class="fa fa-check-circle pl-2"></i>
                        <span>تایید شده</span>
                      </span> -->
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="relative w-full px-6 border-t">
                <button
                  type="button"
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-[150px]"
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
                      class="pl-2 text-2xl text-white fa-duotone fa-check-circle"
                    ></i
                    ><span class="w-full">ارسال</span></span
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