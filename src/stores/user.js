import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/login'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cart'
export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  const userInfo = ref({})
  // 获取登录用户数据
  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
    await cartStore.mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    const cartListResult = await findNewCartListApi()
    cartList.value = cartListResult.result
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }

  return { userInfo, getUserInfo, clearUserInfo }
}, {
  persist: true
})
