<template>
    <!-- انتخاب اکانت مدال -->
  <div
  class="fixed inset-0 z-[999] flex items-start justify-center pt-4"
>
  <div
    class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
  ></div>
  <div
    class="overflow-scroll relative w-full max-w-2xl transform px-4 transition-all opacity-100 scale-100"
  >
    <div class=" rounded-lg bg-white shadow-md">
      <div class="relative">
        <div class="category p-8">
          <ul class="flex items-center gap-x-4" v-if="authUser && authUser.accounts.length == 0">
            <li class="py-3 rounded-lg mt-4 font-semibold font-fas">
              شما در حال حاضر اکانت ندارید. برای ساخت بر روی افزودن اکانت جدید
              کلیک کنید.
            </li>
          </ul>
          <ul class="flex items-center gap-x-4" v-if="authUser && authUser.accounts.length != 0">
            <li v-for="(account , index) in authUser.accounts" :key="account.id" class="py-3 rounded-lg mt-4 font-semibold font-fas">
              {{ account.account.name }}
            </li>
          </ul>
        </div>

        <button
          type="button"
          @click="addNewAccountState = !addNewAccountState"
          class="p-4 w-full bg-green-50 flex items-center text-green-700 font-bold"
        >
          <i class="fa fa-plus pl-2"></i><span>افزودن اکانت جدید</span>
        </button>

        <div class="py-6 relative px-8" v-if="addNewAccountState == true">
          <label
            for="country"
            class="block pb-2 pr-1 text-sm font-medium text-gray-700"
          >
            انتخاب اکانت</label
          ><button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="py-4 mt-1 text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center w-full justify-between"
            type="button"
            @click="accountsListState = !accountsListState"
          >
            انتخاب حساب
            <i
              class="fa-duotone -duotone fa-angle-down text-[15px] ml-1 w-4 h-4"
            ></i>
          </button>
          <div
            :class="accountsListState == true ? '' : 'hidden'"
            class="z-10 w-full mt-2 bg-white border rounded-lg absolute right-0 top-24"
          >
            <ul
               v-if="productData && productData.accounts.length != 0"
              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
              aria-labelledby="dropdownSearchButton"
            >
              <li v-for="(account , index) in productData.accounts" :key="account.id">
                <div
                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                >
                  <label
                    @click="selectAccount(account)"
                    for="checkbox-item-11"
                    class="flex cursor-pointer items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                    ><span class="flex items-center w-full pr-2 text-right"
                      >{{ account.account.name }}</span
                    ><i
                      v-if="selectedAccount != null && selectedAccount.id == account.id"
                      class="flex items-center pl-2 text-left text-red-500 fa-solid fa-check"
                    ></i
                  ></label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="addNewAccountState == true && selectedAccount != null" class="category font-fas font-semibold text-sm">
          <div class="px-8" v-if="selectedAccount.account && selectedAccount.account.values.length != 0">
            <input
              v-for="(account , index) in selectedAccount.account.values" :key="account.id"
              :type="account.type"
              class="appearance-none border border-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none mb-2 text-sm"
              :placeholder="account.placeholder"
              v-model="account.value"
            />

            <button
              type="button"
              @click="addUserAccount()"
              class="bg-green-500 px-4 py-2 rounded-lg text-white mt-4"
            >
              <span>ثبت اکانت</span><i class="fa fa-chevron-left pr-4"></i>
            </button>
          </div>

          <div class="close border-t my-4 px-8">
            <button
              type="button"
              class="bg-blue-500 px-4 py-2 rounded-lg text-white mt-4"
            >
              <span>تایید و بستن</span><i class="fa fa-chevron-left pr-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- انتخاب اکانت مدال -->
</template>

<script setup>
import { useParsgiftStore } from '~/store/parsiStore';
const { $swal } = useNuxtApp()
const parsgiftStore = useParsgiftStore()

const props = defineProps({
  productData: {
    required: true,
    type: [Array , Object]
  },
  authUser: {
    required: true,
    type: [Array , Object]
  }
})

onMounted(() => {
  console.log(props.authUser)
})

const selectedAccount = ref(null)
const accountsListState = ref(false)
const addNewAccountState = ref(false)

const selectAccount = (account) => {
  selectedAccount.value = account
  accountsListState.value = false
}

const addUserAccount = async () => {
  const result = await parsgiftStore.add_user_account({
    user_id: props.authUser.id,
    account_id: selectedAccount.value.account_id,
    data: selectedAccount.value.account.values
  })
  if(result != false && result.status == 200) {
    console.log(result.result)
    // props.authUser.accounts = [...props.authUser.accounts , result.result]
    // test with emit
  }else if(result != false && result.status == 501){
    showSwal("خطایی رخ داد" , "لطفا تمامی فیلد هارا پر کنید", "error");
  }else{
    showSwal("خطایی رخ داد" , result.message , "error");
  }
}


const showSwal = (title , text , icon) => {
  $swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

</script>