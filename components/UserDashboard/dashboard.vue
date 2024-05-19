<template>
  <div class="grid grid-cols-12 gap-4 my-4">
    <div class="col-span-3">
      <div class="box profile border rounded-lg pt-8">
        <div
          class="avatar max-w-14 mx-auto flex justify-center items-center w-full"
        >
          <img
            src="https://dicardo.com/assets/main/def/original-defProfile.png"
          />
        </div>
        <ul class="text-center py-8 space-y-4 text-gray-600 border-b p-4">
          <li class="flex justify-between text-xl font-bold">
            <span>کاربر مهمان</span><span>09142766601</span>
          </li>
          <li class="flex justify-between text-xl font-bold">
            <span>کیف پول</span><span>0</span>
          </li>
        </ul>
        <div
          class="flex item-center p-4 font-semibold cursor-pointer bg-gray-50"
        >
          <i class="fa fa-plus-circle pl-2 text-green-500"></i
          ><span>افزایش موجودی کیف پول</span>
        </div>
      </div>

      <div class="menu border mt-4 rounded-lg">
        <ul class="flex flex-col font-semibold divide-y">
          <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-home pl-2"></i>
              سفارشات من
            </div>

            <i class="fa fa-chevron-left"></i>
          </li>

          <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-user pl-2"></i>
              پروفایل من
            </div>

            <i class="fa fa-chevron-left"></i>
          </li>

          <!-- <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-home pl-2"></i>
              اشتراک ها و لایسنس ها
            </div>

            <i class="fa fa-chevron-left"></i>
          </li> -->

          <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-gear pl-2"></i>
              احراز هویت
            </div>

            <i class="fa fa-chevron-left"></i>
          </li>
          <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-wallet pl-2"></i>
              کیف پول
            </div>

            <i class="fa fa-chevron-left"></i>
          </li>

          <li class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <i class="fa fa-right-from-bracket pl-2"></i>
              خروج
            </div>

            <i class="fa fa-chevron-left"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-9">
      <section class="TAB-1 p-4 border rounded-lg font-iransans ">
        <div class="grid lg:grid-cols-3 gap-4">
          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span>در انتظار بررسی</span>
            <span class="text-4xl font-fa">0</span>
          </div>
          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span>تکمیل شد</span>
            <span class="text-4xl font-fa">0</span>
          </div>

          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span>نیاز به اصلاح اطلاعات</span>
            <span class="text-4xl font-fa">0</span>
          </div>

          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span>عدم احراز هویت</span>
            <span class="text-4xl font-fa">2</span>
          </div>

          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span> در حال پردازش سفارش</span>
            <span class="text-4xl font-fa">2</span>
          </div>

          <div class="flex items-center border p-4 rounded-lg justify-between">
            <span> در انتظار تایید کاربر</span>
            <span class="text-4xl font-fa">2</span>
          </div>
        </div>
        <section>
          <div class="w-full pb-6">
            <div class="overflow-hidden">
              <div class="gap-4 lg:grid lg:grid-cols-12">
                <dataset
                  v-slot="{ ds }"
                  :ds-data="sefareshsList"
                  :ds-sortby="sortBy"
                  :ds-sort-as="{}"
                  :ds-search-in="[
                    'sefareshId',
                    'sefareshName',
                    'sefareshValue',
                  ]"
                  :ds-search-as="{}"
                >
                  <div class="col-span-12 font-fa">
                    <div
                      class="mt-2 mb-6 bg-white border border-gray-200 sefaresh-info rounded-xl"
                    >
                      <div
                        class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
                      >
                        <h6
                          class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
                        >
                          <i
                            class="fa-light fa-grid-2 text-[20px] !w-5 !h-5 text-hamian ml-1"
                          ></i>
                          خرید های من
                        </h6>
                        <p
                          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                        >
                          از این بخش می توانید سفارشات را مدیریت یا حذف نمایید
                        </p>
                      </div>

                      <div class="py-8 border-b px-7 card-header">
                        <div class="grid lg:grid-cols-1">
                          <div class="w-full">
                            <div class="flex rounded-md hover:shadow-sm">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <dataset-search
                                  ds-search-placeholder="شماره سفارش"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grid gap-4 px-6 py-6 bg-stripes-purple xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1"
                      >
                        <div class="relative flex w-full gap-4">
                          <data-action />
                        </div>
                      </div>

                      <div class="flex flex-col">
                        <div class="overflow-hidden">
                          <div class="min-w-full align-middle">
                            <div class="flex flex-col lg:hidden">
                              <div class="overflow-hidden">
                                <div
                                  class="inline-block min-w-full align-middle"
                                >
                                  <div class="relative overflow-hidden">
                                    <div class="w-full table-auto">
                                      <div>
                                        <div
                                          class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                                        >
                                          <div
                                            scope="col"
                                            class="px-6 py-3 font-semibold"
                                          >
                                            سفارشات
                                          </div>
                                        </div>
                                      </div>

                                      <dataset-item
                                        tag="ul"
                                        class="bg-white divide-gray-200 last:border-b"
                                        name="fade"
                                        is="transition-group"
                                      >
                                        <template #default="{ row, rowIndex }">
                                          <li
                                            class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-center justify-between relative"
                                            v-on:click.prevent="
                                              openSubMobileTable(row.id)
                                            "
                                          >
                                            <div
                                              class="flex px-6 py-2 text-right"
                                            >
                                              <div class="flex items-center">
                                                <img
                                                  :src="row.sefareshIcon"
                                                  class="w-10 h-10 rounded-lg mx-auto ml-2"
                                                />

                                                <p
                                                  class="text-sm font-regular text-gray-700 break-words"
                                                >
                                                  {{ row.sefareshName }}
                                                </p>
                                              </div>
                                            </div>

                                            <div class="px-6 py-3" scope="col">
                                              <div
                                                class="flex justify-center cursor-pointer item-center"
                                              >
                                                <div
                                                  class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                                                >
                                                  <i
                                                    :class="{
                                                      'fa-minus':
                                                        mobileSubmenuIndex ==
                                                        row.id,
                                                      'fa-plus':
                                                        mobileSubmenuIndex !=
                                                        row.id,
                                                    }"
                                                    class="w-4 h-4 text-hamian transition-transform transform fa-solid"
                                                    aria-hidden="true"
                                                  ></i>
                                                </div>
                                              </div>
                                            </div>
                                          </li>

                                          <collapse-transition>
                                            <div
                                              v-show="
                                                mobileSubmenuIndex == row.id
                                              "
                                              class="border-transparent border-y border-b-slate-200"
                                            >
                                              <div colspan="100" class="p-0">
                                                <div
                                                  class="border-l border-r rounded-b-lg"
                                                >
                                                  <div class="pb-4">
                                                    <div
                                                      class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                                    >
                                                      <div
                                                        class="w-full text-left is-hoverable"
                                                      >
                                                        <div
                                                          class="border-b border-gray-200 divide-gray-200"
                                                        >
                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              شناسه :
                                                              <span
                                                                class="mr-1 font-medium text-hamian ltr"
                                                              >
                                                                #{{
                                                                  row.sefareshId
                                                                }}
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              تاریخ :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                {{
                                                                  row.sefareshDate
                                                                }}
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              دسته :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                {{
                                                                  row.sefareshCategories
                                                                }}
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              وضعیت :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                <div
                                                                  class="text-[15px] font-semibold"
                                                                >
                                                                  <span
                                                                    class="font-semibold text-green-500"
                                                                    v-if="
                                                                      row.sefareshStatus ==
                                                                      0
                                                                    "
                                                                    >منتشر
                                                                    شده</span
                                                                  >
                                                                  <span
                                                                    class="font-semibold text-red-500"
                                                                    v-if="
                                                                      row.sefareshStatus ==
                                                                      1
                                                                    "
                                                                    >پیش
                                                                    نویس</span
                                                                  >
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              ویژه:
                                                              <span
                                                                class="mr-1 font-medium text-gray-400"
                                                              >
                                                                <div
                                                                  class="flex items-center h-5 mx-auto justify-center"
                                                                >
                                                                  <label
                                                                    class="relative inline-flex items-center cursor-pointer"
                                                                    ><input
                                                                      type="checkbox"
                                                                      value=""
                                                                      class="sr-only peer"
                                                                    />
                                                                    <div
                                                                      class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 peer-checked:after:left-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"
                                                                    ></div>
                                                                    <span
                                                                      class="text-sm font-medium text-gray-900"
                                                                    ></span>
                                                                  </label>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              <span
                                                                class="mr-1"
                                                              >
                                                                <div
                                                                  class="flex justify-center item-center"
                                                                >
                                                                  <div
                                                                    class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                                  >
                                                                    <i
                                                                      class="fa-light fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                                    ></i>
                                                                  </div>
                                                                  <RouterLink
                                                                    to=""
                                                                  >
                                                                    <div
                                                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                                    >
                                                                      <i
                                                                        class="fa-light fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                                      ></i>
                                                                    </div>
                                                                  </RouterLink>

                                                                  <RouterLink
                                                                    to="/view-sefaresh"
                                                                  >
                                                                    <button
                                                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                                    >
                                                                      <i
                                                                        class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"
                                                                      ></i>
                                                                    </button>
                                                                  </RouterLink>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      class="mr-6 text-right"
                                                    >
                                                      <button
                                                        v-on:click.prevent="
                                                          Expanded = false
                                                        "
                                                        class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                                                      >
                                                        بستن
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </collapse-transition>
                                        </template>
                                      </dataset-item>
                                    </div>

                                    <nav
                                      class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                                      aria-label="Table navigation"
                                    >
                                      <dataset-info />
                                      <dataset-pager />
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="relative hidden overflow-x-auto lg:block Desktop-Table"
                            >
                              <table class="w-full">
                                <thead>
                                  <tr
                                    class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x"
                                  >
                                    <th
                                      scope="col"
                                      v-for="(th, index) in cols"
                                      :key="th.field"
                                      :class="th.size"
                                      class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none text-slate-700 opacity-70"
                                    >
                                      <div
                                        class="flex items-center"
                                        :class="th.center"
                                      >
                                        <span class="font-medium">{{
                                          th.name
                                        }}</span>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>

                                <dataset-item
                                  tag="tbody"
                                  class="bg-white divide-gray-200 w-full"
                                  name="fade"
                                  is="transition-group"
                                >
                                  <template #default="{ row, rowIndex }">
                                    <tr
                                      class="border-b border-gray-200 divide-x"
                                    >
                                      <td
                                        class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr text-[15px]"
                                      >
                                        {{ row.sefareshId }}
                                      </td>

                                      <td class="p-2 text-center mx-auto">
                                        {{ row.sefareshIds }}
                                      </td>

                                      <td class="px-3 py-2 text-right">
                                        <div class="text-[15px] font-semibold">
                                          {{ row.sefareshName }}
                                        </div>
                                      </td>

                                      <td class="px-3 py-2 text-center">
                                        <div class="text-[15px] font-semibold">
                                          <span
                                            class="font-semibold text-green-500"
                                            v-if="row.sefareshStatus == 0"
                                            >تکمیل شده</span
                                          >
                                          <span
                                            class="font-semibold text-red-500"
                                            v-if="row.sefareshStatus == 1"
                                            >عدم احراز هویت</span
                                          >
                                        </div>
                                      </td>

                                      <td class="p-2 text-center text-[15px]">
                                        {{ row.sefareshNum }}
                                      </td>

                                      <td
                                        class="p-2 text-center mx-auto text-[15px]"
                                      >
                                        {{ row.sefareshPrice }}
                                      </td>

                                      <td
                                        class="p-2 text-center mx-auto text-[15px]"
                                      >
                                        {{ row.sefareshDate }}
                                      </td>

                                      <td
                                        scope="col"
                                        class="px-3 py-3 text-center border-l"
                                      >
                                        <div
                                          class="flex justify-center item-center gap-4 text-gray-400"
                                        >
                                          <div
                                            class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                          >
                                            <i
                                              class="fa-light fa-trash-can text-[18px] !w-5 !h-5"
                                              :class="row.sefareshDelete"
                                            ></i>
                                          </div>

                                          <RouterLink to="">
                                            <div
                                              class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                            >
                                              <i
                                                class="fa-light fa-edit text-[18px] !w-5 !h-5"
                                                :class="row.sefareshEdit"
                                              ></i>
                                            </div>
                                          </RouterLink>
                                        </div>
                                      </td>
                                    </tr>
                                  </template>
                                </dataset-item>
                              </table>

                              <div
                                class="flex items-center justify-center font-bold text-6xl w-full mt-6 hidden"
                              >
                                <i
                                  class="fa-light fa-empty-set flex-wrap font-semi-bold text-gray-300"
                                ></i>
                                <p
                                  class="text-2xl font-semi-bold text-gray-300"
                                >
                                  هیچ اطلاعاتی وجود ندارد
                                </p>
                              </div>
                              <nav
                                class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                                aria-label="Table navigation"
                              >
                                <dataset-info />
                                <dataset-pager />
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dataset>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="profile ">
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

      <section class="Wallet">
        <div class="grid lg:grid-cols-12 gap-4">
          <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
            <div
              class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
            >
              <h6
                class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa"
              >
                <i
                  class="fa-duotone fa-wallet text-[20px] !w-5 !h-5 text-hamian ml-2"
                ></i>
                کیف پول
              </h6>
              <p
                class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
              >
                برای شارژ کیف پول خود می توانید از این گزینه استفاده کنید
              </p>
            </div>

            <div class="flex flex-col tabs">
              <div class="p-4 tab-content sm:p-5">
                <div class="border rounded-lg grid grid-cols-12">
                  <div
                    class="lg:col-span-6 flex items-center text-blue-500 border-l p-4 text-center justify-center"
                  >
                    <i class="fa fa-wallet text-8xl"></i>
                  </div>

                  <div
                    class="status flex flex-col gap-4 w-full justify-center lg:col-span-6 text-center p-4"
                  >
                    <span
                      class="border-2 bg-green-500 border-green-500 p-3 rounded-lg text-white font-semibold"
                    >
                      <i class="fa fa-plus-circle pl-2"></i>
                      <span>شارژ کیف پول</span>
                    </span>

                    <span
                      class="border-2 bg-green-50 border-green-500 p-3 rounded-lg text-green-500 font-semibold"
                    >
                      <i class="fa fa-check-circle pl-2"></i>
                      <span>گزارشات کیف پول</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>


