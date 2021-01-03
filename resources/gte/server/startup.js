/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import SQL from '../../database/database';
import { Account, Character } from './entities/entities';

const db = new SQL('mysql', '127.0.0.1', 3306, 'root', 'abc123', 'altv', [Account, Character]);

alt.on('DBConnectionComplete', () => {
    import('./systems/login');
    import('./events/playerDisconnect');
});
