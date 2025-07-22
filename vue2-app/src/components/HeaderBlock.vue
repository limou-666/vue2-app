<template>
  <header class="header">
    <video class="header-bg-video" src="/大屏幕背景.mp4" autoplay loop muted playsinline></video>
    <div class="header-content">
      <div class="header-titles">
        <h1 class="main-title">告别采购赌博，你的亚马逊专属AI决策大脑</h1>
        <p class="sub-title">在下一次补货前，让“决胜单”Agent分析所有风险，用数据告诉你这批货到底该不该下单。</p>
      </div>
      <div class="header-btn-area">
        <button class="header-btn" @mousemove="onMove" @mouseleave="onLeave" @click="$emit('scrollToArea5')" ref="ctaBtn">
          <span class="cta-text" :style="ctaTextStyle">立即体验</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBlock',
  data() {
    return {
      ctaOffset: { x: 0, y: 0 },
      ctaActive: false
    }
  },
  computed: {
    ctaTextStyle() {
      if (!this.ctaActive) return { transform: 'translate(0,0)' };
      return {
        transform: `translate(${this.ctaOffset.x}px, ${this.ctaOffset.y}px)`
      };
    }
  },
  methods: {
    onMove(e) {
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
.header {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  min-height: 340px;
  max-height: 80vh;
  overflow: hidden;
  border-radius: 2.5em;
}
@media (max-width: 600px) {
  .header {
    min-height: 120px;
    max-height: none;
    height: 220px;
    border-radius: 1.2em;
  }
  .main-title {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    line-height: 1.1;
  }
  .sub-title {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
  .header-btn {
    font-size: 0.85rem;
    padding: 0.4em 1em;
    border-radius: 1.2em;
  }
  .header-titles {
    top: 0.2em;
  }
  .header-btn-area {
    margin-top: 0.7em;
  }
}
.header-bg-video {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}
.header-content {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header-titles {
  position: absolute;
  top: 7.9em;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-btn-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 15.5em;
}
@media (max-width: 600px) {
  .header-titles {
    top: 0.5em;
  }
  .header-btn-area {
    margin-top: 1.8em;
  }
}
.main-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  text-shadow: 0 4px 18px rgba(0,0,0,0.22), 0 1.5px 0 #e53935;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
  background: linear-gradient(90deg, #fff 20%, #ffe082 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub-title {
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  color: #e53935;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  text-align: center;
  font-weight: 500;
}
.header-btn {
  font-size: 1.5rem;
  padding: 1.1em 2.8em;
  background: linear-gradient(90deg, rgba(255,152,0,0.75) 0%, rgba(216,67,21,0.75) 100%);
  border-radius: 2em;
}
.cta-text {
  display: inline-block;
  transition: transform 0.18s cubic-bezier(.4,1.6,.6,1);
  will-change: transform;
}
.header-btn:hover {
  background: #ff9800;
  border-image: linear-gradient(90deg, #ff9800 0%, #d84315 100%) 1;
  box-shadow: 0 6px 32px 0 rgba(255,152,0,0.18), 0 0 0 10px rgba(255,224,240,0.18);
}
@media (max-width: 600px) {
  .main-title,
  .sub-title {
    display: block !important;
  }
  .main-title {
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    line-height: 1.1;
    padding-left: 1.5em;
    text-align: left;
  }
  .sub-title {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .header-btn {
    transform: scale(0.5);
    transform-origin: top center;
  }
}
</style> 