<template>
      <Dashboard :ordersList="ordersList" />
</template>

<script setup>
import {useParsgiftStore} from '@/store/parsiStore.js'
import Dashboard from "@/components/UserDashboard/dashboard.vue";

const parsiStore = useParsgiftStore()
const ordersList = ref([])

onMounted(() => {
      getOrders()
})

const getOrders = async () => {
      const result = await parsiStore.get_orders()
      if(result.status == 200) {
            console.log(result.result)
            ordersList.value = result.result
      }else {
            console.log("error orders")
      }
}

definePageMeta({
      middleware: 'user-auth',
      layout: "user"
})
</script>
