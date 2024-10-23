<script setup lang="ts">
import { useAuth } from "./composables/useAuth";

const { user, login, logout } = useAuth();
</script>

<template>
  <main>
    <template v-if="user">
      <main>hello, {{ user.email }}</main>

      <button @click="logout()">Logout</button>
    </template>

    <template v-else>
      <button @click="login()">Login</button>
    </template>
  </main>
</template>

<style scoped></style>
