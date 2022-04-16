import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import clientModule from "./modules/account";
import i18n from "@/plugins/i18n";

export default createStore({
    state: {
        locale: "ru"
    },
    getters: {
        locale: state => state.locale
    },
    mutations: {
        setLocale(state, locale) {
            state.locale = locale;
        }
    },
    actions: {
        setLocale(context, locale) {
            if (["en", "ru"].includes(locale)) {
                context.commit("setLocale", locale);
                i18n.global.locale = locale;
            }
        }
    },
    modules: {
        clientModule
    },
    plugins: [
        createPersistedState({
            key: "public",
            paths: ["locale"]
        }),
        createPersistedState({
            key: "client",
            paths: ["clientModule.accessToken", "clientModule.refreshToken"]
        })
    ]
})
