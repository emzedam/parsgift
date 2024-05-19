<template>
    <main>
    
    
        <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2 font-iransans">
            <!-- PARSIGIFT SLIDER -->
            <div class="sliders-banners lg:grid lg:grid-cols-12 lg:mt-8 mt-4 lg:gap-4">
                <section class="right col-span-3 hidden lg:block">
                    <img class="rounded-lg h-full" src="@/assets/images/chap.webp">
                </section>
    
                <section class="slider lg:col-span-6  w-full">
    
                    <swiper class="rounded-lg p-0 m-0 bottom-0 block h-full" :modules="modules" :slides-per-view="1" navigation @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide class="rounded-lg h-full">
    
                            <article class="rounded-lg h-full">
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-lg h-full" src="@/assets/images/1.webp" alt="تحویل سریع با پشتیبانی آنلاین">
                                </figure>
                                <header class="absolute bottom-2 lg:bottom-[50px] left-0 right-0 flex items-center z-2 text-white flex-col">
                                    <h2 class="text-[26px] font-semibold mb-4">خرید اکانت قانونی پلی استیشن</h2>
                                    <span class="text-[14px] font-semibold mb-8">تحویل سریع با پشتیبانی آنلاین</span>
                                </header>
    
                            </article class="rounded-lg">
                        </swiper-slide>
                        <swiper-slide class="rounded-lg">
                            <article class="rounded-lg h-full">
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-lg h-full" src="@/assets/images/2.webp" alt="تحویل سریع با پشتیبانی آنلاین">
                                </figure>
                                <header class="absolute  bottom-2 lg:bottom-[50px] left-0 right-0 flex items-center z-2 text-white flex-col">
                                    <h2 class="text-[26px] font-semibold mb-4">خرید اکانت قانونی پلی استیشن</h2>
                                    <span class="text-[14px] font-semibold mb-8">تحویل سریع با پشتیبانی آنلاین</span>
                                </header>
    
                            </article>
                        </swiper-slide>
                        <swiper-slide class="rounded-lg">
                            <article class="rounded-lg h-full">
                                <figure class="rounded-lg h-full">
                                    <img class="rounded-lg h-full" src="@/assets/images/3.webp" alt="تحویل سریع با پشتیبانی آنلاین">
                                </figure>
                                <header class="absolute  bottom-2 lg:bottom-[50px] left-0 right-0 flex items-center z-2 text-white flex-col">
                                    <h2 class="text-[26px] font-semibold mb-4">خرید اکانت قانونی پلی استیشن</h2>
                                    <span class="text-[14px] font-semibold mb-8">تحویل سریع با پشتیبانی آنلاین</span>
                                </header>
    
                            </article>
                        </swiper-slide>
                    </swiper>
                </section>
    
                <section class="left col-span-3 hidden lg:block">
                    <img class="rounded-lg h-full" src="@/assets/images/rast.webp">
                </section>
            </div>
            <!-- PARSIGIFT SLIDER -->
    
    
    
            <!-- PARSIGIFT SERVICES -->
    
            <section class="w-full mt-6 relative   flex gap-2 items-center">
    
                <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full  items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold hidden lg:flex">
                    خدمات پارسی گیفت
                </div>
    
                <div class="slider overflow-hidden">
                    <swiper class="relative  w-full" :modules="modules" :slides-per-view="2" :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
                        <swiper-slide class="bg-blue-50 text-blue-500 rounded-full flex items-center justify-center px-4 py-6  whitespace-nowrap text-center font-semibold">
                            <i class="fa-regular fa-bag-shopping ml-2"></i>
                            <span>خرید گیفت کارت</span>
                        </swiper-slide>
    
    
    
    
                    </swiper>
                </div>
    
            </section>
            <!-- PARSIGIFT SLIDER -->
    
            <section class="w-full mt-6 relative grid grid-rows-1 grid-cols-12 gap-4">
                <div class="lg:col-span-4 col-span-6">
                    <img src="https://dicardo.com/Uploads/banerindex/1/original-chatgpt_web.webp">
                </div>
    
                <div class="lg:col-span-4 col-span-6">
                    <img src="https://dicardo.com/Uploads/banerindex/12/original-telegram_web_2.webp">
    
                </div>
    
                <div class="col-span-4 hidden lg:block">
                    <img src="https://dicardo.com/Uploads/banerindex/1/original-chatgpt_web.webp">
                </div>
    
    
    
            </section>
    
    
    
    
            <section class="w-full my-16 relative">
                <div class="product__header">
                    <div class="product__header-logo">
                        <i class="fa fa-gift text-xl text-red-500"></i>
    
                    </div>
                    <h2 class="product__header-title !text-sm">
                        گیفت کارت
                    </h2>
    
    
                    <a href="" title=" خریدبازیهای-موبایلی" class="product__header-more !font-semibold">
                            مشاهده آرشیو
                            <i class="fa fa-chevron-left"></i>
                        </a>
                </div>
    
                <swiper class="relative  w-full" :modules="modules" :slides-per-view="3" :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
                </swiper>
    
    
    
    
    
            </section>
    
        </div>
    
        <section class="w-full my-16 relative bg-yellow-500 p-6">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
    
    
                <swiper class="relative  w-full" :modules="modules" :slides-per-view="2" :space-between="20" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                    <swiper-slide class="rounded-lg h-full border bg-white">
    
                        <article class="rounded-lg h-full overflow-hidden relative">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                                <span class="block bg-red-500 my-2 rounded-full text-white text-xs py-1">20  درصد تخفیف</span>
                                <span class="text-lg font-semibold mb-8  w-full block">3000 <small class="text-xs">تومان</small></span>
                                <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-0 left-0">خرید</button>
    
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border bg-white">
    
                        <article class="rounded-lg h-full overflow-hidden relative">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                                <span class="block bg-red-500 my-2 rounded-full text-white text-xs py-1">20  درصد تخفیف</span>
                                <span class="text-lg font-semibold mb-8  w-full block">3000 <small class="text-xs">تومان</small></span>
                                <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-0 left-0">خرید</button>
    
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border bg-white">
    
                        <article class="rounded-lg h-full overflow-hidden relative">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                                <span class="block bg-red-500 my-2 rounded-full text-white text-xs py-1">20  درصد تخفیف</span>
                                <span class="text-lg font-semibold mb-8  w-full block">3000 <small class="text-xs">تومان</small></span>
                                <button type="button" class="bg-cyan-500 w-full text-white rounded-t-lg py-1.5 absolute bottom-0 left-0">خرید</button>
    
                            </header>
    
                        </article>
                    </swiper-slide>
    
                </swiper>
            </div>
        </section>
    
    
    
    
    
        <section class="w-full my-16 relative">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
                <div class="product__header">
                    <div class="product__header-logo">
                        <i class="fa fa-gift text-xl text-red-500"></i>
    
                    </div>
                    <h2 class="product__header-title !text-sm">
                        گیفت کارت
                    </h2>
    
    
                    <a href="" title=" خریدبازیهای-موبایلی" class="product__header-more !font-semibold">
                            مشاهده آرشیو
                            <i class="fa fa-chevron-left"></i>
                        </a>
                </div>
    
                <swiper class="relative  w-full" :modules="modules" :slides-per-view="3" :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 6, }, }">
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/play.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700 text-center w-full">
                                <h2 class="text-lg font-semibold mb-2 w-full border-b pb-2 border-red-500">آیتونز</h2>
                                <span class="text-lg font-semibold mb-8  w-full">iTunes</span>
                            </header>
    
                        </article>
                    </swiper-slide>
                </swiper>
    
            </div>
    
    
    
        </section>
    
    
        <section class="w-full my-16 relative  p-8 bg-indigo-500">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
                <h2 class="text-white text-2xl py-6 font-semibold">دسترسی سریع به خدمات پارسی گیفت</h2>
                <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-6 font-iransans">
               <div class="bg-white p-6 flex items-center justify-center w-full  col-span-1 rounded-lg">
