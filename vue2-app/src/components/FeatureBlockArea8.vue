<template>
  <section class="feature-block">
    <div class="risk-reversal-badge">
      <span class="badge-icon big">🛡️</span>
      <span class="badge-text">
        <b class="promise-strong">30天无忧退款 · 零风险承诺</b><br>
        <span class="promise-highlight">只要部署不成功，30天内全额退款，承诺写进合同，真正让您“零顾虑”下单！</span>
      </span>
    </div>
    <div class="faq-section">
      <div class="faq-title">常见问题解答（FAQ）</div>
      <ul class="faq-list">
        <li class="faq-item">
          <div class="faq-q">Q: 我是技术小白，能用吗？</div>
          <div class="faq-a">A: 当然！我们的视频教程是保姆级的，并且提供30天支持，保证您能用上。</div>
        </li>
        <li class="faq-item">
          <div class="faq-q">Q: 购买后还有其他费用吗？</div>
          <div class="faq-a">A: 本工具是一次性付费。但您需要自备N8N环境、OpenAI API Key等，这些第三方服务的费用需要您自行承担。</div>
        </li>
        <li class="faq-item">
          <div class="faq-q">Q: 我的数据安全吗？</div>
          <div class="faq-a">A: 绝对安全。整个工具部署在您自己的N8N服务器上，所有数据都在您本地处理，我们不触碰您的任何业务数据。</div>
        </li>
        <li class="faq-item">
          <div class="faq-q">Q: 退款流程复杂吗？</div>
          <div class="faq-a">A: 完全不复杂！只要符合承诺条件，联系客服即可极速退款。</div>
        </li>
      </ul>
      <div class="faq-risk-tip">
        <span class="tip-icon">🔒</span> <b class="promise-strong">30天无忧退款 · 零风险下单</b>
      </div>
    </div>
  </section>
</template>

<style scoped>
.risk-reversal-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(100deg, #ffe082 0%, #ffd54f 60%, #ff9800 100%);
  border-radius: 2.5em;
  padding: 2.2em 3.5em;
  margin: 0 auto 2.5em auto;
  max-width: 1100px;
  font-size: 1.55rem;
  font-weight: bold;
  color: #fff;
  border: none;
  gap: 1.3em;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 24px #ffd54f33;
  text-shadow: 0 2px 12px rgba(216,67,21,0.13);
}
.badge-icon {
  font-size: 2.6em;
  flex-shrink: 0;
  color: #fff;
  filter: drop-shadow(0 2px 12px #ff9800);
}
.badge-text {
  flex: 1 1 auto;
  text-align: left;
  line-height: 1.8;
}
.badge-desc {
  display: block;
  font-size: 1.08rem;
  color: #fffde7;
  margin-top: 0.5em;
  font-weight: 400;
}
.faq-section {
  margin-top: 2.5em;
}
.faq-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff9800;
  margin-bottom: 1.2em;
  text-align: center;
}
.faq-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 700px;
}
.faq-item {
  background: #fff7e6;
  border-radius: 10px;
  border: 1.5px solid #ffe0b2;
  margin-bottom: 1.1em;
  padding: 1.1em 1.5em;
  font-size: 1.08rem;
  box-shadow: 0 1px 4px rgba(255,152,0,0.04);
  transition: box-shadow 0.2s;
}
.faq-q {
  color: #d84315;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.faq-a {
  color: #333;
  font-size: 1rem;
  line-height: 1.7;
}
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
  /* 与7区风格统一，温暖渐变 */
  padding: 2.2em 3.5em 1.6em 3.5em;
}
.faq-risk-tip {
  margin-top: 2.2em;
  text-align: center;
  font-size: 1.18rem;
  color: #d84315;
  font-weight: bold;
  background: #fffde7;
  border-radius: 1.2em;
  padding: 1em 1.5em;
  display: inline-block;
  box-shadow: 0 1px 8px #ffd54f33;
}
.tip-icon {
  font-size: 1.3em;
  vertical-align: middle;
  margin-right: 0.3em;
}
.badge-icon.big {
  font-size: 3.2em;
  color: #ff9800;
  filter: drop-shadow(0 4px 24px #ffd54f);
  margin-right: 0.5em;
}
.promise-strong {
  font-size: 1.45em;
  color: #c62828;
  font-weight: 900;
  letter-spacing: 1.5px;
}
.promise-highlight {
  color: #b71c1c;
  background: rgba(255,255,255,0.92);
  font-size: 1.18em;
  font-weight: 900;
  display: inline-block;
  margin-top: 0.7em;
  padding: 0.32em 1.1em;
  border-radius: 1.2em;
  box-shadow: 0 2px 8px #ffd54f33;
  letter-spacing: 1.2px;
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
@media (max-width: 900px) {
  .risk-reversal-badge {
    padding: 1.2em 0.7em;
    font-size: 1.12rem;
    max-width: 98vw;
    border-radius: 18px;
  }
  .faq-list {
    max-width: 98vw;
  }
  .faq-item {
    font-size: 0.95rem;
    padding: 0.7em 0.7em;
  }
}
@media (max-width: 600px) {
  .risk-reversal-badge {
    flex-direction: column;
    gap: 0.5em;
    padding: 0.8em 0.3em;
    font-size: 1.18rem;
    border-radius: 14px;
  }
  .badge-icon {
    font-size: 1.2em;
  }
  .faq-title {
    font-size: 1.18rem;
  }
  .faq-list {
    max-width: 100vw;
  }
  .faq-item {
    font-size: 1.05rem;
    padding: 0.3em 0.2em;
  }
  .faq-q {
    margin-bottom: 0.3em;
  }
  .faq-a {
    font-size: 1.05rem;
  }
}
</style> 