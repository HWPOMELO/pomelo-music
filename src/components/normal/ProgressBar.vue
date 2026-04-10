<template>
    <div ref="bar" class="TRAProg rounded-xl h-full bg-textS w-full" @mousedown="startDrag">
        <div class="h-full bg-primary rounded-xl TRAProg" :style="{ width: `${percent}%` }">
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    currentValue: { required: true },
    maxValue: { required: true },
})
const emit = defineEmits()
const bar = ref(null)
const isDragging = ref(false)
const percent = computed(() => {
    return Math.min((props.currentValue / props.maxValue) * 100, 100)
})

function throttle(f, w) {
    let previous = 0;
    return function (...args) {
        const now = Date.now();
        if (now - previous >= w) {
            previous = now;
            f.apply(this, args);
        }
    };
}

const startDrag = (e) => {
    isDragging.value = true
    draging(e)
    const throttleDrging = throttle(draging, 16)
    document.addEventListener('mousemove', throttleDrging)
    document.addEventListener('mouseup', stopDrag)
}
const draging = (e) => {
    if (!isDragging.value || !bar.value) return
    const rect = bar.value.getBoundingClientRect()
    const ratio = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1))
    emit('update', ratio * props.maxValue)
    emit('play')
}
const stopDrag = () => isDragging.value = false
</script>
