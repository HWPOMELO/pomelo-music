<template>
    <div class="px-8 py-8">
        <GTitle>友情链接</GTitle>
        <div class="flex flex-wrap justify-evenly text-center gap-8">
            <div v-for="item in friendship" :key="item.id">
                <div class="w-48 h-16 text-xl">
                    <a :href="item.link" target="_blank" class="hover:text-textM ">{{ item.artist }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const friendship = inject("friendship")
</script>
