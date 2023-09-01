/**
 * 订单结算页
 */
import http from './http'
export const getCheckoutApi = () => http.get('/member/order/pre')