// src/service/modules/city.js
import myaxios from "../request/myaxios";

export function getCityAll() {
  return myaxios.get({
    url: '/city/all'
  });
}