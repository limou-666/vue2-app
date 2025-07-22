<template>
  <section class="feature-block" id="area5">
    <div class="area5-header">
      <div class="area5-title">加入我们，成为第一批用AI优化库存的聪明卖家（仅限本微信群）</div>
      <div class="area5-subtitle">阶梯团购，越早越优惠，名额售罄价格立即上涨！</div>
      <div class="area5-countdown">限时抢购倒计时：<span>{{ countdown }}</span></div>
    </div>
    <div class="area5-table-wrap">
      <table class="price-table">
        <tr>
          <th>阶段</th>
          <th>现价</th>
          <th>原价</th>
          <th>剩余名额</th>
          <th></th>
        </tr>
        <tr>
          <td>天使合伙人</td>
          <td>¥3,999</td>
          <td>¥12,999</td>
          <td>3</td>
          <td><button
            class="buy-btn cta-mousemove"
            @mousemove="onMove"
            @mouseleave="onLeave"
            @click="openModal"
            ref="payBtn"
          >
            <span class="cta-text" :style="ctaTextStyle">立即抢占</span>
          </button></td>
        </tr>
        <tr>
          <td>早鸟先锋</td>
          <td>¥5,999</td>
          <td>¥12,999</td>
          <td>11</td>
          <td><button class="buy-btn disabled" disabled>排队预定</button></td>
        </tr>
        <tr>
          <td>标准团购</td>
          <td>¥7,999</td>
          <td>¥12,999</td>
          <td>15</td>
          <td><button class="buy-btn disabled" disabled>排队预定</button></td>
        </tr>
      </table>
    </div>
    <div v-if="showModal" class="pay-modal">
      <div class="pay-modal-content">
        <h3 class="pay-title">请选择支付方式</h3>
        <div v-if="!payType" class="pay-type-btns">
          <button class="pay-type-btn wx" @click="payType='wx'">微信支付</button>
          <button class="pay-type-btn zfb" @click="payType='zfb'">支付宝支付</button>
        </div>
        <div v-else>
          <div class="pay-qrcode-wrap">
            <img v-if="payType==='wx'" src="/wx收款码.jpg" alt="微信收款码" class="pay-qrcode" />
            <img v-else-if="payType==='zfb'" src="/zfb收款码.jpg" alt="支付宝收款码" class="pay-qrcode" />
          </div>
          <div class="pay-tip">支付后请截图，并添加客服微信 <b>[微信号]</b>，凭截图拉您进入专属服务群并安排部署。</div>
        </div>
        <button class="pay-close" @click="closeModal">关闭</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FeatureBlockArea5',
  data() {
    return {
      showModal: false,
      payType: null,
      countdown: '',
      timer: null,
      targetTime: new Date('2025-07-25T00:00:00').getTime(),
      payOffset: { x: 0, y: 0 },
      payActive: false
    }
  },
  computed: {
    ctaTextStyle() {
      if (!this.payActive) return { transform: 'translate(0,0)' };
      return {
        transform: `translate(${this.payOffset.x}px, ${this.payOffset.y}px)`
      };
    }
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.payType = null;
    },
    closeModal() {
      this.showModal = false;
      this.payType = null;
    },
    updateCountdown() {
      const now = Date.now();
      let diff = Math.max(0, this.targetTime - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * 1000 * 60 * 60 * 24;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * 1000 * 60 * 60;
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * 1000 * 60;
      const seconds = Math.floor(diff / 1000);
      this.countdown = `${days}天 ${hours.toString().padStart(2,'0')}小时${minutes.toString().padStart(2,'0')}分${seconds.toString().padStart(2,'0')}秒`;
    },
    onMove(e) {
      const btn = this.$refs.payBtn;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - rect.width / 2;
      const dy = y - rect.height / 2;
      const max = Math.min(rect.width, rect.height) / 4;
      this.payOffset = {
        x: Math.max(-max, Math.min(max, dx / 2)),
        y: Math.max(-max, Math.min(max, dy / 2))
      };
      this.payActive = true;
    },
    onLeave() {
      this.payOffset = { x: 0, y: 0 };
      this.payActive = false;
    }
  }
}
</script>
<style scoped>
.feature-block {
  border: 3px solid transparent;
  border-radius: 18px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box;
  box-shadow: 0 4px 32px 0 rgba(255,192,203,0.10), 0 0 0 8px rgba(255,224,240,0.12);
}
.area5-header {
  width: 90vw;
  max-width: 1200px;
  min-width: 320px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: linear-gradient(90deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 18px;
  padding: 2.2em 1.5em 1.6em 1.5em;
  text-align: center;
  box-shadow: 0 2px 12px rgba(255,152,0,0.08);
  box-sizing: border-box;
  margin-bottom: 2.2em;
}
.area5-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: #d84315;
  margin-bottom: 0.7em;
  line-height: 1.25;
}
.area5-subtitle {
  font-size: 1.2rem;
  color: #ff9800;
  margin-bottom: 1.1em;
  line-height: 1.5;
}
.area5-countdown {
  font-size: 1.2rem;
  font-weight: bold;
  color: #388e3c;
  margin-top: 1.2em;
  margin-bottom: 0.1em;
}
.area5-countdown span {
  font-size: 1.3rem;
  color: #d84315;
  font-weight: bold;
  margin-left: 0.3em;
}
@media (max-width: 900px) {
  .area5-header {
    width: 94vw;
    max-width: 98vw;
    left: 50%;
    transform: translateX(-50%);
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 1.1em 0.5em 0.8em 0.5em;
    margin-top: 0.7em;
    margin-bottom: 1.2em;
  }
  .area5-title {
    font-size: 1.5rem;
  }
  .area5-subtitle,
  .area5-countdown {
    font-size: 1rem;
  }
  .area5-countdown span {
    font-size: 1.1rem;
  }
}
.area5-table-wrap {
  width: 90vw;
  max-width: 1200px;
  min-width: 320px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  margin-bottom: 2.2em;
}
@media (max-width: 900px) {
  .area5-table-wrap {
    width: 94vw;
    max-width: 98vw;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.2em;
  }
}
.price-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(255,152,0,0.06);
  border: 1.5px solid #ffe0b2;
}
.price-table th, .price-table td {
  border: 1px solid #ffe0b2;
  text-align: center;
  padding: 0.7em 0.5em;
  font-size: 1.08rem;
}
.price-table th {
  background: #fff8e1;
  color: #b28704;
  font-weight: bold;
}
.price-table tr:last-child td {
  border-bottom: none;
}
.price-table tr td:last-child, .price-table tr th:last-child {
  border-right: none;
}
.buy-btn {
  background: linear-gradient(90deg, rgba(255,152,0,0.75) 0%, rgba(216,67,21,0.75) 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5em 1.2em;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  overflow: hidden;
  position: relative;
}
.buy-btn.disabled,
.buy-btn:disabled {
  background: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
  box-shadow: none;
}
.cta-text {
  display: inline-block;
  transition: transform 0.18s cubic-bezier(.4,1.6,.6,1);
  will-change: transform;
}
.buy-btn:hover {
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  box-shadow: 0 6px 32px 0 rgba(255,152,0,0.18), 0 0 0 10px rgba(255,224,240,0.18);
}
.pay-modal {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pay-modal-content {
  background: #fff;
  border-radius: 16px;
  padding: 2.2em 2em 1.5em 2em;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pay-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #d84315;
  margin-bottom: 1.2em;
}
.pay-qrcode-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2em 0 0.5em 0;
  width: 100%;
}
.pay-qrcode {
  max-width: 220px;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  background: #fff;
  display: block;
  margin: 0 auto;
}
@media (max-width: 600px) {
  .pay-modal-content {
    min-width: 0;
    max-width: 98vw;
    padding: 0.7em 0.1em 0.7em 0.1em;
  }
  .pay-title {
    font-size: 1.1rem;
  }
  .pay-qrcode {
    max-width: 80vw;
    max-height: 240px;
    width: 100%;
    height: auto;
  }
  .pay-type-btns {
    flex-direction: column;
    gap: 1em;
    margin: 1em 0 1em 0;
  }
  .pay-type-btn {
    width: 100%;
    font-size: 1rem;
    padding: 0.7em 0;
  }
}
.pay-tip {
  color: #d84315;
  font-size: 1rem;
  margin: 1.2em 0 1.2em 0;
}
.pay-close {
  background: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 6px;
  padding: 0.5em 1.2em;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5em;
}
.pay-type-btns {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin: 1.5em 0 1.2em 0;
}
.pay-type-btn {
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 2.2em;
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(255,152,0,0.10);
}
.pay-type-btn.zfb {
  background: #00aaff;
}
.pay-type-btn.wx {
  background: #07c160;
}
.pay-type-btn:active {
  filter: brightness(0.92);
}
@media (max-width: 600px) {
  .pay-type-btns {
    flex-direction: column;
    gap: 1em;
    margin: 1em 0 1em 0;
  }
  .pay-type-btn {
    width: 100%;
    font-size: 1rem;
    padding: 0.7em 0;
  }
}
</style> 