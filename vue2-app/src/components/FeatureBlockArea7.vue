<template>
  <section class="feature-block">
    <div class="area7-title">我是谁？为什么你可以信任我？</div>
    <div class="founder-section">
      <img class="founder-photo" src="/头像.jpg" alt="创始人照片" />
      <div class="founder-desc">
        我是李俊熙，一个在深圳奋斗了8年的亚马逊老兵。我踩过你踩过的所有坑，也因此萌生了开发这款工具的想法...
      </div>
    </div>
    <div class="testimonials-section">
      <div class="testimonials-title">早期用户评价</div>
      <div class="carousel-wrap">
        <div class="testimonials-carousel">
          <div class="testimonial-card" v-if="testimonials.length">
            <div class="testimonial-text">{{ testimonials[currentIndex].text }}</div>
            <div class="testimonial-user">{{ testimonials[currentIndex].user }}</div>
          </div>
        </div>
        <div class="carousel-dots">
          <span
            v-for="(item, idx) in testimonials"
            :key="idx"
            class="carousel-dot"
            :class="{ active: idx === currentIndex }"
            @click="goTo(idx)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBlockArea7',
  data() {
    return {
      testimonials: [
        { text: '“这个工具太棒了，简直是我们采购部门的福音！”', user: '- 深圳Anker公司 产品经理' },
        { text: '“极大提升了我们的补货决策效率，强烈推荐！”', user: '- 深圳跨境电商卖家 Lily' },
        { text: '“部署简单，数据分析很到位，团队都在用。”', user: '- 深圳某3C品牌运营总监' },
        { text: '“AI预警功能帮我们避免了大额库存损失。”', user: '- 广州亚马逊卖家 Tony' },
        { text: '“客服响应很快，技术支持很专业。”', user: '- 早期体验用户 王先生' }
      ],
      currentIndex: 0,
      timer: null
    }
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    startCarousel() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 3000);
    },
    goTo(idx) {
      this.currentIndex = idx;
    }
  }
}
</script>

<style scoped>
.area7-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 2em;
  line-height: 1.3;
  background: linear-gradient(90deg, #ff9800 0%, #d84315 100%);
  border-radius: 18px;
  padding: 1.1em 0.5em 1em 0.5em;
  box-shadow: 0 4px 24px 0 rgba(255,152,0,0.13);
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(216,67,21,0.10);
  display: inline-block;
  width: 100%;
}
.founder-section {
  display: flex;
  align-items: center;
  gap: 2.2em;
  margin-bottom: 2.5em;
}
.founder-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(255,152,0,0.10);
  background: #ffe0b2;
}
.founder-desc {
  flex: 1 1 auto;
  font-size: 1.18rem;
  color: #333;
  line-height: 1.7;
  font-weight: 500;
  background: #fff7e6;
  border-radius: 12px;
  padding: 1.1em 1.5em;
  margin: 0.2em 0.2em 0.2em 0;
  box-shadow: 0 2px 8px rgba(255,152,0,0.07);
  border: 1.5px solid #ffe0b2;
}
.testimonials-section {
  margin-top: 2.5em;
}
.testimonials-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff9800;
  margin-bottom: 1.2em;
  text-align: center;
}
.carousel-wrap {
  background: linear-gradient(120deg, #ffe0b2 0%, #ffe0f0 100%);
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(255,152,0,0.08);
  padding: 2em 2.5em 1.5em 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  margin: 0 auto;
}
.testimonials-carousel {
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
}
.testimonial-card {
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.testimonial-text {
  font-size: 1.15rem;
  color: #d84315;
  margin-bottom: 1.2em;
  text-align: center;
  font-weight: 500;
}
.testimonial-user {
  font-size: 1rem;
  color: #888;
  text-align: center;
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
  .founder-section {
    gap: 1.2em;
  }
  .founder-photo {
    width: 90px;
    height: 90px;
  }
  .founder-desc {
    font-size: 1rem;
    padding: 0.8em 1em;
  }
  .carousel-wrap {
    padding: 1.2em 1em 1em 1em;
    max-width: 98vw;
  }
  .testimonial-text {
    font-size: 1rem;
  }
  .area7-title {
    font-size: 1.4rem;
    padding: 0.7em 0.2em 0.6em 0.2em;
  }
}
@media (max-width: 600px) {
  .founder-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7em;
  }
  .founder-photo {
    width: 70px;
    height: 70px;
    margin-bottom: 0.5em;
  }
  .founder-desc {
    font-size: 0.92rem;
    padding: 0.6em 0.7em;
  }
  .testimonials-title {
    font-size: 1.05rem;
  }
  .testimonial-card {
    padding: 0;
    min-width: 0;
    max-width: 100%;
  }
  .testimonial-text {
    font-size: 0.95rem;
  }
  .testimonial-user {
    font-size: 0.85rem;
  }
  .area7-title {
    font-size: 1.05rem;
    padding: 0.5em 0.1em 0.4em 0.1em;
  }
}
.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
  margin-top: 1.2em;
}
.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffe0b2;
  border: 2px solid #ff9800;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
  display: inline-block;
}
.carousel-dot.active {
  background: #ff9800;
  border: 2px solid #d84315;
}
@media (max-width: 600px) {
  .carousel-dot {
    width: 9px;
    height: 9px;
  }
  .carousel-dots {
    gap: 0.4em;
    margin-top: 0.7em;
  }
}
</style> 