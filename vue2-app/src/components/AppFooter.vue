<template>
  <footer class="footer">© 2024 响应式布局示例</footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
}
@media (max-width: 767px) {
  .footer {
    font-size: 0.85rem;
    padding: 0.5rem;
  }
}
</style> 