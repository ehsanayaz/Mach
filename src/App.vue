
<script setup lang="ts">
import HelloWorld from 'components/HelloWorld.vue'
import Page from 'components/Page.vue'
import Logo from 'assets/Logo.png'
</script>

<template>
    <Page src="assets/pages/page-wb-01.png" />
    <Page src="assets/pages/page-wb-02.png" />
    <Page src="assets/pages/page-wb-03.png" />
    <img :src="Logo" />
    <!--mg alt="Vue logo" src="./assets/logo.png" /-->
    <!--HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /-->
    <font-awesome-icon :icon="['far', 'edit']" />
</template>

<style>

</style>
