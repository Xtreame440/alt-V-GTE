/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../systems/chat';

// <<<<<<<< Beispiel Commands [Anfang] >>>>>>>>>>

chat.registerCmd('cmd', handleCmd);

function handleCmd(player, args) {
    if (!args || !args[0] || args[2]) {
        // Garkein || Leer || mehr als 2
        chat.send(player, `/cmd (args)`);
        return;
    }
}

chat.registerCmd('pos', (player, args) => {
    chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);

    // Sends to all players.
    chat.broadcast(`${player.name} ´s Position: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);
});

chat.registerCmd('pos2', handlePos2);

function handlePos2(player, args) {
    chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);

    // Sends to all players.
    chat.broadcast(`${player.name} ´s Position: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);
}

// <<<<<<<< Test Commands [Anfang] >>>>>>>>>>
