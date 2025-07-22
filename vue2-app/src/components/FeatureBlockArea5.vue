<template>
  <section class="area5">
    <h2 class="area-title">加入我们，成为第一批用AI优化库存的聪明卖家（仅限本微信群）</h2>
    <div class="area-subtitle">阶梯团购，越早越优惠，名额售罄价格立即上涨！</div>
    <div class="countdown">距早鸟价结束仅剩：<span class="countdown-time">02天 14:30:15</span></div>
    <table class="price-table">
      <tr>
        <th>阶段</th><th>现价</th><th>原价</th><th>剩余名额</th><th></th>
      </tr>
      <tr>
        <td>天使合伙人</td><td>¥3,999</td><td>¥12,999</td><td><span class="quota">3</span></td>
        <td><button class="btn-primary" @click="showPay('angel')">立即抢占</button></td>
      </tr>
      <tr>
        <td>早鸟先锋</td><td>¥5,999</td><td>¥12,999</td><td><span class="quota">11</span></td>
        <td><button class="btn-secondary" :disabled="!angelSoldOut">排队预定</button></td>
      </tr>
      <tr>
        <td>标准团购</td><td>¥7,999</td><td>¥12,999</td><td><span class="quota">15</span></td>
        <td><button class="btn-secondary" disabled>排队预定</button></td>
      </tr>
    </table>
    <div v-if="showPayModal" class="pay-modal">
      <div class="pay-modal-content">
        <h3>请扫码支付 ¥3,999</h3>
        <img src="/path/to/qrcode.jpg" alt="收款二维码" class="pay-qrcode" />
        <div class="pay-tip">支付后请截图，并添加客服微信 <b>[微信号]</b>，凭截图拉您进入专属服务群并安排部署。</div>
        <button class="pay-close" @click="showPayModal=false">关闭</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea5',
  data() {
    return {
      showPayModal: false,
      angelSoldOut: false // 可根据实际逻辑动态切换
    }
  },
  methods: {
    showPay(type) {
      this.showPayModal = true;
    }
  }
}
</script>
<style scoped>
.area5 {
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
  margin-bottom: 0.7rem;
  text-align: center;
}
.area-subtitle {
  font-size: 1.1rem;
  color: #ff9800;
  text-align: center;
  margin-bottom: 0.7rem;
}
.countdown {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: #d84315;
}
.countdown-time {
  font-weight: bold;
  font-size: 1.2rem;
}
.price-table {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 1.2rem auto;
  border-collapse: collapse;
  background: #fff;
}
.price-table th, .price-table td {
  border: 1px solid #ff9800;
  padding: 0.5em 0.7em;
  text-align: center;
}
.price-table th {
  background: #fff8e1;
  color: #b28704;
}
.btn-primary {
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  cursor: pointer;
}
.btn-secondary {
  background: #eee;
  color: #aaa;
  border: none;
  border-radius: 6px;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  cursor: not-allowed;
}
.btn-secondary:disabled {
  background: #eee;
  color: #aaa;
}
.pay-modal {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.pay-modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
}
.pay-qrcode {
  width: 180px;
  height: 180px;
  margin: 1rem auto;
  display: block;
}
.pay-tip {
  color: #d84315;
  font-size: 1rem;
  margin-bottom: 1.2rem;
}
.pay-close {
  background: #eee;
  color: #333;
  border: none;
  border-radius: 6px;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  cursor: pointer;
}
</style> 