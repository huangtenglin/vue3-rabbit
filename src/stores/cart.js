import { ref } from 'vue'
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
  return { cartList, addCart, delCart }
})
