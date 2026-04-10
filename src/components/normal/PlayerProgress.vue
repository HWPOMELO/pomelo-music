<template>
    <div class="items-center w-[50%]">
        <div class="h-4 mb-4">
            <ProgressBar :maxValue="totalTime" :currentValue="currentTime" @update="handleCurrentTime"
                @play="audio.play(), isPlay = true, playIcon = 'II'">
            </ProgressBar>
        </div>
        <div class="flex items-center justify-between">
            <p class="text-xl">{{ formatTime(currentTime) }}</p>
            <div class="text-xl">
                <button class="TRA hover:text-textM " @click="changeCurrentSongId('previous')">
                    &lt;
                </button>
                <button class="TRA hover:text-textM hover:text-text w-16" @click="togglePlay">
                    {{ playIcon }}
                </button>
                <button class="TRA hover:text-textM" @click="changeCurrentSongId('next')">
                    &gt;
                </button>
            </div>
            <p class="text-xl">{{ formatTime(totalTime) }}</p>
        </div>
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'
import { ref, watch, inject } from 'vue'
const props = defineProps({ audio: { required: true } })
const currentSongId = inject('currentSongId')
const works = inject('works')
const isPlay = ref(false)
const playIcon = ref('O')
const currentTime = ref(0)
const totalTime = ref(0)

const formatTime = (t) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`
const handleCurrentTime = (t) => {
    props.audio.currentTime = t
    currentTime.value = t
}
const togglePlay = () => {
    isPlay.value = !isPlay.value
    playIcon.value = isPlay.value ? 'II' : 'O'
    isPlay.value ? props.audio.play() : props.audio.pause()
}
const changeCurrentSongId = (str) => {
    if (str === 'next') currentSongId.value < works.value.length ? currentSongId.value++ : (currentSongId.value = 1)
    else currentSongId.value > 1 ? currentSongId.value-- : (currentSongId.value = works.value.length)
}
const initAudio = () => {
    props.audio.addEventListener('timeupdate', () => currentTime.value = Math.floor(props.audio.currentTime))
    props.audio.addEventListener('loadedmetadata', () => totalTime.value = Math.floor(props.audio.duration || 0))
}
watch(() => currentSongId.value, () => {
    props.audio.load()
    currentTime.value = 0
    if (isPlay.value) props.audio.play()
})
watch(() => props.audio, () => initAudio())
</script>
