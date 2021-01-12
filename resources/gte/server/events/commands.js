/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../systems/chat';
import SQL from '../../../database/database';

const db = new SQL();

alt.on('commands:Savepos', handleEventSavepos);

function handleEventSavepos(player, args, position, rotation) {
    chat.send(player, `${player.name} + ${args[0]} + ${args[1]} + ${position} + ${rotation}`);
    let data = {
        posname: args[0],
        description: args[1],
        saveposition: JSON.stringify(position),
        saverotation: JSON.stringify(rotation)
    };
    db.insertDataAsync(data, 'Savepos');
}
