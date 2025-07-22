<template>
  <section class="feature-block">
    <div class="area6-header">
      <div class="area6-title">今天下单，您将获得总价值超过 <span class="area6-title-highlight">¥15,000</span> 的大礼包！</div>
    </div>
    <div class="area6-list">
      <ul class="gift-list">
        <li class="gift-item">
          <span class="gift-icon">✓</span>
          <span class="gift-main">“决胜单”N8N Agent工作流模板</span>
          <span class="gift-value">价值 ¥12,999</span>
        </li>
        <li class="gift-item">
          <span class="gift-icon">✓</span>
          <span class="gift-main">超详细部署视频教程</span>
          <span class="gift-value">价值 ¥999</span>
        </li>
        <li class="gift-item">
          <span class="gift-icon">✓</span>
          <span class="gift-main">30天部署问题专属技术支持</span>
          <span class="gift-value">价值 ¥1,999</span>
        </li>
        <li class="gift-item">
          <span class="gift-icon">✓</span>
          <span class="gift-main">专属VIP用户交流群永久席位</span>
          <span class="gift-value">无价</span>
        </li>
        <li class="gift-item angel-only">
          <span class="gift-icon">✓</span>
          <span class="gift-main">
            <span class="angel-label">【天使合伙人专享】</span>1对1在线部署指导
          </span>
          <span class="gift-value">价值 ¥2,999</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea6'
}
</script>
<style scoped>
.feature-block {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  min-width: 320px;
  margin: 2.5em 0;
  border: 3px solid transparent;
  border-radius: 18px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box;
  box-shadow: 0 4px 32px 0 rgba(255,192,203,0.10), 0 0 0 8px rgba(255,224,240,0.12);
  padding: 2.2em 3.5em 1.6em 3.5em;
  box-sizing: border-box;
}
.area6-header,
.area6-list {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@media (max-width: 600px) {
  .feature-block {
    width: 98vw;
    left: 50%;
    transform: translateX(-50%);
    min-width: 0;
    margin: 2.5em 0;
    padding-left: 0.7em;
    padding-right: 0.7em;
    padding-top: 1.1em;
    padding-bottom: 1em;
  }
}
.area6-title {
  font-size: 2rem;
  font-weight: bold;
  color: #d84315;
  text-align: center;
  margin-bottom: 1.5em;
  line-height: 1.3;
}
.area6-title-highlight {
  color: #ff9800;
  font-size: 2.2rem;
  font-weight: bold;
}
.gift-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: none;
}
.gift-item {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff7e6;
  border-radius: 10px;
  border: 1.5px solid #ffe0b2;
  margin-bottom: 1.1em;
  padding: 0.9em 1.2em;
  font-size: 1.15rem;
  box-shadow: 0 1px 4px rgba(255,152,0,0.04);
  transition: box-shadow 0.2s;
}
.gift-item:last-child {
  margin-bottom: 0;
}
.gift-icon {
  color: #07c160;
  font-size: 1.3em;
  margin-right: 0.7em;
  flex-shrink: 0;
}
.gift-main {
  flex: 1 1 auto;
  text-align: left;
  font-weight: 500;
}
.gift-value {
  color: #d84315;
  font-weight: bold;
  margin-left: 1.2em;
  white-space: nowrap;
}
.angel-only {
  background: linear-gradient(90deg, #fffde7 60%, #ffe0b2 100%);
  border: 2px solid #ff9800;
  position: relative;
}
.angel-label {
  color: #fff;
  background: #ff9800;
  border-radius: 6px;
  padding: 0.1em 0.5em;
  font-size: 0.95em;
  margin-right: 0.4em;
  font-weight: bold;
}
@media (max-width: 600px) {
  .area6-title {
    font-size: 1.15rem;
    margin-bottom: 1em;
  }
  .area6-title-highlight {
    font-size: 1.25rem;
  }
  .gift-list {
    max-width: 100vw;
  }
  .gift-item {
    font-size: 0.85rem;
    padding: 0.6em 0.5em;
    margin-bottom: 0.7em;
  }
  .gift-icon {
    font-size: 1.1em;
    margin-right: 0.4em;
  }
  .angel-label {
    font-size: 0.85em;
    padding: 0.08em 0.3em;
    margin-right: 0.2em;
  }
}
</style> 