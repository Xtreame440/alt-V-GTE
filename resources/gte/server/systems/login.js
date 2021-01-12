/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as chat from './chat';
import SQL from '../../../database/database';

alt.log('login.js geladen');

const db = new SQL();

alt.on('Discord:Opened', (player) => {
    db.selectData('Account', ['id', 'discord'], (data) => {
        alt.emitClient(player, 'loginscreen');
        player.spawn(-80.67692565917969, -833.96044921875, 321.068115234375, 0);
    });
});

alt.on('Discord:Login', (player, discordInfo) => {
    //alt.log('Discord:Login');
    // discordInfo contains -> // id, username, avatar, discriminator, public_flags, flags, locale, mfa_enabled
    db.selectData('Account', ['id', 'discord'], (data) => {
        if (data === undefined) {
            //skip
            db.upsertData({ discord: discordInfo.id }, 'Account', (res) => {
                login(player, res.id);
            });
            return;
        }

        const account = data.find((acc) => {
            if (acc.discord === discordInfo.id) return acc;
        });
        if (!account) {
            db.upsertData({ discord: discordInfo.id }, 'Account', (res) => {
                login(player, res.id);
            });
            return;
        }
        chat.send(player, 'You have now logged in!');
        login(player, account.id);
    });
});

function login(player, id) {
    db.fetchAllByField('guid', id, 'Character', (data) => {
        if (Array.isArray(data)) {
            finishLogin(player, data[0]);
            return;
        }
        db.upsertData({ guid: id }, 'Character', (res) => {
            finishLogin(player, res);
        });
    });
}

function finishLogin(player, data) {
    player.data = data;
    player.model = 'mp_m_freemode_01';
    if (!player.data.position) {
        player.spawn(-1330.911, 340.871, 64.078, 0);
    } else {
        const pos = JSON.parse(player.data.position);
        player.spawn(pos.x, pos.y, pos.z, 0);
    }
    alt.emitClient(player, 'connectionComplete');
}
