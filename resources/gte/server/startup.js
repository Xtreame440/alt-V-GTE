/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import SQL from '../../database/database';
import { Account, Character, Savepos } from './entities/entities';

const db = new SQL('mysql', '127.0.0.1', 3306, 'root', 'abc123', 'altv', [Account, Character, Savepos]);

alt.on('DBConnectionComplete', () => {
    import('./events/playerConnect');
    import('./events/playerDeath');
    import('./prototypes/player');
    import('./systems/chat');
    import('./commands/commands');
    import('./events/commands');
    import('./events/playerDisconnect');
});
