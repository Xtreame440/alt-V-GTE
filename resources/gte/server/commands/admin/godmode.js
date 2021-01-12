/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from '../../systems/chat';

chat.registerCmd('godmode', handleGodmode);

function handleGodmode(player, args) {
    if (!args || args[0]) {
        chat.send(player, `/godmode ON | OFF`);
        return;
    }
    if (player.getSyncedMeta('godmode') == 'false') {
        player.setSyncedMeta('godmode', 'true');
        alt.emitClient(player, 'godmodestate');
    } else if (player.getSyncedMeta('godmode') == 'true') {
        player.setSyncedMeta('godmode', 'false');
        alt.emitClient(player, 'godmodestate');
    }
}
