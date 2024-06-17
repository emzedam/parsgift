<template>
      <Dashboard />
</template>

<script setup>

import Dashboard from "@/components/UserDashboard/dashboard.vue";

definePageMeta({
      middleware: 'user-auth'
})
</script>
