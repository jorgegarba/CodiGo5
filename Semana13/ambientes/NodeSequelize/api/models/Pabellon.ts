
export let pabellon_model = (sequelize: any, type: any) => {
    var pabellon = sequelize.define('t_pabellon',
        {
            pab_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            pab_desc: {
                type: type.STRING(50),
                allowNull: true,
            },
        }, {
            tableName: 't_pabellon',
            timestamps: true,
        });
    return pabellon;
}