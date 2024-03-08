<template>
	<div>
		<div class="mb-5">
			<HomeBanner />
		</div>
		<div class="mb-5">
			<HomeNews />
		</div>
		<div class="mb-5">
			<HomeKnowledgeLibrary v-if="GetLocation.slug == 'admin'" />
		</div>
		<div class="mb-5">
			<HomeRuralDigitalService v-if="GetLocation.slug != 'admin'" />
		</div>
		<div class="mb-5">
			<HomeDownload />
		</div>
		<div class="mb-5">
			<HomeSmartDevice />
		</div>
		<div class="mb-5">
			<HomeSmartSolution />
		</div>
		<div class="mb-5">
			<HomeRuralNetwork />
		</div>
		<div class="mb-5">
			<HomeVideo />
		</div>
		<div class="mb-5">
			<HomeSupportService />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeBanner from './home-banner.vue'
import HomeNews from './home-news.vue'
import HomeKnowledgeLibrary from './home-knowledge-library.vue'
import HomeDownload from './home-download.vue'
import HomeSmartDevice from './home-smart-device.vue'
import HomeRuralNetwork from './home-rural-network.vue'
import HomeSupportService from './home-support-service.vue'
import HomeRuralDigitalService from './home-rural-digital-service.vue'
import HomeVideo from './home-video.vue'
import HomeSmartSolution from './home-smart-solution.vue'

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
		HomeRuralDigitalService,
		HomeVideo,
		HomeSmartSolution,
	},
	computed: {
		...mapGetters('location', ['GetLocation']),
	},
}
</script>
