<template>
  <section class="border my-4 rounded-lg">
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          class="mt-8 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          عضویت در پارسی گیفت
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <div class="mt-1">
                <input
                  id="mobile"
                  name="mobile"
                  type="mobile"
                  autocomplete="mobile"
                  placeholder="نام و نام خانوادگی"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div class="mt-1">
                <input
                  id="mobile"
                  name="mobile"
                  type="mobile"
                  autocomplete="mobile"
                  placeholder="شماره موبایل"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                ورود یا عضویت
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
