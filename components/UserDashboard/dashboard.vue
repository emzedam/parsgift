<template>
      <section class="TAB-1 p-4 border rounded-lg font-iransans ">
        <div class="grid lg:grid-cols-3 gap-4 hidden">
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
                  :ds-data="ordersList"
                  :ds-sort-as="{}"
                  :ds-search-in="[
                    'order_id',
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
                                                <p
                                                  class="text-sm font-regular text-gray-700 break-words"
                                                >
                                                  {{ row.order_id }}
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
                                                                  row.order_id
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
                                                              تاریخ و ساعت :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                {{
                                                                  row.created_at
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
                                                              هزینه سفارش :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                {{
                                                                  row.price
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
                                                                      row.order_status ==
                                                                      1
                                                                    "
                                                                    > پرداخت شده </span
                                                                  >
                                                                  <span
                                                                    class="font-semibold text-orange-500"
                                                                    v-if="
                                                                      row.order_status ==
                                                                      0
                                                                    "
                                                                    >در انتظار پرداخت</span
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
                                                              محصولات :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                <a class="text-blue-500" href="javascript:void(0)">مشاهده</a>
                                                              </span>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="flex px-6 py-3 text-right border-b"
                                                          >
                                                            <div
                                                              class="flex items-center text-base font-semibold"
                                                            >
                                                              تعداد :
                                                              <span
                                                                class="mr-1 font-medium"
                                                              >
                                                                {{
                                                                  row.products.length
                                                                }}
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
                                        {{ row.order_id }}
                                      </td>

                                      <td
                                        class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr text-[15px]"
                                      >
                                        <a href="javascript:void(0)" class="text-center text-blue-500">مشاهده</a>
                                      </td>

                                      <td class="p-2 text-center text-[15px]">
                                        {{ row.products.length }}
                                      </td>

                                      <td
                                        class="p-2 text-center mx-auto text-[15px]"
                                      >
                                        {{ row.price }} ریال 
                                      </td>

                                      <td
                                        class="p-2 text-center mx-auto text-[15px]"
                                      >
                                        {{ row.created_at }}
                                      </td>

                                      <td class="px-3 py-2 text-center">
                                        <div class="text-[15px] font-semibold">
                                          <span
                                            class="font-semibold text-green-500"
                                            v-if="row.order_status == 1"
                                            >تکمیل شده</span
                                          >
                                          <span
                                            class="font-semibold text-orange-500"
                                            v-if="row.order_status == 0"
                                            >در انتظار پرداخت</span
                                          >
                                        </div>
                                      </td>

                                      <td
                                        scope="col"
                                        class="px-3 py-3 text-center border-l"
                                      >
                                        <div
                                          class="flex justify-center item-center gap-4 text-gray-400"
                                        >
                                          <RouterLink to="">
                                            <div
                                              class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                            >
                                              <i
                                                class="fa-light fa-edit text-[18px] !w-5 !h-5"
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
</template>
<script>
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
  props: {
    ordersList: {
      required: true,
      type: [Array , Object]
    }
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
      filteredContainer: [],
      cols: [
        {
          name: "شماره سفارش",
          field: "sefareshId",
          size: "w-28 border-l",
          center: "justify-center",
        },
        {
          name: " محصولات",
          field: "sefareshId",
          size: "w-28 border-l",
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
          name: "تاریخ و ساعت",
          field: "sefareshFeatured",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "وضعیت",
          field: "sefareshStatus",
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
  }
};
</script>
