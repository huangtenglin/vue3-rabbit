import http from './http'
// 获取轮播图数据
// export const getBannerApi = (params = {}) => {
//   return http({ url: '/home/banner', params })
// }
export const getBannerApi = (params) => http.get('/home/banner', { params })
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => http({ url: '/home/new' })

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotApi = () => http({ url: 'home/hot' })

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}