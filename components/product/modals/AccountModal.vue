<template>
    <!-- انتخاب اکانت مدال -->
  <div
  class="hidden fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 "
>
  <div
    class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
  ></div>
  <div
    class="relative w-full max-w-2xl transform px-4 transition-all opacity-100 scale-100"
  >
    <div class="overflow-hidden rounded-lg bg-white shadow-md">
      <div class="relative">
        <div class="category p-8">
          <ul class="flex items-center gap-x-4">
            <li class="py-3 rounded-lg mt-4 font-semibold font-fas">
              شما در حال حاضر اکانت ندارید. برای ساخت بر روی افزودن اکانت جدید
              کلیک کنید.
            </li>
          </ul>
        </div>

        <button
          type="button"
          class="p-4 w-full bg-green-50 flex items-center text-green-700 font-bold"
        >
          <i class="fa fa-plus pl-2"></i><span>افزودن اکانت جدید</span>
        </button>

        <div class="py-6 relative px-8">
          <label
            for="country"
            class="block pb-2 pr-1 text-sm font-medium text-gray-700"
          >
            انتخاب اکانت</label
          ><button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="py-4 mt-1 text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center w-full justify-between"
            type="button"
          >
            انتخاب حساب
            <i
              class="fa-duotone -duotone fa-angle-down text-[15px] ml-1 w-4 h-4"
            ></i>
          </button>
          <div
            class="hidden z-10 w-full mt-2 bg-white border rounded-lg absolute right-0 top-24"
          >
            <ul
              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
              aria-labelledby="dropdownSearchButton"
            >
              <li>
                <div
                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                >
                  <input
                    id="checkbox-item-11"
                    type="hidden"
                    value=""
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg"
                  /><label
                    for="checkbox-item-11"
                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                    ><span class="flex items-center w-full pr-2 text-right"
                      >فیسبوک</span
                    ><i
                      class="flex items-center pl-2 text-left text-red-500 fa-solid fa-check"
                    ></i
                  ></label>
                </div>
              </li>
              <li>
                <div
                  class="flex items-center w-full my-1 bg-red-500 border rounded hover:bg-gray-100"
                >
                  <input
                    id="checkbox-item-11"
                    type="hidden"
                    value=""
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg"
                  /><label
                    for="checkbox-item-11"
                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-white transition-colors rounded hover:text-gray-600"
                    ><span class="flex items-center w-full pr-2 text-right">
                      اکتیویژن</span
                    ><i
                      class="flex items-center pl-2 text-left fa-solid fa-check"
                    ></i
                  ></label>
                </div>
              </li>
              <li>
                <div
                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                >
                  <input
                    id="checkbox-item-11"
                    type="hidden"
                    value=""
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg"
                  /><label
                    for="checkbox-item-11"
                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                    ><span class="flex items-center w-full pr-2 text-right">
                      جی میل</span
                    ><i
                      class="flex items-center pl-2 text-left text-red-500 fa-solid fa-check"
                    ></i
                  ></label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="category font-fas font-semibold text-sm">
          <div class="px-8">
            <input
              type="text"
              class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
              placeholder="ایمیل یا شماره موبایل خود را وارد نمایید"
            />

            <input
              type="text"
              class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
              placeholder="رمز خود را وارد نمایید"
            />

            <input
              type="text"
              class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
              placeholder="نام اکانت خود را وارد نمایید"
            />

            <button
              type="button"
              class="bg-green-500 px-4 py-2 rounded-lg text-white mt-4"
            >
              <span>ثبت اکانت</span><i class="fa fa-chevron-left pr-4"></i>
            </button>
          </div>

          <div class="close border-t my-4 px-8">
            <button
              type="button"
              class="bg-blue-500 px-4 py-2 rounded-lg text-white mt-4"
            >
              <span>تایید و بستن</span><i class="fa fa-chevron-left pr-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- انتخاب اکانت مدال -->
</template>

<script setup>

</script>