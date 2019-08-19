// aula model
export let aula_model = (sequelize: any, type: any) => {
    var aula = sequelize.define('t_aulas',
        {
            aula_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            aula_nro: {
                type: type.STRING(45),
                allowNull: true,
            },
            aula_piso: {
                type: type.INTEGER,
                allowNull: true,
            },
            aula_cap: {
                type: type.INTEGER,
                allowNull: true,
            },
        }, {
            tableName: 't_aulas',
            timestamps: true,
        });
    return aula;
}