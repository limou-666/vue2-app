<template>
  <section class="feature-block">
    <div class="risk-reversal-badge">
      <span class="badge-icon">🛡️</span>
      <span class="badge-text">
        <b>我们郑重承诺：</b>购买后30天内，若因我们的模板或指导问题导致您无法成功部署，我们将全额退款！
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
      </ul>
    </div>
  </section>
</template>

<style scoped>
.risk-reversal-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #ff9800 0%, #ff5e62 100%);
  border-radius: 28px;
  box-shadow: 0 6px 32px 0 rgba(255,152,0,0.18), 0 0 0 10px rgba(255,224,240,0.18);
  padding: 2em 3em;
  margin: 0 auto 2.5em auto;
  max-width: 900px;
  font-size: 1.45rem;
  font-weight: bold;
  color: #fff;
  border: 3px solid #ff9800;
  gap: 1.3em;
  letter-spacing: 0.02em;
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
  border: 3px solid transparent;
  border-radius: 18px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box;
  box-shadow: 0 4px 32px 0 rgba(255,192,203,0.10), 0 0 0 8px rgba(255,224,240,0.12);
  padding: 2.2em 3.5em 1.6em 3.5em;
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
    font-size: 0.98rem;
    border-radius: 14px;
  }
  .badge-icon {
    font-size: 1.2em;
  }
  .faq-title {
    font-size: 1.05rem;
  }
  .faq-list {
    max-width: 100vw;
  }
  .faq-item {
    font-size: 0.85rem;
    padding: 0.5em 0.3em;
  }
  .faq-q {
    margin-bottom: 0.3em;
  }
  .faq-a {
    font-size: 0.85rem;
  }
}
</style> 