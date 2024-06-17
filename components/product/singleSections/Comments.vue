<template>
    <div class="content bg-white border text-justify p-4 rounded-lg font-iransans">
        <div
        class="bg-white  rounded-b-lg  h-full p-4"
      >
        <div
          v-if="comments.length == 0"
          class="py-6 w-full border border-dashed px-4 my-4 rounded-lg grid grid-cols-12 items-center"
        >
          <div class="cm lg:col-span-6 col-span-12 items-center">
            <div class="lg:flex items-center justify-center text-center">
              <i class="fa-light fa-message-lines text-4xl text-gray-500"></i>
              <div
                class="flex flex-col items-center mr-l lg:items-start pr-4 lg:mt-0 mt-4 w-full"
              >
                <p class="font-bold text-right">اگر این محصول را خرید کرده اید</p>
                <p class="font-medium text-sm mt-xs">
                  با ارسال دیدگاه خود به انتخاب خریداران دیگر کمک کنید.
                </p>
              </div>
            </div>
          </div>
    
          <div class="button px-4 mt-4 w-full lg:col-span-6 col-span-12">
            <button
              type="button"
              @click="openCommentModal()"
              class="border-blue-500 text-blue-500 fill-secondary stroke-blue-500 w-full hover:bg-blue-400 hover:border-blue-300 focus:bg-blue-300 px-4 py-2 transition-all duration-300 border-2 hover:text-white font-semibold bg-white rounded-lg"
            >
              ارسال دیدگاه<span class=""></span>
            </button>
          </div>
        </div>
    
        <div class="grid-cols-1 lg:grid-cols-12 gap-4 grid" v-if="comments.length != 0">
          <aside class="lg:col-span-3 sp:col-span-12 border rounded-lg">
            <div class="google-review">
              <div class="rate">
                <div class="grid grid-cols-12">
                  <div class="col-span-12">
                    <div
                      class="rating-review-item w-full justify-between grid grid-cols-12 p-4 gap-5"
                    >
                      <div class="col-span-2">
                        <div
                          class="star-rating flex text-center justify-center items-center text-2xl font-fa font-semibold text-green-600"
                        >
                          <h3>{{ get_rate_percent_by_suggest_pro(1, "rate5") }}</h3>
                        </div>
                        <div
                          class="number-rating text-sm justify-center text-center font-semibold leading-tight text-gray-400 hidden"
                        >
                          <span>از ۴۶ امتیاز </span>
                        </div>
                      </div>
                      <div class="right-rating col-span-10">
                        <ul class="order-list">
                          <li>
                            <div class="rating-hit">
                              <span class="pr-1 font-en text-xs">%</span
                              >{{ get_comment_rate_percent(5) }}
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-green-600"
                                role="progressbar"
                                :style="{ width: `${get_comment_rate_percent(5)}%` }"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="star-value text-green-600">
                              <h5>5</h5>
                              <i class="fas fa-star"></i>
                            </div>
                          </li>
                          <li>
                            <div class="rating-hit">
                              <span class="pr-1 font-en text-xs">%</span
                              >{{ get_comment_rate_percent(4) }}
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-green-400"
                                role="progressbar"
                                :style="{ width: `${get_comment_rate_percent(4)}%` }"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="star-value text-green-400">
                              <h5>4</h5>
                              <i class="fas fa-star"></i>
                            </div>
                          </li>
                          <li>
                            <div class="rating-hit">
                              <span class="pr-1 font-en text-xs">%</span
                              >{{ get_comment_rate_percent(3) }}
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-green-300"
                                role="progressbar"
                                :style="{ width: `${get_comment_rate_percent(3)}%` }"
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="star-value text-green-300">
                              <h5>3</h5>
                              <i class="fas fa-star"></i>
                            </div>
                          </li>
                          <li>
                            <div class="rating-hit">
                              <span class="pr-1 font-en text-xs">%</span
                              >{{ get_comment_rate_percent(2) }}
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-orange-500"
                                role="progressbar"
                                :style="{ width: `${get_comment_rate_percent(2)}%` }"
                                aria-valuenow="15"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="star-value text-orange-500">
                              <h5>2</h5>
                              <i class="fas fa-star"></i>
                            </div>
                          </li>
                          <li>
                            <div class="rating-hit">
                              <span class="pr-1 font-en text-xs">%</span
                              >{{ get_comment_rate_percent(1) }}
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-red-500"
                                role="progressbar"
                                :style="{ width: `${get_comment_rate_percent(1)}%` }"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="star-value text-red-500">
                              <h5>1</h5>
                              <i class="fas fa-star"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
    
                    <div
                      class="flex items-center justify-center border-b border-dashed py-4 text-sm mb-6"
                    >
                      <p class="caption text-gray-600 mt-xs hidden">
                        <i class="fa-regular fa-face-smile text-orange-400 text-xl ml-1"></i>
                        {{ get_rate_percent_by_suggest_pro(1, "suggest") }}% کاربران، پیشنهاد
                        خرید کرده اند.
                      </p>
                    </div>
                    <div class="button px-4">
                      <button
                        type="button"
                        @click="openCommentModal()"
                        class="border-blue-500 text-blue-500 fill-secondary stroke-blue-500 w-full hover:bg-blue-400 hover:border-blue-300 focus:bg-blue-300 px-4 py-2 transition-all duration-300 border-2 hover:text-white font-semibold bg-white rounded-lg"
                      >
                        ارسال دیدگاه<span></span>
                      </button>
                    </div>
    
                    <div class="not text-center p-4 font-semibold text-sm text-gray-500">
                      <p>با ارسال دیدگاه خود به انتخاب خریداران دیگر کمک کنید.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
    
          <section class="lg:col-span-9 sp:col-span-12">
            <div class="flex items-center justify-between mb-4 w-full">
              <div
                class="lg:flex hidden items-center border rounded-lg gap-4 px-6 py-2 w-full overflow-hidden"
              >
                <div class="flex flex-row items-center gap-x-4 grow-1 w-full overflow-y-auto">
                  <div class="break-words py-3">
                    <div class="flex items-center grow-1">
                      <div class="flex shrink-0 ml-2">
                        <i class="fa fa-arrow-down-wide-short"></i>
                      </div>
                      <p
                        class="grow-1 cursor-pointer whitespace-nowrap text-gray-700 text-body2-strong"
                      >
                        مرتب سازی براساس :
                      </p>
                    </div>
                  </div>
                  <div class="header-sort contents w-full font-medium">
                    <span
                      @click="sort_comments_data('newers')"
                      :class="sortItem == 'newer' ? 'text-blue-500' : ''"
                      class="cursor-pointer whitespace-nowrap font-semibold"
                      >جدیدترین</span
                    ><span
                      @click="sort_comments_data('helpful')"
                      :class="sortItem == 'helpful' ? 'text-blue-500' : ''"
                      class="cursor-pointer whitespace-nowrap text-md"
                      >مفیدترین</span
                    >
                  </div>
                  <div class="mr-auto d-block">
                    <span
                      class="text-blue-500 font-semibold whitespace-nowrap text-md ellispis-1 xl:flex items-center gap-2"
                      >{{ comments.length }} دیدگاه</span
                    >
                  </div>
                </div>
              </div>
            </div>
    
            <ul
              class="comments-list lg:block lg:gap-0 lg:overflow-x-hidden flex- gap-4 overflow-x-auto whitespace-nowrap lg:whitespace-normal no-scrollbar space-y-0 lg:space-y-4 flex"
            >
              <li
                v-for="(comment, index) in comments"
                :key="index"
                class="bg-white border rounded-lg p-3 lg:w-full flex-shrink-0 lg:h-full md:h:[15rem] sm:h-[15rem] xs:h-[15rem] md:w-[18.75rem] sm:w-[18.75rem] xs:w-[18.75rem] relative overflow-hidden"
              >
                <div class="lg:flex flex-col md:flex-row md:justify-between md:items-center">
                  <div class="flex items-center w-100">
                    <div class="flex items-center">
                      <span
                        class="flex ml-2 p-4 bg-gray-200 rounded-lg relative overflow-hidden"
                      >
                        <i class="fa-regular fa-user text-gray-400"></i>
                      </span>
                      <span class="caption text-gray-700">{{
                        comment.no_show_name == true ? "کاربر ناشناس" : comment.user_name
                      }}</span
                      ><span class="caption text-gray-600 mr-4"
                        >({{ comment.comment_date.split(" ")[0] }})</span
                      >
                    </div>
                    <div></div>
                  </div>
                  <div class="lg:flex justify-end items-center hidden">
                    <div
                      v-if="comment.suggest_pro == 1"
                      class="flex items-center ml-2 text-green-600"
                    >
                      <i class="fa-regular fa-face-smile"></i>
                      <span class="caption text-success pr-2">پیشنهاد میکنم</span>
                    </div>
                    <div
                      v-else-if="comment.suggest_pro == 0"
                      class="flex items-center ml-2 text-red-600"
                    >
                      <i class="fa-regular fa-face-frown-slight"></i>
                      <span class="caption text-success pr-2">پیشنهاد نمیکنم</span>
                    </div>
                    <div
                      v-else-if="comment.suggest_pro == 2"
                      class="flex items-center ml-2 text-orange-600"
                    >
                      <i class="fa-regular fa-face-frown-slight"></i>
                      <span class="caption text-success pr-2">مطمعن نیستم</span>
                    </div>
    
                    <span class="lg:flex justify-between items-center hidden">
                      <span
                        class="bg-yellow-50 py-1 px-4 flex items-center justify-between rounded-sm"
                        >{{ comment.rate }}.0 <i class="fa fa-star text-yellow-500 pr-2"></i
                      ></span>
                    </span>
                  </div>
                </div>
                <div class="md:pr-2xl mt-3">
                  <p
                    class="caption font-medium text-gray-600 text-sm relative overflow-hidden whitespace-normal text-justify"
                  >
                    {{ comment.text }}
                  </p>
                  <div
                    class="items-center mt-8 text-green-600 lg:hidden flex text-sm font-medium justify-between absolute right-4 bottom-3"
                  >
                    <span v-if="comment.suggest_pro == 1">
                      <i class="fa-regular fa-face-smile"></i
                      ><span class="caption pr-2 text-green-600">پیشنهاد میکنم</span></span
                    >
                    <span v-else-if="comment.suggest_pro == 0">
                      <i class="fa-regular fa-face-frown-slight"></i
                      ><span class="caption pr-2 text-red-600">پیشنهاد نمیکنم</span></span
                    >
                    <span v-else-if="comment.suggest_pro == 2">
                      <i class="fa-regular fa-face-frown-slight"></i
                      ><span class="caption pr-2 text-orange-600">مطمعن نیستم</span></span
                    >
    
                    <span
                      class="replay flex hidden text-xs text-center justify-center border border-dashed py-2 rounded-lg px-4 items-center text-gray-700 mr-6"
                      ><i class="fas fa-reply pl-2"></i> پاسخ</span
                    >
                  </div>
    
                  <div class="mt-2 hidden">
                    <ul>
                      <li class="border bg-gray-50/50 mb-4 text-blue-500 p-4 rounded-lg mt-4">
                        <span class="font-semibold block mb-2">پاسخ پتو من</span>
                        <p
                          class="relative whitespace-normal overflow-hidden text-justify text-sm"
                        >
                          سارا عزیز، عذرخواهی ما را برای تاخیر به وجود آمده پذیرا باشید؛ تحویل
                          سفارش شما بر عهده سرویس ارسال اکسپرس بوده است و این مورد در حال
                          پیگیری می باشد. از همراهی شما سپاسگزاریم.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="lg:flex justify-between items-end w-100 mt-l hidden">
                    <div class="flex flex-col caption text-gray-700"></div>
                    <div
                      class="flex justify-between md:justify-end items-center w-100 text-gray-500"
                    >
                      <span class="caption text-gray-600 pl-2 text-xs"
                        >آیا این دیدگاه مفید بود؟</span
                      >
                      <div class="flex items-center gap-1">
                        <button
                          @click="add_helpful_for_comment(comment.id, true)"
                          class="flex bg-transparent text-blue-500 font-bold"
                        >
                          <span class="caption">
                            {{
                              comment.helpfuls.filter(
                                (val, index) => val.helpful_state == true
                              ).length
                            }}
                          </span>
                          <i class="fa-regular fa-face-smile pr-1"></i>
                        </button>
                        <div class="bg-gray-200 mx-s"></div>
                        <button
                          @click="add_helpful_for_comment(comment.id, false)"
                          class="flex bg-transparent"
                        >
                          <span class="text-gray-500 caption font-bold">
                            {{
                              comment.helpfuls.filter(
                                (val, index) => val.helpful_state == false
                              ).length
                            }}
                          </span>
                          <i class="fa-regular fa-face-worried pr-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
    
        <CommentModal
          :showModal="commentModalState"
          :productId="productId"
          :authname="authUser != null ? authUser.name : ''"
          @updateComments="(data) => updateComments(data)"
          @closeModalComments="commentModalState = false"
        />
      </div>   
    </div>
