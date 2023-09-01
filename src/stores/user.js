import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/login'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
  }

  return { userInfo, getUserInfo }
}, {
  persist: true
})