<span class="text-2xl font-semibold">اکانت پرمیوم
</span>
<i class=""></i>
               </div>
               <div class="bg-white p-6 flex items-center justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold"> پرداخت بین المللی
</span>
<i class=""></i>
               </div>

               <div class="bg-white p-6 flex items-center justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold"> گیفت کارت
</span>
<i class=""></i>
               </div>

               <div class="bg-white p-6 flex items-center  justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold">بازیهای موبایلی
</span>
<i class=""></i>
               </div>

                              <div class="bg-white p-6 flex items-center justify-center w-full  col-span-1 rounded-lg">
<span class="text-xl font-semibold">اکانت قانونی پلی استیشن
</span>
<i class=""></i>
               </div>
               <div class="bg-white p-6 flex items-center justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold"> ابزارهای هوش مصنوعی
</span>
<i class=""></i>
               </div>

               <div class="bg-white p-6 flex items-center justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold"> محصولات ادوبی
</span>
<i class=""></i>
               </div>

               <div class="bg-white p-6 flex items-center  justify-center w-full   col-span-1 rounded-lg">
<span class="text-2xl font-semibold"> تماس با ما
</span>
<i class=""></i>
               </div>
                </div>
            </div>
    
        </section>
    
    
    
        <section class="w-full my-16 relative">
            <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
                <div class="product__header">
                    <div class="product__header-logo">
                        <i class="fa fa-blog text-xl text-red-500"></i>
    
                    </div>
                    <h2 class="product__header-title !text-sm">
                        مجله پارسی گیفت
                    </h2>
    
    
                    <a href="" title=" خریدبازیهای-موبایلی" class="product__header-more !font-semibold">
                            مشاهده آرشیو
                            <i class="fa fa-chevron-left"></i>
                        </a>
                </div>
    
                <swiper class="relative  w-full" :modules="modules" :space-between="6" :breakpoints="{ 600: { slidesPerView: 2 },400: { slidesPerView: 1 }, 900: { slidesPerView: 3, }, }">
                    <swiper-slide class="rounded-lg h-full border">
    
                        <article class="rounded-lg h-full">
                            <figure class="rounded-lg h-full">
                                <img class="rounded-t-lg h-full" src="@/assets/images/3.webp" alt="خرید گیفت کارت آیتونز">
                            </figure>
                            <header class="p-3 text-gray-700  w-full">
                                <h5 class="font-semibold text-xl text-right py-3"> بهترین ابزارهای هوش مصنوعی دنیا را بشناسید</h5>
                                <div class="journal__item-desc text-justify">
                                    <p> پیشرفت و نفوذ اخیر هوش مصنوعی در دنیای تکنولوژی سبب شده تا تصمیم بگیریم در این مقاله به معرفی و بررسی بهترین ابزارهای هوش مصنوعی روز دنیا بپردازیم. هوش مصنوعی چیست؟ هوش مصن</p>
                                </div>
                                <div class="journal__item-footer flex justify-between items-center border-t pt-4 mt-2">
                                    <span class="name">۲۳ تیر ۱۴۰۲ | ۱۴:۲۷</span>
                                    <a href="" title="" class="link bg-cyan-500 px-2 rounded-md text-white">
                                                            مطالعه بیشتر...
                                                        </a>
                                </div>
                            </header>
    
                        </article>
                    </swiper-slide>
    
                    <swiper-slide class="rounded-lg h-full border">
    
    <article class="rounded-lg h-full">
        <figure class="rounded-lg h-full">
            <img class="rounded-t-lg h-full" src="@/assets/images/1.webp" alt="خرید گیفت کارت آیتونز">
        </figure>
        <header class="p-3 text-gray-700  w-full">
            <h5 class="font-semibold text-xl text-right py-3"> بهترین ابزارهای هوش مصنوعی دنیا را بشناسید</h5>
            <div class="journal__item-desc text-justify">
                <p> پیشرفت و نفوذ اخیر هوش مصنوعی در دنیای تکنولوژی سبب شده تا تصمیم بگیریم در این مقاله به معرفی و بررسی بهترین ابزارهای هوش مصنوعی روز دنیا بپردازیم. هوش مصنوعی چیست؟ هوش مصن</p>
            </div>
            <div class="journal__item-footer flex justify-between items-center border-t pt-4 mt-2">
                <span class="name">۲۳ تیر ۱۴۰۲ | ۱۴:۲۷</span>
                <a href="" title="" class="link bg-cyan-500 px-2 rounded-md text-white">
                                        مطالعه بیشتر...
                                    </a>
            </div>
        </header>

    </article>
