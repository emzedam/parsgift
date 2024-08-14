<template>
    <section class="ehraz hoviat ">
          <div class="grid lg:grid-cols-12 gap-4">
            <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
              <div
                class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
              >
                <h6
                  class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa"
                >
                  <i
                    class="fa-duotone fa-user-edit text-[20px] !w-5 !h-5 text-hamian ml-2"
                  ></i>
                  احراز هویت
                </h6>
                <p
                  class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                >
                  جهت احراز هویت لطفا تصویر کارت ملی را آپلود کنید
                </p>
              </div>
  
              <div class="flex flex-col tabs">
                <div class="p-4 tab-content sm:p-5">
                  <div
                    class="space-y-5 border p-4 rounded-lg flex justify-between items-center"
                  >
                    <div class="relative lg:w-full justify-start flex">
                      <div
                        class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="space-y-1 text-center">
                          <div v-if="imageUrl" class="text-center">
                            <img :src="imageUrl" alt="Selected Image" class="rounded-lg text-center w-[80px] h-[60px] object-cover" />
                          </div>
                          <div
                            v-else
                            class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                          ></div>
                          <div class="flex text-sm text-gray-600">
                            <label
                              for="page-file-upload"
                              class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                              ><span>تصویر کارت ملی</span
                              ><input
                                id="page-file-upload"
                                type="file"
                                @change="onFileChange" 
                                ref="fileInput"
                                class="sr-only" /></label
                            ><!---->
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="status flex w-full justify-end">
                      <span
                        v-if="documentFile != null && documentFile.status == 0"
                        class="border-2 bg-orange-50 border-orange-500 p-3 rounded-lg text-orange-500 font-semibold"
                      >
                        <i class="fa fa-question-circle pl-2"></i>
                        <span>در انتظار بررسی</span>
                      </span>
                      <span
                        v-if="documentFile != null && documentFile.status == 1"
                        class="border-2 bg-green-50 border-green-500 p-3 rounded-lg text-green-500 font-semibold"
                      >
                        <i class="fa fa-question-circle pl-2"></i>
                        <span>تایید شده</span>
                      </span>
                      <span
                        v-if="documentFile != null && documentFile.status == 2"
                        class="border-2 bg-red-50 border-red-500 p-3 rounded-lg text-red-500 font-semibold"
                      >
                        <i class="fa fa-question-circle pl-2"></i>
                        <span>رد شده</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="relative w-full px-6 border-t">
                <button
                  type="button"
                  v-if="!loading"
                  @click="createDocument()"
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-[150px]"
                >
                  <span
                    class="relative z-20 flex items-center justify-center w-full text-center"
                  >
                    <span class="w-full">ارسال</span>
                  </span>
                </button>
                <button
                  type="button"
                  v-if="loading"
                  class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-[150px]"
                >
                  <span
                    class="relative z-20 flex items-center justify-center w-full text-center"
                  >
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
</template>

<script setup>
import { useParsgiftStore } from '~/store/parsiStore';
import { storeToRefs } from 'pinia';

const parsiStore = useParsgiftStore()
const {authUser} = storeToRefs(parsiStore)
const { $swal } = useNuxtApp()
const { appBaseUrl } = useRuntimeConfig().public

const documentFile = ref(null)
const fileInput = ref(null);
const fileContainer = ref(null)
const imageUrl = ref(null);
const loading = ref(false)

onMounted(() => {
  get_user_document()
})

definePageMeta({
    middleware: 'user-auth',
    layout: "user"
})

const get_user_document = async () => {
  const result = await parsiStore.get_user_document()
  if(result.status == 200) {
    if(result.result != null) {
      imageUrl.value = `${appBaseUrl}/storage/${result.result.file}`
      documentFile.value = result.result
    }
  }
}

const onFileChange = () => {
  if(fileInput.value.files.length != 0) {
    const file = fileInput.value.files[0];
    
    if (file && file.type.startsWith('image/')) {
      fileContainer.value = file
      imageUrl.value = URL.createObjectURL(file);
    } else {
      imageUrl.value = null; // اگر فایل تصویر نیست، URL را خالی کنید
    }
  }
};

const createDocument = async () => {
  loading.value = true
  const result = await parsiStore.save_document({
    doc_file: fileContainer.value
  })

  if(result.status == 200) {
    loading.value = false
    showSwal("پیغام موفقیت آمیز" , result.message , "success")

    get_user_document()
  }else {
    loading.value = false
    showSwal("خطایی رخ داد" , result.message , "error")
  }
}

const showSwal = (title , text , icon) => {
  $swal.fire({
      title: title,
      text: text,
      icon: icon
  });
}
</script>

<style scoped>
  .lds-ring {
    /* change color here */
    color: #1c4c5b
  }
  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
  }
  .lds-ring div {
    box-sizing: border-box;
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border: 3px solid currentColor;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>