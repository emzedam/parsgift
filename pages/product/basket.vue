<template>
  <div class="w-full overflow-y-auto">
    <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <Header />

      <Basket />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Basket from "@/components/product/basket.vue";
import Footer from "@/components/footer/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Basket,
  },

  data() {
    return {};
  },
};
</script>
