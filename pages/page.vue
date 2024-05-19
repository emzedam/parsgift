<template>
  <div class="w-full overflow-y-auto">
    <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <Header />

      <Page />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Page from "@/components/pages/page.vue";
import Footer from "@/components/footer/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Page,
  },

  data() {
    return {};
  },
};
</script>
