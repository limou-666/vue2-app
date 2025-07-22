<template>
  <section class="feature-block">
    <div class="feature-title-bg">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid" :style="gridStyle">
        <div v-for="(item, idx) in items" :key="idx" class="card">
          <div class="card-inner">
            <span v-if="item.icon" class="card-icon">{{ item.icon }}</span>
            <span v-if="item.label" class="card-label">{{ item.label }}</span>
            <span class="card-text" :title="item.text">{{ item.text }}</span>
          </div>
        </div>
      </div>
      <div v-if="bottomTitle || bottomDesc" class="feature-bottom">
        <div class="bottom-title">{{ bottomTitle }}</div>
        <div class="bottom-desc">{{ bottomDesc }}</div>
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
.section-block-grid .card {
  height: 120px;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  word-break: break-all;
  border: 2.5px solid;
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(255,152,0,0.10);
  transition: box-shadow 0.2s;
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
}
.section-block-grid .card-icon {
  font-size: 2.5rem;
  margin-right: 0.2rem;
  margin-left: 0.7rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
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
  font-size: clamp(0.7rem, 1.5vw, 1.05rem);
  color: #333;
  font-weight: 500;
  margin-left: 0.3rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.feature-bottom {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto;
  background: linear-gradient(90deg, #fffde7 0%, #ffe082 100%);
  color: #222;
  border-radius: 0 0 8px 8px;
  padding: 1.1rem 1rem 1.2rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 8px rgba(255,193,7,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.bottom-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #b28704;
  letter-spacing: 1px;
  text-align: center;
}
.bottom-desc {
  font-size: 1.05rem;
  font-weight: 400;
  color: #333;
  line-height: 1.7;
  text-align: center;
}
.feature-block {
  margin-bottom: 2.2rem;
}
.feature-block:last-of-type {
  margin-bottom: 0;
}
</style> 