import axios from "axios";
axios.defaults.crossDomain = true;

export function getCombatAction() {
  // The original Code challenge URl is 'http://interview.wptdev.com/api/killfeed';
  const url = 'https://code-challenge-app-0b05fd4406a4.herokuapp.com/api/consume_api/combat_action/'
  // const url = 'http://127.0.0.1:8000/api/consume_api/combat_action/'
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