<template>
  <div>
    <div class="mb-5">
      <HomeBanner />
    </div>
    <div class="mb-5">
      <HomeNews />
    </div>
    <div class="mb-5">
      <HomeKnowledgeLibrary />
    </div>
    <div class="mb-5">
      <HomeDownload />
    </div>
    <div class="mb-5">
      <HomeSmartDevice />
    </div>
    <div class="mb-5">
      <HomeRuralNetwork />
    </div>
    <div class="mb-5">
      <HomeSupportService />
    </div>
  </div>
</template>

<script>
import HomeBanner from './home-banner.vue'
import HomeNews from './home-news.vue'
import HomeKnowledgeLibrary from './home-knowledge-library.vue'
import HomeDownload from './home-download.vue'
import HomeSmartDevice from './home-smart-device.vue'
import HomeRuralNetwork from './home-rural-network.vue'
import HomeSupportService from './home-support-service.vue'

export default {
  name: 'IndexHome',
  components: {
    HomeBanner,
    HomeNews,
    HomeKnowledgeLibrary,
    HomeDownload,
    HomeSmartDevice,
    HomeRuralNetwork,
    HomeSupportService,
  },
}
</script>
