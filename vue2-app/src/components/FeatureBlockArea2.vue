<template>
  <section class="feature-block" data-columns="3">
    <div class="feature-area2-top">
      <div class="feature-title-bg">
        <h2 class="section-title">
          <span class="title-icon">🦸‍♂️</span>
          <span class="title-main">{{ title }}</span>
        </h2>
      </div>
    </div>
    <div class="feature-area2-bottom">
      <div class="section-block-content">
        <div class="section-block-grid" :style="gridStyle">
          <div v-for="(item, idx) in items" :key="idx" class="card" :style="{'--card-idx': idx}">
            <div class="card-inner">
              <div class="card-label-wrap">
                <span class="card-label"><span class="label-icon">🛡️</span>{{ item.label }}</span>
              </div>
              <div class="card-text-wrap">
                <span class="card-text" :title="item.text">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBlockArea2',
  props: {
    title: {
      type: String,
      default: '正式推出，AI救世主拯救你的亚马逊补货决策！'
    },
    items: Array, // [{label, text}]
    columns: {
      type: Number,
      default: 3
    }
  },
  computed: {
    gridStyle() {
      return {
        display: 'grid',
        width: '100%',
        gap: '1.2rem',
        'grid-template-columns': `repeat(${this.columns}, 1fr)`
      }
    }
  }
}
</script>

