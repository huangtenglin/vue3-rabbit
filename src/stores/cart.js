import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  // 添加购物车操作
  const addCart = (good) => {
    console.log(good, '本地购物车')
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find(item => item.skuId === good.skuId)
    if (item) {
      good.count++
    } else {
      cartList.value.push(good)
    }
  }
  // 删除购物车操作
  const delCart = (id) => {
    cartList.value = cartList.value.filter(item => item.skuId == id)
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

  return { cartList, addCart, delCart, allCount, allPrice, singleCheck, allCheck, isAll }
}, {
  persist: true
})
