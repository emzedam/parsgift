import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    authUser: null,
    globalLoading: true,
    initData: null,
    basketCount: 0
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

    async getInitBasket(authCookie) {
        // console.log("authCookie")
        let config = {
            headers: {
                Authorization:`Bearer ${authCookie}`
            }
        };

        try {
            const result = await api.get("/parsgift/get-basket" , config)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            if(err.response.status == 401){
                cookies.remove("_uToken" , {path: "/"})
            }
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
                    this.basketCount = 0
                    return result.data
                }
            }catch(err) {
                cookies.remove("_uToken" , {path: "/"})
                this.authUser = null
            }
        }else{
            this.authUser = null
        }
    },
    
    // single page
    async isProductInBasket(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/basket/is-exist" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async addProductToBasket(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/basket/add-to-basket" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async removeProductFromBasket(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/basket/remove-from-basket" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async add_user_account(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let emptyError = false;
            data.data.forEach(element => {
                if(element.value == "") {
                    emptyError = true
                }
            });
            if(emptyError == false) {
                try {
                    const result = await api.post("/parsgift/user/add-account" , data , {
                        headers: {
                            Authorization:`Bearer ${token}`
                        }
                    })
    
                    if(result.status == 200){
                        return result.data
                    }
                }catch(err) {
                    return false
                }
            }else {
                return { status: 501 }
            }
        }else{
            return false
        }
    },

    async getBasketProducts() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.get("/parsgift/basket/get-basket" , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async save_order(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/profile/save-orders" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async get_orders() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.get("/parsgift/profile/get-orders" , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async removeOrder(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/profile/remove-order" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async payOrder(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/profile/connect-bank" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async get_order_detail(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.get("/parsgift/profile/get-order-detail" , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    },
                    params: data
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async updateProfileInfo(data)  {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/profile/update" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async save_document(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const formdata = new FormData();
                formdata.append("doc_file" , data.doc_file)
                const result = await api.post("/parsgift/profile/save-document" , formdata , {
                    headers: {
                       Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },
    
    async get_user_document() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.get("/parsgift/profile/get-document" , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    },

    async add_to_wallet(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            try {
                const result = await api.post("/parsgift/profile/add-wallet" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })

                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else{
            return false
        }
    }
}

const getters = {}

export const useParsgiftStore = defineStore('parsgift' , {
    id: "parsi-store",
    state: state,
    actions: actions,
    getters: getters
})