<style scoped>
.feature-title-bg {
  background: none;
  border-radius: 2.5em 2.5em 0 0;
}
.section-block-content {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-block-grid {
  width: 100%;
  display: grid;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  justify-items: center;
  align-items: center;
}
.feature-block[data-columns='3'] .section-block-grid .card {
  height: 160px;
  background: linear-gradient(135deg, #e3f0ff 0%, #fffbe7 100%);
  border-radius: 2.8em;
  box-shadow: 0 2px 16px 0 rgba(33,150,243,0.08), 0 0 0 8px rgba(255,224,240,0.08);
  overflow: hidden;
  position: relative;
  border: none;
  opacity: 1;
  animation: cardBreath 3.8s ease-in-out infinite;
  animation-delay: calc(0.3s * var(--card-idx, 0));
  transition: box-shadow 0.22s, transform 0.22s, opacity 0.22s;
}
.feature-block[data-columns='3'] .section-block-grid .card:hover {
  transform: scale(1.06) translateY(-6px);
  box-shadow: 0 0 0 0 #fff, 0 0 32px 8px #90caf9cc, 0 8px 32px 0 rgba(255,152,0,0.13);
  z-index: 2;
  animation: cardGuard 1.2s;
}
@keyframes cardGuard {
  0% { box-shadow: 0 0 0 0 #fff, 0 0 0 0 #90caf9cc, 0 8px 32px 0 rgba(255,152,0,0.13); }
  60% { box-shadow: 0 0 0 16px #90caf9aa, 0 0 32px 8px #90caf9cc, 0 8px 32px 0 rgba(255,152,0,0.13); }
  100% { box-shadow: 0 0 0 0 #fff, 0 0 32px 8px #90caf9cc, 0 8px 32px 0 rgba(255,152,0,0.13); }
}
.feature-block[data-columns='3'] .section-block-grid .card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  position: static;
  padding-top: 0;
  justify-content: flex-start;
}
.feature-block[data-columns='3'] .section-block-grid .card-label-wrap {
  background: transparent;
  padding-left: 0;
  padding-bottom: 0.1em;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  height: 50%;
  padding-top: 8px;
  margin-top: 0;
  z-index: 1;
}
.feature-block[data-columns='3'] .section-block-grid .card-label-wrap::after {
  display: none;
}
.feature-block[data-columns='3'] .section-block-grid .card-text-wrap {
  background: transparent;
  margin-top: -8px;
  align-items: flex-start;
  padding-left: 0;
  padding-top: 0.05em;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  z-index: 0;
}
.feature-block[data-columns='3'] .section-block-grid .card-label {
  background: linear-gradient(90deg, #ffe082 0%, #ffd54f 60%, #b2ebf2 100%);
  border-radius: 2.8em;
  padding: 0.32em 0.1em 0.32em 0.1em;
  transition: font-size 0.2s, background 0.2s, padding 0.2s;
  box-shadow: 0 2px 18px 0 rgba(33,150,243,0.10);
  letter-spacing: 1.5px;
  position: relative;
  z-index: 2;
  font-size: 1.7rem;
  font-weight: 900;
  color: #0d47a1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 2px 8px #fffbe7cc;
}
.label-icon {
  font-size: 1.3em;
  margin-right: 0.18em;
  vertical-align: middle;
  filter: drop-shadow(0 2px 8px #90caf9cc);
}
@media (max-width: 600px) {
  .feature-block[data-columns='3'] .section-block-grid .card-label {
    font-size: 1rem;
    background: #f5f5f5;
    color: #111;
    font-weight: bold;
    width: 99.5%;
    min-width: 0;
    max-width: 100%;
    border-radius: 8px;
    padding: 0.4em 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: block;
  }
}
.feature-block[data-columns='3'] .section-block-grid .card-text {
  font-size: 1.08rem;
  color: #666;
  margin: 0;
  text-align: left;
  width: 100%;
  white-space: pre-line;
  word-break: break-all;
  overflow-y: auto;
  padding: 0.18em 1em 0.7em 1em;
  background: transparent;
  border-radius: 2.5em;
  box-sizing: border-box;
  height: 100%;
  display: block;
  margin-top: 0;
  margin-bottom: 0.1em;
}
.feature-block {
  margin: 2.5em auto;
  border-radius: 2.5em;
}
.feature-block:last-of-type {
  margin-bottom: 0;
}
@media (max-width: 900px) {
  .feature-block[data-columns='3'] .section-block-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(3, 1fr);
    gap: 0.7rem;
  }
}
@media (max-width: 600px) {
  .feature-block[data-columns='3'] .section-block-grid .card {
    height: 80px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    padding: 0.2em 0.3em;
  }
  .feature-block[data-columns='3'] .section-block-grid .card-label {
    font-size: 1rem;
    padding: 0.2em 0;
    width: 95%;
    max-width: 95%;
  }
  .feature-block[data-columns='3'] .section-block-grid .card-text {
    font-size: 0.92rem;
    padding: 0.3em 0.5em;
    height: auto;
    min-height: 1.5em;
    max-height: none;
    overflow-y: visible;
    white-space: pre-line;
  }
}
.feature-area2-top {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(90deg, rgba(220,38,38,0.8) 0%, rgba(255,87,34,0.8) 100%);
  border-radius: 2.5em;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.feature-area2-bottom {
  width: 100%;
}
.section-title {
  font-size: 2.1rem;
  font-weight: 900;
  background: linear-gradient(90deg, #fffbe7 0%, #ffe082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 4px 18px rgba(255,152,0,0.18), 0 1.5px 0 #fff;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.3;
  padding: 0 0.5em;
  border-radius: 0.5em;
  box-decoration-break: clone;
  user-select: text;
  animation: bounceIn 1.1s cubic-bezier(.68,-0.55,.27,1.55) infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-icon {
  font-size: 2.1rem;
  color: #ff9800;
  margin-right: 0.3em;
  vertical-align: middle;
  animation: iconFlash 2.2s infinite alternate;
}
.title-main {
  font-weight: 900;
  display: inline-block;
}
@keyframes bounceIn {
  0% { transform: scale(0.7) translateY(-40px); opacity: 0; }
  60% { transform: scale(1.1) translateY(10px); opacity: 1; }
  80% { transform: scale(0.95) translateY(-4px); }
  100% { transform: scale(1) translateY(0); }
}
@keyframes iconFlash {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.5) drop-shadow(0 0 8px #ffd54f); }
}
@keyframes cardFadeIn {
  0% { opacity: 0; transform: translateY(30px) scale(0.96); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.04); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes cardBreath {
  0% { opacity: 0.92; transform: scale(1); }
  20% { opacity: 1; transform: scale(1.04); }
  50% { opacity: 0.92; transform: scale(1); }
  100% { opacity: 0.92; transform: scale(1); }
}
</style> 