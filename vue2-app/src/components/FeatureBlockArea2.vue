<template>
  <section class="feature-block" data-columns="3">
    <div class="feature-title-bg">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid" :style="gridStyle">
        <div v-for="(item, idx) in items" :key="idx" class="card">
          <div class="card-inner">
            <div class="card-label-wrap">
              <span class="card-label">{{ item.label }}</span>
            </div>
            <div class="card-text-wrap">
              <span class="card-text" :title="item.text">{{ item.text }}</span>
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
    title: String,
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
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(90deg, rgba(220,38,38,0.8) 0%, rgba(255,87,34,0.8) 100%);
  border-radius: 8px 8px 0 0;
  padding: 1.1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
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
}
.feature-block[data-columns='3'] .section-block-grid .card-label-wrap {
  background: #fff8f8;
  padding-left: 0;
  padding-bottom: 0.2em;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  height: 50%;
  padding-top: 8px;
  margin-top: 0;
}
.feature-block[data-columns='3'] .section-block-grid .card-label-wrap::after {
  display: none;
}
.feature-block[data-columns='3'] .section-block-grid .card-text-wrap {
  background: #f8fff8;
  margin-top: -8px;
  align-items: flex-start;
  padding-left: 0;
  padding-top: 0.2em;
  height: 50%;
  display: flex;
  justify-content: flex-start;
}
.feature-block[data-columns='3'] .section-block-grid .card-label {
  font-size: 1.6rem;
  color: #111;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  width: 95%;
  display: block;
  box-sizing: border-box;
  max-width: 95%;
  background: none;
  border-radius: 8px;
  padding: 0.2em 0;
  transition: font-size 0.2s, background 0.2s, padding 0.2s;
}
@media (max-width: 600px) {
  .feature-block[data-columns='3'] .section-block-grid .card-label {
    font-size: 1.1rem;
    background: #f5f5f5;
    color: #111;
    font-weight: bold;
    width: 90%;
    max-width: 90%;
    border-radius: 8px;
    padding: 0.4em 0;
    margin: 0 auto;
    text-align: center;
    display: block;
  }
}
.feature-block[data-columns='3'] .section-block-grid .card-text {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  text-align: left;
  width: 100%;
  white-space: pre-line;
  word-break: break-all;
  overflow-y: auto;
  padding: 0.6em 1em 0.6em 1em;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  height: 100%;
  display: block;
}
.feature-block {
  margin-bottom: 2.2rem;
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
    font-size: 0.8rem;
    padding: 0.3em 0.5em;
    height: auto;
    min-height: 1.5em;
    max-height: none;
    overflow-y: visible;
    white-space: pre-line;
  }
}
</style> 