import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryHeadListApi } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  const categoryHeadList = ref([])
  const getCategoryList = async () => {
    const res = await getCategoryHeadListApi()
    categoryHeadList.value = res.result
  }

  return { categoryHeadList, getCategoryList }
})
