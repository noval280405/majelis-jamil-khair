<script setup lang="ts">
import { placementQuestions, recommendProgram } from '~/data/placement'
usePageSeo('Cek Level Ngaji')
const started = ref(false)
const completed = ref(false)
const step = ref(0)
const answers = ref<number[]>(Array(5).fill(-1))
const question = computed(() => placementQuestions[step.value]!)
const result = computed(() => recommendProgram(answers.value))
const panel = ref<HTMLElement | null>(null)
function focusPanel() {
  nextTick(() => panel.value?.focus())
}
function start() {
  started.value = true
  focusPanel()
}
function next() {
  if (answers.value[step.value] === -1) return
  if (step.value < placementQuestions.length - 1) step.value++
  else completed.value = true
  focusPanel()
}
function back() {
  step.value--
  focusPanel()
}
function restart() {
  answers.value = Array(5).fill(-1)
  step.value = 0
  completed.value = false
  started.value = false
  focusPanel()
}
</script>
<template>
  <div>
    <UiPageHero
      title="Sudah Tahu Level Ngajimu?"
      description="Jawab beberapa pertanyaan sederhana untuk mendapatkan rekomendasi program belajar."
      eyebrow="Cek Level"
    />
    <section class="container section">
      <div ref="panel" class="placement-panel" tabindex="-1">
        <PlacementIntro v-if="!started" @start="start" /><PlacementResult
          v-else-if="completed"
          :slug="result"
          @restart="restart"
        /><template v-else
          ><PlacementProgress
            :current="step + 1"
            :total="placementQuestions.length" /><PlacementQuestion
            :key="step"
            :question="question.question"
            :options="question.options"
            :model-value="answers[step]!"
            @update:model-value="answers[step] = $event" />
          <div class="placement-actions">
            <button v-if="step > 0" class="btn btn-secondary" @click="back">← Sebelumnya</button
            ><span v-else /><button class="btn" :disabled="answers[step] === -1" @click="next">
              {{ step === 4 ? 'Lihat rekomendasi' : 'Selanjutnya' }}
              <UiIcon name="arrow" :size="18" />
            </button></div
        ></template>
      </div>
    </section>
  </div>
</template>
