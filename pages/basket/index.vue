<template>
    <Basket 
        :totalPrice="totalPrice"
        :basketList="basketList" 
        @spliceBasket="(index) => spliceBasket(index)"
    />
</template>

<script setup>
import Basket from "@/components/product/basket.vue";
import { useParsgiftStore } from "~/store/parsiStore";

const parsiStore = useParsgiftStore()
const basketList = ref([])
const totalPrice = ref(0)

definePageMeta({
    middleware: 'user-auth'
})

onMounted(() => {
   getBasketProducts()
})


const getBasketProducts = async () => {
    const result = await parsiStore.getBasketProducts()
    if(result.status == 200) {
       basketList.value = result.result
       if(basketList.value.length != 0) {
            basketList.value.forEach((val , index) => {
                if(val.attribute_id != 0) {
                    totalPrice.value = totalPrice.value + Number(val.product_attribute.price)
                } else {
                    totalPrice.value = totalPrice.value + Number(val.price)
                }
            })
        }
    }
}

const spliceBasket = (index) => {
    basketList.value.splice(index , 1)
}

</script>