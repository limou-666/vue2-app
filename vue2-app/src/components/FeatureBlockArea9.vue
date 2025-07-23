<template>
  <section class="feature-block area9">
    <div class="area9-content">
      <div class="area9-highlight">
        <div class="area9-value">
          <span class="area9-icon">⏰</span>
          <b>限时限量 · 最后抢购机会！</b>
        </div>
        <div class="area9-urgency">
          <span class="urgency-label">仅剩 <span class="urgency-num">3</span> 席</span>
          <span class="urgency-timer">倒计时 <span class="timer-num">{{ countdown }}</span></span>
        </div>
        <div class="area9-desc">
          一次错误的补货决策，损失的可能就是几万甚至几十万。现在下单，锁定骨折优惠，抓住最后机会！
        </div>
      </div>
      <button class="area9-cta cta-mousemove pulse"
        @mousemove="onMove"
        @mouseleave="onLeave"
        @click="scrollToPay"
        ref="ctaBtn"
      >
        <span class="cta-text" :style="ctaTextStyle">立即支付，锁定优惠，下一秒可能就没了！</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBlockArea9',
  data() {
    return {
      ctaOffset: { x: 0, y: 0 },
      ctaActive: false,
      countdown: '',
      timer: null,
      targetTime: new Date('2025-07-25T00:00:00').getTime()
    }
  },
  computed: {
    ctaTextStyle() {
      if (!this.ctaActive || window.innerWidth <= 600) return { transform: 'translate(0,0)' };
      return {
        transform: `translate(${this.ctaOffset.x}px, ${this.ctaOffset.y}px)`
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
    scrollToPay() {
      const area5 = document.getElementById('area5');
      if (area5) {
        area5.scrollIntoView({ behavior: 'smooth' });
      }
    },
    onMove(e) {
      if (window.innerWidth <= 600) return;
      const btn = this.$refs.ctaBtn;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - rect.width / 2;
      const dy = y - rect.height / 2;
      const max = Math.min(rect.width, rect.height) / 4;
      this.ctaOffset = {
        x: Math.max(-max, Math.min(max, dx / 2)),
        y: Math.max(-max, Math.min(max, dy / 2))
      };
      this.ctaActive = true;
    },
    onLeave() {
      this.ctaOffset = { x: 0, y: 0 };
      this.ctaActive = false;
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
}
.area9-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.area9-highlight {
  background: linear-gradient(90deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 18px;
  padding: 2em 2.5em;
  margin-bottom: 2.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.2em;
}
.area9-value {
  font-size: 2.1rem;
  color: #c62828;
  font-weight: 900;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-bottom: 0.2em;
}
.area9-icon {
  font-size: 2.2em;
  color: #ff3d00;
  vertical-align: middle;
  filter: drop-shadow(0 2px 8px #ffd54f);
}
.area9-urgency {
  font-size: 1.25rem;
  color: #ff9800;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 0.2em;
  display: flex;
  align-items: center;
  gap: 2.2em;
}
.urgency-label {
  background: #ff3d00;
  color: #fff;
  font-size: 1.18em;
  font-weight: 900;
  border-radius: 1.2em;
  padding: 0.18em 1.1em;
  margin-right: 1.2em;
  letter-spacing: 1.2px;
  box-shadow: 0 2px 8px #ffd54f33;
}
.urgency-num {
  font-size: 1.25em;
  color: #ffd54f;
  font-weight: 900;
  margin: 0 0.2em;
}
.urgency-timer {
  background: #fffde7;
  color: #c62828;
  font-size: 1.13em;
  font-weight: bold;
  border-radius: 1.2em;
  padding: 0.18em 1.1em;
  letter-spacing: 1.2px;
  box-shadow: 0 2px 8px #ffd54f33;
}
.timer-num {
  font-family: 'Consolas', monospace;
  font-size: 1.18em;
  color: #d84315;
  font-weight: 900;
  margin-left: 0.2em;
}
.area9-desc {
  font-size: 1.18rem;
  color: #d84315;
  font-weight: 500;
  margin-top: 1.1em;
  margin-bottom: 0.2em;
}
.area9-cta {
  background: linear-gradient(90deg, #ff3d00 0%, #ffd54f 100%);
  color: #fff;
  font-size: 2.1rem;
  font-weight: 900;
  border: none;
  border-radius: 2.2em;
  padding: 1.5em 4.2em;
  box-shadow: 0 6px 32px 0 #ff980099, 0 0 0 10px #ffd54f33;
  cursor: pointer;
  margin-top: 0;
  transition: background 0.2s, box-shadow 0.2s, transform 0.18s;
  letter-spacing: 0.04em;
  overflow: hidden;
  position: relative;
  animation: ctaPulse 1.2s infinite alternate cubic-bezier(.4,1.6,.6,1);
}
@keyframes ctaPulse {
  0% { transform: scale(1); box-shadow: 0 6px 32px 0 #ff980099, 0 0 0 10px #ffd54f33; }
  100% { transform: scale(1.06); box-shadow: 0 12px 48px 0 #ff3d00cc, 0 0 0 18px #ffd54faa; }
}
.cta-text {
  display: inline-block;
  transition: transform 0.18s cubic-bezier(.4,1.6,.6,1);
  will-change: transform;
}
.area9-cta:hover {
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  box-shadow: 0 6px 32px 0 rgba(255,152,0,0.18), 0 0 0 10px rgba(255,224,240,0.18);
}
@media (max-width: 900px) {
  .feature-block {
    padding: 1.2em 1em 1.2em 1em;
  }
  .area9-highlight {
    padding: 1.1em 0.7em;
    border-radius: 14px;
  }
  .area9-value {
    font-size: 1.15rem;
  }
  .area9-urgency {
    font-size: 1rem;
  }
  .area9-cta {
    font-size: 1.25rem;
    padding: 1em 2em;
    border-radius: 14px;
  }
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
    padding-bottom: 1.1em;
  }
  .area9-content {
    gap: 1.1em;
  }
  .area9-highlight {
    padding: 0.7em 0.3em;
    border-radius: 10px;
    gap: 0.6em;
  }
  .area9-value {
    font-size: 1.18rem;
  }
  .area9-urgency {
    font-size: 1.05rem;
  }
  .area9-cta {
    font-size: 1.18rem;
    padding: 0.5em 0.7em;
    border-radius: 10px;
  }
  .cta-text {
    transform: none !important;
  }
  .area9-cta:hover {
    border-image: none !important;
    box-shadow: none !important;
  }
}
</style> 