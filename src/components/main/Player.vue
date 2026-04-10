<template>
    <audio ref="audio" :src="works[currentSongId - 1].link" />
    <div class="PPlayer h-32 justify-between">
        <PlayerInfo :currentSongId="currentSongId" :works="works" />
        <PlayerProgress :audio="audio"/>
        <PlayerVolume :audio="audio" />
    </div>
</template>

<script setup>
import PlayerInfo from '../normal/PlayerInfo.vue'
import PlayerProgress from '../normal/PlayerProgress.vue'
import PlayerVolume from '../normal/PlayerVolume.vue'
import { inject, ref } from 'vue'
const audio = ref(null)
const works = inject('works')
const currentSongId = inject('currentSongId')
</script>
