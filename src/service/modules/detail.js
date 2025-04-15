import myaxios from "../request/myaxios";

export default function getDetail(houseId) {
  return myaxios.get({
    url: "/detail/infos",
    params: { houseId }
  });
}