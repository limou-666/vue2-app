import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()],
  // 部署到 GitHub Pages 仓库根目录时需设置 base 路径为 '/vue2-app/'
  base: '/vue2-app/'
} 