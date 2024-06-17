import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    authUser: null,
    globalLoading: true,
    initData: null
})

const actions = {
    async isAuthUser() {
        
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/parsgift/user/get" , config)
                if(result.status == 200){
                    this.authUser = result.data
                    return result.data
                }
            }catch(err) {
                if(err.response.status == 401){
                    cookies.remove("_uToken" , {path: "/"})
                }
                return false
            }

        }else{
            return false
        }
        
    },

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
    },
    async add_helpful_comment(data){
        const token = cookies.get("_uToken")
        const result = await api.post("/parsgift/comments/helpful" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },
    async create_user_comment(data){
        const token = cookies.get("_uToken")
        const result = await api.post("/parsgift/comments/create" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    // user
    async verify_by_user_mobile(data) {
        try {
            const result = await api.post("/parsgift/user/verify", {mobile: data.mobile})
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            return false
        }
    },

    async signin_user(data) {
        try {
            const result = await api.post("/parsgift/user/signin", data)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            console.log(err)
            return false
        }
    },
    
    async signup_user(data) {
        try {
            const result = await api.post("/parsgift/user/signup", data)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            console.log(err)
            return false
        }
    },

    async logout_user() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/parsgift/user/logout" , {} , config)
                if(result.status == 200){
                    cookies.remove("_uToken" , {path: "/"})
                    this.authUser = null
                    return result.data
                }
            }catch(err) {
                cookies.remove("_sToken" , {path: "/"})
                this.authUser = null
            }
        }else{
            this.authUser = null
        }
    },
    // user
}

const getters = {}

export const useParsgiftStore = defineStore({
    id: "parsi-store",
    state: state,
    actions: actions,
    getters: getters
})