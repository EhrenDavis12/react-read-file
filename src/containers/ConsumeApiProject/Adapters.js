import axios from "axios";
axios.defaults.crossDomain = true;

export function getCombatAction() {
  const url = 'http://interview.wptdev.com/api/killfeed';
  return axios.get(url).then(response => parseListAxios(response));
};

const parseListAxios = response => {
  if (response.status !== 200) throw Error(response.message);
  if (response.data.status === 'failed') throw Error(response.message);
  if (!response.data.payload) return [];
  let list = response.data.payload;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};