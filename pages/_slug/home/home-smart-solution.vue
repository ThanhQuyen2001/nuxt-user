<template>
	<div v-if="categories.length > 0" class="max-w-6xl mx-auto px-3">
		<home-service>
			<template #category>
				<home-header-category title="GIẢI PHÁP THÔNG MINH" :categories="categories" :view-all="true" @viewAll="
		$router.push({ name: 'web.slug.smart-solutions' })
		" @update="updateEntry" />
			</template>

			<template v-if="entries?.length" #content>
				<div class="grid grid-cols-2 gap-4">
					<div v-for="(entry, index) in entries" :key="index"
						class="shadow-sm rounded-lg border-[1px] border-solid border-[#ccc] overflow-hidden h-fit"
						:class="{ 'row-span-3': index === 0 }">
						<div :class="{'grid grid-cols-12': index !== 0}">
							<div :class="{ 'h-[300px]': index === 0, 'h-auto': index !== 0,'col-span-5': index !== 0 }">
								<img loading="lazy" :src="$addPrefixImage(entry?.image)" alt="thumbnail"
									class="w-full h-full object-cover" />
							</div>
							<div class="p-3" :class="{'col-span-7': index !== 0}">
								<b class="text-[23px] text-[#44494D] line-clamp-1">{{ entry?.name }}</b>
								<div class="mb-1 text-[#ADB5BD]" :class="{'line-clamp-5': index === 0, 'line-clamp-3': index !== 0}">
									{{ entry?.description }}
								</div>
								<div class="text-[#44B97C] text-[15px] font-medium">
									Xem chi tiết
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</home-service>
	</div>
</template>

<script>
import HomeService from './home-service.vue'
import HomeHeaderCategory from './home-header-category.vue'

export default {
	name: 'HomeSmartDevice',
	components: { HomeService, HomeHeaderCategory },
	data() {
		return {
			LIMIT: 3,
			categories: [],
			entries: [],
		}
	},
	async fetch() {
		await this.getCategories()
		await this.getListSmartSolution({ 'tag-id': this.categories[0].id })
	},
	methods: {
		updateEntry(item, _) {
			this.getListSmartSolution({ 'tag-id': item.id })
		},
		async getCategories() {
			const response = await this.$store.dispatch(
				'serviceManagements/ListServiceManagements'
			)
			this.categories = response.data.entries.filter(
				(_, index) => index < this.LIMIT
			)
		},
		async getListSmartSolution(
			query = { 'tag-id': this.categories[0]?.id }
		) {
			const response = await this.$store.dispatch(
				'smartSolutions/ListSmartSolutions',
				query
			)
			this.entries = response.data.entries.filter(
				(_, index) => index < this.LIMIT
			)
		},
	},
}
</script>
