<template>
  <section>
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
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="lg:col-span-1 border p-4 rounded-lg overflow-hidden relative">
        <img
          src="https://dicardo.com/Uploads/shopproducts/29/original-1f211c92-655a-43e9-92ef-3a5c809db82b.webp"
        />
      </div>
      <div class="lg:col-span-2 border p-4 rounded-lg font-iransans py-8">
        <div class="header">
          <h1 class="text-3xl font-extrabold w-full">
            خرید اکانت نتفلیکس Netflix
          </h1>
        </div>

        <div class="pop-up my-8 lg:flex gap-4 w-full">
          <button
            type="button"
            class="border p-4 rounded-lg flex items-center lg:w-2/4 w-full justify-between"
          >
            <span class="font-semibold">
              Chat GPT 4 پلاس اشتراکی (3کاربره)</span
            >
            <i class="fa fa-chevron-down pr-2"></i>
          </button>

          <button
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
          <div class="flex items-center">
            <i class="fa fa-check-circle pl-2 text-green-500"></i>
            <span>حساب های مجاز :</span><span> ChatGPT</span>
          </div>

          <div class="flex items-center">
            <i class="fa fa-phone pl-2 text-green-500"></i>
            <span>پشتیبانی : ۰۲۱۰۰۰۳۳</span>
          </div>
        </div>

        <div class="flex items-center justify-between my-16 gap-4">
          <div class="flex items-center bg-gray-100 p-4 rounded-lg">
            <span>جمع کل مبلغ : </span>
            <span>470000 <small>تومان</small></span>
            <span class="bg-red-50 px-2 text-red-500 mr-2 rounded-lg">
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

        <div class="relative overflow-hidden">
          <div
            class="bg-red-500 flex items-center w-full max-w-xs text-white p-4 rounded-t-lg"
          >
            <i class="fa-solid fa-lightbulb-exclamation pl-2"></i>
            توجه
          </div>
          <ul class="flex flex-col space-y-4 bg-gray-100 p-4 rounded-b-lg">
            <li class="flex items-center">
              <i class="fa fa-circle-check pl-2 text-green-700"></i
              ><span>مدت زمان سرویس 30 روز می باشد .</span>
            </li>
            <li class="flex items-top">
              <i class="fa fa-circle-check pl-2 text-green-700"></i
              ><span
                >این اکانت به طور اشتراکی بین 3 کاربر استفاده میشود ، به دلیل
                محدودیت های ChatGPT4 لطفا مصرف منصافه را در نظر بگیرید</span
              >
            </li>
            <li class="flex items-top">
              <i class="fa fa-circle-check pl-2 text-green-700"></i
              ><span>
                اطلاعات اکانت بعد از تکمیل سفارش در قسمت پروفایل شما در سایت و
                در قسمت لایسنسها قابل مشاهده است .</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <ul class="Tabs bg-gray-100 my-4 rounded-md flex gap-4 font-iransans">
      <li class="bg-gray-200 p-4 cursor-pointer">توضیحات</li>
      <li class="p-4 cursor-pointer">سوالات متداول</li>
      <li class="p-4 cursor-pointer">نظرات کاربران</li>
    </ul>
    <div
      class="content bg-white border text-justify p-4 rounded-lg font-iransans"
    >
      هوش مصنوعی چت جی پی تی یک مدل زبانی بزرگ است که توسط OpenAI آموزش دیده است
      و به تازگی کل جهان را تحت تاثیر خود قرار داده است.
    </div>
  </section>

  <section class="w-full my-16 relative">
    <div class="product__header">
      <div class="product__header-logo">
        <i class="fa fa-images text-xl text-red-500"></i>
      </div>
      <h2 class="product__header-title !text-sm">تصاویر</h2>
    </div>

    <swiper
      class="relative w-full"
      :modules="modules"
      :slides-per-view="3"
      :space-between="6"
      :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
    >
      <swiper-slide class="rounded-lg h-[150px]">
        <article class="rounded-lg group">
          <figure class="rounded-lg relative overflow-hidden">
            <img
              class="rounded-t-lg h-[150px] w-full object-cover border"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <button
            type="button"
            class="absolute inset-0 text-2xl text-white bg-black/20 rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <i class="fa-duotone fa-magnifying-glass-plus"></i>
          </button>
        </article>
      </swiper-slide>
    </swiper>
  </section>

  <section class="w-full my-16 relative">
    <div class="product__header">
      <div class="product__header-logo">
        <i class="fa fa-gift text-xl text-red-500"></i>
      </div>
      <h2 class="product__header-title !text-sm">محصولات مرتبط</h2>
    </div>

    <swiper
      class="relative w-full"
      :modules="modules"
      :slides-per-view="3"
      :space-between="6"
      :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
    >
      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>

      <swiper-slide class="rounded-lg h-full border">
        <article class="rounded-lg h-full">
          <figure class="rounded-lg h-full">
            <img
              class="rounded-t-lg h-full"
              src="@/assets/images/play.webp"
              alt="خرید گیفت کارت آیتونز"
            />
          </figure>
          <header class="p-3 text-gray-700 text-center w-full">
            <h2
              class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500"
            >
              آیتونز
            </h2>
            <span class="text-lg font-semibold mb-8 w-full">iTunes</span>
          </header>
        </article>
      </swiper-slide>
    </swiper>
  </section>

  <!-- انتخاب ویزگی مدال -->
  <div
    class="fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 hidden"
  >
    <div
      class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
    ></div>
    <div
      class="relative w-full max-w-7xl transform px-4 transition-all opacity-100 scale-100"
    >
      <div class="overflow-hidden rounded-lg bg-white shadow-md">
        <div class="relative p-8">
          <div class="category">
            <span class="text-2xl font-iransans"> دسته بازی</span>

            <ul class="flex items-center gap-x-4">
              <li
                class="bg-blue-500 px-4 py-3 rounded-lg mt-4 text-white font-semibold"
              >
                Premium
              </li>
              <li
                class="bg-blue-500 px-4 py-3 rounded-lg mt-4 text-white font-semibold"
              >
                Premium 2
              </li>
            </ul>
          </div>

          <div class="category mt-8">
            <span class="text-2xl font-iransans">انتخاب نوع محصول:</span>

            <ul class="grid lg:grid-cols-2 gap-4">
              <li
                class="bg-gray-100 rounded-lg mt-4 text-black font-semibold justify-between flex overflow-hidden relative"
              >
                <span class="px-4 py-3">Chat GPT 4 پلاس اشتراکی (3کاربره)</span
                ><span class="bg-blue-500 h-full px-4 py-3 text-white"
                  >100000 <small>تومان</small></span
                >
              </li>

              <li
                class="bg-gray-100 rounded-lg mt-4 text-black font-semibold justify-between flex overflow-hidden relative"
              >
                <span class="px-4 py-3">Chat GPT 4 پلاس اشتراکی (3کاربره)</span
                ><span class="bg-blue-500 h-full px-4 py-3 text-white"
                  >100000 <small>تومان</small></span
                >
              </li>

              <li
                class="bg-gray-100 rounded-lg mt-4 text-black font-semibold justify-between flex overflow-hidden relative"
              >
                <span class="px-4 py-3">Chat GPT 4 پلاس اشتراکی (3کاربره)</span
                ><span class="bg-blue-500 h-full px-4 py-3 text-white"
                  >100000 <small>تومان</small></span
                >
              </li>

              <li
                class="bg-gray-100 rounded-lg mt-4 text-black font-semibold justify-between flex overflow-hidden relative"
              >
                <span class="px-4 py-3">Chat GPT 4 پلاس اشتراکی (3کاربره)</span
                ><span class="bg-blue-500 h-full px-4 py-3 text-white"
                  >100000 <small>تومان</small></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- انتخاب ویزگی مدال -->

  <!-- انتخاب اکانت مدال -->
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

<script>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
};
</script>
