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
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(255,152,0,0.06);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  margin: 0;
  padding: 0.01em 0.05em;
}
.feature-block[data-columns='4'] .section-block-grid .card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 0.01em;
}
.feature-block[data-columns='4'] .section-block-grid .card-label {
  font-size: 1.35rem;
  font-weight: bold;
  color: #ff9800;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 1.2em;
  line-height: 1.2;
}
.feature-block[data-columns='4'] .section-block-grid .card-text {
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  line-height: 1.5;
  margin: 0 0.2em;
  word-break: break-all;
  white-space: pre-line;
  box-sizing: border-box;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 900px) {
  .feature-block[data-columns='4'] .section-block-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: repeat(2, 1fr);
    gap: 0.18rem !important;
  }
}
@media (max-width: 600px) {
  .feature-block[data-columns='4'] .section-block-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(4, 1fr) !important;
    gap: 0.18rem !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card {
    height: 50px !important;
    border-radius: 8px !important;
    box-shadow: 0 1px 3px rgba(255,152,0,0.06) !important;
    padding: 0.01em 0.05em !important;
    border-width: 1px !important;
    border-style: solid !important;
    border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1 !important;
    margin: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-inner {
    font-size: 0.95rem !important;
    padding: 0 0.01em !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: 100% !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-label {
    font-size: 1.05rem !important;
    margin-bottom: 0.3em !important;
    margin-top: 0.5em !important;
  }
  .feature-block[data-columns='4'] .section-block-grid .card-text {
    font-size: 0.8rem !important;
    margin: 0 0.1em !important;
    width: 98% !important;
  }
}
</style> 