</template>

<script setup>
import { useParsgiftStore } from "~/store/parsiStore";
import { storeToRefs } from "pinia";
import CommentModal from "./CommentModal.vue";
import Swal from 'sweetalert2'


const parsiStore = useParsgiftStore();
const { authUser } = storeToRefs(parsiStore);

const props = defineProps([
    "comments",
    "productId"
 ]);

 const emit = defineEmits(["updateComment"])

const commentModalState = ref(false);
const sortItem = ref("newer");

const openCommentModal = () => {
    if (authUser.value == null) {
        showSwal("خطایی رخ داد" , "جهت افزودن نظر ابتدا وارد حساب کاربری خود شوید", "error");
    } else {
        commentModalState.value = true;
    }
};

const get_comment_rate_percent = (rate) => {
const rateCount = props.comments.filter((val, index) => {
    return val.rate == rate;
});
if (rateCount.length != 0) {
    let percent = parseInt((rateCount.length * 100) / props.comments.length);
    return percent;
} else {
    return 0;
}
};

const get_rate_percent_by_suggest_pro = (rate, condition) => {
const rateCount = props.comments.filter((val, index) => {
    return val.suggest_pro == rate;
});
if (condition == "suggest") {
    if (rateCount.length != 0) {
    let percent = parseInt((rateCount.length * 100) / props.comments.length);
    return percent;
    } else {
    return 0;
    }
} else if (condition == "rate5") {
    if (rateCount.length != 0) {
    let percent = ((rateCount.length * 5) / props.comments.length).toFixed(1);
    return percent;
    } else {
    return 0;
    }
}
};

const add_helpful_for_comment = async (comment_id, helpful_state) => {
    if (authUser.value != null) {
        const data = {
            product_id: props.productId,
            comment_id,
            helpful_state,
            user_id: authUser.value.id,
            helpful: 1,
        };

        const result = await parsiStore.add_helpful_comment(data);
        if (result.statusCode == 200) {
            emit("updateComment" , result.result)
        } else {
            showSwal("خطایی رخ داد" , result.message, "error");
        }
    } else {
      showSwal("خطایی رخ داد" , "جهت انجام این اقدام ابتدا وارد حساب کاربری خود شوید", "error");
    }
};

const sort_comments_data = (state) => {
    if (state == "helpful") {
        sortItem.value = "helpful";
        props.comments.sort((a, b) => {
        return (
            b.helpfuls.filter((val, index) => val.helpful_state == true).length -
            a.helpfuls.filter((val, index) => val.helpful_state == true).length
        );
        });
    } else if (state == "newers") {
        sortItem.value = "newer";
        props.comments.sort(function (a, b) {
        var keyA = new Date(b.created_at),
            keyB = new Date(a.created_at);

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        });
    }
};

const showSwal = (title , text , icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

const updateComments = (data) => {
  emit("updateComment" , data)
}
</script>