import myaxios from "../request/myaxios";

export default function getSearch() {
  return myaxios.get({
    url: '/search/result'
  });
}