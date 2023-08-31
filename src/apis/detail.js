
/**
 * 详情页接口数据
 * @param  
 * @returns 
 */

import http from "./http"

export const getDetailApi = (id) => {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = (params) => http.get('/goods/hot', { params })