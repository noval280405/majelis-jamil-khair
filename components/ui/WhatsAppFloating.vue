<script setup lang="ts">
import { whatsappUrl } from '~/data/site'
const url = whatsappUrl(
  "Assalamu'alaikum Majelis Jamil Khair, saya ingin bertanya mengenai program belajar mengaji.",
)
</script>
<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Chat WhatsApp (nomor contoh)"
    ><UiIcon name="chat" :size="25" /><span>Yuk, ngobrol!</span></a
  >
</template>
