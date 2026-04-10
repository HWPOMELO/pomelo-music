<template>
    <div class="w-lg">
        <p @click="toggleMute" class="TRA inline-block ml-36">{{ muteIcon }}</p>
        <div class="w-64 h-4 inline-block ml-8">
            <div v-if="isMute" class="TRA rounded-xl h-full bg-textS w-full"></div>
            <ProgressBar v-else :maxValue="1" :currentValue="volume" @update="handleVolume"></ProgressBar>
        </div>
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'
import { ref } from 'vue'
const props = defineProps({ audio: { required: true }, })
const isMute = ref(false)
const muteIcon = ref('🔈')
const volume = ref(1)

const handleVolume = (v) => { volume.value = v, props.audio.volume = v }
const toggleMute = () => {
    isMute.value = !isMute.value
    muteIcon.value = isMute.value ? '🔇' : '🔈'
    if (isMute.value) { volume.value = props.audio.volume, props.audio.volume = 0 }
    else props.audio.volume = volume.value
}
</script>
