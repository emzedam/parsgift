<template>
    <div
      v-html="content"
      class="content bg-white border text-justify p-4 rounded-lg font-iransans"
    >
    </div>
</template>

<script setup>
const props = defineProps({
    content: {
        required: true,
        type: String
    }
})
</script>