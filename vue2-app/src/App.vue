<template>
  <div class="container">
    <header class="header">响应式首页演示</header>
    <main class="main">
      <section class="section">内容区1</section>
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
  background: #42b983;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
  font-size: 2rem;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
}
.section {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1rem;
  min-width: 0;
}
.footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
}
// 平板
@media (max-width: 1199px) {
  .main {
    flex-direction: column;
  }
  .section {
    margin-bottom: 1rem;
  }
}
// 手机
@media (max-width: 767px) {
  .header {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .main {
    padding: 0.5rem;
    gap: 0.5rem;
  }
  .section {
    padding: 0.5rem;
    font-size: 0.95rem;
  }
  .footer {
    font-size: 0.85rem;
    padding: 0.5rem;
  }
}
</style> 