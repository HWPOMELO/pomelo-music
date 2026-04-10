<template>
    <div class="TRA PMusicCard duration-10" @click="handleClick(item.id)" ref="card"
        @mousemove="e => moveCard(e.clientX, e.clientY)" @mouseleave="resetCard">
        <div class="aspect-square bg-contain rounded-xl mb-4" :style="{
            'mix-blend-mode': isMoving ? 'screen' : 'normal',
            'background-image': `url(${item.img})`
        }">
        </div>
        <div class="px-4 text-center overflow-hidden mt-8">
            <h2 class="text-textM text-2xl">{{ item.title }}</h2>
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
    const ry = (x - cp.x - (cp.width / 2)) / speed
    const rx = (y - cp.y - (cp.height / 2)) / speed * -1
    card.value.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
    const deg = (x * y) / 1000
    card.value.style.background = `linear-gradient(${deg}deg, #fff, rgba(0, 0, 0, 0)`;
}
const resetCard = () => { card.value.style.transform = "perspective(1200px) rotateX(0) rotateY(0)", card.value.style.background = null, isMoving.value = false }
</script>
