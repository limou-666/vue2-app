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
.feature-block {
  margin: 2.5em auto;
  border: 3px solid transparent;
  border-radius: 2.5em;
  /* background: linear-gradient(white, white) padding-box, linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box; */
  box-shadow: 0 4px 32px 0 rgba(255,192,203,0.10), 0 0 0 8px rgba(255,224,240,0.12);
}
.feature-title-bg {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(90deg, rgba(220,38,38,0.8) 0%, rgba(255,87,34,0.8) 100%);
  border-radius: 2.5em;
  padding: 1.1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.feature-block[data-columns='4'] .section-block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}
.feature-block[data-columns='4'] .section-block-grid .card {
  border-radius: 2.5em;
  border: none;
  background: #fff;
  box-shadow: 0 1px 3px rgba(255,152,0,0.06);
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
  border-radius: 2.5em;
  background: transparent;
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
  border-radius: 2.5em;
  background: transparent;
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