import { useParsgiftStore } from "~/store/parsiStore";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    if(process.client == true){
        const parsiStore = useParsgiftStore();
        const result = await parsiStore.isAuthUser()
        if(result == false) {
            return true
        }else {
            return navigateTo('/')
        }
    }
  })