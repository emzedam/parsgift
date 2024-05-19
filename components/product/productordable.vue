<template>
  <div
    class="flex items-center py-28 justify-center bg-blue-500 text-white mb-6 rounded-lg px-4 border"
  >
    <i class="fa fa-credit-card text-3xl ml-4"></i>
    <h2 class="font-iransans font-semibold text-xl">
      پرداخت در کلیه سایت های بین المللی
    </h2>
  </div>

  <div class="grid grid-cols-12 gap-4">
    <div class="lg:col-span-6 col-span-12 border p-4 rounded-lg bg-gray-50">
      <div class="flex h-full basis-1/2 flex-col justify-between">
        <div class="flex flex-grow flex-col pb-5 [&amp;>*]:caret-primary">
          <div>
            <div
              class="relative mb-3 flex flex-col justify-between font-Estedad darker:bg-transparent undefined"
            >
              <label class="mb-2.5 mr-1 text-xs font-bold" for=":rh:"
                >لینک سایت</label
              ><input
                id=":rh:"
                type="text"
                class="input input-bordered darker:bg-transparent darker:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-xs focus:border-primary darker:border-gray-700 darker:focus:border-neon-primary undefined overflow-hidden rounded-md pl-12 placeholder:text-right"
                placeholder="https://www.parsigift.com"
                name="siteUrl"
                dir="ltr"
                value=""
              /><small
                class="mt-1 h-4 font-Estedad text-[10px] text-error undefined"
              ></small>
            </div>
          </div>
          <div
            class="relative mb-3 flex flex-col justify-between font-Estedad darker:bg-transparent undefined"
          >
            <label class="mb-2.5 mr-1 text-xs font-bold" for=":ri:"
              >نام کاربری شما در سایت مقصد</label
            ><input
              id=":ri:"
              type="text"
              class="input input-bordered darker:bg-transparent darker:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-xs focus:border-primary darker:border-gray-700 darker:focus:border-neon-primary undefined rounded-md"
              placeholder=""
              name="mn_1617613939978"
              dir="rtl"
              value=""
            /><small
              class="mt-1 h-4 font-Estedad text-[10px] text-error undefined"
            ></small>
          </div>
          <div
            class="relative mb-3 flex flex-col justify-between font-Estedad darker:bg-transparent undefined"
          >
            <label class="mb-2.5 mr-1 text-xs font-bold" for=":rj:"
              >رمز عبور شما در سایت مقصد</label
            ><input
              id=":rj:"
              type="text"
              class="input input-bordered darker:bg-transparent darker:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-xs focus:border-primary darker:border-gray-700 darker:focus:border-neon-primary undefined rounded-md"
              placeholder=""
              name="mn_1617613951303"
              dir="rtl"
              value=""
            /><small
              class="mt-1 h-4 font-Estedad text-[10px] text-error undefined"
            ></small>
          </div>
          <div
            class="relative flex min-h-[160px] max-w-7xl flex-col justify-between font-Estedad mb-5"
          >
            <h3
              class="mb-2.5 mr-1 flex max-w-sm items-center justify-between gap-x-5 text-xs font-bold darker:text-gray-300 undefined"
            >
              تصویر مورد نظر را بارگذاری نمایید ( اختیاری )
            </h3>
            <div
              class="flex flex-col items-center overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white p-5 font-Estedad darker:text-gray-300 aspect-[1.72]"
            >
              <div class="flex w-full items-center justify-end">
                <span
                  class="ml-2 flex items-center text-xs text-black darker:text-gray-300"
                  >png,jpeg,jpg</span
                ><svg
                  class="text-primary darker:text-neon-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m12.2 11.8-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                class="relative flex h-full flex-col items-center justify-center"
              >
                <input
                  id="file-input"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg , capture=camera "
                  class="absolute h-full cursor-pointer opacity-0"
                  name="mediaId"
                /><span class="cursor-pointer rounded-full bg-gray-100 p-5"
                  ><svg
                    class="text-primary darker:text-neon-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg></span
                ><span
                  class="pt-3 text-xs font-semibold text-primary darker:text-neon-primary"
                  >فایل‌های خود را بکشید و اینجا رها کنید</span
                >
                <div class="flex items-center py-2">
                  <svg
                    class="ml-2 text-primary darker:text-neon-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.995 16h.009"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  ><span class="text-ss font-semibold"
                    >حداکثر سایز آپلود: 5MB</span
                  >
                </div>
              </div>
            </div>
            <small class="mt-1 font-Estedad text-[10px] text-error"></small>
          </div>
          <div
            class="relative mb-3 flex flex-col justify-between font-Estedad darker:bg-transparent undefined"
          >
            <label class="mb-2.5 mr-1 text-xs font-bold" for=":rk:">مبلغ</label
            ><input
              id=":rk:"
              type="text"
              class="input input-bordered darker:bg-transparent darker:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-xs focus:border-primary darker:border-gray-700 darker:focus:border-neon-primary undefined border-1 mb-0 rounded-md"
              placeholder="100"
              name="price"
              dir="rtl"
              value=""
            /><small
              class="mt-1 h-4 font-Estedad text-[10px] text-error undefined"
            ></small>
            <div class="relative mb-8 mt-4 text-xs font-bold">
              <div class="flex w-full flex-col">
                <label
                  class="mb-2.5 mr-1 text-xs font-bold"
                  id="downshift-3-label"
                  for="downshift-3-input"
                  >نوع ارز</label
                >
                <div
                  class="flex items-center rounded darker:bg-darker darker:text-gray-300 bg-white darker:bg-darker border w-full px-2 py-3 text-gray-500"
                >
                  <input
                    placeholder="لطفا ارز مورد نظر خود را انتخاب کنید..."
                    class="w-full bg-transparent outline-none border-transparent focus:ring-0 focus:outline-none"
                    aria-autocomplete="list"
                    autocomplete="off"
                    value="دلار"
                  /><button
                    aria-controls="downshift-3-menu"
                    aria-expanded="false"
                    id="downshift-3-toggle-button"
                    tabindex="-1"
                    aria-label="toggle menu"
                    class="flex w-fit items-center justify-end"
                    type="button"
                  >
                    <svg
                      class="rotate-0 w-5 fill-black stroke-black text-black darker:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ul
                  class="scrollbar scroll absolute top-full z-10 max-h-40 w-full overflow-y-auto bg-white darker:bg-darker darker:text-gray-300 [&amp;>*]:pr-0"
                  id="downshift-3-menu"
                  role="listbox"
                  aria-labelledby="downshift-3-label"
                ></ul>
              </div>
            </div>
          </div>
          <label
            class="relative flex w-full cursor-pointer flex-wrap items-center truncate text-ellipsis rounded-md font-Estedad text-xs font-bold [&amp;>*]:select-none"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="18px"
              height="18px"
              viewBox="0 0 30 30"
              class="border border-primary darker:border-neon-primary mx-1 rounded-sm"
              fill="#fff"
            >
              <defs>
                <filter id="Filter_0">
                  <feFlood
                    flood-color="rgb(255, 255, 255)"
                    flood-opacity="1"
                    result="floodOut"
                  ></feFlood>
                  <feComposite
                    operator="atop"
                    in="floodOut"
                    in2="SourceGraphic"
                    result="compOut"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="compOut"
                    in2="SourceGraphic"
                  ></feBlend>
                </filter>
              </defs>
              <g filter="url(#Filter_0)">
                <path
                  fill-rule="evenodd"
                  d="M4.1000,-0.000 L24.601,-0.000 C27.363,-0.000 29.601,2.239 29.601,4.1000 L29.601,24.601 C29.601,27.363 27.363,29.601 24.601,29.601 L4.1000,29.601 C2.238,29.601 -0.000,27.363 -0.000,24.601 L-0.000,4.1000 C-0.000,2.239 2.238,-0.000 4.1000,-0.000 Z"
                ></path>
              </g>
              <svg
                class="overflow-visible fill-transparent"
                width="80%"
                height="80%"
                viewBox="10 -10 15 50"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="checkmark">
                  <path
                    opacity="1.00"
                    d=" M 35.74 2.67 C 39.80 -1.38 47.92 0.62 49.00 6.52 L 49.00 9.03 C 48.49 10.95 47.43 12.65 45.94 13.96 C 38.94 20.63 32.06 27.42 25.04 34.07 C 22.11 36.94 16.95 36.82 14.11 33.87 C 10.36 30.32 6.68 26.68 2.94 23.11 C 1.55 21.88 0.58 20.29 0.00 18.53 L 0.00 15.86 C 0.93 10.85 7.06 8.07 11.45 10.61 C 14.58 12.67 16.85 15.76 19.78 18.10 C 25.08 12.94 30.39 7.78 35.74 2.67 Z"
                  ></path>
                </g>
              </svg>
            </svg>
            <p>برای پرداخت خود عجله دارم</p></label
          ><small
            class="mb-4 mt-2 overflow-hidden text-pretty text-xs text-primary transition-colors delay-200 duration-500 ease-in-out darker:text-neon-primary"
            style="height: 0px"
            ><p>
              مدت زمان انجام پرداخت سریع حداکثر یک ساعت پس از تکمیل و ارسال صحیح
              اطلاعات مورد نیاز برای پرداخت از سمت مشتری می‌باشد.&nbsp;لازم به
              ذکر است &nbsp;به هر علتی پرداخت در زمان مقرر اعلامی ۱ ساعته از سمت
              مجموعه ایرانیکارت انجام نشود،‌ هیچ مسئولیتی برعهده مجموعه نبوده و
              مبلغ پرداخت شده جهت تسریع در انجام پرداخت به مشتری عودت داده خواهد
              شد.
            </p></small
          >
          <p class="mb-2.5 mr-1 text-xs font-bold darker:text-gray-300">
            آیا در ساعات نامتعارف ( 1 بامداد الی 7 صبح ) قادر به پاسخ به تماس
            تلفنی هستید؟
          </p>
          <div
            class="mb-5 flex max-w-full flex-wrap items-center justify-between font-Estedad font-bold"
          >
            <label
              class="flex max-w-[50%] flex-grow items-center justify-center truncate text-ellipsis rounded-md border p-3 text-[10px] sm:text-xs [&amp;>*]:select-none cursor-pointer border-primary darker:border-neon-primary mx-1 bg-white"
              ><p>خیر</p>
              <input
                id=":rm:"
                type="radio"
                name="test"
                class="hidden"
                value="خیر" /></label
            ><label
              class="flex max-w-[50%] flex-grow items-center justify-center truncate text-ellipsis rounded-md border p-3 text-[10px] sm:text-xs [&amp;>*]:select-none cursor-pointer border-gray-300 darker:border-gray-700 mx-1 bg-white"
              ><p>بله</p>
              <input
                id=":rn:"
                type="radio"
                name="test"
                class="hidden"
                value="بله"
            /></label>
          </div>
          <div class="relative mb-4 flex flex-col font-Estedad">
            <label class="mb-2.5 text-xs font-bold" for=":ro:">توضیحات</label
            ><textarea
              dir="rtl"
              id=":ro:"
              class="scrollbar h-24 w-full rounded-md border border-gray-300 px-2 pt-4 font-Estedad text-sm outline-0 focus:input-primary placeholder:font-Estedad placeholder:text-xs placeholder:font-normal placeholder:text-muted focus:border-primary focus:outline-none darker:border-gray-700 2xl:h-32 undefined"
              placeholder=""
              name="mn_1714305351161"
            ></textarea
            ><small class="text-2xs mb-0 font-Estedad text-error"></small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6 rounded-lg">
      <div class="mb-4 border p-4 rounded-lg">
        <ul class="space-y-6">
          <li class="flex justify-between items-center">
            <span>قیمت پایه</span><strong>تومان</strong>
          </li>
          <li class="flex justify-between items-center">
            <span>مقدار پرداختی</span><strong>56 دلار</strong>
          </li>
          <li class="flex justify-between items-center">
            <span>درصد روش پرداخت</span><strong>279,104</strong>
          </li>
          <li class="flex justify-between items-center">
            <span>جمع کل مبلغ</span><strong>4,266,304تومان</strong>
          </li>
        </ul>
      </div>

      <button
        type="submit"
        class="mt-2.5 h-12 w-1/3 min-w-[188px] items-center justify-center self-end bg-blue-500 px-4 font-bold text-white rounded-lg shadow-lg shadow-blue-500/30"
      >
        <p>پرداخت آنلاین</p>
      </button>

      <div
        class="flex flex-col rounded-lg border-2 border-blue-500 my-6 p-4 bg-blue-100"
      >
        <h2
          class="mb-5 sm:mt-0 lg:mt-10 font-Pelak text-xs font-bold text-blue-600 dark:text-neon-primary"
        >
          شرایط و توضیحات
        </h2>
        <div class="mb-8 flex max-h-36 min-h-fit">
          <p
            class="justify-end text-justify text-[13px] text-gray-700 dark:text-gray-300 font-iransans leading-6"
          >
            توجه داشته باشید پرداخت شما در صورت صحیح بودن اطلاعاتی که وارد می
            کنید بین ۱ تا ۵ ساعت کاری انجام می شود.<br />کارمزد خرید اینترنتی
            متغیر است و بستگی به مبلغ دارد.<br />اگر اطلاعات ارسالی شما صحیح
            نباشد، تایم انجام درخواست شما از زمانی محاسبه می شود که اطلاع...<svg
              class="inline-block cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
              ></path>
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
