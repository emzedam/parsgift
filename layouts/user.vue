<template>
    <div class="w-full overflow-y-auto">
        <Loading :isShow="globalLoading" />

        <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
            <Header :initData="initData" v-if="globalLoading == false" />

            <div class="my-4">



                <div class="grid grid-cols-12 gap-4 my-4">
                    <div class="col-span-12 lg:col-span-3">
                        <div class="box profile border rounded-lg pt-8">
                            <div class="avatar max-w-14 mx-auto flex justify-center items-center w-full">
                                <img src="https://dicardo.com/assets/main/def/original-defProfile.png" />
                            </div>
                            <ul class="text-center py-8 space-y-4 text-gray-600 border-b p-4">
                                <li class="flex justify-between text-xl font-bold">
                                    <span>کاربر مهمان</span><span>
                                        {{ authUser ? authUser.mobile : 0 }}
                                    </span>
                                </li>
                                <li class="flex justify-between text-xl font-bold">
                                    <span>کیف پول</span><span>{{ authUser ? authUser.wallet.stock : 0 }} ریال</span>
                                </li>
                            </ul>
                            <nuxt-link to="/user/wallet" class="flex item-center p-4 font-semibold cursor-pointer bg-gray-50">
                                <i class="fa fa-plus-circle pl-2 text-green-500"></i><span>افزایش موجودی کیف پول</span>
                            </nuxt-link>
                        </div>

                        <div class="menu border mt-4 rounded-lg">
                            <ul class="flex flex-col font-semibold divide-y">
                                <li class="flex items-center justify-between p-4 " :class="$route.path == '/user/dashboard' ? 'bg-gray-100' : ''">
                                    <nuxt-link to="/user/dashboard" class="w-full flex items-center justify-between">
                                        <div class="flex items-center">
                                            <i class="fa fa-home pl-2"></i>
                                            سفارشات من
                                        </div>
    
                                        <i class="fa fa-chevron-left"></i>
                                    </nuxt-link>
                                </li>

                                <li class="flex items-center justify-between p-4" :class="$route.path == '/user/profile' ? 'bg-gray-100' : ''">
                                    <nuxt-link to="/user/profile" class="w-full flex items-center justify-between">
                                        <div class="flex items-center">
                                            <i class="fa fa-user pl-2"></i>
                                            پروفایل من
                                        </div>
    
                                        <i class="fa fa-chevron-left"></i>
                                    </nuxt-link>
                                </li>

                                <li class="flex items-center justify-between p-4" :class="$route.path == '/user/validate' ? 'bg-gray-100' : ''">
                                    <nuxt-link to="/user/validate" class="w-full flex items-center justify-between">
                                        <div class="flex items-center">
                                            <i class="fa fa-gear pl-2"></i>
                                            احراز هویت
                                        </div>
    
                                        <i class="fa fa-chevron-left"></i>
                                    </nuxt-link>
                                </li>
                                <li class="flex items-center justify-between p-4" :class="$route.path == '/user/wallet' ? 'bg-gray-100' : ''">
                                    <nuxt-link to="/user/wallet" class="w-full flex items-center justify-between">
                                        <div class="flex items-center">
                                        <i class="fa fa-wallet pl-2"></i>
                                        کیف پول
                                        </div>

                                        <i class="fa fa-chevron-left"></i>
                                    </nuxt-link>
                                </li>

                                <li class="flex items-center justify-between p-4">
                                    <div class="flex items-center">
                                        <i class="fa fa-right-from-bracket pl-2"></i>
                                        خروج
                                    </div>

                                    <i class="fa fa-chevron-left"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-9">

                        <slot />

                    </div>
                </div>



            </div>
        </div>


        <Footer />
    </div>


</template>

<script setup>
import { useParsgiftStore } from '~/store/parsiStore';
import { storeToRefs } from 'pinia'

const parsiStore = useParsgiftStore()
const { initData, globalLoading , authUser } = storeToRefs(parsiStore)
</script>