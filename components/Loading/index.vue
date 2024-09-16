<template>
    <div :class="isShow == true ? 'loading show' : 'loading hide'">
       <img src="@/assets/images/logo.png" width="200" />
    </div>
</template>

<script setup>
const props = defineProps({
    isShow: {
        required: true,
        type: Boolean
    }
})
</script>

<style>
.loading {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  top:0;
  right:0;
  left:0;
  bottom:0;
  transition:all 1s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all .3s ease-out;
}

.loading.show {
  visibility: visible;
  opacity: 1;
}

.loading.hide {
  visibility: hidden;
  opacity: 0;
}
</style>