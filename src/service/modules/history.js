import myaxios from "../request/myaxios";

export default function getHistory() {
  return myaxios.get({
    url: '/favor/history'
  });
}