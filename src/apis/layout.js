import http from './http'

// 获取导航分类
export const getcategoryListApi = () => http({ url: '/home/category/head' })