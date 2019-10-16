/**
 * http请求的统一出口，方便统一处理，暂时透传。
 */
import axios from 'axios';

// 处理统一处理
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
