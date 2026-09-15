<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="hero-badge"><span /> Tempat tumbuh, bersama Al-Qur’an</div>
        <h1>
          Belajar Al-Qur’an<br />Jadi Lebih
          <span class="hero-word"
            >Ceria.<svg viewBox="0 0 245 18" aria-hidden="true">
              <path
                d="M4 12Q100-2 237 7M35 17Q154 4 225 13"
                fill="none"
                stroke="#edc75b"
                stroke-width="5"
                stroke-linecap="round"
              /></svg
          ></span>
        </h1>
        <p>
          Langkah kecil, kebaikan sepanjang hayat. Belajar dari dasar hingga lebih lancar bersama
          pengajar yang membimbing dengan sabar.
        </p>
        <div class="button-row">
          <UiPrimaryButton to="/daftar"
            >Mulai Belajar <span class="sr-only">Al-Qur’an</span></UiPrimaryButton
          ><UiPrimaryButton to="/program" secondary>Lihat Program</UiPrimaryButton>
        </div>
        <div class="hero-audience">
          <div class="avatar-stack">
            <img src="/images/teachers/ahmad.svg" alt="" /><img
              src="/images/teachers/aisyah.svg"
              alt=""
            /><img src="/images/teachers/salman.svg" alt="" />
          </div>
          <div>
            <strong>Untuk setiap langkah & usia</strong
            ><span>Anak <b>·</b> Remaja <b>·</b> Dewasa</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <HomeFloatingDecorations /><img
          class="hero-art"
          src="/images/hero/study-together.svg"
          alt="Ilustrasi anak laki-laki berpeci dan anak perempuan berhijab sedang membaca bersama"
          width="640"
          height="520"
          fetchpriority="high"
        />
        <div class="float-note note-top">
          <span class="note-icon tone-yellow"><UiIcon name="book" :size="22" /></span>
          <div><strong>Selangkah lebih dekat</strong><small>dengan Al-Qur’an</small></div>
          <span class="note-spark">✦</span>
        </div>
        <div class="float-note note-bottom">
          <span class="note-icon tone-mint"><UiIcon name="heart" :size="22" /></span>
          <div>
            <strong>Belajar tanpa takut salah</strong><small>Nyaman, ceria, dan terarah</small>
          </div>
        </div>
        <div class="hero-caption">sahabat belajar, sahabat bertumbuh <span>♡</span></div>
      </div>
    </div>
    <div class="container hero-benefits">
      <span><UiIcon name="check" :size="17" /> Mulai dari dasar</span
      ><span><UiIcon name="heart" :size="17" /> Pendampingan yang sabar</span
      ><span><UiIcon name="laptop" :size="17" /> Online & tatap muka</span
      ><span><UiIcon name="people" :size="17" /> Anak hingga dewasa</span>
    </div>
  </section>
</template>
