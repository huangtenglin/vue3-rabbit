import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListApi, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()

  // 判断是否登录
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
  // 添加购物车操作
  const addCart = async (good) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    if (isLogin.value) {
      const { skuId, count } = good
      await insertCartAPI({ skuId, count })
      const res = await findNewCartListApi()
      cartList.value = res.result
    } else {
      // 未登录
      const item = cartList.value.find(item => item.skuId === good.skuId)
      if (item) {
        good.count++
      } else {
        cartList.value.push(good)
      }
    }
  }
  // 删除购物车操作
  const delCart = async (skuId) => {
    // 登录时候
    if (isLogin.value) {
      const data = { ids: [skuId] }
      console.log(data, '请求参数列表')
      await delCartAPI([skuId])
      const res = await findNewCartListApi()
      cartList.value = res.result
    } else {
      cartList.value = cartList.value.filter(item => item.skuId == skuId)
    }
  }
  // 计算购物车的总数量
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 计算总价
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }
  // 购物清单列表全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(cart => cart.selected = selected)
  }
  // 是否全选计算属性
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  // 5：清除购物车
  const clearCart = () => {
    cartList.vlaue = []
  }
  return { cartList, addCart, delCart, allCount, allPrice, singleCheck, allCheck, isAll, selectedCount, selectedPrice, clearCart }
}, {
  persist: true
})
