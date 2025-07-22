<template>
  <section class="feature-block">
    <div class="feature-title-bg">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="section-block-content">
      <div class="section-block-grid" :style="gridStyle">
        <div v-for="(item, idx) in items" :key="idx" class="card">
          <div class="card-inner">
            <span v-if="item.icon" class="card-icon">{{ item.icon }}</span>
            <span v-if="item.label" class="card-label">{{ item.label }}</span>
            <span class="card-text" :title="item.text">{{ item.text }}</span>
          </div>
        </div>
      </div>
      <div v-if="bottomTitle || bottomDesc" class="feature-bottom">
        <div class="bottom-title">{{ bottomTitle }}</div>
        <div class="bottom-desc">{{ bottomDesc }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBlock1',
  props: {
    title: String,
    items: Array, // [{icon, label, text}]
    bottomTitle: String,
    bottomDesc: String,
    columns: {
      type: Number,
      default: 4
    }
  },
  computed: {
    gridStyle() {
      return {
        display: 'grid',
        width: '100%',
        gap: '1.2rem',
        'grid-template-columns': `repeat(${this.columns}, 1fr)`
      }
    }
  }
}
</script>

<style scoped>
/* 复制FeatureBlock.vue中的所有样式 */
</style> 