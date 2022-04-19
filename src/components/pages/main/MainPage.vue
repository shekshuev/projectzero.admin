<template>
    <ui-button @onButtonClicked="onTestButtonClicked">
        {{ $t("pages.main.testButton") }}
    </ui-button>
    <p>12345</p>
    <p>
        Access token: {{ accessToken }}
    </p>
    <p>
        Refresh token: {{ refreshToken }}
    </p>
    <ui-button @onButtonClicked="onChangeLocaleButtonClicked">
        {{ $t("pages.main.changeLocale") }}
    </ui-button>
</template>

<script>
import { signInAsync } from "@/api/account";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "MainPage",
    methods: {
        ...mapActions(["setAccessToken", "setRefreshToken", "setLocale"]),
        async onTestButtonClicked() {
            const result = await signInAsync("admin", "admin");
            this.setAccessToken(result?.accessToken);
            this.setRefreshToken(result?.refreshToken);
        },
        onChangeLocaleButtonClicked() {
            this.setLocale(this.locale === "en" ? "ru" : "en");
        }
    },
    computed: {
        ...mapGetters(["accessToken", "refreshToken", "locale"])
    }
}
</script>

<style scoped>

</style>