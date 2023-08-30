import http from './http'
// 获取轮播图数据
export const getBannerApi = () => http({ url: '/home/banner' })
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