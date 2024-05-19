<template>
  <div class="w-full overflow-y-auto">
    <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <Header />
      <div class="my-4">
        <permium />
      </div>
    </div>
    <Footer class="mb-6" />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import permium from "@/components/product/PermiumAccount.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Header,
    Footer,
    permium,
  },

  data() {
    return {};
  },
};
</script>
