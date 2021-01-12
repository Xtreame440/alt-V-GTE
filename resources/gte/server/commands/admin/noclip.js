/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../../systems/chat';

chat.registerCmd('noclip', handleGodmode);

function handleGodmode(player, args) {
    if (!args || args[0]) {
        chat.send(player, `/noclip ON | OFF`);
        return;
    }
    if (player.getSyncedMeta('noclip') == 'false') {
        player.setSyncedMeta('noclip', 'true');
        alt.emitClient(player, 'noclipstate');
    } else if (player.getSyncedMeta('noclip') == 'true') {
        player.setSyncedMeta('noclip', 'false');
        alt.emitClient(player, 'noclipstate');
    }
}
