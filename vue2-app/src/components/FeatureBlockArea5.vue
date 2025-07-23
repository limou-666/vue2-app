<template>
  <section class="feature-block" id="area5">
    <div class="area5-main-block">
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
          <tr class="current-row">
            <td class="current-label"><span class="current-icon">🔥</span>天使合伙人</td>
            <td class="current-price">¥3,999 <span class="current-tag">限时特价</span></td>
            <td>¥12,999</td>
            <td><span class="current-left">3</span></td>
            <td style="text-align:center;vertical-align:middle;">
              <div class="buy-btn-wrap">
                <button
                  class="buy-btn cta-mousemove"
                  @mousemove="onMove"
                  @mouseleave="onLeave"
                  @click="openModal"
                  ref="payBtn"
                >
                  <span class="cta-text" :style="ctaTextStyle">立即抢占</span>
                </button>
                <div class="buy-tip">错过再等一年！</div>
              </div>
            </td>
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
      <div class="area5-guarantee"><span class="guarantee-icon">✅</span>100%无忧保障 · 支持微信/支付宝安全支付</div>
    </div>
    <div v-if="showModal" class="pay-modal">
      <div class="pay-modal-content">
        <h3 class="pay-title">{{ payType ? '需支付¥3999' : '请选择支付方式' }}</h3>
        <div v-if="!payType" class="pay-type-btns">
          <button class="pay-type-btn wx"
            @click="payType='wx'"
            @mouseenter="hoverPay='wx'"
            @mouseleave="hoverPay=null"
            :class="{'pay-hover': hoverPay==='wx', 'pay-shrink': hoverPay==='zfb'}"
          >微信支付</button>
          <button class="pay-type-btn zfb"
            @click="payType='zfb'"
            @mouseenter="hoverPay='zfb'"
            @mouseleave="hoverPay=null"
            :class="{'pay-hover': hoverPay==='zfb', 'pay-shrink': hoverPay==='wx'}"
          >支付宝支付</button>
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
      payActive: false,
      hoverPay: null
    }
  },
  computed: {
    ctaTextStyle() {
      if (!this.payActive || window.innerWidth <= 600) return { transform: 'translate(0,0)' };
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
      if (window.innerWidth <= 600) return;
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
  /* background: linear-gradient(white, white) padding-box, linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box; */
}
.area5-header {
  width: 90vw;
  max-width: 1200px;
  min-width: 320px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 0;
  margin-right: 0;
  background: linear-gradient(120deg, #fffbe7 0%, #ffe082 40%, #ffd54f 70%, #ff9800 100%, #fffbe7 120%);
  border-radius: 18px;
  padding: 3.6em 2.2em 2.2em 2.2em;
  text-align: center;
  box-shadow: 0 2px 12px rgba(255,152,0,0.08);
  box-sizing: border-box;
  margin-bottom: 2.2em;
}
.area5-title {
  font-size: 2.7rem;
  font-weight: 900;
  color: #d84315;
  margin-bottom: 1.1em;
  line-height: 1.25;
  letter-spacing: 2px;
  text-shadow: 0 4px 18px #fffbe7cc, 0 1.5px 0 #fff;
  background: none;
  animation: fadeInTitle5 1.2s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes fadeInTitle5 {
  0% { opacity: 0; transform: scale(0.7) translateY(-40px); }
  60% { opacity: 1; transform: scale(1.1) translateY(10px); }
  80% { transform: scale(0.95) translateY(-4px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.area5-subtitle {
  font-size: 1.45rem;
  color: #fff;
  margin-bottom: 1.3em;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: 1.5px;
  background: linear-gradient(90deg, #ff7043 0%, #ffd54f 100%);
  border-radius: 1.5em;
  padding: 0.7em 1.6em;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 18px #ff980055;
  animation: urgentPulse 1.6s infinite alternate;
}
.area5-subtitle::before {
  content: '⏰ ';
  font-size: 1.3em;
  margin-right: 0.3em;
  vertical-align: middle;
}
@keyframes urgentPulse {
  0% { box-shadow: 0 4px 18px #ff980055; }
  100% { box-shadow: 0 8px 32px #ff704399; }
}
.area5-countdown {
  font-size: 1.45rem;
  font-weight: 900;
  color: #fff;
  margin-top: 1.2em;
  margin-bottom: 0.1em;
  background: linear-gradient(90deg, #ff5252 0%, #ffd54f 100%);
  border-radius: 1.5em;
  padding: 0.7em 1.6em;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 18px #ff980055;
  animation: urgentPulse 1.6s infinite alternate;
}
.area5-countdown::before {
  content: '⚡ ';
  font-size: 1.3em;
  margin-right: 0.3em;
  vertical-align: middle;
}
.area5-countdown span {
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 0.3em;
  background: -webkit-linear-gradient(90deg, #0d47a1 0%, #00e5ff 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  text-shadow: 0 2px 12px #fff, 0 1.5px 0 #fff;
  animation: countdownNumJump 1.2s infinite alternate;
}
@keyframes countdownNumJump {
  0% { transform: scale(1); }
  60% { transform: scale(1.18); }
  100% { transform: scale(1); }
}
@media (max-width: 900px) {
  .area5-header {
    width: 94vw;
    max-width: 98vw;
    left: 50%;
    transform: translateX(-51%);
    margin-left: 0;
    margin-right: 0;
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
  background: linear-gradient(90deg, #ff9800 0%, #ff3d00 100%);
  color: #fff;
  border: none;
  border-radius: 1.2em;
  padding: 0.7em 1.6em;
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.22s, transform 0.18s;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.1em;
  box-shadow: 0 4px 24px #ff980099, 0 0 0 8px #ffd54f55;
  animation: btnPulse 1.8s infinite alternate;
}
.buy-btn.disabled,
.buy-btn:disabled {
  background: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
  box-shadow: none;
  transform: none !important;
  animation: none !important;
  padding: 0.4em 1em !important;
  font-size: 0.95rem !important;
  border-radius: 1.1em !important;
}
.cta-text {
  display: inline-block;
  transition: transform 0.18s cubic-bezier(.4,1.6,.6,1);
  will-change: transform;
  font-weight: 900;
  letter-spacing: 1.2px;
}
.buy-btn .cta-text::before {
  content: '🔥 ';
  font-size: 1.1em;
  margin-right: 0.1em;
  vertical-align: middle;
}
.buy-btn:hover {
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  box-shadow: 0 12px 48px 0 #ff3d00cc, 0 0 0 18px #ffd54faa;
  transform: scale(1.13);
}
.btn-icon {
  font-size: 1.2em;
  margin-right: 0.18em;
  vertical-align: middle;
}
@keyframes btnPulse {
  0% { box-shadow: 0 4px 24px #ff980099, 0 0 0 8px #ffd54f55; }
  100% { box-shadow: 0 8px 48px #ff3d00cc, 0 0 0 16px #ffd54faa; transform: scale(1.08); }
}
.buy-tip {
  color: #ff3d00;
  font-size: 1.08rem;
  font-weight: 700;
  margin-top: 0.12em;
  letter-spacing: 1.1px;
  text-align: center;
  background: linear-gradient(90deg, #fffbe7 0%, #ffd54f 100%);
  border-radius: 1.2em;
  padding: 0.38em 1.1em;
  display: block;
  width: 96%;
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 8px #ffd54f55;
  position: relative;
  top: 0.05em;
  animation: tipPulse 2.2s infinite alternate;
}
@keyframes tipPulse {
  0% { box-shadow: 0 2px 8px #ffd54f55; }
  100% { box-shadow: 0 8px 24px #ff980099; }
}
.buy-tip::before {
  content: '⏰ ';
  font-size: 1.1em;
  margin-right: 0.1em;
  vertical-align: middle;
}
.area5-guarantee {
  width: 100%;
  text-align: center;
  margin: 1.5em 0 0.5em 0;
  font-size: 1.08rem;
  color: #388e3c;
  font-weight: 700;
  letter-spacing: 1.1px;
  background: #fffde7;
  border-radius: 1.2em;
  padding: 0.5em 1.2em;
  display: inline-block;
  box-shadow: 0 2px 8px #ffe08255;
}
.guarantee-icon {
  color: #07c160;
  font-size: 1.2em;
  margin-right: 0.18em;
  vertical-align: middle;
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
  transition: background 0.2s, transform 0.22s cubic-bezier(.4,1.6,.6,1);
  box-shadow: 0 2px 8px rgba(255,152,0,0.10);
}
.pay-type-btn.zfb {
  background: #00aaff;
}
.pay-type-btn.wx {
  background: #07c160;
}
.pay-type-btn.pay-hover {
  transform: scale(1.15);
  z-index: 2;
  box-shadow: 0 4px 24px #ff980099;
}
.pay-type-btn.pay-shrink {
  transform: scale(0.92);
  opacity: 0.85;
  z-index: 1;
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
@media (max-width: 600px) {
  .cta-text {
    transform: none !important;
  }
  .buy-btn:hover {
    border-image: none !important;
    box-shadow: none !important;
  }
}
@media (max-width: 600px) {
  .feature-block {
    width: 98vw;
    left: 50%;
    transform: translateX(-50%);
    min-width: 0;
    margin: 2.5em 0;
  }
}
.area5-main-block {
  width: 90vw;
  max-width: 1200px;
  min-width: 320px;
  margin: 2.5em auto;
  background: linear-gradient(120deg, #fffbe7 0%, #ffe082 60%, #ffd54f 100%);
  border-radius: 28px;
  box-shadow: 0 2px 24px rgba(255,152,0,0.13);
  padding: 0;
  overflow: hidden;
  z-index: 2;
}
.current-row {
  background: linear-gradient(90deg, #fffbe7 0%, #ffd54f 100%);
  font-weight: 900;
  font-size: 1.18rem;
}
.current-label {
  color: #d84315;
  font-size: 2.1rem;
  font-weight: 900;
  letter-spacing: 1.5px;
}
.current-icon {
  color: #ff3d00;
  font-size: 1.3em;
  margin-right: 0.2em;
  vertical-align: middle;
  animation: iconFlash 1.2s infinite alternate;
}
@keyframes iconFlash {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.5) drop-shadow(0 0 8px #ffd54f); }
}
.current-price {
  color: #ff3d00;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 1.2px;
  position: relative;
}
.current-tag {
  background: linear-gradient(90deg, #ff7043 0%, #ffd54f 100%);
  color: #fff;
  border-radius: 1em;
  font-size: 0.95em;
  font-weight: 900;
  padding: 0.18em 0.7em;
  margin-left: 0.5em;
  box-shadow: 0 2px 8px #ffd54f55;
  animation: urgentPulse 1.6s infinite alternate;
}
.current-left {
  color: #d84315;
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1.2px;
  animation: leftJump 1.2s infinite alternate;
}
@keyframes leftJump {
  0% { transform: scale(1); color: #d32f2f; }
  60% { transform: scale(1.18); color: #ff3d00; }
  100% { transform: scale(1); color: #d32f2f; }
}
.buy-btn-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 2em;
  background: none;
  position: relative;
  z-index: 2;
}
</style> 