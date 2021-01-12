import orm from 'typeorm';

export const Account = new orm.EntitySchema({
    name: 'Account',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        discord: {
            type: 'text'
        }
    } /*,
    relations: {
        vehicle: {
            type: 'one-to-many',
            target: 'Vehicle',
            inverseSide: 'Account'
        }
    }*/
});

export const Character = new orm.EntitySchema({
    name: 'Character',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        guid: {
            type: 'text'
        },
        position: {
            type: 'text',
            nullable: true
        }
    }
});

export const Savepos = new orm.EntitySchema({
    name: 'Savepos',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        posname: {
            type: 'text'
        },
        description: {
            type: 'text',
            nullable: true
        },
        saveposition: {
            type: 'text',
            nullable: true
        },
        saverotation: {
            type: 'text',
            nullable: true
        }
    }
});
/*
export const Vehicle = new orm.EntitySchema({
    name: 'Vehicle',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        vehname: {
            type: 'text'
        },
        guid: {
            type: 'int'
        }
    },
    relations: {
        account: {
            type: 'many-to-one',
            target: 'Account',
            joinColumn: true
        }
    }
});
*/
