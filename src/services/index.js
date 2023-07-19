import request from '@/utils/request';
import axios from 'axios';

// 获取左侧界面数据请求
export const getLeftPageData = async () => {
  return request('/api/leftPageData').then(response => {
    return response.data;
  });
};

// 获取中间界面数据请求
export const getCenterPageData = async () => {
  return request('/api/centerPageData').then(response => {
    return response.data;
  });
};

// 获取右侧界面数据请求
export const getRightPageData = async () => {
  return request('/api/rightPageData').then(response => {
    return response.data;
  });
};

// 获取当天天气
export const getCurWeather = async () => {
  return axios.get('http://api.help.bj.cn/apis/weather/?id=101110802').then(response => {
    return response;
  }).catch((err) => err);
};
// 获取天气预警
export const getCurQuality = async () => {
  return axios.get('http://api.help.bj.cn/apis/aqi2/?id=101110801').then(response => {
    return response;
  }).catch((err) => err);
};
// 获取近六日天气
export const getSixWeather = async () => {
  return axios.get('http://api.help.bj.cn/apis/wap40D/?id=101110802').then(response => {
    return response;
  }).catch((err) => err);
};
// 获取生活指数
export const getLife = async () => {
  return axios.get('http://api.help.bj.cn/apis/life29/?id=101110802').then(response => {
    return response;
  }).catch((err) => err);
};