</swiper-slide>

<swiper-slide class="rounded-lg h-full border">
    
    <article class="rounded-lg h-full">
        <figure class="rounded-lg h-full">
            <img class="rounded-t-lg h-full" src="@/assets/images/2.webp" alt="خرید گیفت کارت آیتونز">
        </figure>
        <header class="p-3 text-gray-700  w-full">
            <h5 class="font-semibold text-xl text-right py-3"> بهترین ابزارهای هوش مصنوعی دنیا را بشناسید</h5>
            <div class="journal__item-desc text-justify">
                <p> پیشرفت و نفوذ اخیر هوش مصنوعی در دنیای تکنولوژی سبب شده تا تصمیم بگیریم در این مقاله به معرفی و بررسی بهترین ابزارهای هوش مصنوعی روز دنیا بپردازیم. هوش مصنوعی چیست؟ هوش مصن</p>
            </div>
            <div class="journal__item-footer flex justify-between items-center border-t pt-4 mt-2">
                <span class="name">۲۳ تیر ۱۴۰۲ | ۱۴:۲۷</span>
                <a href="" title="" class="link bg-cyan-500 px-2 rounded-md text-white">
                                        مطالعه بیشتر...
                                    </a>
            </div>
        </header>

    </article>
</swiper-slide>

<swiper-slide class="rounded-lg h-full border">
    
    <article class="rounded-lg h-full">
        <figure class="rounded-lg h-full">
            <img class="rounded-t-lg h-full" src="@/assets/images/3.webp" alt="خرید گیفت کارت آیتونز">
        </figure>
        <header class="p-3 text-gray-700  w-full">
            <h5 class="font-semibold text-xl text-right py-3"> بهترین ابزارهای هوش مصنوعی دنیا را بشناسید</h5>
            <div class="journal__item-desc text-justify">
                <p> پیشرفت و نفوذ اخیر هوش مصنوعی در دنیای تکنولوژی سبب شده تا تصمیم بگیریم در این مقاله به معرفی و بررسی بهترین ابزارهای هوش مصنوعی روز دنیا بپردازیم. هوش مصنوعی چیست؟ هوش مصن</p>
            </div>
            <div class="journal__item-footer flex justify-between items-center border-t pt-4 mt-2">
                <span class="name">۲۳ تیر ۱۴۰۲ | ۱۴:۲۷</span>
                <a href="" title="" class="link bg-cyan-500 px-2 rounded-md text-white">
                                        مطالعه بیشتر...
                                    </a>
            </div>
        </header>

    </article>
</swiper-slide>
                 
    
            
    
                </swiper>
    
            </div>
    
    
    
        </section>
    
    
    
    
    </main>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


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
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
        };
    },
};
</script>