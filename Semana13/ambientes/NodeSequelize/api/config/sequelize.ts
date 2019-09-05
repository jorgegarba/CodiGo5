const Sequelize = require('sequelize');

// importando modelos
import { pabellon_model } from './../models/Pabellon';
import { tipoaula_model } from './../models/TipoAula';
import { aula_model } from './../models/Aula';
import { reserva_model } from './../models/Reserva';
import { usuario_model } from './../models/Usuario';

// export const sequelize = new Sequelize('oFPsedlMDT', 'oFPsedlMDT', 'Rmf896de6P', {
//     host: 'remotemysql.com',
//     dialect: 'mysql',
//     logging: console.log,
//     timezone: '-05:00',
//     dialectOptions: {
//         useUTC: false, //for reading from database
//         dateStrings: true,
//         typeCast: true
//     },
// });
export const sequelize = new Sequelize('ambientes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    timezone: '-05:00',
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
    },
});
// logging:console.log => sirve para imprimir todas las consultas que se generen
// en la consola al momento de realizarlas en T-SQL
export const Pabellon = pabellon_model(sequelize, Sequelize);
export const TipoAula = tipoaula_model(sequelize, Sequelize);
export const Aula = aula_model(sequelize, Sequelize);
export const Reserva = reserva_model(sequelize, Sequelize);
export const Usuario = usuario_model(sequelize, Sequelize);

Pabellon.hasMany(Aula, { foreignKey: 'pab_id' });
Aula.belongsTo(Pabellon, { foreignKey: 'pab_id' });

TipoAula.hasMany(Aula, { foreignKey: 'taula_id' });
Aula.belongsTo(TipoAula, { foreignKey: 'taula_id' });

Usuario.hasMany(Reserva, { foreignKey: 'usu_id' });
Reserva.belongsTo(Usuario, { foreignKey: 'usu_id' });

Aula.hasMany(Reserva, { foreignKey: 'aula_id' });
Reserva.belongsTo(Aula, { foreignKey: 'aula_id' });