/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import { randomPositionAround } from '../utility/vector';
import { DEFAULT_CONFIG } from '../configs/config';
import { WEAPON_BY_HASH } from '../gamedata/weapons';
import * as chat from '../systems/chat';

alt.on('playerDeath', playerDeath);

function playerDeath(victim, killer, weaponHash) {
    if (!victim || !victim.valid) {
        return;
    }

    if (killer && WEAPON_BY_HASH[weaponHash]) {
        alt.emitClient(
            null,
            'chat:Send',
            `${victim.name} was killed by ${killer.name} with ${WEAPON_BY_HASH[weaponHash]}`
        );
    }

    const randomPosition = randomPositionAround(DEFAULT_CONFIG.PLAYER_NEW_SPAWN_POS, DEFAULT_CONFIG.SPAWN_RANGE);
    victim.spawn(randomPosition.x, randomPosition.y, randomPosition.z, 5000);
    chat.send(victim, `You have died and you were respawned.`);
}
