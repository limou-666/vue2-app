<template>
  <header class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <h1 class="main-title">告别采购赌博，你的亚马逊专属AI决策大脑</h1>
      <p class="sub-title">在下一次补货前，让“决胜单”Agent分析所有风险，用数据告诉你这批货到底该不该下单。</p>
      <button class="header-btn" @mousemove="onMove" @mouseleave="onLeave" @click="$emit('scrollToArea5')" ref="ctaBtn">
        <span class="cta-text" :style="ctaTextStyle">立即体验</span>
      </button>
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
  background: #42b983;
  color: #fff;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-height: 340px;
  overflow: hidden;
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto 2.2rem auto;
}
.header-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #42b983;
  background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2J6d3Z2b2J6d3Z2b2J6d3Z2b2J6d3Z2b2J6d3Z2b2J6d3Z2/giphy.gif');
  background-size: cover;
  background-position: center;
  opacity: 0.55;
  filter: blur(0px);
}
.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3.5rem 1.5rem 2.5rem 1.5rem;
}
.main-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  text-shadow: 0 4px 18px rgba(0,0,0,0.22), 0 1.5px 0 #fff;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
  background: linear-gradient(90deg, #fff 20%, #ffe082 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #fffde7;
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
</style> 