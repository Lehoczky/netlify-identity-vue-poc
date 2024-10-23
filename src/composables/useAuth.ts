import { createGlobalState } from "@vueuse/core";
import * as netlifyIdentity from "netlify-identity-widget";
import { ref } from "vue";

netlifyIdentity.init({
  locale: "en",
  logo: false,
});

export const useAuth = createGlobalState(() => {
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

  return {
    user,
    login: () => netlifyIdentity.open("login"),
    logout: () => netlifyIdentity.logout(),
  };
});
