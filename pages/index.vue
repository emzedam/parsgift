<template>
    <div class="w-full overflow-y-auto">
      <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
     <Header/>
     </div>

     <Main/>

     <Footer/>   
    </div>

</template>

<script>

import Header from "@/components/header/header.vue";
import Main from "@/components/main/main.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Header,
    Footer,
    Main
  },

  data() {
    return {
     

    }
  },





}
</script>