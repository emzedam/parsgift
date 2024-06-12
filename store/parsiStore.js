import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    authSupporter: null,
    globalLoading: true,
    initData: null
})

const actions = {
    changeLoadingState(state) {
        this.globalLoading = state
    },
    
    async getInitializeData() {
        try {
            const result = await api.get("/parsgift/get-init")
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            return false
        }
    }
}

const getters = {}

export const useParsgiftStore = defineStore({
    id: "parsi-store",
    state: state,
    actions: actions,
    getters: getters
})