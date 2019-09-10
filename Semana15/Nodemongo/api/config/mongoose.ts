import * as mongoose from 'mongoose';
import { cursoSchema } from './../models/Curso';

export var Curso = mongoose.model('curso', cursoSchema);
