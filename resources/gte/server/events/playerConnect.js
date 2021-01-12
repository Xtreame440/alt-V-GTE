/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../systems/chat';
import SQL from '../../../database/database';

const db = new SQL();

alt.on('playerConnect', (player) => {
    alt.log(player.name + ' connected');
    chat.setupPlayer(player);
    player.setSyncedMeta('godmode', 'false');
    player.setSyncedMeta('noclip', 'false');

    import('../systems/login');
});
