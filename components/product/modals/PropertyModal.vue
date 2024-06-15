<template>
    <!-- انتخاب ویزگی مدال -->
  <div
    :class="propertyModalState == false ? 'hidden' : 'fixed'"
    class=" inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 "
  >
  <div
    @click="closeModal()"
    class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
  ></div>
  <div
    class="relative w-full max-w-7xl transform px-4 transition-all opacity-100 scale-100"
  >
    <div class="overflow-hidden rounded-lg bg-white shadow-md">
      <div class="relative p-8">


        <div class="category mt-8">
          <span class="text-2xl font-iransans">انتخاب نوع محصول:</span>

          <ul class="grid lg:grid-cols-2 gap-4">
            <li
              v-for="(attribute , index) in attributes" :key="attribute.id"
              @click="selectAttr(attribute)"
              class="bg-gray-100 rounded-lg mt-4 text-black font-semibold justify-between flex cursor-pointer hover:bg-gray-200 transition-all overflow-hidden relative"
            >
               <span class="px-4 py-3">
                <i 
                v-if="selected_attr != null && attribute.id == selected_attr.id"
                class="fa fa-check text-green-500 ml-2"></i>
                {{ attribute.title }}
               </span
              >
              <span class="bg-blue-500 h-full px-4 py-3 text-white"
                >{{ attribute.price }}<small>ریال</small>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- انتخاب ویزگی مدال -->
</template>

<script setup>
const emit = defineEmits(["closeModal" , "selectAttr"])
const props = defineProps({
    attributes: {
        required: true,
        type: [Array , Object]
    },
    propertyModalState: {
        required: true,
        type: Boolean
    },
    selected_attr: {
        required: true,
        type: [Array , Object , null]
    }
})

const closeModal = () => {
    emit("closeModal")
}

const selectAttr = (data) => {
    emit("selectAttr" , data)
    emit("closeModal")
}
</script>