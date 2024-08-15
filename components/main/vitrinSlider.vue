<template>
    <section
    :class="bgColor"
    class="w-full my-16 relative p-6" v-if="isProducts != 0">
        <div class="w-full max-w-screen-xl mx-auto lg:px-6 px-2">
            <slot name="header"></slot>

            <slot name="content"></slot>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    bgColor: {
        required: true,
        type: String
    },
    isProducts: {
        required: false,
        type: [Number]
    }
})
</script>