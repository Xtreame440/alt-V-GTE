/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('loginscreen', handleLoginScreen);

function handleLoginScreen() {
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
    native.setEntityInvincible(alt.Player.local.scriptID, true);
    alt.everyTick(() => {
        native.disableControlAction(0, 1, true); //Camera
        native.disableControlAction(0, 2, true); //Camera
    });
}
