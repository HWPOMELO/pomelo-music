<template>
    <div class="px-8 py-16">
        <GTitle>找到我</GTitle>
        <p class="text-xl mb-16 text-center">欢迎来各大平台听我的歌 | 合作交流</p>
        <div class="text-textM flex flex-wrap justify-evenly font-black">
            <div v-for="item in links" :key="item.id">
                <div class="TRA PLinkCard flex items-center justify-center">
                    <div class="size-8 mr-2" :style="{ 'background-image': `url(${item.icon})` }"></div>
                    <a :href="item.link" target="_blank">{{ item.name }}</a>
                </div>
            </div>
        </div>
        <p class="mt-2 text-2xl text-center text-textM block">
            邮箱: <a class="text-textS hover:text-textM" href="mailto:wpomelow@qq.com">wpomelow@qq.com</a>
        </p>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const links = inject("links")
</script>
