<template>
    <section class="Wallet">
        <div class="grid lg:grid-cols-12 gap-4">
            <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
                <div
                    class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6">
                    <h6
                        class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa">
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
                                <input type="text"
                                    class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
                                    placeholder="   مبلغ  خود را به تومان وارد نمایید" />




                            </div>

                            <div class="close border-t my-4 px-8">
                                <button type="button" class="bg-green-500 px-8 py-4 rounded-lg text-white mt-4">
                                    <span>پرداخت</span><i class="fa fa-chevron-left pr-4"></i>
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
const walletModalState = ref(false)
definePageMeta({
      middleware: 'user-auth',
      layout: "user"
})
</script>