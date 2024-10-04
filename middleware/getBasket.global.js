import { useParsgiftStore } from "~/store/parsiStore";
import {storeToRefs} from 'pinia'
export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client == true){
        const parsiStore = useParsgiftStore();
        const {basketCount} = storeToRefs(parsiStore)
        const cookie = useCookie('_uToken')
        const token = cookie.value

        if (token) {
            const result = await parsiStore.getInitBasket(cookie.value)
            if(result.status == 200) {
                basketCount.value = result.count
            }else {
                basketCount.value = 0
            }
        }else {
            basketCount.value = 0
        }
    }
})