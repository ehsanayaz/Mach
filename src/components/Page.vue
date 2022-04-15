<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
    <div class="max-w-2xl mx-auto mt-4 mb-8 border border-gray-200 shadow-md select-none">
        <img class="w-full" :src="src" />
    </div>
</template>