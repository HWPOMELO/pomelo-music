<template>
    <div class="TRA PMusicCard duration-10" @click="handleClick(item.id)" ref="card"
        @mousemove="e => moveCard(e.clientX, e.clientY)" @mouseleave="resetCard">
        <div class="aspect-square bg-contain rounded-xl mb-4" :style="{
            'mix-blend-mode': isMoving ? 'soft-light' : 'normal',
            'background-image': `url(${item.img})`
        }">
        </div>
        <div class="px-4 text-center overflow-hidden">
            <h2 class="text-textM text-2xl w-full text-nowrap">{{ item.title }}</h2>
            <p class=" text-xl">{{ item.artist }}</p>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
const currentSongId = inject("currentSongId")
const card = ref(null)
const isMoving = ref(false)
const props = defineProps({
    item: { required: true },
    currentSongId: {},
})
const speed = 10

const handleClick = (id) => currentSongId.value = id
const moveCard = (x, y) => {
    isMoving.value = true
    const cp = card.value.getBoundingClientRect()
    const deltaX = x - (cp.left + cp.width / 2)
    const deltaY = y - (cp.top + cp.height / 2)
    const ry = deltaX / speed
    const rx = -deltaY / speed
    card.value.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 180
    card.value.style.background = `linear-gradient(${angle}deg, 
        rgba(255,255,255,0.1) 0%, 
        rgba(255,255,255,0.5) 50%, 
        rgba(255,255,255,0.1) 100%)`
}

const resetCard = () => { card.value.style.transform = "perspective(1200px) rotateX(0) rotateY(0)", card.value.style.background = null, isMoving.value = false }
</script>
