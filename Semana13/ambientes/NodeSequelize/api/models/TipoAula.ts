
export let tipoaula_model = (sequelize: any, type: any) => {
    var tipoaula = sequelize.define('t_tipoaula',
        {
            taula_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            taula_desc: {
                type: type.STRING(50),
                allowNull: true,
            },
        }, {
            tableName: 't_tipoaula',
            timestamps: true,
        });
    return tipoaula;
}