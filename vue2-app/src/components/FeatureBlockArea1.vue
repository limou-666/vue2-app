<template>
  <section class="feature-block">
    <div class="feature-title-bg">
      <h2 class="section-title animated-title">
        <span class="title-icon">❗</span>
        <span class="title-main">{{ title }}</span>
      </h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid" :style="gridStyle">
        <div v-for="(item, idx) in items" :key="idx" class="card">
          <div class="card-inner">
            <span v-if="item.icon" class="card-icon">{{ item.icon }}</span>
            <span v-if="item.label" class="card-label">{{ item.label }}</span>
            <span class="card-text" :title="item.text"><span class="card-text-scroll">{{ item.text }}</span></span>
          </div>
        </div>
      </div>
      <div v-if="bottomTitle || bottomDesc" class="feature-bottom animated-case">
        <div class="bottom-title">
          <span class="case-icon">⚠️</span>
          <span>{{ bottomTitle }}</span>
        </div>
        <div class="bottom-desc">
          <span v-html="highlightNumbers(bottomDesc)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBlockArea1',
  props: {
    title: String,
    items: Array, // [{icon, label, text}]
    bottomTitle: String,
    bottomDesc: String,
    columns: {
      type: Number,
      default: 4
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
  },
  methods: {
    highlightNumbers(text) {
      // 高亮数字和“件”、“万”等关键词
      if (!text) return '';
      return text.replace(/(\d+[万件元]*)/g, '<span class="case-number">$1</span>');
    }
  }
}
</script>

