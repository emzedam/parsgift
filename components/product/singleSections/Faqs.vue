<template>
    <div class="content bg-white border text-justify p-4 rounded-lg font-iransans">
        <section
        class="relative bg-white/70 backdrop-blur-sm mt-4 rounded-t-3xl"
      >
        <div class="w-full max-w-screen-xl mx-auto rounded-lg">
          <ul class="space-y-2" v-if="faqsList.length != 0">
            <li v-for="(faqs , index) in faqsList" :key="faqs.id">
              <h2 id="accordion-arrow-icon-heading-3">
                <button
                  @click="openSubMenu(faqs.id)"
                  :class="submenuIndex == faqs.id ? 'rounded-t-lg' : 'rounded-lg'"
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
                >
                  <span>{{ faqs.question }}</span>
                  <i
                    class="fa w-3 h-3 rotate-180 shrink-0 text-gray-500"
                    :class="submenuIndex == faqs.id ? 'fa-chevron-down' : 'fa-chevron-up'"
                  ></i>
                </button>
              </h2>
              <div class="question">
                <collapse-transition>
                  <div
                    v-if="submenuIndex == faqs.id"
                    class="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg"
                  >
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      {{ faqs.response }}
                    </p>
                  </div>
                </collapse-transition>
              </div>
            </li>
          </ul>
          <div class="p-3 text-center" v-else>خالی میباشد !</div>
        </div>
      </section>
    </div>
</template>

<script>
import CollapseTransition from "/Module/CollapseTransition.vue";
export default {
  components: {
    CollapseTransition
  },
  props: {
    faqsList: {
      required: true,
      type: [Array , Object]
    }
  },
  data() {
    return {
      submenuIndex: null,
    };
  },

  methods: {
    openSubMenu(index) {
      if (this.submenuIndex == index) {
        this.submenuIndex = null;
      } else {
        this.submenuIndex = index;
      }
    },
  },
};
</script>