<template>
    <div v-if="open === true" class="fixed top-0 right-0 bottom-0 left-0 bg-black/30 z-[999999] overflow-hidden"
        @click.prevent="closeModal()">
        <div class="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white w-[700px] max-w-full h rounded-lg z-[9999999] p-4"
            @click.stop.prevent="() => { }">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-x-1">
                    <img width="34px" height="34px" src="~/assets/images/logo_header.png" alt="XTM" loading="lazy" />
                    <h3 class="text-[#28666e] font-inter font-bold ">XÃ THÔNG MINH</h3>
                </div>
                <i class="bx bx-x text-xl hover:text-[#28666e]"></i>
            </div>
            <div class="px-2">
                <div class="mb-6">
                    <h5 class="text-[#14a44d] text-[20px]">Mô hình Xã Thông Minh được xây dựng dựa trên các yếu tố thế
                        mạnh
                        và nhu cầu của từng địa phương</h5>
                </div>
                <div class="grid grid-cols-12 gap-x-4 mb-4">
                    <p class="col-span-7 text-[#2e3235] text-[17px] text-justify">Các giải pháp của mô hình Xã Thông Minh được lựa chọn, xây dựng và triển khai dựa trên các yếu tố
                        thế
                        mạnh về văn hóa, kinh tế xã hội,... và nhu cầu của người dân, cán bộ chính quyền ở khu vực nông
                        thôn.</p>
                    <img src="~/assets/images/explore.png" alt="explore" loading="lazy" class="col-span-5" />
                </div>
                <div class="mb-4">
                    <div class="text-[18px] text-[#4f4f4f] font-semibold text-center">Chọn địa điểm bạn cần đến để khám phá</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExploreModal',
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleScrollHtml() {
            document.querySelector('#__nuxt').classList.toggle('h-[100vh]')
            document.querySelector('#__nuxt').classList.toggle('overflow-hidden')
        },
        openModal() {
            this.open = true
            this.toggleScrollHtml()
        },
        closeModal() {
            this.open = false
            this.toggleScrollHtml()
        },
        toggleModal() {
            if (this.open === true) {
                this.closeModal()
            }
            else {
                this.openModal()
            }
        }
    },
}
</script>