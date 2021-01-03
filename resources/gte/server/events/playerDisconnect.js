/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import SQL from '../../../database/database';

const db = new SQL();

alt.on('playerDisconnect', (player) => {
    db.updatePartialData(player.data.id, { position: JSON.stringify(player.pos) }, 'Character', (res) => {
        console.log('Saved Player Data!');
    });
});
