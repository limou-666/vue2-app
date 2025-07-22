<template>
  <section class="area6">
    <h2 class="area-title">今天下单，您将获得总价值超过 ¥15,000 的大礼包！</h2>
    <ul class="gift-list">
      <li>✓ “决胜单”N8N Agent工作流模板 (价值 ¥12,999)</li>
      <li>✓ 超详细部署视频教程 (价值 ¥999)</li>
      <li>✓ 30天部署问题专属技术支持 (价值 ¥1,999)</li>
      <li>✓ 专属VIP用户交流群永久席位 (无价)</li>
      <li><b>✓ 【天使合伙人专享】1对1在线部署指导 (价值 ¥2,999)</b></li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea6'
}
</script>
<style scoped>
.area6 {
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
.gift-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 500px;
}
.gift-list li {
  font-size: 1.1rem;
  color: #333;
  background: #fffde7;
  border-radius: 8px;
  margin-bottom: 0.7rem;
  padding: 0.7em 1.2em;
  box-shadow: 0 1px 4px rgba(255,193,7,0.08);
  display: flex;
  align-items: center;
}
.gift-list li b {
  color: #d84315;
}
</style> 