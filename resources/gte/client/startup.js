import './events/connectionComplete';
import './events/disconnect';

/*

/// <reference types="@altv/types-client" />
import * as alt from 'alt-client';
import * as native from 'natives';

let webview;

alt.onServer('vehicle:SetInto', (newVehicle) => {
    const localPlayer = alt.Player.local.scriptID;
    alt.setTimeout(() => {
        native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1);
    }, 100);
});

alt.onServer('spawn:Player', (pos) => {
    alt.setTimeout(() => {
        alt.emitServer('spawn:Ready', pos);
    }, 1000);
});

alt.onServer('webview:Load', () => {
    if (!webview) {
        webview = new alt.WebView('http://resource/client/html/index.html');
        webview.on('close:Webview', closeWebview);
        webview.on('spawn:Vehicle', spawnVehicle);
        webview.on('ready', ready);
    }

    webview.focus();
    alt.showCursor(true);
});

function ready() {
    webview.emit('display:Name', alt.Player.local.name);
}

function closeWebview() {
    alt.showCursor(false);
    webview.destroy();
    webview = undefined;
}

function spawnVehicle(model) {
    alt.emitServer('spawn:Vehicle', model);
}
*/
