import _ from 'lodash';
import {getCombatAction} from "./Adapters";

const reasonsForMiss = [
    'Player Tripped on shoe laces',
    'Player was occupied with looking at the clouds',
    'Player saw nothing',
    'Player facepalmed',
    'Player 1 !!DUCK!! ... Player 2 was hit by a Duck',
]

export function takeCombatAction(localContext) {
    getCombatAction().then(response => {
        localContext.setPlayersData(processCombatResponse(response, localContext.playersData));
        localContext.setCombatAction(response[0]);
    }).catch(
        () => {
            localContext.setCombatAction({missed: getMissedMessage()});
        }
    );
};

function getMissedMessage(){
    debugger;
    return reasonsForMiss[Math.floor(Math.random() * reasonsForMiss.length)]
}

function processCombatResponse(response, players) {
    let copyPlayers = _.cloneDeep(players);
    response.map(action => processCombatAction(action, copyPlayers))
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

function addSourcePlayer({source_player_id, source_character, method}) {
    return {
        id: source_player_id,
        name: source_character,
        health: 100,
        lastHitMethod: method
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