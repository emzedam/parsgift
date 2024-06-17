<template>

    <Register />

</template>

<script setup>
import Register from "@/components/UserDashboard/auth/register.vue";
definePageMeta({
      middleware: 'user-guest'
})
</script>
