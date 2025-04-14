// src/service/modules/categories.js
import http from "../request/myaxios";

export default function getCategories() {
  return http.get({
    url: '/home/categories'
  });
}