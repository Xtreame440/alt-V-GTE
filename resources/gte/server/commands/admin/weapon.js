import { HASH_BY_NAME } from '../../gamedata/weapons';
import * as chat from '../../systems/chat';

chat.registerCmd('weapon', summonWeapon);
chat.registerCmd('wep', summonWeapon);
chat.registerCmd('addwep', summonWeapon);

function summonWeapon(player, args) {
    if (!args || !args[0] || args[1]) {
        chat.send(`/weapon <name>`);
        return;
    }

    const weaponName = args[0];
    if (!Object.keys(HASH_BY_NAME).includes(weaponName)) {
        chat.send(`{FF0000}${args[0]} is not a valid weapon.`);
        return;
    }

    player.giveWeapon(HASH_BY_NAME[weaponName], 999, true);
}
