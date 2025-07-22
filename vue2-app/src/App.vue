<template>
  <div class="container">
    <HeaderBlock />
    <FeatureBlockArea1
      title="你是否也曾因为一次错误的补货，亏掉数万利润？"
      :items="feature1Items"
      bottom-title="真实案例"
      bottom-desc="深圳卖家张总的教训：一款月销3000件的爆款，因未及时发现材料相关的差评增多，盲目追单5000件，最终导致差评爆发，链接被限制，库存价值30万的货砸在手里..."
      :columns="4"
    />
    <FeatureBlockArea2
      title="是时候改变了！隆重介绍：“决胜单”——您的AI采购决策顾问"
      :items="feature2Items"
      :columns="3"
    />
    <FeatureBlockArea3
      title="数据驱动，决胜未来"
      :items="feature3Items"
      :columns="3"
    />
    <FeatureBlockArea4 />
    <AppFooter />
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import FeatureBlockArea1 from './components/FeatureBlockArea1.vue'
import FeatureBlockArea2 from './components/FeatureBlockArea2.vue'
import FeatureBlockArea3 from './components/FeatureBlockArea3.vue'
import FeatureBlockArea4 from './components/FeatureBlockArea4.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { HeaderBlock, FeatureBlockArea1, FeatureBlockArea2, FeatureBlockArea3, FeatureBlockArea4, AppFooter },
  data() {
    return {
      feature1Items: [
        { icon: '⏳', text: '爆款生命周期末期，误判形势，库存积压。' },
        { icon: '😰', text: '凭感觉补货，心里没底，夜夜难眠。' },
        { icon: '💬', text: '差评突然增多，不知源头，应对无力。' },
        { icon: '⏱️', text: '团队手动分析，耗时耗力，效率低下。' }
      ],
      feature2Items: [
        { label: '价值1: 100%数据驱动', text: '告别直觉，让每一个采购决策都有据可依。' },
        { label: '风险预警', text: '自动监控差评和痛点，在问题爆发前发出警报。' },
        { label: '高效分析', text: '从数小时的人工分析，到3分钟的自动化报告。' }
      ],
      feature3Items: [
        { label: '全链路追踪', text: '每一笔订单、每一次补货、每一个差评都能被系统自动追踪，形成完整数据链路。' },
        { label: '智能洞察', text: 'AI自动分析市场、竞品、用户反馈，挖掘潜在风险和机会。' },
        { label: '高效协同', text: '团队成员可实时共享分析结果，协同决策，提升整体效率。' }
      ]
    }
  }
}
</script> 