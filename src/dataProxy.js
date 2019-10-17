/**
 * http请求的统一出口
 */
import axios from 'axios';

// 处理统一处理
axios.interceptors.response.use((response) => {
  // 执行一些拦截器操作
  // ...
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
