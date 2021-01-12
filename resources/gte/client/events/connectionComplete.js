/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';

alt.on('connectionComplete', handleConnectionComplete);
alt.onServer('connectionComplete', handleConnectionComplete);
function handleConnectionComplete() {
    native.freezeEntityPosition(alt.Player.local.scriptID, false);
    native.setEntityInvincible(alt.Player.local.scriptID, false);
    alt.everyTick(() => {
        native.enableControlAction(0, 1, true); //Camera
        native.enableControlAction(0, 2, true); //Camera
    });
}
