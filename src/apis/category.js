
/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
import http from './http'
export const getTopCategoryAPI = (params) => http.get('/category', { params })


/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getCategoryFilterAPI = (params) => http.get('/category/sub/filter', { params })