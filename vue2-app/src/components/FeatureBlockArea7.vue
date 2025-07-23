<template>
  <section class="feature-block">
    <div class="area7-title">
      <div class="area7-title-row1"><span class="area7-icon">🛡️</span>创始人权威推荐</div>
      <div class="founder-cert">官方认证</div>
    </div>
    <div class="founder-section">
      <div class="founder-header">
        <img class="founder-photo" src="/头像.jpg" alt="创始人照片" />
        <div class="founder-info">
          <div class="founder-name">李俊熙</div>
          <div class="founder-role">（决胜单创始人/亚马逊8年老兵）</div>
          <div class="founder-bio">8年亚马逊一线实战，服务过300+卖家，踩过你踩过的所有坑。<br>“决胜单”是我和团队用心打磨、亲自实测的AI决策工具，已帮助众多卖家避免库存损失、提升利润。</div>
        </div>
      </div>
      <div class="founder-bio-box">8年亚马逊一线实战，服务过300+卖家，踩过你踩过的所有坑。<br>“决胜单”是我和团队用心打磨、亲自实测的AI决策工具，已帮助众多卖家避免库存损失、提升利润。</div>
      <div class="founder-desc">
        <span class="founder-quote">“我承诺：每一位用户都能获得超预期的价值和服务！”</span>
      </div>
      <div class="founder-footer">
        <div class="founder-extra">已服务<span class="founder-highlight">300+</span>卖家 · 好评如潮</div>
      </div>
    </div>
    <div class="testimonials-section">
      <div class="testimonials-title"><span class="testimonials-icon">💬</span>真实用户评价</div>
      <div class="testimonials-list mobile-scrollable">
        <template v-if="isDesktop">
          <transition name="fade-batch-desktop" mode="out-in">
            <div class="testimonials-row-wrap" :key="currentPage">
              <div v-for="(item, idx) in visibleTestimonialsDesktop" :key="(item.text || 'empty') + (item.user || idx) + currentPage" class="testimonial-card">
                <div v-if="!item._empty">
                  <div class="testimonial-quote">“</div>
                  <div class="testimonial-text">{{ item.text }}</div>
                  <div class="testimonial-user">{{ item.user }}</div>
                </div>
              </div>
            </div>
          </transition>
        </template>
        <template v-else>
          <div class="testimonials-row-wrap-mobile">
            <div v-for="(item, idx) in visibleTestimonialsMobile" :key="(item.text || 'empty') + (item.user || idx)" class="testimonial-card">
              <div v-if="!item._empty">
                <div class="testimonial-quote">“</div>
                <div class="testimonial-text">{{ item.text }}</div>
                <div class="testimonial-user">{{ item.user }}</div>
              </div>
            </div>
          </div>
        </template>
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
        { text: '“用了决胜单后，补货再也不怕拍脑袋，AI分析很专业！”', user: '深圳Anker公司 产品经理' },
        { text: '“极大提升了我们的补货决策效率，强烈推荐！”', user: '深圳跨境电商卖家 Lily' },
        { text: '“部署简单，数据分析很到位，团队都在用。”', user: '深圳某3C品牌运营总监' },
        { text: '“AI预警功能帮我们避免了大额库存损失。”', user: '广州亚马逊卖家 Tony' },
        { text: '“客服响应很快，技术支持很专业。”', user: '早期体验用户 王先生' },
        { text: '“每次补货前都用决胜单，心里踏实多了！”', user: '深圳3C卖家 张总' },
        { text: '“数据报告很直观，团队决策效率提升一大截。”', user: '广州运营总监 李女士' },
        { text: '“AI让我们补货更科学，库存周转率提升了30%！”', user: '杭州跨境卖家 赵先生' },
        { text: '“功能很全，性价比高，值得推荐！”', user: '宁波卖家 王总' },
        { text: '“补货决策再也不拍脑袋了，感谢决胜单！”', user: '义乌卖家 小李' },
        { text: '“AI预测销量很准，库存压力小多了！”', user: '深圳智能家居卖家 刘小姐' },
        { text: '“界面友好，操作简单，团队新人也能快速上手。”', user: '东莞运营主管 陈先生' },
        { text: '“报表一目了然，老板每周都要看！”', user: '广州公司助理 小王' },
        { text: '“节省了大量人工分析时间，效率翻倍！”', user: '佛山灯饰卖家 赵总' },
        { text: '“客服很耐心，遇到问题都能及时解决。”', user: '深圳卖家 小陈' },
        { text: '“补货建议很实用，避免了断货和积压。”', user: '上海跨境卖家 李总' },
        { text: '“数据对接很顺畅，和ERP系统兼容。”', user: '深圳IT负责人 王工' },
        { text: '“每次新品上线都用决胜单，效果很棒！”', user: '广州新品运营 小杨' }
      ],
      currentPage: 0,
      timer: null,
      mobileScrollIndex: 0
    }
  },
  computed: {
    isDesktop() {
      return window.innerWidth > 600;
    },
    visibleTestimonialsDesktop() {
      // 桌面端：每次显示9条，自动分页
      if (!this.isDesktop) return [];
      const pageSize = 9;
      const total = this.testimonials.length;
      const pageCount = Math.ceil(total / pageSize);
      const start = this.currentPage * pageSize;
      let arr = this.testimonials.slice(start, start + pageSize);
      // 不足9条补空
      while (arr.length < 9) arr.push({ text: '', user: '', _empty: true });
      return arr;
    },
    visibleTestimonialsMobile() {
      if (this.isDesktop) return [];
      // 移动端：展示所有评论
      return this.testimonials;
    },
    scrollbarThumbStyle() {
      if (window.innerWidth > 600) return {};
      const total = this.testimonials.length;
      const visible = 2;
      const percent = visible / total;
      const top = (this.mobileScrollIndex / total) * 100;
      return {
        height: `${percent * 100}%`,
        top: `${top}%`
      };
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (!this.isDesktop) return;
      const pageSize = 9;
      const pageCount = Math.ceil(this.testimonials.length / pageSize);
      this.currentPage = (this.currentPage + 1) % pageCount;
    }, 7000); // 柔滑切换，7秒一批
    window.addEventListener('resize', this.handleResize);
    if (window.innerWidth <= 600) {
      const list = document.querySelector('.mobile-scrollable');
      if (list) {
        list.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        list.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      }
    }
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
    window.removeEventListener('resize', this.handleResize);
    if (window.innerWidth <= 600) {
      const list = document.querySelector('.mobile-scrollable');
      if (list) {
        list.removeEventListener('touchstart', this.handleTouchStart);
        list.removeEventListener('touchmove', this.handleTouchMove);
      }
    }
  },
  methods: {
    handleTouchStart(e) {
      this._touchStartY = e.touches[0].clientY;
    },
    handleTouchMove(e) {
      const deltaY = e.touches[0].clientY - this._touchStartY;
      if (Math.abs(deltaY) > 40) {
        if (deltaY < 0 && this.mobileScrollIndex < this.testimonials.length - 2) {
          this.mobileScrollIndex++;
        } else if (deltaY > 0 && this.mobileScrollIndex > 0) {
          this.mobileScrollIndex--;
        }
        this._touchStartY = e.touches[0].clientY;
      }
    },
    handleResize() {
      this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
.area7-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  width: 100%;
  background: linear-gradient(90deg, #fffde7 0%, #ffe082 100%);
  border-radius: 1.5em;
  padding: 1.1em 0.5em 1em 0.5em;
  margin-bottom: 2em;
}
.area7-title-row1 {
  font-size: 2.6rem;
  font-weight: 900;
  color: #d84315;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px #ffd54f55;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.area7-icon {
  font-size: 2.5em;
  margin-right: 0.2em;
  vertical-align: middle;
}
.founder-cert {
  background: #07c160;
  color: #fff;
  border-radius: 1em;
  font-size: 1.25em;
  font-weight: 900;
  padding: 0.18em 1.2em;
  margin: 0 auto;
  box-shadow: 0 1px 4px #07c16033;
  letter-spacing: 1.1px;
  text-align: center;
  display: inline-block;
}
.founder-section {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  margin-bottom: 2.5em;
  background: #fff7e6;
  border-radius: 1.5em;
  padding: 1.2em 2.5em;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.founder-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
  width: 100%;
}
.founder-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 12px #ffd54f33;
  background: #ffe0b2;
}
.founder-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 0;
}
.founder-name {
  font-size: 1.25em;
  font-weight: 900;
  color: #d84315;
  margin-bottom: 0.1em;
}
.founder-role {
  color: #ff9800;
  font-size: 0.95em;
  font-weight: 700;
  margin-left: 0.5em;
}
.founder-bio {
  font-size: 1.05em;
  color: #333;
  line-height: 1.7;
  margin-top: 0.2em;
}
.founder-bio-box {
  border: 2px solid #fff;
  border-radius: 1.2em;
  background: #fffefb;
  color: #333;
  font-size: 0.92rem;
  padding: 0.8em 1em;
  margin: 0.7em 0 0.7em 0;
  line-height: 1.7;
  box-shadow: 0 2px 8px #ffd54f22;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}
.founder-desc {
  flex: 1 1 auto;
  font-size: 1.18rem;
  color: #333;
  line-height: 1.7;
  font-weight: 500;
  background: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: flex-start;
  align-items: flex-start;
}
.founder-quote {
  color: #ff9800;
  font-size: 1.08em;
  font-weight: 700;
  margin-top: 0.5em;
  display: block;
}
.founder-extra {
  color: #388e3c;
  font-size: 1.05em;
  font-weight: 700;
  margin-top: 0.3em;
}
.founder-footer {
  margin-top: 0.5em;
  text-align: left;
  width: 100%;
}
.founder-highlight {
  color: #ff9800;
  font-size: 1.15em;
  font-weight: 900;
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
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
}
.testimonials-icon {
  font-size: 1.3em;
  vertical-align: middle;
}
.testimonials-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
  background: #fff7e6;
  padding: 1.2em 5vw 1.2em 5vw;
  max-width: 90vw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.testimonials-row-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.2em 2.2em;
  width: 100%;
  justify-items: center;
  align-items: stretch;
}
.testimonial-card {
  min-width: 220px;
  max-width: 320px;
  margin: 0;
}
.empty-card {
  background: none;
  border: none;
  box-shadow: none;
}
.fade-in-enter-active, .fade-in-leave-active {
  transition: all 0.7s cubic-bezier(.4,1.6,.6,1);
}
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.testimonial-card.fade-in {
  opacity: 0;
  animation: fadeInUp 0.7s forwards;
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.testimonial-quote {
  font-size: 2.2em;
  color: #ff9800;
  position: absolute;
  left: 0.2em;
  top: 0.1em;
  opacity: 0.18;
  pointer-events: none;
}
.testimonial-text {
  font-size: 0.98rem;
  color: #d84315;
  margin-bottom: 1.2em;
  text-align: left;
  font-weight: 700;
  z-index: 2;
}
.testimonial-user {
  font-size: 0.78rem;
  color: #888;
  text-align: left;
  z-index: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
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
  /* 温暖的金色渐变，突出信任和权威 */
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
    font-size: 1.08rem;
    padding: 0.6em 0.7em;
  }
  .testimonials-title {
    font-size: 1.18rem;
  }
  .testimonial-card {
    padding: 0.2em 0.2em;
    min-width: 0;
    max-width: 100%;
  }
  .testimonial-text {
    font-size: 1.08rem;
  }
  .testimonial-user {
    font-size: 0.98rem;
  }
  .area7-title {
    font-size: 1.25rem;
    padding: 0.5em 0.1em 0.4em 0.1em;
  }
  .testimonials-list {
    padding: 1em 0.3em 0.7em 0.3em;
  }
  .founder-bio-box {
    border: 2px solid #fff;
    border-radius: 1.2em;
    background: #fffefb;
    color: #333;
    font-size: 0.92rem;
    padding: 0.8em 1em;
    margin: 0.7em 0 0.7em 0;
    line-height: 1.7;
    box-shadow: 0 2px 8px #ffd54f22;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
  }
  .founder-footer {
    margin-top: 0.5em;
    text-align: left;
    width: 100%;
  }
  .founder-desc {
    margin-bottom: 0.2em !important;
  }
  .founder-info .founder-bio {
    display: none !important;
  }
}
@media (min-width: 601px) {
  .founder-info .founder-name {
    display: inline-block !important;
  }
  .founder-info .founder-role {
    display: inline-block !important;
    font-size: 0.95em;
    color: #ff9800;
    margin-left: 0.5em;
    font-weight: 700;
  }
  .founder-bio-box {
    display: none !important;
  }
  .founder-info .founder-bio {
    display: block !important;
    margin-top: 0.3em;
    font-size: 1.05em;
    color: #333;
    line-height: 1.7;
  }
  .testimonial-text {
    font-size: 1.22rem;
  }
  .testimonial-user {
    font-size: 0.98rem;
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
.fade-batch-enter-active, .fade-batch-leave-active {
  transition: opacity 0.7s cubic-bezier(.4,1.6,.6,1), transform 0.7s cubic-bezier(.4,1.6,.6,1);
}
.fade-batch-enter, .fade-batch-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
@media (min-width: 601px) {
  .testimonials-row-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.2em 2.2em;
    width: 100%;
    justify-items: center;
    align-items: stretch;
    min-height: 420px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .testimonial-card {
    width: 100%;
    min-width: 0;
    max-width: 320px;
    height: 120px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #fff;
    border-radius: 1.2em;
    box-shadow: 0 2px 8px #ffd54f22;
    padding: 1em 1.2em;
    margin: 0;
  }
}
.fade-batch-desktop-enter-active, .fade-batch-desktop-leave-active {
  transition: opacity 0.7s cubic-bezier(.4,1.6,.6,1);
}
.fade-batch-desktop-enter, .fade-batch-desktop-leave-to {
  opacity: 0;
}
@media (max-width: 600px) {
  .area7-title-row1 {
    font-size: 1.35rem !important;
  }
  .area7-icon {
    font-size: 1.5em !important;
  }
  .founder-cert {
    font-size: 1em !important;
    padding: 0.13em 0.7em !important;
  }
}
@media (max-width: 600px) {
  .founder-info .founder-name {
    font-size: 1.08em !important;
    margin-bottom: 0.08em !important;
  }
  .founder-info .founder-role {
    display: block !important;
    font-size: 0.68em !important;
    color: #ff9800 !important;
    margin: 0 0 0.12em 0 !important;
    font-weight: 700 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  .founder-info .founder-bio {
    display: none !important;
  }
}
@media (max-width: 600px) {
  .testimonials-row-wrap {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.7em !important;
    width: 100% !important;
    align-items: stretch !important;
  }
  .testimonial-card {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    background: #fff;
    border-radius: 1.2em;
    box-shadow: 0 2px 8px #ffd54f22;
    padding: 1em 1.2em;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }
  .testimonial-text {
    font-size: 1.02rem !important;
    color: #d84315 !important;
    margin-bottom: 0.7em !important;
    text-align: left !important;
    font-weight: 700 !important;
    word-break: break-all !important;
    line-height: 1.6 !important;
    white-space: pre-line !important;
  }
  .testimonial-user {
    font-size: 0.82rem !important;
    color: #888 !important;
    text-align: left !important;
    font-weight: 500 !important;
    margin-top: 0.1em !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: initial !important;
  }
}
@media (max-width: 600px) {
  .testimonials-row-wrap {
    max-height: 260px;
    overflow: hidden;
  }
}
@media (max-width: 600px) {
  .mobile-scrollable {
    max-height: 170px;
    min-height: 85px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
  }
  .testimonials-row-wrap-mobile {
    min-height: 85px;
    max-height: 170px;
    overflow: visible;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .fade-slide-enter, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }
  /* 移除自定义滚动条样式 */
  .mobile-scrollbar, .mobile-scrollbar-thumb { display: none !important; }
}
</style> 