<template>
  <section class="feature-block" :data-columns="columns">
    <div class="feature-title-bg">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid">
        <div class="card" v-for="(item, idx) in items" :key="idx">
          <div class="card-inner">
            <div class="card-label">{{ item.label }}</div>
            <div class="card-text">{{ item.text }}</div>
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
.feature-block[data-columns='4'] .section-block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}
.feature-block[data-columns='4'] .section-block-grid .card {
  height: 160px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(255,152,0,0.06);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  margin: 0;
  padding: 0.01em 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-block[data-columns='4'] .section-block-grid .card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.feature-block[data-columns='4'] .section-block-grid .card-label {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff9800;
}
.feature-block[data-columns='4'] .section-block-grid .card-text {
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: left;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  word-break: break-all;
  background: #fff7e6;
  border-radius: 8px;
  padding-left: 1.2em;
  padding-right: 0.5em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  margin: 0 0.2em;
  box-sizing: border-box;
  white-space: pre-line;
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
  .feature-block[data-columns='4'] .section-block-grid .card {
    height: 80px !important;
    min-height: 0 !important;
    padding: 0 !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-label {
    font-size: 0.95rem !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-text {
    font-size: 0.6rem !important;
    padding: 0.15em 0.3em !important;
    margin: 0 0.1em !important;
    align-items: flex-start !important;
    text-align: left !important;
    white-space: pre-line !important;
  }
}
</style> 