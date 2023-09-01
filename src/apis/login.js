/**
 * 登录api
 */

import http from "./http"

export const loginAPI = (data) => http.post('/login', data)