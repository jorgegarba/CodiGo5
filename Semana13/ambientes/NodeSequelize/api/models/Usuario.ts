// aula model
const crypto = require('crypto');

export let usuario_model = (sequelize: any, type: any) => {
    var usuario = sequelize.define('t_usuarios',
        {
            usu_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            usu_nom: {
                type: type.STRING(50),
                allowNull: true,
            },
            usu_ape: {
                type: type.STRING(50),
                allowNull: true,
            },
            usu_email: {
                type: type.STRING(50),
                allowNull: true,
            },
            usu_hash: {
                type: type.TEXT,
                allowNull: true,
            },
            usu_salt: {
                type: type.TEXT,
                allowNull: true,
            }
        }, {
            tableName: 't_usuarios',
            timestamps: true,
        });

    usuario.prototype.printNombreYApellido = function () {
        console.log(this.usu_nom + " " + this.usu_ape);
    }

    usuario.prototype.setSaltYHash = function (password: any) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');        
    }

    return usuario;
}