<template>
  <section class="feature-block area9">
    <div class="area9-content">
      <div class="area9-highlight">
        <div class="area9-value">
          一次错误的补货决策，损失的可能就是几万甚至几十万。而今天，只需一笔小小的投资，就能拥有一个永不疲倦的AI决策大脑。
        </div>
        <div class="area9-urgency">
          天使合伙人席位即将售罄，价格马上上涨。立即行动，锁定骨折优惠！
        </div>
      </div>
      <button class="area9-cta cta-mousemove"
        @mousemove="onMove"
        @mouseleave="onLeave"
        @click="scrollToPay"
        ref="ctaBtn"
      >
        <span class="cta-text" :style="ctaTextStyle">立即抢占最后席位，告别采购赌博！</span>
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
      ctaActive: false
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
  methods: {
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
  border: 3px solid transparent;
  border-radius: 18px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(120deg, #ffe0f0 0%, #ffe9b2 100%) border-box;
  box-shadow: 0 4px 32px 0 rgba(255,192,203,0.10), 0 0 0 8px rgba(255,224,240,0.12);
  padding: 2.2em 3.5em 2.2em 3.5em;
}
.area9-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2em;
}
.area9-highlight {
  background: linear-gradient(90deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 18px;
  border: 3px solid #ff9800;
  box-shadow: 0 4px 24px 0 rgba(255,152,0,0.13);
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
  font-size: 1.7rem;
  color: #d84315;
  font-weight: bold;
  line-height: 1.6;
}
.area9-urgency {
  font-size: 1.3rem;
  color: #ff9800;
  font-weight: bold;
  line-height: 1.5;
}
.area9-cta {
  background: linear-gradient(90deg, rgba(255,152,0,0.75) 0%, rgba(216,67,21,0.75) 100%);
  color: #fff;
  font-size: 1.7rem;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  padding: 1.3em 3.2em;
  box-shadow: 0 2px 12px rgba(255,152,0,0.13);
  cursor: pointer;
  margin-top: 1.2em;
  transition: background 0.2s, box-shadow 0.2s;
  letter-spacing: 0.02em;
  overflow: hidden;
  position: relative;
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
    font-size: 0.95rem;
  }
  .area9-urgency {
    font-size: 0.82rem;
  }
  .area9-cta {
    font-size: 1.05rem;
    padding: 0.7em 0.7em;
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