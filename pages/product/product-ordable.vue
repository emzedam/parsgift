<template>
  <div class="w-full overflow-y-auto">
    <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
      <Header />
      <div class="my-4">
        <productordable />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import productordable from "@/components/product/productordable.vue";

export default {
  components: {
    Header,

    productordable,
  },

  data() {
    return {};
  },
};
</script>
