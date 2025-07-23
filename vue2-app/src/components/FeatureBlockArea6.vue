<template>
  <section class="feature-block">
    <div class="area6-main-block">
      <div class="area6-header">
        <div class="area6-value-block">
          <span class="value-gift-icon">🎁</span>
          <span class="value-label">总价值</span>
          <span class="value-num">¥15,000+</span>
          <span class="value-desc">大礼包</span>
          <span class="value-market">市场价 <span class="market-strike">¥22,000+</span></span>
        </div>
        <div class="area6-title">今天下单，您将获得以下全部交付物：</div>
      </div>
      <div class="area6-list">
        <ul class="gift-list">
          <li class="gift-item">
            <span class="gift-icon">✓</span>
            <span class="gift-main-wrap">
              <span class="gift-main-row">
                <span class="gift-main">“决胜单”N8N Agent工作流模板</span>
                <span class="gift-tag">限时赠送</span>
              </span>
            </span>
            <span class="gift-value gold">价值 ¥12,999</span>
          </li>
          <li class="gift-item">
            <div class="gift-flex-4col">
              <div class="gift-col gift-col-icon"><span class="gift-icon">✓</span></div>
              <div class="gift-col gift-col-main"><span class="gift-main marquee">超详细部署视频教程</span></div>
              <div class="gift-col gift-col-tag"><span class="gift-tag">独家</span></div>
              <div class="gift-col gift-col-value"><span class="gift-value gold">价值 ¥999</span></div>
            </div>
          </li>
          <li class="gift-item">
            <span class="gift-icon">✓</span>
            <span class="gift-main">30天部署问题专属技术支持 <span class="gift-tag">限时赠送</span></span>
            <span class="gift-value gold">价值 ¥1,999</span>
          </li>
          <li class="gift-item">
            <span class="gift-icon">✓</span>
            <span class="gift-main">专属VIP用户交流群永久席位 <span class="gift-tag">独家</span></span>
            <span class="gift-value gold">无价</span>
          </li>
          <li class="gift-item angel-only">
            <span class="gift-icon gold-crown">👑</span>
            <span class="gift-main-wrap">
              <span class="gift-main-row">
                <span class="gift-main">1对1在线部署指导</span>
                <span class="gift-tag">独家</span>
              </span>
              <span class="angel-label">【天使合伙人专享】</span>
            </span>
            <span class="gift-value gold">价值 ¥2,999</span>
          </li>
        </ul>
      </div>
      <div class="area6-promise">
        <div class="promise-title"><span class="promise-icon">🤝</span>官方承诺</div>
        <ul class="promise-list">
          <li><span class="promise-icon">✅</span>30天无忧退款</li>
          <li><span class="promise-icon">🛠️</span>专属技术支持</li>
          <li><span class="promise-icon">💬</span>永久VIP交流群</li>
          <li><span class="promise-icon">🔒</span>100%正品保障</li>
        </ul>
      </div>
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
   width: 90vw;
  min-width: 320px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 2.5em 0;
  box-sizing: border-box;
  border-radius: 18px;
  background: linear-gradient(135deg, #fffbe7 0%, #ffe082 40%, #ffd54f 80%, #ffe0b2 100%);
  /* 与7/8区统一，温暖渐变 */
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
.area6-header {
  width: 100%;
  margin-bottom: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area6-value-block {
  background: linear-gradient(90deg, #fffde7 0%, #ffe082 100%);
  border-radius: 2.2em;
  box-shadow: 0 2px 12px #ffd54f33;
  padding: 0.7em 2.2em;
  margin-bottom: 1.1em;
  display: flex;
  align-items: baseline;
  gap: 0.7em;
}
.value-label {
  color: #b28704;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1.2px;
}
.value-num {
  color: #ff9800;
  font-size: 2.3rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px #ffe08299;
}
.value-desc {
  color: #d84315;
  font-size: 1.1rem;
  font-weight: 700;
  margin-left: 0.2em;
}
.area6-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #d84315;
  text-align: center;
  margin-bottom: 1.2em;
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
  border-radius: 1.5em;
  border: 2.5px solid #ffe0b2;
  margin-bottom: 1.1em;
  padding: 1.1em 1.6em;
  font-size: 1.18rem;
  box-shadow: 0 1px 8px #ffe08222;
  transition: box-shadow 0.2s, transform 0.18s, border-color 0.18s;
  font-weight: 700;
  position: relative;
  gap: 0.8em;
  overflow: hidden;
}
.gift-item:hover {
  box-shadow: 0 4px 24px #ffd54f99;
  border-color: #ffd700;
  transform: scale(1.04);
  z-index: 2;
}
.gift-icon {
  color: #07c160;
  font-size: 2.1em;
  margin-right: 1.1em;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px #b2ff59cc);
}
.gift-main {
  flex: 1 1 auto;
  text-align: left;
  font-weight: 900;
  font-size: 1.18em;
  color: #d84315;
}
.gift-value {
  color: #ff9800;
  font-weight: 900;
  margin-left: 1.2em;
  white-space: nowrap;
  font-size: 1.13em;
  text-shadow: 0 2px 8px #ffe08299;
}
.angel-only {
  background: linear-gradient(90deg, #fffde7 60%, #ffe0b2 100%);
  border: 2.5px solid #ff9800;
  position: relative;
  box-shadow: 0 2px 12px #ffd54f55;
}
.angel-label {
  color: #fff;
  background: #ff9800;
  border-radius: 8px;
  padding: 0.13em 0.7em;
  font-size: 1.05em;
  margin-right: 0.5em;
  font-weight: bold;
  letter-spacing: 1.1px;
  box-shadow: 0 1px 4px #ff980055;
}
.gift-tag {
  background: linear-gradient(90deg, #ffd54f 0%, #ff9800 100%);
  color: #fff;
  border-radius: 1em;
  font-size: 0.85em;
  font-weight: 900;
  padding: 0.13em 0.7em;
  margin-left: 0.5em;
  box-shadow: 0 1px 4px #ffd54f55;
  letter-spacing: 1.1px;
  vertical-align: middle;
}
.gift-value.gold {
  color: #ff9800;
  font-weight: 900;
  text-shadow: 0 2px 8px #ffd54f99;
}
.gold-crown {
  color: #ffd700;
  font-size: 2.1em;
  margin-right: 1.1em;
  filter: drop-shadow(0 2px 8px #ffd54fcc);
}
.value-gift-icon {
  font-size: 2.2em;
  margin-right: 0.3em;
  vertical-align: middle;
}
.value-market {
  color: #bdbdbd;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 1.2em;
  text-decoration: none;
  letter-spacing: 1.1px;
}
.market-strike {
  text-decoration: line-through;
  color: #bdbdbd;
  font-size: 1.1em;
  margin-left: 0.1em;
}
@media (max-width: 600px) {
  .area6-header {
    width: 100% !important;
    margin-bottom: 0.7em !important;
    padding: 0 !important;
  }
  .area6-value-block {
    padding: 0.18em 0.3em !important;
    gap: 0.18em !important;
  }
  .value-gift-icon {
    font-size: 1em !important;
    margin-right: 0.08em !important;
  }
  .value-label {
    font-size: 0.72rem !important;
    margin-right: 0.08em !important;
  }
  .value-num {
    font-size: 0.92rem !important;
    letter-spacing: 0.5px !important;
    margin-right: 0.08em !important;
  }
  .value-desc {
    font-size: 0.72rem !important;
    margin-left: 0.08em !important;
    margin-right: 0.08em !important;
  }
  .value-market {
    font-size: 0.62rem !important;
    margin-left: 0.08em !important;
  }
  .area6-title {
    font-size: 0.78rem !important;
    margin-bottom: 0.4em !important;
    line-height: 1.15 !important;
    padding: 0 0.1em !important;
    white-space: normal !important;
    word-break: break-all !important;
    text-align: center !important;
    width: 100% !important;
    max-width: 100vw !important;
    overflow: hidden !important;
  }
  .gift-item {
    font-size: 0.82rem !important;
    padding: 0.32em 0.2em !important;
    margin-bottom: 0.6em !important;
    gap: 0.3em !important;
    align-items: flex-start !important;
    flex-direction: row !important;
    justify-content: space-between !important;
  }
  .gift-icon, .gold-crown {
    font-size: 1em !important;
    margin-right: 0.12em !important;
    flex-shrink: 0 !important;
    margin-top: 0.08em !important;
  }
  .gift-main-wrap {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    justify-content: center !important;
    width: 100%;
    min-width: 0;
    max-width: 60vw;
  }
  .gift-main-row {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    width: 100%;
    min-width: 0;
    max-width: 60vw;
  }
  .gift-main {
    font-size: 0.98em !important;
    color: #d84315 !important;
    font-weight: 900 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    flex: none !important;
    margin-right: 0.08em !important;
    margin-left: 0 !important;
    display: inline-block !important;
    vertical-align: middle !important;
    line-height: 1.18 !important;
    max-width: 38vw !important;
    position: relative !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
  }
  .marquee {
    display: inline-block !important;
    white-space: nowrap !important;
    animation: gift-main-marquee 8s linear infinite;
    will-change: transform;
    min-width: 100%;
    position: relative;
    vertical-align: middle;
  }
  .gift-tag {
    font-size: 0.68em !important;
    padding: 0.08em 0.5em !important;
    margin-left: 0 !important;
    margin-top: 0 !important;
    border-radius: 0.8em !important;
    vertical-align: middle !important;
    display: inline-block !important;
    white-space: nowrap !important;
    background: linear-gradient(90deg, #ffd54f 0%, #ff9800 100%) !important;
    color: #fff !important;
    font-weight: bold !important;
    box-shadow: 0 1px 4px #ffd54f55 !important;
    text-align: center !important;
  }
  .angel-label {
    font-size: 0.68em !important;
    padding: 0.08em 0.5em !important;
    margin-left: 0 !important;
    margin-top: 0.18em !important;
    border-radius: 0.8em !important;
    vertical-align: middle !important;
    display: inline-block !important;
    white-space: nowrap !important;
    background: linear-gradient(90deg, #ffd54f 0%, #ff9800 100%) !important;
    color: #fff !important;
    font-weight: bold !important;
    box-shadow: 0 1px 4px #ffd54f55 !important;
    text-align: center !important;
  }
  .gift-value {
    color: #ff9800 !important;
    font-weight: 900 !important;
    margin-left: 0.2em !important;
    white-space: nowrap !important;
    font-size: 0.82em !important;
    text-shadow: 0 2px 8px #ffe08299 !important;
    flex-shrink: 0 !important;
    align-self: flex-start !important;
    margin-top: 0.08em !important;
  }
  .gift-flex-4col {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100%;
    min-width: 0;
    gap: 0 !important;
  }
  .gift-col {
    display: flex;
    align-items: center;
    min-width: 0;
  }
  .gift-col-icon {
    flex: 0 0 auto;
    margin-right: 0.18em;
    margin-left: 0.05em;
  }
  .gift-col-main {
    flex: 1 1 0;
    min-width: 0;
    margin-right: 0.18em;
  }
  .gift-col-tag {
    flex: 0 0 auto;
    margin-right: 0.18em;
  }
  .gift-col-value {
    flex: 0 0 auto;
    margin-right: 0.05em;
    margin-left: 0.18em;
  }
}
.area6-promise {
  width: 100%;
  margin-top: 2.2em;
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 1.1em 1.5em 1.3em 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.promise-title {
  font-size: 1.18rem;
  font-weight: 900;
  color: #d84315;
  margin-bottom: 0.7em;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
}
.promise-icon {
  font-size: 1.2em;
  margin-right: 0.3em;
  vertical-align: middle;
}
.promise-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7em 1.5em;
  justify-content: center;
}
.promise-list li {
  font-size: 1.08rem;
  color: #388e3c;
  font-weight: 700;
  background: #fff;
  border-radius: 1em;
  padding: 0.38em 1.1em;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px #b2ff5933;
}
.area6-main-block {
  width: 100%;
  background: linear-gradient(120deg, #fffbe7 0%, #ffe082 60%, #ffd54f 100%);
  border-radius: 2.5em;
  box-shadow: 0 2px 24px #ffd54f33;
  padding: 2.2em 0 1.6em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
</style> 