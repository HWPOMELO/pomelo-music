<template>
    <div class="px-8">
        <GTitle>作品</GTitle>
        <div class="flex flex-wrap justify-evenly gap-8 h-120 overflow-y-scroll">
            <div v-for="item in works" :key="item.id">
                <GCard :item="item" :currentSongId="item.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const works = inject("works")
</script>
