
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

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => http.post('/category/goods/temporary', data)