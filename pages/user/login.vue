<template>

      <Login />

</template>

<script setup>
import Login from "@/components/UserDashboard/auth/login.vue";

definePageMeta({
      middleware: 'user-guest'
})
</script>
