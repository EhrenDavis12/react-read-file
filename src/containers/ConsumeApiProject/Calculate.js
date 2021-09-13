import axios from "axios";
import React from "react";
import _ from 'lodash';
axios.defaults.crossDomain = true;

export function api_call() {
  const url = 'http://interview.wptdev.com/api/killfeed';
  return axios.get(url).then(response => parseListAxios(response));
};

const parseListAxios = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data.payload) return [];
  let list = response.data.payload;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export function processCombatResponse(response, players) {
  let copyPlayers = _.cloneDeep(players);
  response.map(action => {
      processCombatAction(action, copyPlayers)
    })
  return copyPlayers
};

function processCombatAction(action, players) {
  const targetPlayerIndex = players.findIndex(player => player.id === action.target_player_id)
  const sourcePlayerIndex = players.findIndex(player => player.id === action.source_player_id)

  if (targetPlayerIndex >= 0 ){
    players[targetPlayerIndex] = addTargetPlayerHit(action, players[targetPlayerIndex])
  }else{
    players.push(addTargetPlayer(action));
  }

  if ( sourcePlayerIndex === -1){
    players.push(addSourcePlayer(action));
  }
  return players;
};

function addSourcePlayer(action) {
    return {
      id: action.source_player_id,
      name: action.source_character,
      health: 100,
      lastHitMethod: action.method
    };
};

function addTargetPlayer(action) {
    return {
      id: action.target_player_id,
      name: action.target_character,
      health: 100 - action.damage,
      lastHitMethod: ""
    };
};

function addTargetPlayerHit(action, player) {
    return {
      ...player,
      health: player.health - action.damage,
      lastHitMethod: action.method
    };
};