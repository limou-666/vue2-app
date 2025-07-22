<template>
  <section class="feature-block" data-columns="1">
    <div class="feature-title-bg">
      <h2 class="section-title">眼见为实：一份真实的“决胜单”分析报告</h2>
    </div>
    <div class="section-block-content">
      <div class="area4-flex">
        <div class="area4-img-half">
          <img src="/截图.jpg" alt="分析报告截图" class="report-img" />
        </div>
        <div class="area4-desc-half">
          <!-- 这里可放说明、标注等内容 -->
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
}
.area4-flex {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1.2rem;
}
.area4-img-half, .area4-desc-half {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
}
.area4-img-half {
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 0.5rem;
  justify-content: center;
}
.report-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
  border-radius: 8px;
  object-fit: contain;
}
.area4-desc-half {
  background: #fffde7;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(255,193,7,0.08);
  padding: 0.5rem;
  min-height: 0;
}
@media (max-width: 900px) {
  .area4-flex {
    flex-direction: column;
    gap: 0.7rem;
  }
  .area4-img-half, .area4-desc-half {
    padding: 0.2rem;
  }
}
</style> 