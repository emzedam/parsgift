<template>
  <section class="border my-4 rounded-lg">
    <div class="flex min-h-full px-5 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          class="mt-8 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          ورود به سورین گیفت
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 sm:px-10">
          <form  @submit.prevent="do_verifyphone()" class="space-y-6">
            
            <p id="outlined_error_help"
            v-if="error != ''"
            class="mt-2 text-sm text-red-600 dark:text-red-400">
            {{ error }}</p>

            <div>
              <div class="mt-1">
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  autocomplete="mobile"
                  placeholder="شماره موبایل"
                  v-model="data.mobile"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="!mt-2">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div class="lds-ring" v-if="isLoding == true"><div></div><div></div><div></div><div></div></div>
                <span v-if="isLoding == false" class="mr-2 font-normal"> ورود به حساب کاربری </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <VerifyCodeModal 
        :activeModal="activeVerifyModal"
        @closeModal="activeVerifyModal = false"
        @resendOtp="resendOtp()"
        @addUser="(otpCode) => doSignIn(otpCode)"
        :resendLoading="resendLoading"
        :resendended="resendended"
        :addLoading="addLoading"
       />
    </div>
  </section>
</template>


<script setup>
    import { useParsgiftStore } from '~/store/parsiStore';
    import VerifyCodeModal from '@/components/UserDashboard/auth/verify.vue'
    
    const data = reactive({
      mobile: "",
      otp: ""
    })

    const SToken = useCookie("_uToken", { maxAge: 60 * 60 * 24, path: "/" });
    const { $swal } = useNuxtApp()
    const parsiStore = useParsgiftStore()
    const isLoding = ref(false)
    const error = ref("")
    const activeVerifyModal = ref(false)
    const resendLoading = ref(false)
    const resendended = ref(false)
    const addLoading = ref(false)
    const router = useRouter()

    const do_verifyphone = async () => {
        if(data.mobile != "") {
            isLoding.value = true
            const result = await parsiStore.verify_by_user_mobile(data)
            if(result != false && result.status == 200){
                activeVerifyModal.value = true
                isLoding.value = false
            }
        }else {
            showSwal("خطای اعتبارسنجی" , "لطفا شماره موبایل را وارد کنید", "error")
        }
    }

    const resendOtp = async () => {
        if(data.mobile != "") {
            resendLoading.value = true
            const result = await parsiStore.verify_by_user_mobile(data)
            if(result != false && result.status == 200){
                activeVerifyModal.value = true
                resendLoading.value = false
            }
        }else {
            showSwal("خطای اعتبارسنجی" , "لطفا شماره موبایل را وارد کنید", "error")
        }
    }

    const doSignIn = async (otp) => {
        if(otp != "" && data.mobile != ""){
            addLoading.value = true
            data.otp = otp
            const result = await parsiStore.signin_user(data)
            console.log(result)
            if(result != false){
                if(result.status == 200) {
                    SToken.value = result.access_token
                    addLoading.value = false
                    activeVerifyModal.value = false
                    router.push("/user/dashboard")
                }else {
                    addLoading.value = false
                    showSwal("خطایی رخ داد !" , result.message , "error")
                }
            }else {
                addLoading.value = false
                showSwal("خطایی رخ داد !" , "خطای سمت سرور" , "error")
            }
        }
    }

    const showSwal = (title , text , icon) => {
        $swal.fire({
            title: title,
            text: text,
            icon: icon
        });
    }

  definePageMeta({
    middleware: 'supporter-guest',
    layout: 'login-layout'
  })
  </script>
  
  <style>
  .lds-ring {
    /* change color here */
    color: #1c4c5b
  }
  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
  }
  .lds-ring div {
    box-sizing: border-box;
      display: block;
      position: absolute;
      width: 23px;
      height: 23px;
      border: 3px solid currentColor;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>