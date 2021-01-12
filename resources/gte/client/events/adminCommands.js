/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('godmodestate', handleGodmode);

function handleGodmode() {
    if (alt.Player.local.getSyncedMeta('godmode') == 'true') {
        native.setEntityInvincible(alt.Player.local.scriptID, true);
    } else if (alt.Player.local.getSyncedMeta('godmode') == 'false') {
        native.setEntityInvincible(alt.Player.local.scriptID, false);
    }
}

alt.onServer('noclipstate', handleNoclip);

function handleNoclip() {
    if (alt.Player.local.getSyncedMeta('noclip') == 'true') {
        alt.emit('noclip:start');
    } else if (alt.Player.local.getSyncedMeta('noclip') == 'false') {
        alt.emit('noclip:stop');
    }
}
