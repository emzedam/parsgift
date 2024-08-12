<template>
    <OrderDetail 
    :productList="productList" />
</template>

<script setup>
import {useParsgiftStore} from '@/store/parsiStore.js'
import OrderDetail from "@/components/UserDashboard/orderDetail.vue";
import {useRoute , useRouter} from 'vue-router'

const parsiStore = useParsgiftStore()
const productList = ref([])
const route = useRoute()
const router = useRouter()

onMounted(() => {
    if(!route.params.id) {
        router.push("/")
    }else {
        getOrderDetail()
    }
})

const getOrderDetail = async () => {
    const result = await parsiStore.get_order_detail({
        order_id: route.params.id
    })
    if(result.status == 200) {
        console.log(result.result)
        productList.value = result.result
    }else {
        console.log("error orders")
    }
}



definePageMeta({
    middleware: 'user-auth',
    layout: "user"
})
</script>
