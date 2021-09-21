import axios from "axios";
axios.defaults.crossDomain = true;

export function getCombatAction() {
  // The original Code challenge URl is 'http://interview.wptdev.com/api/killfeed';
  const url = 'https://python-user-test-api.herokuapp.com/api/consume_api/combat_action/'
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