<template>
    <div class="w-full overflow-y-auto" >
        <Loading :isShow="globalLoading" /> 
        
        <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
            <Header 
                :initData="initData"
                v-if="globalLoading == false" 
            />

            <div class="my-4">
                <slot />
            </div>
        </div>
  
  
        <Footer/>   
    </div>


</template>

<script setup>
import { useParsgiftStore } from '~/store/parsiStore';
import {storeToRefs} from 'pinia'

const parsiStore = useParsgiftStore()
const {initData , globalLoading} = storeToRefs(parsiStore)
</script>