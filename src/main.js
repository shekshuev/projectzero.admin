import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { TokenError } from "@/utils/errors";
import ui from "@/components/ui/register";
import i18n from "@/plugins/i18n";

const app = createApp(App)
    .use(store)
    .use(i18n)
    .use(router);

ui.forEach(component => app.component(component.name, component));

app.config.errorHandler = async (err, vm, info) => {
    if (err instanceof TokenError || err?.response?.status === 403) {
        // go to login page
        // await router.replace({ name: "Signin" });
    }
    // show error to user (popup, toast, etc)
    console.log(err)
};
i18n.global.locale = store.getters.locale;
app.mount('#app');
