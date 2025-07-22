<template>
  <section class="feature-block" data-columns="1">
    <div class="feature-title-bg">
      <h2 class="section-title">眼见为实：一份真实的“决胜单”分析报告</h2>
    </div>
    <div class="section-block-content" style="position:relative;">
      <!-- 直线箭头1：指向标题 -->
      <svg class="arrow-absolute" style="left: calc(50% - 410px); top: 180px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <!-- 直线箭头2：指向风险关键词 -->
      <svg class="arrow-absolute" style="left: calc(50% - 410px); top: 380px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <!-- 直线箭头3：指向78分 -->
      <svg class="arrow-absolute" style="left: calc(50% - 410px); top: 500px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <div class="area4-img-block-large">
        <div class="img-annotate-wrap">
          <img src="/截图.png" alt="分析报告截图" class="report-img" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea4'
}
</script>
<style scoped>
.feature-block {
  margin-bottom: 2.2rem;
}
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
  position: relative;
}
.area4-img-block-large {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}
.img-annotate-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.report-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
  border-radius: 8px;
  object-fit: contain;
}
.arrow-absolute {
  position: absolute;
  z-index: 10;
  pointer-events: none;
}
@media (max-width: 900px) {
  .area4-img-block-large {
    max-width: 98vw;
    padding: 0.2rem;
  }
  .arrow-absolute {
    display: none;
  }
}
</style> 