const Sequelize = require('sequelize');

// importando modelos
import { pabellon_model } from './../models/Pabellon';
import { tipoaula_model } from './../models/TipoAula';
import { aula_model } from './../models/Aula';

export const sequelize = new Sequelize('ambientes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    timezone: '-05:00'
});
// logging:console.log => sirve para imprimir todas las consultas que se generen
// en la consola al momento de realizarlas en T-SQL
export const Pabellon = pabellon_model(sequelize, Sequelize);
export const TipoAula = tipoaula_model(sequelize, Sequelize);
export const Aula = aula_model(sequelize, Sequelize);

Pabellon.hasMany(Aula, { foreignKey: 'pab_id' });
Aula.belongsTo(Pabellon, { foreignKey: 'pab_id' });

TipoAula.hasMany(Aula, { foreignKey: 'taula_id' });
Aula.belongsTo(TipoAula, { foreignKey: 'taula_id' });