<!-- مدال شارز کیف پول -->
  <div
    class="fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 hidden"
  >
    <div
      class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
    ></div>
    <div
      class="relative w-full max-w-2xl transform px-4 transition-all opacity-100 scale-100"
    >
      <div class="overflow-hidden rounded-lg bg-white shadow-md">
        <div class="relative">

<div class="header flex items-center justify-between w-full border-b text-green-700 ">
   <button
            type="button"
            class="p-4  flex items-center font-bold"
          >
            <i class="fa fa-plus pl-2"></i><span>شارز کیف پول</span>
          </button>
          <buttun type="button" class="flex items-center justify-center w-6"><i class="fa fa-times-circle pl-4 text-xl"></i></buttun>

</div>
         
    

          <div class="category font-fas font-semibold text-sm mt-8">
            <div class="px-8">
              <input
                type="text"
                class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
                placeholder="   مبلغ  خود را به تومان وارد نمایید"
              />

          

      
            </div>

            <div class="close border-t my-4 px-8">
              <button
                type="button"
                class="bg-green-500 px-8 py-4 rounded-lg text-white mt-4"
              >
                <span>پرداخت</span><i class="fa fa-chevron-left pr-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import sefareshs from "@/assets/sefareshs.json";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DataAction from "@/components/DataTable/DataAction.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
