<template>
    <div class="px-8">
        <GTitle>我的歌单</GTitle>
        <div class="flex flex-wrap justify-evenly gap-8 h-120 overflow-y-scroll">
            <div v-for="item in playlist" :key="item.id">
                <a :href="item.link" target="_blank">
                    <GCard :item="item" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const playlist = inject("playlist")
</script>
