<template>
  <section class="w-full bg-gray-100 hidden lg:block border border-t-0">
    <div class="p-3 px-6 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between pars">
          <ul class="flex items-center">
            <li class="block ml-[16px]">
              <a href="/giftall">خرید گیفت کارت</a>
            </li>
            <li class="block ml-[16px]">
              <a href="/product/call-of-duty-mobile">
                خرید سی پی کالاف دیوتی موبایل</a
              >
            </li>
            <li class="block ml-[16px]">
              <a href="/product/garena_free_fire">خرید جم فری فایر</a>
            </li>
            <li class="block ml-[16px]">
              <a href="/product-category/PlayStation-Account"
                >خرید اکانت قانونی پلی استیشن</a
              >
            </li>
            <li class="block ml-[16px]">
              <a href="/product-category/Premium-Account">خرید اکانت پرمیوم</a>
            </li>
            <li class="block ml-[16px]">
              <a href="/product/telegram-premium">خرید اکانت تلگرام پرمیوم</a>
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
              <li>
                <a
                  class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600"
                  href=""
                  title=""
                >
                  <i class="fa fa-user ml-2"></i>
                  <span>ورود</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center hover:text-cyan-600"
                  href=""
                  title=""
                >
                  <i class="fa fa-user-plus ml-2"></i>
                  <span>ثبت نام</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="pars">
            <ul class="flex items-center">
              <li class="block ml-[27px]"><a href="">صفحه اصلی</a></li>
              <li class="block ml-[27px]">
                <a href="googleplay">خرید از گوگل پلی</a>
              </li>
              <li class="block ml-[27px]">
                <a href="product/product-ordable">پرداخت ارزی آنلاین</a>
              </li>
              <li class="block ml-[27px]">
                <a href="blog/">مجله پارسی گیفت</a>
              </li>
              <li class="block ml-[27px]"><a href="faq">سوالات متداول</a></li>
              <li class="block ml-[27px]"><a href="rulse">قوانین</a></li>
              <li class="block ml-[27px]"><a href="contact">تماس با ما</a></li>
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
                  <a
                    href="javascript:;"
                    class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
                    id="messages"
                    ><div class="relative inline-block">
                      <i class="text-2xl fa-light fa-bag-shopping"></i
                      ><span
                        class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs"
                        ><span class="align-self-center">3</span></span
                      >
                    </div></a
                  ><!--v-if-->
                </div>
                <div class="w-full justify-start flex">
                  <button
                    type="button"
                    class="flex items-center border p-3 rounded-lg"
                  >
                    <i class="fa fa-bars ml-2"></i>
                    <span>دسته محصولات</span>
                    <i class="fa fa-chevron-down mr-2"></i>
                  </button>
                </div>
              </div>

              <div class="col-span-2">
                <form class="w-full">
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
                      class="block w-full p-4 ps-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="جستجو در پارسی گیفت"
                      required
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
            <img src="@/assets/images/logo.svg" class="w-24" />
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
            <button type="button" class="flex items-center text-2xl ml-4">
              <i class="fa fa-bars"></i>
            </button>
          </li>
          <li>
            <a class="flex items-center" href="https://t.me/" title="">
              <i class="fa fa-user ml-2"></i>
              <span>ورود</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center"
              href="https://www.instagram.com/"
              title=""
            >
              <i class="fa fa-user-plus ml-2"></i>
              <span>ثبت نام</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="logo">
        <img src="@/assets/images/logo.svg" class="w-24" />
      </div>
    </div>

    <div class="flex items-center justify-between px-4 py-4 bg-gray-100 gap-8">
      <div class="dark-light flex items-center justify-center">
        <button type="button"><i class="fa fa-moon text-2xl"></i></button>
      </div>

      <div class="search w-full">
        <form class="w-full mx-auto">
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
              placeholder="جستجو در پارسی گیفت"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              جستجو
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <section class="mobile-side hidden">
    <div class="h-screen w-full fixed right-0 top-0 z-[999]">
      <div class="backdrop bg-gray-100/50 w-full h-screen"></div>
      <div class="close absolute left-2 top-4">
        <i class="fa fa-times text-2xl bg-white p-2 rounded-lg"></i>
      </div>
      <div
        class="bg-white opacity-90 absolute z-50 w-64 right-0 top-0 h-screen"
      >
        <div class="logo w-full border-b">
          <img src="assets/images/logo.svg" class="max-w-20 mx-auto py-8" />
        </div>
        <ul class="flex flex-col space-y-6 p-4 font-semibold text-gray-700">
          <li>خانه</li>
          <li>خدمات پارسی گیفت</li>
          <li>خرید از گوگل پلی</li>
          <li>پرداخت ارزی آنلاین</li>
          <li>سوالات متداول</li>
          <li>قوانین</li>
          <li>تماس با ما</li>
        </ul>
      </div>
    </div>
  </section>
</template>
