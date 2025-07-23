<template>
  <section class="feature-block" data-columns="1">
    <div class="feature-title-bg">
      <h2 class="section-title">眼见为实：一份真实的“决胜单”分析报告</h2>
    </div>
    <div class="section-block-content" style="position:relative;">
      <!-- 直线箭头1：指向标题 -->
      <svg class="arrow-absolute" style="left: calc(50% - 360px); top: 190px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <div class="floating-label-red" style="left: calc(50% - 810px); top: 170px;">核心差评点：‘zipper breaks’ (拉链易坏)。</div>
      <!-- 直线箭头2：指向风险关键词 -->
      <svg class="arrow-absolute" style="left: calc(50% - 410px); top: 380px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <div class="floating-label-red" style="left: calc(50% - 710px); top: 370px;">78分，风险可控，建议落单。</div>
      <!-- 直线箭头3：指向78分 -->
      <svg class="arrow-absolute" style="left: calc(50% - 370px); top: 520px;" width="120" height="40" viewBox="0 0 120 40">
        <line x1="110" y1="20" x2="20" y2="20" stroke="#ff2d2d" stroke-width="7" stroke-linecap="round"/>
        <polygon points="0,20 30,10 30,30" fill="#ff2d2d" />
      </svg>
      <div class="floating-label-red" style="left: calc(50% - 820px); top: 520px;">可下单，但建议与供应商沟通，升级拉链配件。</div>
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
  margin: 2.5em auto;
  border-radius: 2.5em;
}
.feature-title-bg {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 0.7rem auto;
  background: linear-gradient(100deg, #7f7fd5 0%, #86a8e7 50%, #f9d423 100%);
  border-radius: 2.5em;
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
  z-index: 5;
  pointer-events: none;
}
.floating-label-red {
  position: absolute;
  z-index: 10;
  background: #fff3f3;
  color: #d32f2f;
  border: 2px solid #ff2d2d;
  border-radius: 12px;
  font-size: 1.18rem;
  font-weight: bold;
  padding: 0.5em 1.3em;
  min-width: 240px;
  box-shadow: 0 4px 16px rgba(255,45,45,0.10);
  text-align: left;
  white-space: pre-line;
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