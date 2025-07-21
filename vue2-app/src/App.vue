<template>
  <div class="container">
    <header class="header">
      <div class="header-bg"></div>
      <div class="header-content">
        <h1 class="main-title">告别采购赌博，你的亚马逊专属AI决策大脑</h1>
        <p class="sub-title">在下一次补货前，让“决胜单”Agent分析所有风险，用数据告诉你这批货到底该不该下单。</p>
        <button class="header-btn">立即查看「限时团购」方案</button>
      </div>
    </header>
    <main class="main">
      <section class="section section1">
        <div class="section1-title-bg">
          <h2 class="section-title">你是否也曾因为一次错误的补货，亏掉数万利润？</h2>
        </div>
        <div class="section1-content">
          <div class="section1-grid">
            <div class="card">
              <div class="card-inner">
                <span class="card-icon">⏳</span>
                <span class="card-text">爆款生命周期末期，误判形势，库存积压。</span>
              </div>
            </div>
            <div class="card">
              <div class="card-inner">
                <span class="card-icon">😰</span>
                <span class="card-text">凭感觉补货，心里没底，夜夜难眠。</span>
              </div>
            </div>
            <div class="card">
              <div class="card-inner">
                <span class="card-icon">💬</span>
                <span class="card-text">差评突然增多，不知源头，应对无力。</span>
              </div>
            </div>
            <div class="card">
              <div class="card-inner">
                <span class="card-icon">⏱️</span>
                <span class="card-text">团队手动分析，耗时耗力，效率低下。</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section1-bottom">
          <div class="bottom-title">讲一个简短的、有代入感的故事</div>
          <div class="bottom-desc">深圳卖家张总的教训：一款月销3000件的爆款，因未及时发现材料相关的差评增多，盲目追单5000件，最终导致差评爆发，链接被限制，库存价值30万的货砸在手里...</div>
        </div>
      </section>
      <section class="section">内容区2</section>
      <section class="section">内容区3</section>
    </main>
    <footer class="footer">© 2024 响应式布局示例</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
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
  background: #ffb300;
  color: #222;
  font-size: 1.15rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2.2rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.header-btn:hover {
  background: #ff9800;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem 1rem 1rem;
}
.section {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1rem;
  min-width: 0;
}
.section1 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1.5rem 1rem;
  background: #f7fafc;
}
.section1-title-bg {
  width: 100%;
  background: linear-gradient(90deg, rgba(220,38,38,0.8) 0%, rgba(255,87,34,0.8) 100%);
  border-radius: 8px 8px 0 0;
  margin-bottom: 0.7rem;
  padding: 1.1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
  color: #ffd600;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(255,193,7,0.18), 0 1.5px 0 #fff;
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
}
.section1-content {
  width: 90vw;
  min-width: 320px;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.section1-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.2rem;
}
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.2rem 0.8rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #42b983;
  border: 1.5px solid #e0f7ef;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.card-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.card-icon {
  font-size: 2rem;
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
}
.card-text {
  font-size: 1.08rem;
  color: #222;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.section1-bottom {
  margin-top: 0.7rem;
  background: #ffe082;
  color: #222;
  border-radius: 0 0 8px 8px;
  padding: 1.1rem 1rem 1.2rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  box-shadow: 0 2px 8px rgba(255,193,7,0.08);
  width: 100%;
  max-width: none;
  min-width: 0;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
}
.bottom-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #b28704;
  letter-spacing: 1px;
  text-align: left;
}
.bottom-desc {
  font-size: 1.05rem;
  font-weight: 400;
  color: #333;
  line-height: 1.7;
  text-align: left;
}
// 平板和手机
@media (max-width: 1199px) {
  .main {
    flex-direction: column;
  }
  .section {
    margin-bottom: 1rem;
  }
  .section1-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7rem;
  }
  .section1-bottom {
    max-width: 700px;
    min-width: 340px;
  }
}
// 移动端最小宽度
@media (max-width: 700px) {
  .section1-content {
    min-width: 90vw;
  }
  .section1-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 