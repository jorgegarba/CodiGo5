// aula model
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

import * as mongoose from 'mongoose';



export let usuarioSchema = new mongoose.Schema({
    usu_nom: {
        type: String
    },
    usu_ape: {
        type: String
    },
    usu_email: {
        type: String
    },
    usu_hash: {
        type: String
    },
    usu_salt: {
        type: String
    }
});

usuarioSchema.methods.setSaltYHash = function (password: any) {
    this.usu_salt = crypto.randomBytes(16).toString('hex');
    this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
}
usuarioSchema.methods.validPass = function (password: any) {
    let usu_hash_tmp = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512')
        .toString('hex');
    return usu_hash_tmp === this.usu_hash;
}
usuarioSchema.methods.generarJWT = function () {
    let payload = {
        usu_id: this.usu_id,
        usu_nom: `${this.usu_nom} ${this.usu_ape}`
    };
    let token = jwt.sign(payload, 'didacticos',
        { expiresIn: '1h' }, { algorithm: 'RS256' });
    return token;
}