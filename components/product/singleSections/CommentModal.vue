<template>
    <div
      class="fixed top-0 right-0 z-[200] flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
      :class="showModal == true ? 'visible' : 'invisible'"
    >
      <div
        class="absolute inset-0 transition-opacity duration-300 bg-black/20 overflow-hidden"
        @click="closeModalComment()"
      ></div>
  
      <div
        class="shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white ml-auto inset-0 w-full overflow-hidden relative transition-all"
        :class="showModal == true ? 'translate-x-0' : 'translate-x-[750px]'"
      >
        <button
          type="button"
          @click="closeModalComment()"
          class="z-[1] absolute w-8 h-8 text-gray-400 top-4 left-4 hover:duration-300 flex items-center justify-center"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
        <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">دیدگاه شما</h3>
          </div>
        </div>
        <div
          class="modal-body font-fa mx-2 px-6 my-4 relative overflow-y-auto no-scrollbar h-full pb-24"
        >
          <div class="space-x-4">
            <div class="relative w-full">
              <div class="relative">
                <input
                  type="text"
                  v-model="commentData.user_name"
                  id="floating_outlined"
                  :disabled="commentData.user_name != '' ? true : false"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="تام"
                />
                <label
                  for="floating_outlined"
                  class="absolute text-gray-500 text-lg duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
                >
                  نام
                </label>
              </div>
  
              <div class="w-full bg-gray-100 flex items-center p-3 mt-2 rounded-sm">
                <div class="Checkbox">
                  <input
                    type="checkbox"
                    v-model="commentData.no_show_name"
                    id="review-public-status"
                  /><label for="review-public-status"></label><span></span>
                </div>
                <p class="mr-2 text-gray-800 caption">عدم نمایش نام شما در دیدگاه</p>
              </div>
            </div>
          </div>
  
          <div class="relative w-full pt-4">
            <h2 class="text-xl font-semibold">امتیاز محصول</h2>
            <div class="star mt-4">
              <div class="flex items-center space-x-3">
                <svg
                  v-for="(star, index) in starsList"
                  :key="index"
                  :class="
                    star.state == 'active'
                      ? 'text-yellow-300'
                      : 'text-gray-300  dark:text-gray-500'
                  "
                  class="w-8 h-8 ml-3 cursor-pointer"
                  @click="set_rate_value(index)"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
            </div>
  
            <div class="w-full bg-gray-100 flex items-center p-3 rounded-sm mt-4">
              <i class="fa-regular fa-circle-info"></i>
  
              <p class="mr-2 text-gray-800 caption">
                از 1 تا 5 میتوانید به این محصول امتیاز دهید
              </p>
            </div>
  
            <div class="relative w-full pt-4">
              <h2 class="text-xl font-semibold">خرید این محصول را...</h2>
              <div class="mt-4">
                <div class="flex gap-4" role="radiogroup">
                  <div
                    :class="
                      commentData.suggest_pro == 1
                        ? 'border-blue-500 bg-blue-50 text-blue-500'
                        : ''
                    "
                    class="border p-4 rounded-md w-full cursor-pointer"
                  >
                    <input
                      class="hidden cursor-pointer"
                      type="radio"
                      id="recommended"
                      name="product-rate"
                      @click="set_suggest_pro(1)"
                    /><label for="recommended">
                      <div class="flex flex-col items-center cursor-pointer">
                        <i class="fa-regular fa-face-smile text-2xl"></i>
                        <span class="caption text-gray-700 mt-4 text-sm font-semibold"
                          >پیشنهاد میکنم</span
                        >
                      </div>
                    </label>
                  </div>
                  <div
                    :class="
                      commentData.suggest_pro == 2
                        ? 'border-blue-500 bg-blue-50 text-blue-500'
                        : ''
                    "
                    class="p-4 rounded-md w-full border cursor-pointer"
                  >
                    <input
                      class="hidden cursor-pointer"
                      type="radio"
                      id="not-sure"
                      name="product-rate"
                      @click="set_suggest_pro(2)"
                    /><label for="not-sure">
                      <div class="flex flex-col items-center cursor-pointer">
                        <i class="fa-regular fa-circle-question text-2xl"></i>
                        <span class="caption text-gray-700 mt-4 text-sm font-semibold"
                          >مطمئن نیستم</span
                        >
                      </div>
                    </label>
                  </div>
                  <div
                    :class="
                      commentData.suggest_pro == 0
                        ? 'border-blue-500 bg-blue-50 text-blue-500'
                        : ''
                    "
                    class="border p-4 rounded-md w-full cursor-pointer"
                  >
                    <input
                      class="hidden cursor-pointer"
                      type="radio"
                      id="not-recommended"
                      name="product-rate"
                      @click="set_suggest_pro(0)"
                    /><label for="not-recommended">
                      <div class="flex flex-col items-center cursor-pointer">
                        <i class="fa-regular fa-face-frown-open text-2xl"></i>
                        <span class="caption text-gray-700 mt-4 text-sm font-semibold"
                          >پیشنهاد نمیکنم</span
                        >
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="relative w-full mt-4">
            <div class="relative">
              <textarea
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer h-40"
                v-model="commentData.text"
              ></textarea>
              <label
                for="floating_outlined"
                class="absolute text-gray-500 text-lg duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
              >
                متن دیدگاه
              </label>
            </div>
  
            <div class="w-full bg-gray-100 flex items-center p-3 rounded-sm mt-4">
              <i class="fa-regular fa-circle-info"></i>
  
              <p class="mr-2 text-gray-800 caption">
                تنها قادر به نوشتن 5 نکته مثبت و 5 نکته منفی میباشید.
              </p>
            </div>
          </div>
  
          <div class="relative w-full pt-4">
            <div class="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                type="text"
                class="items-center block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-lg font-semibold sm:text-sm p-4"
                placeholder="نکات مثبت (متن مورد نظر را وارد کرده و دکمه اینتر را فشار دهید)"
                @keyup.enter="(e) => add_notice(e, 'keyup', 'positive')"
                v-model="positive_text"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
              >
                <button @click="(e) => add_notice(e, 'click', 'positive')" type="button">
                  <i
                    class="fa fa-plus text-gray-900 h-1 pt-1 w-5 flex leading-[1px] text-2xl pl-4 ml-2"
                  ></i>
                </button>
              </div>
            </div>
  
            <div
              class="flex gap-2 flex-wrap mt-4 items-center"
              v-if="commentData.positive_notices.length != 0"
            >
              <span
                v-for="(notice, index) in commentData.positive_notices"
                :key="index"
                class="chip inline-block px-4 py-2 caption font-semibold rounded-sm bg-green-50 text-green-500 border-green-500"
                >{{ notice.text }}
                <button
                  type="button"
                  class="mr-2 cursor-pointer"
                  @click="delete_notice(index, 'positive')"
                >
                  <i class="fa fa-times"></i>
                </button>
              </span>
            </div>
          </div>
  
          <div class="relative w-full pt-4 mt-4">
            <div class="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                type="text"
                class="items-center block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-lg font-semibold sm:text-sm p-4"
                placeholder="نکات منفی (متن مورد نظر را وارد کرده و دکمه اینتر را فشار دهید)"
                @keyup.enter="(e) => add_notice(e, 'keyup', 'negative')"
                v-model="negative_text"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
              >
                <button type="button" @click="(e) => add_notice(e, 'click', 'negative')">
                  <i
                    class="fa fa-plus text-gray-900 h-1 pt-1 w-5 flex leading-[1px] text-2xl pl-4 ml-2"
                  ></i>
                </button>
              </div>
            </div>
  
            <div class="flex gap-4 flex-wrap mt-4 items-center">
              <span
                v-for="(notice, index) in commentData.negative_notices"
                :key="index"
                class="chip inline-block px-4 py-2 caption font-semibold rounded-sm bg-red-50 text-red-500 border-red-500"
              >
                {{ notice.text }}
                <button
                  @click="delete_notice(index, 'negative')"
                  type="button"
                  class="mr-2 cursor-pointer"
                >
                  <i class="fa fa-times"></i>
                </button>
              </span>
            </div>
          </div>
  
          <div class="relative w-full overflow-hidden mx-auto">
            <div class="max-w-2xl w-full">
              <button
                v-if="commentLoader == false"
                @click="create_comment()"
                class="bottom-3 btn hover:text-bg-500/80 transition-colors duration-500 bg-blue-500 px-6 py-3 text-white mt-8 flex items-center rounded-lg justify-center w-full"
              >
                <i class="fa-solid fa-edit pl-2 text-xl"></i> ثبت دیدگاه
              </button>
              <button
                type="button"
                v-if="commentLoader == true"
                class="bottom-3 btn hover:text-bg-500/80 transition-colors duration-500 bg-blue-500 px-6 py-3 text-white mt-8 flex items-center rounded-lg justify-center w-full"
              >
                <div class="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { useParsgiftStore } from "~/store/parsiStore";
  import { storeToRefs } from "pinia";
  import Swal from 'sweetalert2'

  const marketStore = useParsgiftStore();
  const { comments } = storeToRefs(marketStore);
  const props = defineProps(["showModal", "authname", "productId"]);
  const emit = defineEmits(["closeModalComments" , "updateComments"]);
  
  const positive_text = ref(null);
  const negative_text = ref(null);
  const commentLoader = ref(false);
  
  const starsList = reactive([
    {
      id: 1,
      state: "noactive",
    },
    {
      id: 2,
      state: "noactive",
    },
    {
      id: 3,
      state: "noactive",
    },
    {
      id: 4,
      state: "noactive",
    },
    {
      id: 5,
      state: "noactive",
    },
  ]);
  
  const commentData = reactive({
    user_name: "",
    product_id: 0,
    no_show_name: false,
    rate: 0,
    suggest_pro: 1,
    text: "",
    positive_notices: [],
    negative_notices: [],
  });
  
  if (props.authname != "") {
    commentData.user_name = props.authname;
  }
  
  if (props.productId != null) {
    commentData.product_id = props.productId;
  }
  
  const closeModalComment = () => {
    emit("closeModalComments");
  };
  
  const set_rate_value = (index) => {
    starsList.forEach((val, index) => {
      val.state = "noactive";
    });
  
    for (let i = 0; i <= index; i++) {
      starsList[i].state = "active";
    }
  
    commentData.rate = index + 1;
  };
  
  const set_suggest_pro = (value) => {
    commentData.suggest_pro = value;
  };
  
  const add_notice = (e, type_state, state) => {
    let text;
    if (type_state == "click") {
      if (state == "positive") {
        text = positive_text.value;
      } else {
        text = negative_text.value;
      }
    } else {
      text = e.target.value;
    }
  
    if (text == "") {
        showSwal("خطایی رخ داد" , "لطفا متنی را به عنوان نکته وارد کنید", "error");
  
      return false;
    }
  
    if (state == "positive") {
      if (commentData.positive_notices.length < 5) {
        commentData.positive_notices = [
          ...commentData.positive_notices,
          {
            id: commentData.positive_notices.length + 1,
            text,
          },
        ];
        e.target.value = "";
        positive_text.value = null;
      } else {
        showSwal("خطایی رخ داد" , "شما مجاز به اضافه کردن تعداد 5 عدد نکته مثبت هستید", "error");
      }
    } else {
      if (commentData.negative_notices.length < 5) {
        commentData.negative_notices = [
          ...commentData.negative_notices,
          {
            id: commentData.negative_notices.length + 1,
            text,
          },
        ];
        e.target.value = "";
        negative_text.value = null;
      } else {
        showSwal("خطایی رخ داد" , "شما مجاز به اضافه کردن تعداد 5 عدد نکته منفی هستید", "error");
      }
    }
  };
  
  const delete_notice = (index, state) => {
    if (state == "positive") {
      commentData.positive_notices.splice(index, 1);
    } else if (state == "negative") {
      commentData.negative_notices.splice(index, 1);
    }
  };
  
  const create_comment = async () => {
    if (validate_comment_data()) {
      commentLoader.value = true;
      const result = await marketStore.create_user_comment(commentData);
      if (result.statusCode == 200) {

        commentLoader.value = false;
        showSwal( "پیغام موفقیت آمیز" ,result.message , "success");

        closeModalComment();
        clear_comment_data();
        emit("updateComments" , result.result)
      } else {
        showSwal("خطایی رخ داد" , result.message, "error");
  
        commentLoader.value = false;
      }
    }
  };
  
  const clear_comment_data = () => {
    starsList.forEach((val, index) => {
      val.state = "noactive";
    });
  
    commentData.no_show_name = false;
    commentData.rate = 0;
    commentData.suggest_pro = 1;
    commentData.text = "";
    commentData.positive_notices = [];
    commentData.negative_notices = [];
  
    positive_text.value = null;
    negative_text.value = null;
  };
  
  const validate_comment_data = () => {
    if (commentData.user_name == "") {
        showSwal("خطای اعتبارسنجی" , "نام کاربر الزامی است" , "error");
      return false;
    } else if (commentData.product_id == 0) {
        showSwal("خطای اعتبارسنجی" , "محصول مورد نظر مشخص نشده است" , "error");
      return false;
    } else if (commentData.rate == 0) {
        showSwal("خطای اعتبارسنجی" , "لطفا امتیاز این محصول را مشخص کنید" , "error");
      return false;
    } else if (commentData.text == "") {
        showSwal("خطای اعتبارسنجی" , "متن نظر الزامی است" , "error");
      return false;
    } else if (commentData.text.length <= 8) {
        showSwal("خطای اعتبارسنجی" , " حداقل کاراکتر مجاز برای متن نظر 8 عدد میباشد " , "error");
      return false;
    } else {
      return true;
    }
  };

  const showSwal = (title , text , icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
  }
  </script>
  
  <style>
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 24px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 9px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  </style>
  