import axios from "axios";
import { baseURL, TIMEOUT } from "./config";
import { store } from "@/store";
import { setLoading } from "@/store/modules/loading"; // 添加 action 引入

class MyAxios {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        store.dispatch(setLoading(true)); // 触发加载状态
        return config;
      },
      (err) => {
        store.dispatch(setLoading(false));
        return Promise.reject(err);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        store.dispatch(setLoading(false));
        return res;
      },
      (err) => {
        store.dispatch(setLoading(false));
        return Promise.reject(err);
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new MyAxios(baseURL);