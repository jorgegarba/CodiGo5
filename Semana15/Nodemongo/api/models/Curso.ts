import * as mongoose from 'mongoose';

var comentarioSchema = new mongoose.Schema({
    com_desc: {
        type: String,
    },
    com_fecha: {
        type: Date
    },
    com_usu: {
        type: String
    }
});


var videoSchema = new mongoose.Schema(
    {
        vid_titulo: {
            type: String
        },
        vid_url: {
            type: String
        },
        vid_comentarios: [comentarioSchema]
    }
)

export var cursoSchema = new mongoose.Schema({
    cur_titulo: {
        type: String,
    },
    cur_desc: {
        type: String
    },
    cur_videos: [videoSchema]
})