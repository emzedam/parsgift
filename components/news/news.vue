<template>
  <div
    class="w-full max-w-screen-xl mx-auto lg:px-6 px-2 my-8 grid grid-cols-12 gap-4"
  >
    <div class="form lg:col-span-9 col-span-12 lg:border rounded-lg bg-white">
      <h2 class="font-semibold text-2xl py-8 px-6 text-blue-500 rounded-t-lg">
        <i class="fa fa-blog"></i>
        مجله پارسی گیفت
      </h2>
      <div class="p-4 space-y-4">
        <article>
          <div
            class="bg-white relative overflow-hidden lg:flex grid lg:grid-cols-2 grid-cols-1 gap-4 border p-4 rounded-lg"
          >
            <figure>
              <img
                src="@/assets/images/3.webp"
                class="rounded-lg lg:max-w-56 w-full mx-auto"
              />
            </figure>

            <div class="title bottom-0 font-medium z-10 text-black px-4">
              <h3 class="text-2xl font-fas text-blue-500 mb-4">
                قرار حمایت از حیوانات بی سرپرست
              </h3>
              <div class="meta">
                <ul class="flex items-center">
                  <li class="bg-gray-100 px-4 py-1 font-fas text-sm rounded-lg">
                    21 اردیبهشت 1403
                  </li>
                </ul>
              </div>
              <p class="text-gray-600 mt-2 font-fas text-sm">
                سانِ نسیم نوروز است؛ می‌آید و همه جا را بهاری می‌کند. به هر
                گوشه‌ای، جانِ تازه‌ای می‌دمد تا شکوفه‌های بهاری سر از غنچه
                بیرون…
              </p>
            </div>
          </div>
        </article>

        <article>
          <div
            class="bg-white relative overflow-hidden lg:flex grid lg:grid-cols-2 grid-cols-1 gap-4 border p-4 rounded-lg"
          >
            <figure>
              <img
                src="@/assets/images/2.webp"
                class="rounded-lg lg:max-w-56 w-full mx-auto"
              />
            </figure>

            <div class="title bottom-0 font-medium z-10 text-black px-4">
              <h3 class="text-2xl font-fas text-blue-500 mb-4">
                قرار حمایت از حیوانات بی سرپرست
              </h3>
              <div class="meta">
                <ul class="flex items-center">
                  <li class="bg-gray-100 px-4 py-1 font-fas text-sm rounded-lg">
                    21 اردیبهشت 1403
                  </li>
                </ul>
              </div>
              <p class="text-gray-600 mt-2 font-fas text-sm">
                سانِ نسیم نوروز است؛ می‌آید و همه جا را بهاری می‌کند. به هر
                گوشه‌ای، جانِ تازه‌ای می‌دمد تا شکوفه‌های بهاری سر از غنچه
                بیرون…
              </p>
            </div>
          </div>
        </article>

        <nav
          class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
        >
          <div class="-mt-px flex w-0 flex-1">
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <!-- Heroicon name: mini/arrow-long-left -->
              <svg
                class="ml-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clip-rule="evenodd"
                />
              </svg>
              قبلی
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >1</a
            >
            <!-- Current: "border-blue-500 text-blue-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-blue-500 px-4 pt-4 text-sm font-medium text-blue-600"
              aria-current="page"
              >2</a
            >
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >3</a
            >
            <span
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
              >...</span
            >
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >8</a
            >
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >9</a
            >
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >10</a
            >
          </div>
          <div class="-mt-px flex w-0 flex-1 justify-end">
            <a
              href="#"
              class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              بعدی
              <!-- Heroicon name: mini/arrow-long-right -->

              <svg
                class="mr-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>

    <div class="animation lg:col-span-3 col-span-12">
      <aside class="aside">
        <div class="aside-block sticky top-0">
          <div class="space-y-4">
            <a
              href="tel: 0212000"
              class="bg-gray-50 px-6 py-4 rounded-lg border flex items-center"
            >
              <i class="fa fa-phone text-2xl text-blue-500 pl-2"></i>

              <span class="font-fas font-bold">۰۲۱-۲۳000 </span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
