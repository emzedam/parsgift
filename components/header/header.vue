<template>
  <section class="w-full bg-gray-100 hidden lg:block border border-t-0">
    <div class="p-3 px-6 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between pars">
          <ul
            v-if="initData.headingCategories.length != 0"
            class="flex items-center"
          >
            <li
              v-for="(category, index) in initData.headingCategories"
              :key="category.id"
              class="block ml-[16px]"
            >
              <nuxt-link :to="`/category/${category.slug}-${category.id}`">
                {{ category.title }}
              </nuxt-link>
            </li>
          </ul>
          <div class="socials pars">
            <ul class="flex items-center gap-4">
              <li>
                <a
                  class="hover:text-cyan-600 duration-300 transition-all"
                  href="https://t.me/"
                  title=""
                >
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li>
                <a
                  class="hover:text-cyan-600 duration-300 transition-all"
                  href="https://www.instagram.com/"
                  title=""
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  class="hover:text-cyan-600 duration-300 transition-all"
                  href="https://www.linkedin.com/in/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full bg-white border border-t-0 hidden lg:block">
    <div class="p-6 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between w-full">
          <div class="socials">
            <ul class="flex items-center gap-4 justify-end">
              <li v-if="authUser == null">
                <nuxt-link
                  class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600"
                  to="/user/login"
                >
                  <i class="fa fa-user ml-2"></i>
                  <span>ورود</span>
                </nuxt-link>
              </li>
              <li v-if="authUser == null">
                <nuxt-link
                  class="flex items-center hover:text-cyan-600"
                  to="/user/register"
                >
                  <i class="fa fa-user-plus ml-2"></i>
                  <span>ثبت نام</span>
                </nuxt-link>
              </li>

              <a
                href="javascript:void(0)"
                @click="isShowDropDown = !isShowDropDown"
                v-if="authUser != null"
                class="relative flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600"
              >
                <i class="fa fa-user ml-2"></i>
                <span>{{ authUser.name }}</span>

                <ul
                  :class="isShowDropDown == true ? '' : 'hidden'"
                  class="absolute text-gray-500 top-[50px] z-[1000] right-0 w-[200px] h-auto rounded-lg shadow-lg bg-white"
                >
                  <li
                    class="w-full px-3 py-3 cursor-pointer hover:bg-gray-50 border-b font-normal"
                  >
                    <nuxt-link to="/user/dashboard">
                      <i class="fa fa-user ml-2 text-hamian"></i> مدیریت حساب
                    </nuxt-link>
                  </li>
                  <li
                    @click="doSignOut()"
                    class="w-full px-3 py-3 cursor-pointer hover:bg-gray-50 font-normal"
                  >
                    <i class="fa fa-sign-out-alt ml-2 text-hamian"></i>خروج از
                    حساب
                  </li>
                </ul>
              </a>
            </ul>
          </div>
          <div class="pars">
            <ul class="flex items-center">
              <li class="block ml-[27px]"><nuxt-link to="/">صفحه اصلی</nuxt-link></li>
              <li class="ml-[27px] hidden">
                <nuxt-link to="/product/product-ordable">پرداخت ارزی آنلاین</nuxt-link>
              </li>
              <li class="block ml-[27px]">
                <nuxt-link to="/news">مجله سورین گیفت</nuxt-link>
              </li>
              <li class="block ml-[27px]">
                <nuxt-link to="/faq">سوالات متداول</nuxt-link>
              </li>
              <li class="block ml-[27px]">
                <nuxt-link to="/contracts">قوانین خرید</nuxt-link>
              </li>
              <li class="block ml-[27px]">
                <nuxt-link to="/contactus">تماس با ما</nuxt-link>
              </li>
              <li class="block ml-[27px]">
                <nuxt-link to="/aboutus"> درباره ما</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-white border border-t-0 rounded-b-lg hidden lg:block"
  >
    <div class="p-3 px-6 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <div class="socials w-full">
            <div class="grid grid-cols-4 items-center gap-4">
              <div
                class="dark-light flex items-center justify-start gap-4 col-span-1"
              >
                <div class="relative">
                  <nuxt-link
                    to="/basket"
                    class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
                    id="messages"
                    ><div class="relative inline-block">
                      <i class="text-2xl fa-light fa-bag-shopping"></i
                      ><span
                        class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs"
                        ><span class="align-self-center">{{
                          basketCount
                        }}</span></span
                      >
                    </div></nuxt-link
                  ><!--v-if-->
                </div>
                <div class="w-full justify-start flex">
                  <nuxt-link
                    to="/category"
                    class="flex items-center border p-3 rounded-lg"
                  >
                    <i class="fa fa-bars ml-2"></i>
                    <span>دسته محصولات</span>
                  </nuxt-link>
                </div>
              </div>

              <div class="col-span-2">
                <form class="w-full" @submit.prevent="doSearchProduct()">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >جستجو</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      v-model="searchValue"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="جستجو در سورین گیفت"
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      جستجو
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/logo.png" class="w-24" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mobile w-full lg:hidden block">
    <div class="flex items-center justify-between px-4 py-3">
      <div class="right">
        <ul class="flex items-center gap-4">
          <li>
            <button
              @click="mobileSideState = true"
              type="button"
              class="flex items-center text-2xl ml-4"
            >
              <i class="fa fa-bars"></i>
            </button>
          </li>
          <li v-if="authUser == null">
            <nuxt-link class="flex items-center" to="/user/login" title="">
              <i class="fa fa-user ml-2"></i>
              <span>ورود</span>
            </nuxt-link>
          </li>
          <li v-if="authUser == null">
            <nuxt-link class="flex items-center" to="/user/register" title="">
              <i class="fa fa-user-plus ml-2"></i>
              <span>ثبت نام</span>
            </nuxt-link>
          </li>

          <a
            href="javascript:void(0)"
            @click="isShowDropDown = !isShowDropDown"
            v-if="authUser != null"
            class="relative flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600"
          >
            <i class="fa fa-user ml-2"></i>
            <span>{{ authUser.name }}</span>

            <ul
              :class="isShowDropDown == true ? '' : 'hidden'"
              class="absolute text-gray-500 top-[50px] z-[1000] right-0 w-[200px] h-auto rounded-lg shadow-lg bg-white"
            >
              <li
                class="w-full px-3 py-3 cursor-pointer hover:bg-gray-50 border-b font-normal"
              >
                <nuxt-link to="/user/dashboard">
                  <i class="fa fa-user ml-2 text-hamian"></i> مدیریت حساب
                </nuxt-link>
              </li>
              <li
                @click="doSignOut()"
                class="w-full px-3 py-3 cursor-pointer hover:bg-gray-50 font-normal"
              >
                <i class="fa fa-sign-out-alt ml-2 text-hamian"></i>خروج از حساب
              </li>
            </ul>
          </a>
        </ul>
      </div>
      <div class="logo">
        <img src="@/assets/images/logo.png" class="w-24" />
      </div>
    </div>

    <div class="flex items-center justify-between px-2 py-4 bg-gray-100 gap-8">
      <div class="search w-full flex flex-start">
        <div class="relative">
          <nuxt-link
            to="/basket"
            class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
            id="messages"
            ><div class="relative inline-block">
              <i class="text-2xl fa-light fa-bag-shopping"></i
              ><span
                class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs"
                ><span class="align-self-center">{{ basketCount }}</span></span
              >
            </div></nuxt-link
          ><!--v-if-->
        </div>

        <form class="w-full mx-auto" @submit.prevent="doSearchProduct()">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >جستجو</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="جستجو در سورین گیفت"
              v-model="searchValue"
            />
            <!-- <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              جستجو
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </section>

  <section class="mobile-side lg:hidden">
    <div
      :class="mobileSideState == false ? 'right-[-1500px]' : 'right-0'"
      class="h-screen w-full fixed transition-all ease-in-out delay-0 duration-500 top-0 z-[999]"
    >
      <div
        @click="mobileSideState = false"
        class="backdrop bg-gray-100/50 w-full h-screen"
      ></div>
      <div @click="mobileSideState = false" class="close absolute left-2 top-4">
        <i class="fa fa-times text-2xl bg-white p-2 rounded-lg"></i>
      </div>
      <div
        class="bg-white opacity-90 absolute z-50 w-64 right-0 top-0 h-screen"
      >
        <div class="logo w-full border-b">
          <img src="assets/images/logo.png" class="max-w-20 mx-auto py-8" />
        </div>
        <ul class="flex flex-col space-y-6 p-4 font-semibold text-gray-700">
          <li @click="mobileSideState = false">
            <nuxt-link to="/" class="block w-full">خانه</nuxt-link>
          </li>
          <li @click="mobileSideState = false">
            <nuxt-link to="/news" class="block w-full">
              مجله سورین گیفت</nuxt-link
            >
          </li>
          <li @click="mobileSideState = false" class="hidden">
            <nuxt-link to="/product/product-ordable" class="block w-full"> پرداخت ارزی آنلاین</nuxt-link>
          </li>
          <li @click="mobileSideState = false">
            <nuxt-link to="/faqs" class="block w-full">سوالات متداول</nuxt-link>
          </li>
          <li @click="mobileSideState = false">
            <nuxt-link to="/contracts" class="block w-full"
              >قوانین خرید
            </nuxt-link>
          </li>
          <li @click="mobileSideState = false">
            <nuxt-link to="/contactus" class="block w-full"
              >تماس با ما</nuxt-link
            >
          </li>
          <li @click="mobileSideState = false">
            <nuxt-link to="/aboutus" class="block w-full">درباره ما</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const { $swal } = useNuxtApp();
const isShowDropDown = ref(false);
const parsiStore = useParsgiftStore();
const { authUser, basketCount } = storeToRefs(parsiStore);
const mobileSideState = ref(false);
const searchValue = ref(null);
const props = defineProps({
  initData: {
    required: true,
    type: [Array, Object],
  },
});

const doSignOut = async () => {
  $swal
    .fire({
      title: "هشدار",
      text: "آیا از خروج حساب کاربری خود مطمعنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9d2c48",
      cancelButtonColor: "#555",
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        const result = await parsiStore.logout_user();
        if (result.status == 200) {
          router.push("/");
          showSwal(
            "پیغام موفقیت آمیز",
            "خروج از حساب با موفقیت انجام شد",
            "success"
          );
        } else {
          showSwal("پیغام خطا", result.message, "error");
        }
      }
    });
};

const showSwal = (title, text, icon) => {
  $swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};

const doSearchProduct = () => {
  if (searchValue.value != null) {
    router.push(`/search?query=${searchValue.value}`);
    searchValue.value = null;
  } else {
    showSwal(
      "خطایی رخ داد",
      "لطفا عنوان محصول مورد نظر خود را وارد کنید",
      "error"
    );
  }
};
</script>
