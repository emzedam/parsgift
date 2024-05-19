<template>
  <div class="basket my-6">
    <nav class="flex my-6" aria-label="Breadcrumb">
            <ol
              class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
            >
              <li class="inline-flex items-center">
                <a
                  href="#"
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
                </a>
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
                    href="#"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >گیفت کارتها</a
                  >
                </div>
              </li>
            </ol>
          </nav>
    <div class="grid lg:grid-cols-3 gap-x-4">
      <div class="right lg:col-span-2 col-span-3 lg:mb-0 mb-4">
        <ul class="space-y-4">
          <li class="flex">
            <div class="flex-shrink-0 p-4 border rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg"
                alt=""
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
                      href="#"
                      class="font-medium text-gray-700 hover:text-gray-800"
                    >
                           <div class="flex justify-between items-center py-4"><span>نام محصول:</span><strong>گیفت کارت 5 دلاری استیم</strong></div></a
                    >
                  </h4>
                  <p class="ml-4 text-sm font-medium text-gray-900">
                  <div class="flex justify-between items-center py-4"><span>قیمت:</span><strong>534,750 تومان </strong></div>
                  </p>
                </div>
            
              </div>

              <div class="absolute bottom-0 left-0">
            
                  <button
                    type="button"
                    class="text-sm font-medium text-red-600 hover:text-red-500 bg-gray-100 lg:px-4 lg:py-2 p-1 rounded-tr-lg"
                  >
                  <i class="fa fa-trash-can"></i>
                    <span class="pr-2 hidden ">حذف</span>
                  </button>
               
              </div>
            </div>
          </li>
             <li class="flex">
            <div class="flex-shrink-0 p-4 border rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg"
                alt=""
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
                      href="#"
                      class="font-medium text-gray-700 hover:text-gray-800"
                    >
                           <div class="flex justify-between items-center py-4"><span>نام محصول:</span><strong>گیفت کارت 5 دلاری استیم</strong></div></a
                    >
                  </h4>
                  <p class="ml-4 text-sm font-medium text-gray-900">
                  <div class="flex justify-between items-center py-4"><span>قیمت:</span><strong>534,750 تومان </strong></div>
                  </p>
                </div>
            
              </div>

              <div class="absolute bottom-0 left-0">
            
                  <button
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
              <span>تعداد محصولات </span><strong>1</strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span>قیمت</span><strong>534,750 تومان </strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span class="text-red-500"> تخفیف</span><strong>0</strong>
            </li>
            <li class="flex justify-between items-center p-4">
              <span> مبلغ قابل پرداخت</span
              ><strong class="text-red-500">4,266,304تومان</strong>
            </li>
          </ul>
        </div>
        <div>
          <div class="relative mt-1 rounded-lg">
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
        <button type="button" class="flex justify-between items-center bg-green-500 w-full mt-4 p-4 text-white text-2xl font-semibold rounded-lg"><span>پرداخت</span><i class="fa fa-chevron-left"></i></button>
      </div>
    </div>
  </div>
</template>
