import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getcategoryListApi } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategoryList = async () => {
    const res = await getcategoryListApi()
    categoryList.value = res.result
  }

  return { categoryList, getCategoryList }
})
