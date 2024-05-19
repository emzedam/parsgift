<template>
  <div class="w-full overflow-y-auto">
    <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <Header />
    </div>

    <News />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import News from "@/components/news/news.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Header,
    Footer,
    News,
  },

  data() {
    return {};
  },
};
</script>
