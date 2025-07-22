<template>
  <section class="area5 area8">
    <div class="risk-badge">
      <b>我们郑重承诺：</b>购买后30天内，若因我们的模板或指导问题导致您无法成功部署，我们将全额退款！
    </div>
    <div class="faq">
      <h3>常见问题解答</h3>
      <div class="faq-item">
        <div class="q">Q: 我是技术小白，能用吗？</div>
        <div class="a">A: 当然！我们的视频教程是保姆级的，并且提供30天支持，保证您能用上。</div>
      </div>
      <div class="faq-item">
        <div class="q">Q: 购买后还有其他费用吗？</div>
        <div class="a">A: 本工具是一次性付费。但您需要自备N8N环境、OpenAI API Key等，这些第三方服务的费用需要您自行承担。</div>
      </div>
      <div class="faq-item">
        <div class="q">Q: 我的数据安全吗？</div>
        <div class="a">A: 绝对安全。整个工具部署在您自己的N8N服务器上，所有数据都在您本地处理，我们不触碰您的任何业务数。</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea8'
}
</script>
<style scoped>
.area5.area8 {
  width: 90vw;
  margin: 0 auto 2.2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 1.5rem 1rem;
  border: 1.5px solid #f0f0f0;
}
.risk-badge {
  background: #e3f2fd;
  color: #1565c0;
  border-radius: 8px;
  padding: 1em 1.2em;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.2rem;
  box-shadow: 0 1px 4px rgba(21,101,192,0.08);
}
.faq {
  max-width: 600px;
  margin: 0 auto;
}
.faq h3 {
  font-size: 1.1rem;
  color: #d84315;
  margin-bottom: 0.5rem;
}
.faq-item {
  background: #fffde7;
  border-radius: 8px;
  padding: 0.7em 1.2em;
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.7rem;
  box-shadow: 0 1px 4px rgba(255,193,7,0.08);
}
.q {
  font-weight: bold;
  color: #b28704;
}
.a {
  margin-top: 0.2em;
}
</style> 