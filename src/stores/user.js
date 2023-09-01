import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/login'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  // 获取登录用户数据
  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
  }

  return { userInfo, getUserInfo, clearUserInfo }
}, {
  persist: true
})
