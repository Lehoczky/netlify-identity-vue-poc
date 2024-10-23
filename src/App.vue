<script setup lang="ts">
import { ref } from "vue";
import * as netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init({
  locale: "en",
});

const user = ref<netlifyIdentity.User | null>(netlifyIdentity.currentUser());

netlifyIdentity.on("init", (_user) => {
  user.value = _user;
});

netlifyIdentity.on("login", (_user) => {
  user.value = _user;
  netlifyIdentity.close();
});

netlifyIdentity.on("logout", () => {
  user.value = null;
});
</script>

<template>
  <main>
    <template v-if="user">
      <main>hello, {{ user.email }}</main>

      <button @click="netlifyIdentity.logout()">Logout</button>
    </template>

    <template v-else>
      <button @click="netlifyIdentity.open('login')">Login</button>
    </template>
  </main>
</template>

<style scoped></style>
