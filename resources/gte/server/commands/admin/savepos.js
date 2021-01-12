/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../../systems/chat';

// Zum speichern von Standorten für spätere Verwendung (Name) (Beschreibung) (Position(automatisch))
chat.registerCmd('savepos', handleSavepos);

function handleSavepos(player, args) {
    if (!args || !args[0] || args[2]) {
        chat.send(player, `/savepos (name) (description)`);
        return;
    }
    const position = player.pos;
    const rotation = player.rot;
    alt.emit('commands:Savepos', player, args, position, rotation);
}
