<template>
    <div class="flex items-center w-lg">
        <div :style="{ 'background-image': `url(${works[currentSongId - 1].img})` }"
            class="w-16 h-16 rounded bg-contain">
        </div>
        <div class="pl-8">
            <h2 class="text-textM text-2xl">{{ works[currentSongId - 1].title }}</h2>
            <p class="text-xl">{{ works[currentSongId - 1].artist }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ works: { required: true }, currentSongId: { required: true } })
</script>
