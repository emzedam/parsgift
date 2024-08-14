<template>
    <section class="Wallet">
        <div class="grid lg:grid-cols-12 gap-4">
            <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
                <div
                    class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6">
                    <h6
                        class="flex items-center gap-1 antialiased font-semibold leading-normal text-gray-600 font-fa">
                        <i class="fa-duotone fa-wallet text-[20px] !w-5 !h-5 text-hamian ml-2"></i>
                        کیف پول
                    </h6>
                    <p
                        class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa">
                        برای شارژ کیف پول خود می توانید از این گزینه استفاده کنید
                    </p>
                </div>

                <div class="flex flex-col tabs">
                    <div class="p-4 tab-content sm:p-5">
                        <div class="border rounded-lg grid grid-cols-12">
                            <div
                                class="lg:col-span-6 flex items-center text-blue-500 border-l p-4 text-center justify-center">
                                <i class="fa fa-wallet text-8xl"></i>
                            </div>

                            <div class="status flex flex-col gap-4 w-full justify-center lg:col-span-6 text-center p-4">
                                <span
                                    @click="walletModalState = true"
                                    class="border-2 cursor-pointer bg-green-500 border-green-500 p-3 rounded-lg text-white font-semibold">
                                    <i class="fa fa-plus-circle pl-2"></i>
                                    <span>شارژ کیف پول</span>
                                </span>

                                <span
                                    class="hidden border-2 bg-green-50 border-green-500 p-3 rounded-lg text-green-500 font-semibold">
                                    <i class="fa fa-check-circle pl-2"></i>
                                    <span>گزارشات کیف پول</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- wallet modal -->
        <div :class="walletModalState == true ? '' : 'hidden'" class="fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24">
            <div @click="walletModalState = false" class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"></div>
            <div class="relative w-full max-w-2xl transform px-4 transition-all opacity-100 scale-100">
                <div class="overflow-hidden rounded-lg bg-white shadow-md">
                    <div class="relative">

                        <div class="header flex items-center justify-between w-full border-b text-green-700 ">
                            <button type="button" class="p-4  flex items-center font-bold">
                                <i class="fa fa-plus pl-2"></i><span>شارز کیف پول</span>
                            </button>
                            <buttun type="button" class="flex items-center justify-center w-6"><i
                                    class="fa fa-times-circle pl-4 text-xl"></i></buttun>

                        </div>



                        <div class="category font-fas font-semibold text-sm mt-8">
                            <div class="px-8">
                                <input type="number"
                                    v-model="price"
                                    class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
                                    placeholder="مبلغ  خود را به تومان وارد نمایید" />
                            </div>

                            <div class="close border-t my-4 px-8">
                                <button v-if="!loading" @click="addToWallet()" type="button" class="bg-green-500 px-8 py-4 rounded-lg text-white mt-4">
                                    <span>پرداخت</span><i class="fa fa-chevron-left pr-4"></i>
                                </button>
                                <button v-if="loading" type="button" class="bg-green-500 px-8 py-4 rounded-lg text-white mt-4">
                                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {useParsgiftStore} from '@/store/parsiStore'
import {storeToRefs} from 'pinia'

const loading = ref(false)
definePageMeta({
    middleware: 'user-auth',
    layout: "user"
})

const walletModalState = ref(false)
const price = ref(0)
const parsiStore = useParsgiftStore()

const addToWallet = async () => {
    loading.value = true
    const result = await parsiStore.add_to_wallet({
        price: price.value
    })

    if(result.status == 200) {
        loading.value = false
        walletModalState.value = false
        window.location.href=`${result.location}${result.authority}`
    }else {
        loading.value = false
        walletModalState.value = false
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