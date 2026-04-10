<template>
    <nav class="PHeader">
        <a href="#pomelo" target="_self" class="text-primary ">POMELO</a>
        <div class="grow"></div>
        <a href="#tracklist" target="_self" class="hover:text-textM">作品</a>
        <a href="#playlist" target="_self" class="hover:text-textM">歌单</a>
        <a href="#findme" target="_self" class="hover:text-textM">联系</a>
        <a href="#friendship" target="_self" class="hover:text-textM">友情链接</a>
        <button class="hover:text-textM cursor-pointer" @click="toggelTheme">{{ themeIcon }}</button>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const themeIcon = ref("暗")
const isLight = ref(true)
const toggelTheme = () => { isLight.value = !isLight.value, themeIcon.value = isLight.value ? "暗" : "亮", document.documentElement.classList.toggle('dark') }
</script>
