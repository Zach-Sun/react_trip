// src/service/modules/notorder.js
import myaxios from "../request/myaxios";

export default function getNotOrder() {
  return myaxios.get({
    url: '/order/list?type=pend'
  });
}