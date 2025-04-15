import myaxios from "../request/myaxios";

export default function getHomeList(currentPage) {
  return myaxios.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  });
}