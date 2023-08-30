import { getTopCategoryAPI } from '@/apis/category'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'


export const useCategory = () => {
  const categoryData = ref({})

  const route = useRoute()
  const router = useRouter()

  const getTopCategor = async (params) => {
    const res = await getTopCategoryAPI(params)
    categoryData.value = res.result
  }

  watch(
    () => router.currentRoute.value,
    (newValue) => {
      getTopCategor({ id: route.params.id })
    },
    { immediate: true }
  )

  onMounted(() => {
    getTopCategor({ id: route.params.id })
  })
  return {
    categoryData
  }
}