export default {
  components: {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
    DatasetStatus,
    DataAction,
  },

  data() {
    return {
      showModal: false,
      StockModal: false,
      OutStockModal: false,
      mobileSubmenuIndex: null,
      ShowDetailes: false,
      isOpenA: false,
      activeBtn: "",
      Addorder: false,
      Export: false,
      Status: false,
      Count: false,
      Expanded: null,
      Shipping: false,
      Discount: false,
      sefareshsList: sefareshs,
      filteredContainer: [],
      cols: [
        {
          name: "شماره سفارش",
          field: "sefareshId",
          size: "w-28 border-l",
          center: "justify-center",
        },
        {
          name: "شماره فاکتور",
          field: "sefareshImage",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "نام محصول",
          field: "sefareshName",
          size: "w-auto",
          center: "justify-start",
        },
        {
          name: "وضعیت",
          field: "sefareshStatus",
          size: "w-auto",
          center: "justify-center",
        },

        {
          name: "تعداد",
          field: "sefareshLevel",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "قیمت",
          field: "sefareshLevel",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "تاریخ",
          field: "sefareshFeatured",
          size: "w-auto",
          center: "justify-center",
        },

        {
          name: "عملیات",
          field: "sefareshAction",
          size: "w-auto",
          center: "justify-center",
        },
      ],
    };
  },
  methods: {
    openSubMobileTable(stateId) {
      if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
      else this.mobileSubmenuIndex = stateId;
    },

    click(event, i) {
      let toset;
      const sortEl = this.cols[i];

      if (!event.shiftKey) {
        this.cols.forEach((o) => {
          if (o.field !== sortEl.field) {
            o.sort = "";
          }
        });
      }
      if (!sortEl.sort) {
        toset = "asc";
      }
      if (sortEl.sort === "desc") {
        toset = event.shiftKey ? "" : "asc";
      }
      if (sortEl.sort === "asc") {
        toset = "desc";
      }
      sortEl.sort = toset;
    },
  },
  computed: {
    sortBy() {
      return this.cols.reduce((acc, o) => {
        if (o.sort) {
          o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
        }

        return acc;
      }, []);
    },
  },
};
</script>
