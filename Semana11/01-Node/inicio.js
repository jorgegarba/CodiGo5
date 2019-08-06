const { tabla, imprimirTabla} = require('./utils');
const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        numero: {
            demand: true,
            alias: 'n'
        }
    })
    .argv;

// process = variable global que guarda la información
// de la ejecucuion del proyecto

console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        tabla(argv.numero);
        break;
    case 'mostrar':
        imprimirTabla(argv.numero);
        break;
    default:
        console.log("COMANDO INVALIDO");
}