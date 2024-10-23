<script setup lang="ts">
import * as netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.on("login", (user) => {
  console.log({ user });
});
</script>

<template>
  <main>hello</main>
  <button @click="netlifyIdentity.open()">Open</button>
</template>

<style scoped></style>
