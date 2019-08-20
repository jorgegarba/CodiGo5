// aula model
export let reserva_model = (sequelize: any, type: any) => {
    var reserva = sequelize.define('t_reservas',
        {
            res_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            res_fechin: {
                type: type.DATE,
                allowNull: true,
            },
            res_fechfin: {
                type: type.DATE,
                allowNull: true,
            },
            res_est: {
                type: type.STRING(45),
                allowNull: true,
            },
            res_obs: {
                type: type.TEXT,
                allowNull: true,
            },
        }, {
            tableName: 't_reservas',
            timestamps: true,
        });
    return reserva;
}