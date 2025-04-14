// src/service/modules/hotSuggests.js
import myaxios from "../request/myaxios";

export default function getHotSuggests() {
  return myaxios.get({
    url: '/home/hotSuggests'
  });
}