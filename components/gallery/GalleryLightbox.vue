<script setup lang="ts">
import type { GalleryItem } from '~/data/gallery'
defineProps<{ item: GalleryItem }>()
const emit = defineEmits<{ close: [] }>()
const modal = ref<HTMLDialogElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let overflow = ''
onMounted(() => {
  overflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  modal.value?.showModal()
})
onBeforeUnmount(() => {
  document.body.style.overflow = overflow
})
</script>
<template>
  <dialog
    @keydown.tab.prevent="closeButton?.focus()"
    ref="modal"
    class="lightbox"
    aria-labelledby="gallery-title"
    @cancel.prevent="emit('close')"
    @click="$event.target === modal && emit('close')"
  >
    <div class="lightbox-inner">
      <button
        ref="closeButton"
        class="icon-button lightbox-close"
        aria-label="Tutup ilustrasi"
        autofocus
        @click="emit('close')"
      >
        <UiIcon name="close" /></button
      ><img :src="item.image" :alt="`Ilustrasi ${item.category}`" />
      <h2 id="gallery-title">{{ item.title }}</h2>
      <p>Ilustrasi contoh, bukan dokumentasi kegiatan nyata.</p>
    </div>
  </dialog>
</template>