<style scoped>
.feature-title-bg {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(90deg, rgba(220,38,38,0.92) 0%, rgba(255,87,34,0.92) 100%);
  border-radius: 2.5em 2.5em 0 0;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 6px 32px 0 rgba(255,87,34,0.10), 0 0 0 8px rgba(255,224,240,0.10);
}
.section-title {
  font-size: 2.3rem;
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
  grid-template-columns: repeat(4, 1fr);
  /* 保证阴影不会溢出整个大区域 */
  overflow: visible;
}
@media (max-width: 900px) {
  .section-block-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .section-block-grid .card {
    height: 110px;
    border-radius: 16px;
  }
  .section-block-grid .card-inner {
    font-size: 1.05rem;
  }
  .section-block-grid .card-icon {
    font-size: 2.1rem;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  .section-block-grid .card-text {
    font-size: 1.05rem;
    margin-left: 0.2rem;
  }
}
.section-block-grid .card {
  height: 160px;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  word-break: break-all;
  border: none;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(255,152,0,0.18);
  transition: box-shadow 0.25s cubic-bezier(.4,1.6,.6,1), transform 0.22s cubic-bezier(.4,1.6,.6,1);
  cursor: pointer;
}
.section-block-grid .card:hover {
  transform: scale(1.08);
  /* 减小阴影扩散距离，避免黑条 */
  box-shadow: 0 8px 24px 0 rgba(255,87,34,0.16), 0 0 0 4px rgba(255,224,240,0.08);
  z-index: 2;
}
.section-block-grid .card-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.35rem;
  /* 允许鼠标事件 */
  pointer-events: auto;
}
.section-block-grid .card-icon {
  font-size: 3.2rem;
  margin-right: 0.5rem;
  margin-left: 1.1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px #ff9800aa);
  transition: transform 0.22s cubic-bezier(.4,1.6,.6,1);
}
.section-block-grid .card:hover .card-icon {
  transform: scale(1.15) rotate(-8deg);
}
.section-block-grid .card-label {
  display: inline-block;
  min-width: 64px;
  padding: 0.3em 1.5em 0.3em 1.5em;
  margin-right: 1.1rem;
  font-size: 1.18rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #ff9800 0%, #d84315 100%);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(255,152,0,0.12);
  letter-spacing: 1px;
  text-align: center;
  vertical-align: middle;
  flex-shrink: 0;
}
.section-block-grid .card-text {
  flex: 1 1 0;
  min-width: 0;
  word-break: break-all;
  white-space: nowrap;
  font-size: 1.25rem;
  color: #d84315;
  font-weight: 700;
  margin-left: 0.5rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px #ffe0b2cc;
  position: relative;
  /* 禁止鼠标事件，防止hover在文字上时触发黑条 */
  pointer-events: none;
}
/* 滚动动画容器 */
.section-block-grid .card-text-scroll {
  display: inline-block;
  white-space: nowrap;
  transition: transform 0.3s;
  will-change: transform;
  position: relative;
}
.section-block-grid .card:hover .card-text-scroll {
  animation: scroll-text-x 4s linear 1;
}
@keyframes scroll-text-x {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(calc(-100% + 100px)); /* 100px为可视宽度，可根据实际调整 */
  }
  100% {
    transform: translateX(calc(-100% + 100px));
  }
}
.feature-bottom {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto;
  background: linear-gradient(90deg, #fffde7 0%, #ffe082 100%);
  color: #222;
  border-radius: 0 0 2.5em 2.5em;
  padding: 1.3rem 1.2rem 1.4rem 1.2rem;
  font-size: 1.18rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 8px rgba(255,193,7,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 2.5px solid #ffd54f;
  position: relative;
}
.bottom-title {
  font-size: 1.55rem;
  font-weight: 900;
  color: #e65100;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-title::before {
  content: '“';
  font-size: 2.2rem;
  color: #ff9800;
  margin-right: 0.2em;
  font-family: serif;
  font-weight: bold;
  opacity: 0.7;
}
.bottom-title::after {
  content: '”';
  font-size: 2.2rem;
  color: #ff9800;
  margin-left: 0.2em;
  font-family: serif;
  font-weight: bold;
  opacity: 0.7;
}
.bottom-desc {
  font-size: 1.35rem;
  font-weight: 700;
  color: #d84315;
  line-height: 1.8;
  text-align: center;
  background: linear-gradient(90deg, #fffbe7 0%, #ffe082 100%);
  border-radius: 0.7em;
  padding: 0.7em 1em;
  margin-top: 0.2em;
  box-shadow: 0 2px 8px rgba(255,152,0,0.08);
  position: relative;
  display: inline-block;
}
.bottom-desc::before {
  content: '📢';
  font-size: 1.2em;
  margin-right: 0.3em;
  vertical-align: middle;
}
.feature-block {
  margin-bottom: 2.2rem;
  border-radius: 2.5em;
  overflow: hidden;
}
.feature-block:last-of-type {
  margin-bottom: 0;
}

/* 将移动端样式放到最后并加!important */
@media (max-width: 600px) {
  .section-block-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(4, 1fr) !important;
    gap: 0.18rem !important;
  }
  .section-block-grid .card {
    height: 70px !important;
    border-radius: 10px !important;
    box-shadow: 0 1px 3px rgba(255,152,0,0.10) !important;
    padding: 0.01em 0.05em !important;
    border: none !important;
    margin: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .section-block-grid .card-inner {
    font-size: 0.98rem !important;
    padding: 0 0.01em !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .section-block-grid .card-icon {
    font-size: 1.4rem !important;
    margin-left: 0.18rem !important;
    margin-right: 0.02rem !important;
  }
  .section-block-grid .card-text {
    font-size: 0.89rem !important;
    margin-left: 0.01rem !important;
    text-align: center !important;
    width: auto !important;
  }
  .bottom-title {
    font-size: 1.05rem !important;
  }
  .bottom-desc {
    font-size: 0.98rem !important;
  }
  .animated-case,
  .case-icon,
  .case-number {
    animation: none !important;
  }
}
.animated-title {
  animation: bounceIn 1.2s cubic-bezier(.68,-0.55,.27,1.55) infinite;
  position: relative;
  overflow: visible;
}
.title-icon {
  font-size: 2.1rem;
  color: #ff9800;
  margin-right: 0.3em;
  vertical-align: middle;
  animation: iconFlash 1.2s infinite alternate;
}
.title-main {
  background: linear-gradient(90deg, #fffbe7 0%, #ffe082 40%, #fffbe7 100%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shineText 2.5s linear infinite;
  font-weight: 900;
}
.highlight-key {
  color: #e53935;
  font-weight: 900;
  text-shadow: 0 2px 8px #ffe0b2cc;
  font-size: 1.1em;
  margin: 0 0.1em;
  animation: highlightPop 1.2s cubic-bezier(.68,-0.55,.27,1.55) infinite;
}
@keyframes shineText {
  0% { background-position: 200% 0; }
  100% { background-position: 0 0; }
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
@keyframes highlightPop {
  0% { transform: scale(0.7); opacity: 0.5; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
}
.animated-case {
  animation: fadeInCaseSoftLoop 6.5s ease-in-out infinite;
}
@keyframes fadeInCaseSoftLoop {
  0% { opacity: 0.35; }
  10% { opacity: 0.6; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { opacity: 0.35; }
}
.case-icon {
  font-size: 1.5em;
  color: #e53935;
  margin-right: 0.2em;
  vertical-align: middle;
  transition: transform 0.3s, opacity 0.8s;
  opacity: 0.85;
}
.case-number {
  color: #e53935;
  font-weight: 900;
  background: #fffde7;
  border-radius: 0.3em;
  padding: 0 0.25em;
  margin: 0 0.1em;
  display: inline-block;
  transition: background 0.8s, color 0.8s, opacity 0.8s;
  opacity: 0.92;
}
</style> 