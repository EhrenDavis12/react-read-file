import axios from "axios";
axios.defaults.crossDomain = true;

export function api_call() {
  const url = 'https://python-user-test-api.herokuapp.com/app-users-all/';
  return axios.get(url).then(response => parseListAxios(response))
}

const parseListAxios = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

