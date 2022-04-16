<template>
    <router-link class="ui-button"
                 :to="to"
                 v-if="tag==='router-link'">
        <slot></slot>
    </router-link>
    <a class="ui-button"
       :href="href"
       v-else-if="tag==='a'">
        <slot></slot>
    </a>
    <button class="ui-button"
            @click="onButtonClicked"
            v-else>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ui-button",
    props: {
        tag: { type: String, default: "button" },
        href: { type: String },
        to: { type: [String, Object] }
    },
    methods: {
        onButtonClicked() {
            this.$emit("onButtonClicked");
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/styles/colors";

.ui-button {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: $blue-500;
    color: $white;
    transition: background-color .3s ease;
    padding: 0 20px;
    border-radius: 8px;
    &:hover {
        background-color: $blue-300;
    }
    &:active {
        background-color: $blue-400;
    }
}
</style>