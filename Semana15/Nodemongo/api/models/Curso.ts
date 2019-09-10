var mongoose = require('mongoose');

var Curso = new mongoose.Schema({
    cur_titulo: {
        type: String
    },
    cur_desc: {
        type: String
    },
    cur_videos: [
        {
            vid_titulo: {
                type: String
            },
            vid_url: {
                type: String
            },
            vid_comentarios: [
                {
                    com_desc: {
                        type: String,
                    },
                    com_fecha: {
                        type: Date
                    },
                    com_usu: {
                        type: String
                    }
                }
            ]
        }
    ]
})