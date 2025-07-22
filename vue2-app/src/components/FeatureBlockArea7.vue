<template>
  <section class="area7">
    <h2 class="area-title">我是谁？为什么你可以信任我？</h2>
    <div class="founder-info">
      <img src="/path/to/founder.jpg" alt="创始人照片" class="founder-photo" />
      <div class="founder-desc">
        <p>我是[你的名字]，一个在深圳奋斗了8年的亚马逊老兵。我踩过你踩过的所有坑，也因此萌生了开发这款工具的想法...</p>
      </div>
    </div>
    <div class="testimonials">
      <h3>早期用户评价</h3>
      <div class="testimonial-item">“这个工具太棒了，简直是我们采购部门的福音！” - 深圳Anker公司 产品经理 (示例)</div>
      <!-- 可添加更多评价 -->
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea7'
}
</script>
<style scoped>
.area7 {
  width: 90vw;
  margin: 0 auto 2.2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem 1rem;
}
.area-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  text-align: center;
}
.founder-info {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.founder-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.founder-desc {
  max-width: 400px;
  font-size: 1.1rem;
  color: #333;
}
.testimonials {
  margin-top: 1.2rem;
}
.testimonials h3 {
  font-size: 1.1rem;
  color: #d84315;
  margin-bottom: 0.5rem;
}
.testimonial-item {
  background: #fffde7;
  border-radius: 8px;
  padding: 0.7em 1.2em;
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.7rem;
  box-shadow: 0 1px 4px rgba(255,193,7,0.08);
}
</style> 