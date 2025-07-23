<template>
  <section class="feature-block" :data-columns="columns">
    <div class="feature-title-bg">
      <h2 class="section-title"><span class="title-icon">📊</span>{{ title }}</h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid">
        <div class="card" v-for="(item, idx) in items" :key="idx">
          <div class="card-inner">
            <div class="card-label"><span class="label-icon">🔗</span>{{ item.label }}</div>
            <div class="card-text"><span class="card-text-scroll">{{ item.text }}&nbsp;&nbsp;{{ item.text }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea3',
  props: {
    title: String,
    items: Array,
    columns: {
      type: Number,
      default: 4
    }
  }
}
</script>
<style scoped>
.feature-block {
  margin: 2.5em auto;
  border-radius: 2.5em;
}
.feature-title-bg {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(90deg, #e3f0ff 0%, #b2ebf2 100%);
  border-radius: 2.5em;
  padding: 1.1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.section-title {
  font-size: 2.1rem;
  font-weight: 900;
  background: linear-gradient(90deg, #2196f3 0%, #00bcd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 2px 8px #b2ebf2cc;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.3;
  padding: 0 0.5em;
  border-radius: 0.5em;
  box-decoration-break: clone;
  user-select: text;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeInTitle 1.2s ease-in forwards, titlePulse 2.8s ease-in-out infinite;
}
.section-title .title-icon {
  font-size: 2.1rem;
  margin-right: 0.3em;
  vertical-align: middle;
  filter: drop-shadow(0 2px 8px #b2ebf2cc);
}
@keyframes fadeInTitle {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes titlePulse {
  0% { transform: scale(1); }
  10% { transform: scale(1.04); }
  20% { transform: scale(1.08); }
  30% { transform: scale(1.12); }
  40% { transform: scale(1.16); }
  50% { transform: scale(1.18); }
  60% { transform: scale(1.18); }
  70% { transform: scale(1.14); }
  80% { transform: scale(1.08); }
  90% { transform: scale(1.03); }
  100% { transform: scale(1); }
}
.feature-block[data-columns='4'] .section-block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}
/* 移除小卡片内所有样式，重构为区域2风格 */
.feature-block[data-columns='4'] .section-block-grid .card {
  height: 160px;
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 50%, #70e1f5 100%);
  border-radius: 2.8em;
  overflow: hidden;
  position: relative;
  opacity: 1;
  transition: box-shadow 0.22s, transform 0.22s, opacity 0.22s;
  border: none !important;
  box-shadow: none !important;
}
.feature-block[data-columns='4'] .section-block-grid .card:hover {
  /* 去除放大动画，hover无变化 */
  transform: none !important;
  box-shadow: none !important;
  z-index: 2;
  animation: none !important;
}
@keyframes cardGuard {
  0% { box-shadow: 0 0 0 0 #fff, 0 0 0 0 #90caf9cc; }
  60% { box-shadow: 0 0 0 16px #90caf9aa, 0 0 32px 8px #90caf9cc; }
  100% { box-shadow: 0 0 0 0 #fff, 0 0 32px 8px #90caf9cc; }
}
.feature-block[data-columns='4'] .section-block-grid .card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  padding: 0;
}
.feature-block[data-columns='4'] .section-block-grid .card-label {
  width: 78%;
  min-width: 120px;
  max-width: 90%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90deg, #b2ebf2 0%, #2196f3 100%);
  border-radius: 2.5em;
  padding: 0.32em 0.1em 0.32em 0.1em;
  font-size: 1.45rem;
  font-weight: 900;
  color: #01579b;
  letter-spacing: 1.2px;
  margin-top: 1.1em;
  margin-bottom: 0.25em;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(33,150,243,0.10);
  position: relative;
}
.feature-block[data-columns='4'] .section-block-grid .card-label .label-icon {
  font-size: 1.2em;
  margin-right: 0.18em;
  vertical-align: middle;
  filter: drop-shadow(0 2px 8px #b2ebf2cc);
}
.feature-block[data-columns='4'] .section-block-grid .card-text {
  font-size: 1.25rem;
  color: #1565c0;
  line-height: 1.6;
  word-break: break-all;
  padding: 0.18em 1em 0.7em 1em;
  background: transparent;
  border-radius: 2.5em;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.25em;
  margin-bottom: 0.2em;
  text-align: left;
  display: block;
  overflow: hidden;
  position: relative;
}
.feature-block[data-columns='4'] .section-block-grid .card-text-scroll {
  display: inline-block;
  white-space: nowrap;
  transition: transform 0.3s;
  will-change: transform;
  position: relative;
  animation: scroll-text-marquee 12s linear infinite;
}
@keyframes scroll-text-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@media (max-width: 900px) {
  .feature-block[data-columns='4'] .section-block-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: repeat(2, 1fr);
    gap: 0.18rem !important;
  }
}

/* 强制覆盖移动端字体缩小 */
@media (max-width: 600px) {
  .feature-title-bg {
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
  }
  .section-title {
    text-align: center !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
    display: flex !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card {
    height: 80px !important;
    min-height: 0 !important;
    padding: 0 !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-label {
    font-size: 0.98rem !important;
    padding: 0.18em 0.1em 0.18em 0.1em !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-text {
    font-size: 0.78rem !important;
    padding: 0.15em 0.3em !important;
    margin: 0 0.1em !important;
    align-items: flex-start !important;
    text-align: left !important;
    white-space: pre-line !important;
    line-height: 1.3 !important;
    overflow: visible !important;
  }
  .section-title {
    font-size: 1.35rem !important;
  }
}
@media (min-width: 601px) {
  .feature-block[data-columns='4'] .section-block-grid .card {
    transition: box-shadow 0.22s, transform 0.22s, opacity 0.22s !important;
    will-change: transform, box-shadow !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card:hover {
    transform: scale(1.08) translateY(-8px) !important;
    box-shadow: 0 8px 32px 0 #90caf9cc, 0 0 0 8px #b2ebf255 !important;
    z-index: 3 !important;
    animation: none !important;
  }
}
</style> 