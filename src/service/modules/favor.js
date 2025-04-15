import myaxios from "../request/myaxios";

export default function getFavorData() {
  return myaxios.get({
    url: '/favor/list'
  });
}