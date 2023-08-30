import { getBannerApi } from '@/apis/home'
import { onMounted, ref, watch } from 'vue'
export const useBanner = () => { // 轮播图接口数据的请求
  const bannerList = ref([])
  const getBannerList = async (params) => {
    const res = await getBannerApi(params)
    bannerList.value = res.result
  }
  onMounted(() => {
    getBannerList({ distributionSite: '2' })
  })
  return {
    bannerList
  }
}