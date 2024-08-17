<template>
  <section class="w-full">
    <footer class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <div
        class="footer-desktop items-center justify-between p-6 hidden lg:flex border rounded-lg"
      >
        <div class="menu-nav flex flex-col items-start">
          <nav class="flex items-center border-b py-2 w-full">
            <ul class="flex gap-4 items-center font-semibold">
              <li class="flex items-center">
                <nuxt-link to="/">خانه</nuxt-link>
              </li>
              <li class="flex items-center">
                <nuxt-link to="/contracts">قوانین خرید</nuxt-link>
              </li>
              <li class="flex items-center">
                <nuxt-link to="/faq">سوالات متداول</nuxt-link>
              </li>
              <li class="flex items-center">
                <nuxt-link to="/news">مجله پارسی گیفت</nuxt-link>
              </li>
              <li class="flex items-center">
                <nuxt-link to="/contactus">تماس با ما</nuxt-link>
              </li>
              <li class="flex items-center">
                <nuxt-link to="/aboutus">درباره ما</nuxt-link>
              </li>
            </ul>
          </nav>

          <div class="mt-4 ">
            <span class="ml-2 font-bold"><i class="fa fa-location ml-2"></i>آدرس :</span>
            <span>تهران خیابان ولیعصر - نرسیده به بوستان ساعی - برج سپهر ساعی - طبقه سوم واحد ۳۰۲</span>
          </div>
          <div class="mt-3">
            <span class="ml-2 font-bold"><i class="fa fa-phone ml-2"></i> تلفن :</span>
            <span>+۹۸۲۱۸۸۷۰۴۸۷۸</span>
          </div>
        </div>

        <div
          class="logo text-blue-500 font-bold text-2xl font-en flex items-center"
        >
          <ul class="flex items-center gap-4">
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-telegram"></i></li>
            <li><i class="fa-brands fa-whatsapp"></i></li>
          </ul>
        </div>
      </div>

      <div
        class="mx-auto max-w-screen-xl px-4 block lg:hidden border-t border-gray-100"
      >
        <div
          class="theme-widgetarea theme-widgetarea-full font-fas"
          role="complementary"
        >
          <div
            id="blogmotive_mobile-2"
            class="blogmotive-widget widget bg-white rounded-lg mb-8 relative widget_blogmotive_mobile"
          >
            <div class="widget-content">
              <div class="theme-about-widget style_1">
                <div
                  class="about-image flex justify-center items-center text-orange-500 py-8 text-4xl font-semibold"
                >
                  <img src="assets/images/logo.svg" class="w-36" />
                </div>
                <div class="about-details">
                  <div class="about-desc text-center font-fas border-b pb-3">
                    <p>
                      © هر گونه کپی&zwnj;برداری جزئی یا کلی از مطالب گیفت پارسی مگ
                      بدون کسب مجوز مکتوب ممنوع است. حقوق این سایت به گیفت پارسی تعلق
                      دارد.
                    </p>
                  </div>

                  <div class="border-b pb-3">
                    <div class="mt-4 ">
                      <span class="ml-2 font-bold"><i class="fa fa-location ml-2"></i>آدرس :</span>
                      <span>تهران خیابان ولیعصر - نرسیده به بوستان ساعی - برج سپهر ساعی - طبقه سوم واحد ۳۰۲</span>
                    </div>
                    <div class="mt-3">
                      <span class="ml-2 font-bold"><i class="fa fa-phone ml-2"></i> تلفن :</span>
                      <span>+۹۸۲۱۸۸۷۰۴۸۷۸</span>
                    </div>
                  </div>

                  <div
                    class="about-social mt-8 flex gap-x-4 text-blue-500 justify-center items-center"
                  >
                    <ul class="flex items-center gap-4 text-2xl">
                      <li><i class="fa-brands fa-instagram"></i></li>
                      <li><i class="fa-brands fa-telegram"></i></li>
                      <li><i class="fa-brands fa-whatsapp"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
